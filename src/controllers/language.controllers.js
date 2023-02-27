import {getConnection}  from "./../database/database";

const getLanguages= async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, genero FROM listadopelis");
        res.json(result);
    }catch(error){
        //error de servidor
        res.status(500);
        res.send(error.message);
    }
   
};

const getLanguage= async(req, res) => {
    try{
       
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, genero FROM listadopelis WHERE id = ?", id);
        res.json(result);
    }catch(error){
        //error de servidor
        res.status(500);
        res.send(error.message);
    }
   
};

const addLanguage = async(req, res) => {
    try{
        const {name, genero} = req.body;

        if(name=== undefined || genero === undefined){
            res.status(400).json({message:"Por favor llene todos los campos"});
        }else{
            const listadopelis={ name, genero };
            const connection = await getConnection();
            await connection.query("INSERT INTO listadopelis SET ?", listadopelis);
            res.json({message:"Lenguage añadido"});
        }

       
        
    }catch(error){
        //error de servidor
        res.status(500);
        res.send(error.message);
    }
}
const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, genero } = req.body;

        if (id === undefined || name === undefined || genero === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const listadopelis = { name, genero };
        const connection = await getConnection();
        const result = await connection.query("UPDATE listadopelis SET ? WHERE id = ?", [listadopelis, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const deleteLanguage= async(req, res) => {
    try{
       
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM listadopelis WHERE id = ?", id);
        res.json(result);
    }catch(error){
        //error de servidor
        res.status(500);
        res.send(error.message);
    }
   
};


export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
};