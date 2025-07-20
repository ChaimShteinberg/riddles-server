import playerDB from '../DB/playerDB.js';

export async function getAllPlarers() {
    const { data, error } = await playerDB
        .select();
    return error || data;
}

export async function addPlayer(newPlayer) {
    const { data, error } = await playerDB
        .insert(newPlayer)
        .select();
    return error || data[0];
}

export async function updatePlayer(username, best_time) {
    const { data, error } = await playerDB
        .update({ "best_time": best_time })
        .eq('username', username)
        .select();
    return error || data;
}
