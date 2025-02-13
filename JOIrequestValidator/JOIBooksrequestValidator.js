const Joi=require('joi');


class JOIBooksvalidator{
    
    static addBook(bookObject){
        //definition du shema de donnée à respecter
        const validDatasShema=Joi.object({
            "numero":Joi.number().integer().min(1).required() ,
                "titre":Joi.string().min(2).max(250).required() ,
                "pages":Joi.array().items(Joi.string().min(1).max(50).required())
        })
        //test de validation des données
        const{value,error}=validDatasShema.validate(bookObject)

        if(error==undefined){//si les données sont valide renvoie l'objet et ses datas
            console.error("le livre est au format valide",bookObject)
            return bookObject
        }else{//sinon renvoie un objet avec une propriété status a false pour illuster l'echec de la validation ainsi que l'objet error de Joi
            console.error(error)
            return {status:false,error}
        }

    }
}
module.exports={JOIBooksvalidator}