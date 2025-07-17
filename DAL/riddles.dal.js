import { readFile, writeFile } from "fs/promises"

const riddlesDBPath = "./DB/riddles.txt";

export async function readRiddles() {
    return await readFile(riddlesDBPath, "utf-8");
}

export async function writeRiddles(riddlesArray) {
    writeFile(riddlesDBPath, riddlesArray);
}
