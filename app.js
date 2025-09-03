import express from "express";
import riddlesRouter from "./routers/riddles.router.js";
import playersRouter from "./routers/players.router.js";
import { connecToMongo } from "./DB/riddlesDB.js";
import cors from "cors";

await connecToMongo();

const PORT = process.env.PORT;

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://riddles-project.netlify.app",
];

app.use( cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`method: ${req.method}, url: ${req.url}`);
  next();
});

app.use("/riddles", riddlesRouter);
app.use("/players", playersRouter);

app.listen(PORT, () => {
  console.log(`port: ${PORT}`);
});
