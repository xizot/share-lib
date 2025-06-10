interface UseApiOptions {
    immediate?: boolean;
}
interface UseApiReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    execute: (...args: any[]) => Promise<void>;
}
declare function useApi<T>(apiFunction: (...args: any[]) => Promise<T>, options?: UseApiOptions): UseApiReturn<T>;

export { useApi };
