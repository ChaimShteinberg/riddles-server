import express from "express";
import { addPlayerController, getPlayersController, updatePlayerController, leaderboardControler, singupController, signinController } from "../controllers/players.controllers.js";
import { auth } from "../middleware/auth.middleware.js";

const playersRouter = express.Router();

playersRouter.post('/signup', singupController);

playersRouter.post('/signin', signinController)

playersRouter.use(auth)

playersRouter.get('/getAll', getPlayersController);

playersRouter.post('/create', addPlayerController);

playersRouter.put('/update', updatePlayerController);

playersRouter.get('/leaderboard', leaderboardControler)


export default playersRouter;