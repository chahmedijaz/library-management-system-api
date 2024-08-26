export interface IDbClient {
    connect: () => void;
    disconnect: () => void;
};
