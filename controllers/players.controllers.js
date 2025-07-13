import { addPlayer, deletePlayer, getAllPlarers, updatePlayer } from '../services/players.servicee.js'

export async function getPlayersController(req, res) {
    const players = await getAllPlarers();
    res.send(players);
}

export async function addPlayerController(req, res) {
    const { body } = req;
    res.json(await addPlayer(body));
}

export async function updatePlayerController(req, res) {
    const {body} = req;
    res.json(await updatePlayer(body))
}

export async function deletePlayerController(req, res) {
    const id = req.params.id;
    console.log(id)
    res.send(await deletePlayer(id))
}