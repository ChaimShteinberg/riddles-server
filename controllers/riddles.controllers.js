import { requireRole } from '../middleware/auth.middleware.js';
import { getAllRiddles, addRiddle, updateRiddle, deleteRiddle, getRiddlesByLevel } from "../services/riddles.services.js";

export async function getRiddlesByLevelController(req, res) {
    if (!requireRole(req.user.role, ['user', 'admin', 'guest'])) {
        return res.status(403).send("you do not have permission")
    }
    const riddles = await getRiddlesByLevel(req.params.level);
    res.send(riddles);
}

export async function getRiddlesController(req, res) {
    if (!requireRole(req.user.role, ['user', 'admin'])) {
        return res.status(403).send("you do not have permission")
    }
    const riddles = await getAllRiddles();
    res.send(riddles);
}

export async function addRiddleController(req, res) {
    if (!requireRole(req.user.role, ['user', 'admin'])) {
        return res.status(403).send("you do not have permission")
    }
    const { body } = req;
    res.json(await addRiddle(body));
}

export async function updateRiddleController(req, res) {
    if (!requireRole(req.user.role, ['admin'])) {
        return res.status(403).send("you do not have permission")
    }
    const { body } = req;
    const id = req.params.id;
    res.json(await updateRiddle(id, body))
}

export async function deleteRiddleController(req, res) {
    if (!requireRole(req.user.role, ['admin'])) {
        return res.status(403).send("you do not have permission")
    }
    const id = req.params.id;
    res.send(await deleteRiddle(id))
}