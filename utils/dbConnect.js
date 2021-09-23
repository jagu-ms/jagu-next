import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if(!MONGODB_URI){
    throw new Error(
        "please check your enviroment variable"
    )
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = {conn: null, promise: null }
}

async function dbConnect () {
    if(cached.conn) return cached.conn;
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        /* bufferMaxEnteries: 0, */
        /* useFindAndModify: false, */
        /* useCreateIndex: true, */
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts);
    cached.conn = await cached.promise;
    return cached.conn
}
export default dbConnect;