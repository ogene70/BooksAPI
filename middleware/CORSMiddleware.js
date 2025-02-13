let cors = require('cors')
const CorsOptions={
    "methods":"GET,POST,PUT,DELETE"
}
let CORSMiddleware=(req,res,next)=>cors(CorsOptions)
module.exports={CORSMiddleware}