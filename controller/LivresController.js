
const { LivresDB } = require('../model/LivresDB')

 class LivresController{
    
    static list = async (req, res) => {
        try {
            const result = await new LivresDB().listeLivres(); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }

    static livre= async (req,res)=>{

        try {
            const result = await new LivresDB().livre(req.params.id); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
    static livrePages= async (req,res)=>{

        try {
            const result = await new LivresDB().listeLivres(); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
    static add= async (req,res)=>{

        try {
            const result = await new LivresDB().listeLivres(); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
    static del= async (req,res)=>{

        try {
            const result = await new LivresDB().listeLivres(); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
    static update= async (req,res)=>{
        
        try {
            const result = await new LivresDB().listeLivres(); 
            console.log("Résultat :", result); 
            return res.json(result); // Retourne la liste en JSON
        } catch (error) {
            console.error("❌ Erreur dans list():", error.message);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
  
    
}

module.exports={LivresController}