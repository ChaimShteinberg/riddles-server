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
    const {body} = req;
    res.json(await updateRiddle(body))
    // let body = "";
    // req.on("data", (chunk) => {
    //     body += chunk;
    // });

    // req.on("end", async () => {
    //     body = JSON.parse(body);
    //     res.end(await updateRiddle(body));
    // })
}

export function deleteRiddleController(req, res) {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", async () => {
        body = JSON.parse(body);
        res.end(await deleteRiddle(body.id));
    })
}