import { NextFunction, Request, Response } from "express"

export type MiddlewareHandlerType = {
    handler: (req: Request, res: Response, next: NextFunction) => void;
};
