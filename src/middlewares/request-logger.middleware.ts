import { Request, Response, NextFunction } from "express";
import { IRequestLogger } from "../types";

export class RequestLogger implements IRequestLogger {
    log(req: Request, _res: Response, next: NextFunction) {
        console.log('')
        console.log(`[Request@${Date.now()}]: ${req.url}`);
        console.log('');

        next();
    };
};
