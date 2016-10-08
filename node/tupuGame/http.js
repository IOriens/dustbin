const http = require('http')
const querystring = require('querystring')

class TreeAnalyzer {
    constructor() {
        this.typesObj = {}
        this.typeArr = []
        this.resultTypeArr = []
        this.flag = 0
    }

    getTypes(node) {
        
        if (node['type'] != null) {
            if (this.typesObj[node['type']] == null) {
                this.typeArr.push({
                    type: node['type'],
                    result: 0
                })
            }
            this.typesObj[node['type']] = 1
        }
       
        for (let i in node['child']) {
            this.getTypes(node['child'][i])
        }
    }


    postData(option, data, callback) {
        let result = []
        let ndata = querystring.stringify(data)
        let req = http.request(option, res => {

            res.setEncoding('utf-8')
            res.on('data', chunk => {
                result.push(Buffer.from(chunk))
            })
            res.on('end', () => {
                
                this.typesObj[data.type] = Buffer.concat(result).toString()
                this.flag--
                    if (this.flag === 0) {
                        
                        callback(this.typesObj)
                    }
            })
        })

        req.on('error', e => {
            console.log(`problem with request: ${e.message}`)
        })
        req.write(ndata)
        req.end()
    }
    getResult(callback) {
        this.flag = this.typeArr.length
        for (var i of this.typeArr) {
            let options = {
                hostname: 'hr.tuputech.com',
                port: 80,
                path: '/recruit/tree/' + i.type,
                method: 'POST'
            }

            let data = {
                'type': i.type
            }

            this.postData(options, data, callback)
        }
    }

    getTypesObj() {
        return this.typesObj
    }

}



class GetTreeSystem {
    constructor() {
        this.seed = '57e8d24b86b5987977928405'
        this.postData = querystring.stringify({
            'seed': this.seed
        })

        this.options = {
            hostname: 'hr.tuputech.com',
            port: 80,
            path: '/recruit/v2/tree?seed=57e8d24b86b5987977928405',
            method: 'GET'
        }

        this.result = []

        this.treeAnalyzer = new TreeAnalyzer()

        this.treeId = ''
    }

    computeResult(types) {
        
        var outcome = {
            result: '',
            child: []
        }

        function getOutcome(tree, outcome) {
            if (outcome == null) {
                outcome = {
                    result: '',
                    child: []
                }
            }
            if (tree['type'] != null) {
                
                outcome['result'] = types[tree['type']]
            }
            outcome['child'] = []
            for (var i of tree['child']) {
                outcome['child'].push(getOutcome(i))
            }
            return outcome
        }
        outcome = getOutcome(this.result, outcome)
        
        this.getFinalResult(outcome)
    }

    getFinalResult(tree) {
        let data = {
            treeId: this.treeId,
            result: tree,
            seed: this.seed
        }

        let result = []
        let ndata = JSON.stringify(data)
        let options = {
            hostname: 'hr.tuputech.com',
            port: 80,   
            path: '/recruit/v2/tree',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }

        let req = http.request(options, res => {

            res.setEncoding('utf-8')
            res.on('data', chunk => {
                result.push(Buffer.from(chunk))
            })
            res.on('end', () => {
                // console.log('3333333333')
                console.log(Buffer.concat(result).toString())
            })
        })

        req.on('error', e => {
            console.log(`problem with request: ${e.message}`)
        })
        req.write(ndata)
        req.end()
    }

    init() {
        this.req = http.request(this.options, res => {

            res.setEncoding('utf-8')
            res.on('data', chunk => {
                this.result.push(Buffer.from(chunk))
            })
            res.on('end', () => {
                this.result = Buffer.concat(this.result).toString()

                this.treeId = JSON.parse(this.result).treeId
                this.result = JSON.parse(this.result).tree

                this.treeAnalyzer.getTypes(this.result)
                                   
                this.treeAnalyzer.getResult(this.computeResult.bind(this))
            })
        })

        this.req.on('error', e => {
            console.log(`problem with request: ${e.message}`)
        })
        this.req.write(this.postData)
        this.req.end()
    }

}

var getTreeSystem = new GetTreeSystem()
getTreeSystem.init()