import app from './app';
import { PORT } from './configDotEnv';
import './db/database';


app.listen(PORT || 3000);
console.log("server on port", PORT);