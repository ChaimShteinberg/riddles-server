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
