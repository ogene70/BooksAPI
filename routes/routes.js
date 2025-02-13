const { LivresController } = require('../controller/LivresController')
const  express= require('express')
const livresRouter= express.Router()
const path = require('path');
const { UserController } = require('../controller/UserController');
const { tokensMiddelware } = require('../middleware/TokensMiddleware');

//acceil de l'api
livresRouter.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})  
livresRouter.post('/authentication',UserController.authentication)
//LISTE DES Livres
livresRouter.get('/livres',LivresController.list)
//LIVRE UNIQUE
    livresRouter.get('/livres/:numero',LivresController.livre)
//PAGES DU LIVRE 
    livresRouter.get('/livres/:id/pages/:page',LivresController.livrePages)
//CREATION DU LIVRE
  

    livresRouter.post('/livres',tokensMiddelware,LivresController.add)
//SUPPRESSION DU LIVRE 
    livresRouter.delete('/livres/:numero',tokensMiddelware,LivresController.del)
//MODIFICATION DU LIVRE 
    livresRouter.put('/livres/:numero',tokensMiddelware,LivresController.update)
//Export du Router
module.exports= livresRouter;