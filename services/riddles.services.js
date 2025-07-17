import { readRiddles, writeRiddles } from "../DAL/riddles.dal.js";
import riddlesDB from "../DB/riddlesDB.js";

const riddleCollection = "riddlesTable"

export async function getAllRiddles() {
    try {
        const file = await readRiddles();
        if (!file) {
            throw new Error("The database is empty");
        }
        return file;
    } catch (err) {
        return err.message;
    }
}

export async function addRiddle(newRiddle) {
    const result = await riddlesDB
        .collection(riddleCollection)
        .insertOne(newRiddle);
    return result.insertedId
}

export async function updateRiddle(update) {
    let file = await getAllRiddles();
    try {
        if (file === "The database is empty") {
            throw new Error(file);
        } else {
            file = JSON.parse(file)
        }
        for (const riddle of file) {
            if (riddle.id === update.id) {
                const updateKeys = Object.keys(update);
                for (const key of updateKeys) {
                    riddle[key] = update[key];
                }
                await writeRiddles(JSON.stringify(file, null, 2));
                return;
            }
        }
        throw new Error("The riddle is not fount");

    } catch (err) {
        return err
    }
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
