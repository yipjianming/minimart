require('dotenv/config')
var MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DB_CONNECTION);
var ObjectId = require('mongodb').ObjectID;
const database = "minimart"

module.exports = {
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
    }
}
