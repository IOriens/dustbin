const flattenHelper = (arr) => {
    let temp = [] 
    for(let i = 0, len = arr.length; i < len; i++) {
        if(Array.isArray(arr[i])) {
            const child = flattenHelper(arr[i])
            temp = temp.concat(child)
        } else {
            temp.push(arr[i])
        }
    }
    return temp
}

const flatten = (arr) => {
    const results = flattenHelper(arr)
    console.log(results)
    return results
}

module.exports = flatten