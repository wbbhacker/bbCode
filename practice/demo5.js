const fn = function () {
    console.count()
}


const fnBind = function () {
    return fn.call()
}

fnBind()
