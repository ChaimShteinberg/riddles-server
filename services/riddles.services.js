import { readRiddles, writeRiddles } from "../DAL/riddles.dal.js";

export async function getAllRiddles() {
    try {
        const file = await readRiddles();
        if (!file) {
            throw new Error("The database is empty");
        }
        return file;
    } catch (err) {
        return err;
    }
}

export async function addRiddle(newRiddle) {
    let file = await getAllRiddles();
    if (file.message === "The database is empty") {
        file = []
    } else {
        file = JSON.parse(file)
    }
    file.push(newRiddle)
    await writeRiddles(JSON.stringify(file, null, 2))
}
