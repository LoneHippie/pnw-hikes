import { DB_URI, NODE_ENV } from '$lib/env';

import mongoose from 'mongoose';

const DB = DB_URI;

async function dbConnectPromise() {
    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to DB'))
}

export default dbConnectPromise;

// import { MongoClient } from 'mongodb';

// const uri = DB_URI;
// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!uri) {
//     throw new Error('Please add your Mongo URI to .env')
// };

// if (NODE_ENV === 'development') {
//     if (!global._mongoClientPromise) {
//         client = new MongoClient(uri, options);
//         global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise;
// } else {
//     // In production mode, it's best to 
//     // not use a global variable.
//     client = new MongoClient(uri, options)
//     clientPromise = client.connect()
// };

// export default clientPromise