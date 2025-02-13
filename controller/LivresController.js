
const { LivresDB } = require('../model/LivresDB')
const {JOIBooksvalidator}= require('../JOIrequestValidator/JOIBooksrequestValidator');
const { NotFoundError } = require('../Error/CustomErrors');
 class LivresController{
    
    static list = async (req, res) => {
        try {
            const result = await new LivresDB().listeLivres(); 
            return res.status(200).json(result); 
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }

    static livre= async (req,res)=>{
        
        try {
            const promise=await new LivresDB().livre(req.params.numero);
            if (promise!=false) {
                 res.status(200).json(result)
            } else {
                throw new NotFoundError() //creation d'une exeption
            }
        } catch (e) {
            
            res.status(404).json({error:e.message})
        }
      
           
       
    }

    static livrePages= async (req,res)=>{

        try {
            const result = await new LivresDB().livrePages(req.params.numero,req.params.page); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("erreur lors de la recuperation du live:", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
    static add= async (req,res)=>{
            const newLivre={
                "numero":req.body.numero ,
                "titre":req.body.titre ,
                "pages":req.body.pages
            }
           // validation des données
           const valid =await JOIBooksvalidator.addBook(newLivre) 
            if (valid.status==false) {//si les données ne sont pas valide renvoie le message d'erreur correspondant
                res.json({
                    error:valid.error.details[0].message,
                    original:valid.error._original
                })
            } else {//si les données son valide création du livre
                 try {
            const result = await new LivresDB().createLivres(newLivre); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
            }
       
    }
    static del= async (req,res)=>{

       
            await new LivresDB().livre(req.params.numero)

            .then(livres=>{
                
               if (livres==false) {//si il n'y a pas de livre creation d'une exception
                throw new NotFoundError()
               }else{
                    const result=  new LivresDB().deleteLivre(livres[0]._id,livres[0]._rev).then(result=>{
                 res.status(200).json('livre supprimé avec succès');
                 
                 }
                 
                  ).catch(
                 error=>{res.status(400).json({"error":error.message})}
                     );
               }
            
             
            }).catch(
                error => {                    
                     res.status(404).json({"error":"Erreur lors de la supression du livre",
                       message:error.message}); 
                }
            )
           
       
            
        
    }

    static update= async (req,res)=>{
        await new LivresDB().livre(req.params.numero)
        .then(livre=>{
            if (livre==false) {
                throw new NotFoundError()
            } 
            const updatedLivre={
                "_id": livre[0]._id,
                "_rev": livre[0]._rev,
                "numero": livre[0].numero,
                "titre": req.body.titre!=undefined ?req.body.titre: livre[0].titre,
                "pages": req.body.pages !=undefined?req.body.pages :livre[0].pages
            }
            
          const result=new LivresDB().updateLivres(updatedLivre);
           return res.status(200).json({"succes":result})
        }).catch(
            error =>res.status(404).json({"error":"erreur lors de la modification du livre","message":error.message}) 
            
        )
       
    }
  
    
}

module.exports={LivresController}