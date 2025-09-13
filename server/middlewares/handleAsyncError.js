

function handleAsyncError(errfunc){
    return function (req,res,next){
        Promise.resolve(errfunc(req,res,next)).catch(next)

    }
}

module.exports=handleAsyncError