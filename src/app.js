import express from 'express';
import morgan from 'morgan';
//Rutas
import languageRoutes from './routes/language.routes';

const app = express();

//configuraciones(creamos puerto)
app.set("port", 4000);

//Middlewares(intermedios)
app.use(morgan("dev"));
app.use(express.json());


//Rutas
app.use("/api/biblioteca",languageRoutes);


export default app;