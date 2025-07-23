import express from "express";
import { addPlayerController, getPlayersController, updatePlayerController, leaderboardControler, singupController } from "../controllers/players.controllers.js";

const playersRouter = express.Router();

playersRouter.post('/signup', singupController)

playersRouter.get('/getAll', getPlayersController);

playersRouter.post('/create', addPlayerController);

playersRouter.put('/update', updatePlayerController);

playersRouter.get('/leaderboard', leaderboardControler)


export default playersRouter;