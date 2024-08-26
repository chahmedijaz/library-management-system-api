export interface IFactory<T, Args extends any[]> {
    create: (...args: Args) => T
};
