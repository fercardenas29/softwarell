// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI

// const conectarDB = async() =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             bufferCommands: false,
//             bufferMaxEntries: 0,
//             useFindAndModify: false,
//             useCreateIndex: true, 
//         })
//         console.log('mongodb connected')
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }

//export default conectarDB;

import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;