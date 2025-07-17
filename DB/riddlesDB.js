import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.URI);

export async function connecToMongo() {
    try {
        await client.connect();
        console.log("concted to db");
    } catch (error){
        console.log(error.message);
    }
};

const riddlesDB = client.db('riddlesDB');

export default riddlesDB;