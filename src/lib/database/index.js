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