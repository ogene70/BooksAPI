const { LivresController } = require('../controller/LivresController')
const  express= require('express')
const livresRouter= express.Router()
const path = require('path');

//acceil de l'api
livresRouter.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
    
})
//LISTE DES Livres
livresRouter.post('/livres',LivresController.list)
//LIVRE UNIQUE
    livresRouter.get('/livres/:id',LivresController.livre)
//PAGES DU LIVRE 
    livresRouter.get('/livres/:id/pages/:pages',LivresController.livrePages)
//CREATION DU LIVRE 
    livresRouter.post('/livres',LivresController.add)
//SUPPRESSION DU LIVRE 
    livresRouter.delete('/livres/:id',LivresController.del)
//MODIFICATION DU LIVRE 
    livresRouter.put('/livres',LivresController.update)

//Export du Router
module.exports= livresRouter;