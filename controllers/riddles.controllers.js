import { getAllRiddles } from "../services/riddles.services.js";

export async function getRiddlesController(req, res){
    const riddles = await getAllRiddles();
    res.end(riddles);
}