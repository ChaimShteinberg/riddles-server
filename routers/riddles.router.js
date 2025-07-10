import express from "express";
import { addRiddleController, deleteRiddleController, getRiddlesController, updateRiddleController } from "../controllers/riddles.controllers.js";

const riddlesRouter = express.Router();

riddlesRouter.get('/getAll', getRiddlesController);

riddlesRouter.post('/create', addRiddleController);

riddlesRouter.put('/update', updateRiddleController);

riddlesRouter.delete('/delete/:id', deleteRiddleController)

// const router = {
//     GET:{
//         '/': getRiddlesController
//     }, 
//     POST:{
//         '/': addRiddleController
//     }, 
//     PUT:{
//         '/': updateRiddleController
//     }, 
//     DELETE:{
//         '/': deleteRiddleController
//     }
// };

export default riddlesRouter;