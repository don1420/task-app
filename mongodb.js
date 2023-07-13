// CRUD - create, read, update, delete
const { MongoClient } = require('mongodb')
const connectionUri = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

const client = new MongoClient(connectionUri)

async function run() {
    try {
        const db = client.db(databaseName)
        const usersCollection = db.collection('users');
        const usersDoc = { 
            name: 'Dmytro1', 
            age: 5 
        };
        const result = await usersCollection.insertOne(usersDoc);

        console.log(
            `A document was inserted with the _id: ${result.insertedId}`,
        );
    }
    catch (error) {
        console.log('error: ', error)
    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir)