import express from "express";
import { RequestLogger } from "./services";
import { MongooseClient } from "./lib/mongoose/mongoose-client";
import { configDotenv } from "dotenv";
import { IDbClient } from "./types";
import { SeedsController } from "./controllers";
import { AuthRoutes, BookRoutes } from "./routes";
import { ProtectedRoutesMiddleware } from "./middlewares/protected-routes.middleware";

// Load all the env variables
configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;
const requestLogger = new RequestLogger();

const mongooseClient: IDbClient = new MongooseClient();
mongooseClient.connect();

// use middlewares
app.use(requestLogger.log);
app.use(express.json());
express.urlencoded({ extended: true })

// Protect routes
const protectedRoutesMiddleware = new ProtectedRoutesMiddleware();
app.use(protectedRoutesMiddleware.protect);

const seedController = new SeedsController();
app.get('/seed-db', seedController.create);

app.use(AuthRoutes);
app.use('/books', BookRoutes);

app.get('/health-check', (req, res) => {
    res.send(`Health OK`);
});


app.listen(PORT, () => {
    console.log(`Starting server at port ${PORT}`);
});


