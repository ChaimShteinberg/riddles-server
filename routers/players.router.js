import express from "express";
import { addPlayerController, getPlayersController, updatePlayerController } from "../controllers/players.controllers.js";

const playersRouter = express.Router();

playersRouter.get('/getAll', getPlayersController);

playersRouter.post('/create', addPlayerController);

playersRouter.put('/update', updatePlayerController);


export default playersRouter;