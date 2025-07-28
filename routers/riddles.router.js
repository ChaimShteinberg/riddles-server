import express from "express";
import { addRiddleController, deleteRiddleController, getRiddlesByLevelController, getRiddlesController, updateRiddleController } from "../controllers/riddles.controllers.js";
import { auth } from "../middleware/auth.middleware.js";

const riddlesRouter = express.Router();

riddlesRouter.use(auth);

riddlesRouter.get('/getRiddlesByLevel/:level', getRiddlesByLevelController)

riddlesRouter.get('/getAll', getRiddlesController);

riddlesRouter.post('/create', addRiddleController);

riddlesRouter.put('/update/:id', updateRiddleController);

riddlesRouter.delete('/delete/:id', deleteRiddleController)


export default riddlesRouter;