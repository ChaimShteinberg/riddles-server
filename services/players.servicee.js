import {readPlayers, writeplayers} from '../DAL/players.dal.js'

export async function getAllPlarers() {
    try {
        const file = await readPlayers();
        if (!file) {
            throw new Error("The database is empty");
        }
        return file;
    } catch (err) {
        return err.message;
    }
}

export async function addPlayer(newPlayer) {
    let file = await getAllPlarers();
    if (file === "The database is empty") {
        file = []
    } else {
        file = JSON.parse(file)
    }
    file.push(newPlayer)
    await writeplayers(JSON.stringify(file, null, 2))
}

export async function updatePlayer(update) {
    let file = await getAllPlarers();
    try {
        if (file === "The database is empty") {
            throw new Error(file);
        } else {
            file = JSON.parse(file)
        }
        for (const player of file) {
            if (player.id === update.id) {
                const updateKeys = Object.keys(update);
                for (const key of updateKeys) {
                    player[key] = update[key];
                }
                await writeplayers(JSON.stringify(file, null, 2));
                return;
            }
        }
        throw new Error("The player is not fount");

    } catch (err) {
        return err
    }
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
