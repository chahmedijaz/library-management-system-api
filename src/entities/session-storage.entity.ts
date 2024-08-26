export class SessionStorage {
    private static storage: Record<string, Object | undefined> = {};

    public static getSessionData(sessionId: string) {
        return SessionStorage.storage[sessionId];
    }

    public static setSessionData(sessionId: string, user: Object) {
        SessionStorage.storage[sessionId] = user;
    }

    public static removeSessionData(sessionId: string){
        delete(SessionStorage.storage[sessionId]);
    }
};
