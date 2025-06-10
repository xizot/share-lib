declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
declare function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions, locale?: string): string;
declare function formatRelativeTime(date: Date | string): string;
declare function formatFileSize(bytes: number): string;
declare function formatPhoneNumber(phoneNumber: string): string;
declare function truncateText(text: string, maxLength: number): string;
declare function capitalizeFirst(str: string): string;
declare function formatInitials(firstName: string, lastName: string): string;

export { capitalizeFirst, formatCurrency, formatDate, formatFileSize, formatInitials, formatPhoneNumber, formatRelativeTime, truncateText };
