import { MongoClient } from "mongodb";

const host = 'localhost'
const port = '27017'
const username = 'lector'
const password = '123456'

const uri = `mongodb://${host}:${port}`
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // authSource: "admin",
    // auth: {
    //     username,
    //     password
    // }
})

await client.connect()
const db = client.db("coderhouse")
const dbPersonas = db.collection("personas")
const personas = await dbPersonas.find().toArray()
console.log(personas)
await client.close()