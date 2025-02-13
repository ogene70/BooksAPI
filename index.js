//API REST 

const express = require('express');
const app = express();
// const { CORSMiddleware } = require('./middleware/CORSMiddleware');

// app.use(CORSMiddleware)
app.use(express.json())
//APPEL ET UTILISATION DU ROUTER 
const  livresRouter = require('./routes/routes');
app.use(livresRouter); 

//MISE EN ROUTE DE L'API
    //Definition du port
    const PORT = process.env.PORT || 5000;
    //lancement du server
    app.listen(PORT, () => {
    console.log(`le serveur REST est lancé sur le port : ${PORT}`);
    });