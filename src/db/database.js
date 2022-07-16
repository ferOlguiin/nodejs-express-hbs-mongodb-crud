import {connect} from 'mongoose';
import {URI_MONGODB} from '../configDotEnv';

(async () => {
    try {
        const db = await connect(URI_MONGODB);
        console.log("Conexion completada a la base de datos" + db)        
    } catch (error){
        console.log(error)
    }
})();