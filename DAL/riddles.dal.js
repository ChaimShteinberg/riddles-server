import { readFile } from "fs/promises"

const riddlesDBPath = "C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-server/DB/riddles.txt";

export async function readRiddles() {
    return await readFile(riddlesDBPath, "utf-8");
}
