import { addRiddleController, deleteRiddleController, getRiddlesController, updateRiddleController } from "../controllers/riddles.controllers.js";

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