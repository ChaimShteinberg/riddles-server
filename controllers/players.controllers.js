import { requireRole } from "../middleware/auth.middleware.js";
import {
  addPlayer,
  updatePlayer,
  getLeaderboard,
  register,
  login,
  getPlayerByUsername,
} from "../services/players.services.js";

export async function registerController(req, res) {
  const { username, password } = req.body;
  const result = await register(username, password);
  if (result.token) {
    res.cookie("token", result.token, {
      httpOnly: true,
    });
  }
  res.send({ message: result.message });
}

export async function loginController(req, res) {
  const { username, password } = req.body;
  const result = await login(username, password);
  if (result.token) {
    res.cookie("token", result.token, {
      httpOnly: true,
    });
  }
  res.send({ message: result.message });
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
