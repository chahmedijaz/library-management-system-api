import mongoose, { ConnectOptions } from "mongoose";
import { IDbClient } from "../../types";

export class MongooseClient implements IDbClient {

    constructor() {
        mongoose.connection.on('disconnect', () => {
            console.log('MongoDB Disconnected Successfully!');
        });
    }

    connect = async () => {
        try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error: ${(error as Error).message}`);
            process.exit(1); // Exit process with failure
        }
    };

    disconnect = async () => {
        await mongoose.disconnect();
    }
};
