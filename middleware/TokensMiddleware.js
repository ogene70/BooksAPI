//le Middleware est un outils de verification 
//ici c'est le token qui sera verifié
let jwt=require('jsonwebtoken')
    const tokensMiddelware=(req,res,next)=>{
       let token= req.body.token
        jwt.verify(token,'SecretKey',(err,payload)=>{
            if (err) {
              console.log('token incorrect') 
              res.status(401).json('token incorrect')  
            } else {
                // res.status(200).json('token correct')  
               next()
            }
        })
    }

module.exports={tokensMiddelware}






