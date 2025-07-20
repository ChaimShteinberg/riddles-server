import { writeplayers } from '../DAL/players.dal.js'
import playerDB from '../DB/playerDB.js';

export async function getAllPlarers() {
    const { data, error } = await playerDB.select()
    return data || error;
}

export async function addPlayer(newPlayer) {
    const { error } = await playerDB.insert(newPlayer)
    if (error) return error;
    return "ok"
}

export async function updatePlayer(username, best_time) {
    const { error } = await playerDB.update({"best_time": best_time})
        .eq('username', username)
    if (error) return error;
    return "ok"
}

export async function deletePlayer(id) {
    let file = await getAllPlarers();
    try {
        if (file === "The database is empty") {
            throw new Error(file);
        } else {
            file = JSON.parse(file)
        }
        for (const player in file) {
            if (file[player].id === id) {
                file.splice(player, 1);
                await writeplayers(JSON.stringify(file, null, 2));
                return
            }
        }
        throw new Error("The player is not fount");

    } catch (err) {
        return err
    }
}
