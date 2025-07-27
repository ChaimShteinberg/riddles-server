import { addPlayer, updatePlayer, getLeaderboard, signup, signin, getPlayerByUsername } from '../services/players.servicee.js'

export async function singupController(req, res) {
    const { username, password } = req.body;
    res.send(await signup(username, password))
}

export async function signinController(req, res) {
    const { username, password } = req.body;
    res.send(await signin(username, password))
}

export async function getPlayerController(req, res) {
    const players = await getPlayerByUsername(req.user.username);
    res.send(players);
}

export async function addPlayerController(req, res) {
    const { body } = req;
    res.json(await addPlayer(body));
}

export async function updatePlayerController(req, res) {
    const { body } = req;
    res.json(await updatePlayer(body.username, body.best_time))
}

export async function leaderboardControler(req, res) {
    const leaderboard = await getLeaderboard();
    res.send(leaderboard);
}
