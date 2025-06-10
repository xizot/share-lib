declare const formatDate: (date: Date | string, format?: "short" | "long" | "time") => string;
declare const timeAgo: (date: Date | string) => string;
declare const capitalize: (str: string) => string;
declare const slugify: (str: string) => string;
declare const truncate: (str: string, length: number) => string;
declare const unique: <T>(array: T[]) => T[];
declare const groupBy: <T, K extends keyof T>(array: T[], key: K) => Record<string, T[]>;
declare const sortBy: <T>(array: T[], key: keyof T, direction?: "asc" | "desc") => T[];
declare const omit: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]) => Omit<T, K>;
declare const pick: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]) => Pick<T, K>;
declare const isEmail: (email: string) => boolean;
declare const isUrl: (url: string) => boolean;
declare const isPhoneNumber: (phone: string) => boolean;
declare const delay: (ms: number) => Promise<void>;
declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => (...args: Parameters<T>) => void;
declare const throttle: <T extends (...args: any[]) => any>(func: T, limit: number) => (...args: Parameters<T>) => void;
declare const storage: {
    get: <T>(key: string, defaultValue?: T) => T | null;
    set: <T>(key: string, value: T) => void;
    remove: (key: string) => void;
    clear: () => void;
};

export { capitalize, debounce, delay, formatDate, groupBy, isEmail, isPhoneNumber, isUrl, omit, pick, slugify, sortBy, storage, throttle, timeAgo, truncate, unique };
