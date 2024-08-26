import express from "express";
import { RequestLogger } from "./services";
import { MongooseClient } from "./lib/mongoose/mongoose-client";
import { configDotenv } from "dotenv";
import { IDbClient } from "./types";
import { SeedsController } from "./controllers";

// Load all the env variables
configDotenv();

const app = express();
const port = process.env.PORT || 5000;
const requestLogger = new RequestLogger();

const mongooseClient: IDbClient = new MongooseClient();
mongooseClient.connect();

app.use(requestLogger.log);

const seedController = new SeedsController();
app.get('/seed-db', seedController.create);

app.get('/health-check', (req, res) => {
    res.send(`Health OK`);
});


app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});


