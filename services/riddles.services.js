import riddlesDB from "../DB/riddlesDB.js";

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
    return result.modifiedCount;
}

export async function deleteRiddle(id) {
    const result = await riddleCollection
    .deleteOne(
        {"id": id}
    );
    return result.deletedCount;
}