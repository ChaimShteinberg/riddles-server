import express from "express";
import { addRiddleController, deleteRiddleController, getRiddlesController, updateRiddleController } from "../controllers/riddles.controllers.js";

const riddlesRouter = express.Router();

const router = {
    GET:{
        '/': getRiddlesController
    }, 
    POST:{
        '/': addRiddleController
    }, 
    PUT:{
        '/': updateRiddleController
    }, 
    DELETE:{
        '/': deleteRiddleController
    }
};

export default router;