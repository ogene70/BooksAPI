
  let jwt=require('jsonwebtoken');
const { tokensMiddelware } = require('../middleware/TokensMiddleware');

class UserController{
  static  authentication= async (req,res)=>{
    const nom=req.body.nom
    const mdp=req.body.mdp
    try {
       const authentication=(nom,mdp)=>nom=="ogene"&&mdp=="1234"?true:false
      
        
       if (authentication(nom,mdp)==true) {
        const payload={
            "name":"ogene"
        }
        const JWToptions={
            expiresIn:'24h'
        }
        //Creation du token
      const token= jwt.sign(payload,'SecretKey',JWToptions)
      console.log(token)

       return res.json({status:true,"token":token})
       } else {
        return res.json({status:false,"error":"vous n'avez pas ete authentifié"})

       }
    } catch (error) {
        
    }
    }
}
module.exports={UserController}