const auth=(req,res,next)=>{
    console.log("Autharization done")
    next();
}
module.exports = auth;