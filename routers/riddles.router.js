import express from "express";
import { addRiddleController, deleteRiddleController, getRiddlesController, updateRiddleController } from "../controllers/riddles.controllers.js";

const riddlesRouter = express.Router();

riddlesRouter.get('/getAll', getRiddlesController);

riddlesRouter.post('/create', addRiddleController);

riddlesRouter.put('/update', updateRiddleController);

riddlesRouter.delete('/delete/:id', deleteRiddleController)


export default riddlesRouter;