import mongoose, { ConnectOptions } from "mongoose";
import { IDbClient } from "../../types";

export class MongooseClient implements IDbClient {
    connect = async () => {
        try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        } as ConnectOptions);
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
            process.exit(1); // Exit process with failure
        }
    };
};
