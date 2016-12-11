// define a promise

let fetch = (url) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status=== 304) {
                    resolve(xhr.responseText)
                } else {
                    reject(new Error('eeeeerrrr'))
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    });
}

let promise = fetch('test.txt')

promise.then((data) => {
    console.log(data)
}).catch(e => {
    console.log(e)
})