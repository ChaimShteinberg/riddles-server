import { readFile, writeFile } from "fs/promises"

const playersDBPath = "C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/riddles-server/DB/players.txt";

export async function readPlayers() {
    return await readFile(playersDBPath, "utf-8");
}

export async function writeplayers(playersArray) {
    writeFile(playersDBPath, playersArray);
}
