


class LivresDB{
    #nano= require('nano')('http://jsg4704a:Pyxt9c6rJ22@127.0.0.1:5984');
    #db= this.#nano.db.use('livres');

//DATABASE LISTE DES LIVRES
listeLivres= async ()=>{
    
    const query=
    {
      "selector":{ 
      }
    }
    return this.#db.find(query).then(result => result.docs.length!=0?result.docs:false) // Retourne les documents ou false
    .catch(error => {
        return {" Erreur lors de la récupération des livres": error.message}; 
    });
 }
 //DATABASE GET LE LIVRE
 livre= async  (numero)=>{
     const query=
    {
      "selector":{"numero": parseInt(numero)},
        
    }

    return this.#db.find(query).then(result => result.docs.length!=0?result.docs:false) // Retourne le document recherché
    .catch(error => {
        console.error(" Erreur lors de la récupération du livre:", error.message);
        return false; 
    });}
//DATABASE GET LIVRE PAGES
livrePages= async (numero,page)=>{
    const query=
    {
      "selector":{"numero": parseInt(numero)},
        
    }

    return this.#db.find(query).then(result => { 
        console.log(result.docs)
        result.docs.length!=0?result.docs:false}

       ) // Retourne le document recherché
    .catch(error => {
        console.error(" Erreur lors de la récupération du livre:", error.message);
        return false; 
    })
}
//DATABASE CREATE LE LIVRE
 createLivres= async (newLivre)=>{
   
     return this.#db.insert(newLivre).then(result =>{
        const query={
      "selector":{
        "_id": result.id }
      }
        const addedLivre= this.#db.find(query)
        .then(result => result.docs)
        return addedLivre } 
    ) 
    .catch(error => {
        console.error(" Erreur lors de la création du livre:", error.message);
        return []; 
    });
    
 }
 //DATABASE UPDATE LE LIVRE
 updateLivres= async (updatedLivre)=>{
    return this.#db.insert(updatedLivre).then(result=>{        
     return result
    }) .catch(error => {
       return {" Erreur lors de la modification du livre:":error.message};
   })
 }
 //DATABASE DELETE LE LIVRE
 deleteLivre= async (id,rev)=>{
    return this.#db.destroy(id,rev).then(result=>{
        return result.ok==true?true:false
     }).catch(error => {
        console.error(" Erreur lors de la supression du livre:", error.message);
        return false; 
    })

    }

}
module.exports={LivresDB}