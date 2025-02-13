


class LivresDB{
    #nano= require('nano')('http://jsg4704a:Pyxt9c6rJ22@127.0.0.1:5984');
    #db= this.#nano.db.use('livres');

listeLivres= async ()=>{
    
    const query=
    {
      "selector":{ 
      }
    }
    return this.#db.find(query).then(result =>{
        return result.docs} ) // Retourne les documents
    .catch(error => {
        console.error(" Erreur lors de la récupération des livres:", error.message);
        return []; 
    });
 }

}
module.exports={LivresDB}