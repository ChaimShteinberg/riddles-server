import express from "express";
import { addPlayerController, deletePlayerController, getPlayersController, updatePlayerController } from "../controllers/players.controllers.js";

const playersRouter = express.Router();

playersRouter.get('/getAll', getPlayersController);

playersRouter.post('/create', addPlayerController);

playersRouter.put('/update', updatePlayerController);

playersRouter.delete('/delete/:id', deletePlayerController)


export default playersRouter;