import {createServer} from "node:http"
import router from "./routers/riddles.router.js"

const server = createServer(async (req, res) => {
    console.log(`method: ${req.method}, url: ${req.url}`)
    await router[req.method][req.url](req, res)
})

server.listen(1456, () => {
    console.log("port: 1456")
})
