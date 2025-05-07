export type TResponseApi<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
