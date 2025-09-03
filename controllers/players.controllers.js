import { requireRole } from "../middleware/auth.middleware.js";
import {
  addPlayer,
  updatePlayer,
  getLeaderboard,
  register,
  signin,
  getPlayerByUsername,
} from "../services/players.services.js";

export async function registerController(req, res) {
  const { username, password } = req.body;
  res.send(await register(username, password));
}

export async function signinController(req, res) {
  const { username, password } = req.body;
  res.send(await signin(username, password));
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
  if (!requireRole(req.user.role, ["user", "admin"])) {
    return res.status(403).send("you do not have permission");
  }
  const { body } = req;
  res.json(await updatePlayer(body.username, body.best_time));
}

export async function leaderboardControler(req, res) {
  if (!requireRole(req.user.role, ["user", "admin"])) {
    return res.status(403).send("you do not have permission");
  }
  const leaderboard = await getLeaderboard();
  res.send(leaderboard);
}
