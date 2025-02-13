
class NotFoundError extends Error{
    constructor(message = "Ressource introuvable") {
        super(message); 
        this.name = "NotFoundError";  
      }
}

module.exports={NotFoundError}