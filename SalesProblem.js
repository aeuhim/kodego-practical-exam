function topProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }

    let highest = Number.MIN_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (productProfitArray[key] > highest) {
            highest = productProfitArray[key]
            result = key
        }
    }

    return result
}

function bottomProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }

    let lowest = Number.MAX_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (productProfitArray[key] < lowest) {
            lowest = productProfitArray[key]
            result = key
        }
    }

    return result
}

function zeroProfitProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }
    
    let nearest = Number.MAX_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (Math.abs(productProfitArray[key]) === Math.abs(nearest)) {
            nearest = productProfitArray[key] > 0 ? productProfitArray[key] : nearest
            result = productProfitArray[key] > 0 ? key : result
        }

        if (Math.abs(productProfitArray[key]) < Math.abs(nearest)) {
            nearest = productProfitArray[key]
            result = key
        }
    }

    return result
}

var productProfitArray = {"Product A": -75, "Product B": -70, "Product C": 95, "Product D": 5, "Product E": -88, "Product F": 29}
var topProductName = topProduct(productProfitArray)
var bottomProductName = bottomProduct(productProfitArray)
var zeroProfitProductName = zeroProfitProduct(productProfitArray)
console.log(topProductName)
console.log(bottomProductName)
console.log(zeroProfitProductName)
