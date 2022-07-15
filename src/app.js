import express from "express"; 
import indexRoutes from './routes/index.routes';
import {create} from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
import bodyParser from "body-parser";

//creacion de servidor
const app = express();

//configuracion de handdlebars
app.set('views', path.join(__dirname, 'views'));
app.engine(
    ".hbs",
    create({
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      defaulLayout: "main",
      extname: ".hbs",
    }).engine
  );
app.set('view engine', '.hbs');


// middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(indexRoutes);
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));


export default app;