import { writeRiddles } from "../DAL/riddles.dal.js";
import riddlesDB, { connecToMongo } from "../DB/riddlesDB.js";

await connecToMongo()

const riddleCollection = riddlesDB.collection("riddlesTable");

export async function getAllRiddles() {
    const result = await riddleCollection
        .find()
        .toArray();
    return result;
}

export async function addRiddle(newRiddle) {
    const result = await riddleCollection
        .insertOne(newRiddle);
    return result.insertedId
}

export async function updateRiddle(update) {
    const result = await riddleCollection
    .updateOne(
        { "id": update.id},
        {$set: update}
    );
    return result.acknowledged;
}

export async function deleteRiddle(id) {
    let file = await getAllRiddles();
    try {
        if (file === "The database is empty") {
            throw new Error(file);
        } else {
            file = JSON.parse(file)
        }
        for (const riddle in file) {
            if (file[riddle].id === id) {
                file.splice(riddle, 1);
                await writeRiddles(JSON.stringify(file, null, 2));
                return
            }
        }
        throw new Error("The riddle is not fount");

    } catch (err) {
        return err
    }
}
