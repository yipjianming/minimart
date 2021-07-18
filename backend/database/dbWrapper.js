require('dotenv/config')
let mongo = require('mongodb')
const client = new mongo.MongoClient(process.env.DB_CONNECTION);
const database = "minimart"

module.exports = {
    insert: async function (collection, data) {
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
            return await client.db(database).collection(collection).insertOne(data)
        } catch (e) {
            throw e
        } finally {
            // Connect to the MongoDB cluster
            await client.close();
        }
    },

    getAll: async function (collection) {
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
            return await client.db(database).collection(collection).find({}).toArray()
        } catch (e) {
            throw e
        } finally {
            // Connect to the MongoDB cluster
            await client.close();
        }
    },

    update: async function (collection, data) {
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
            let query = { _id: new mongo.ObjectId(data['_id'] )};
            delete data['_id']
            let newValues = { $set: data };
            return await client.db(database).collection(collection).updateOne(query, newValues)
        } catch (e) {
            throw e
        } finally {
            // Connect to the MongoDB cluster
            await client.close();
        }
    },

    delete: async function (collection, data) {
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
            return await client.db(database).collection(collection).deleteOne({ _id: new mongo.ObjectId(data) })
        } catch (e) {
            throw e
        } finally {
            // Connect to the MongoDB cluster
            await client.close();
        }
    }

}
