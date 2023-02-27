import app from "./app";

//Ejecucion del servidor
const main =()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();