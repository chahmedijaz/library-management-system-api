import { MiddlewareHandlerType } from "./shared/middleware-handler.type";

export interface IRequestLogger {
    log: MiddlewareHandlerType['handler'];
};
