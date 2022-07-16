import mongoose from 'mongoose';
import {URI_MONGODB} from '../configDotEnv';

(async () => {
    try {
        await mongoose.connect(URI_MONGODB);
        console.log("Conexion completada a la base de datos")        
    } catch (error){
        console.log(error)
    }
})();