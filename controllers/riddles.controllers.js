import { getAllRiddles, addRiddle, updateRiddle, deleteRiddle } from "../services/riddles.services.js";

export async function getRiddlesController(req, res) {
    const riddles = await getAllRiddles();
    res.send(riddles);
}

export async function addRiddleController(req, res) {
    const { body } = req;
    res.json(await addRiddle(body));
}

export async function updateRiddleController(req, res) {
    const { body } = req;
    res.json(await updateRiddle(body))
}

export async function deleteRiddleController(req, res) {
    const id = req.params.id;
    res.send(await deleteRiddle(id))
}