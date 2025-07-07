import { getAllRiddles, addRiddle } from "../services/riddles.services.js";

export async function getRiddlesController(req, res) {
    const riddles = await getAllRiddles();
    res.end(riddles);
}

export function addRiddleController(req, res) {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", async () => {
        body = JSON.parse(body);
        res.end(await addRiddle(body));
    })
}