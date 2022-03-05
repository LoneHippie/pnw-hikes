import { DB_URI } from '$lib/env';

import mongoose from 'mongoose';

const DB = DB_URI;

async function dbConnectPromise() {
    // @ts-ignore
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to DB'))
}

async function isDbConnected() {
    const status = mongoose.connection.readyState;
    
    return status === 1;
}

export {
    dbConnectPromise,
    isDbConnected
};