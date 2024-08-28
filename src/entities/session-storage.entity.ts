import { Request } from "express";
import { ISessionObject } from "../types";

export class SessionStorage {
    private static storage: Record<string, ISessionObject | undefined> = {};

    public static getSessionData(sessionId: string) {
        return SessionStorage.storage[sessionId];
    }

    public static setSessionData(sessionId: string, sessionObject: ISessionObject) {
        SessionStorage.storage[sessionId] = sessionObject;
    }

    public static removeSessionData(sessionId: string){
        delete(SessionStorage.storage[sessionId]);
    }

    public static sessionUser(req: Request){
        const sessionId = req.headers['x-session-id'];
        return SessionStorage.storage[sessionId as string]?.currentUser
    }

    public static sessionLibrary(req: Request){
        const sessionId = req.headers['x-session-id'];
        return SessionStorage.storage[sessionId as string]?.currentLibrary
    }
};
