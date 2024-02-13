import mongoose from "mongoose";

const HospSchema = new mongoose.Schema({

    nombre:{
        type: String,
        require: [true, "ingresar nombre"]
    },
    precio:{
        type: BigInt64Array,
        require: [true, "ingresar nombre"]
    },
    cantidad:{
        type: BigInt64Array,
        require: [true, "ingresar cantidad"]
    }
})
export default mongoose.models.hospedaje || mongoose.model('hospedaje', HospSchema) 