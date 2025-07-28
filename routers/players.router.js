import express from "express";
import { addPlayerController, updatePlayerController, leaderboardControler, singupController, signinController, getPlayerController } from "../controllers/players.controllers.js";
import { auth } from "../middleware/auth.middleware.js";

const playersRouter = express.Router();

playersRouter.post('/signup', singupController);

playersRouter.post('/signin', signinController);

playersRouter.use(auth);

playersRouter.get('/signinByToken', (req, res) => { res.json("true") });

playersRouter.get('/getPlayer', getPlayerController);

playersRouter.post('/create', addPlayerController);

playersRouter.put('/update', updatePlayerController);

playersRouter.get('/leaderboard', leaderboardControler)


export default playersRouter;