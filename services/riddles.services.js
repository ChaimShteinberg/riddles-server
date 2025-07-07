import { readRiddles } from "../DAL/riddles.dal.js";

export async function getAllRiddles(){
    let file;
    await readRiddles().then(data => file = data)
    return file;
}
