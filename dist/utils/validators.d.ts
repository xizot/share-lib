declare function isValidEmail(email: string): boolean;
declare function isValidPhoneNumber(phone: string): boolean;
declare function isValidUrl(url: string): boolean;
declare function isValidPassword(password: string, minLength?: number): boolean;
declare function isStrongPassword(password: string): boolean;
declare function isValidCreditCard(cardNumber: string): boolean;
declare function isValidPostalCode(postalCode: string, country?: string): boolean;
declare function isEmpty(value: unknown): boolean;

export { isEmpty, isStrongPassword, isValidCreditCard, isValidEmail, isValidPassword, isValidPhoneNumber, isValidPostalCode, isValidUrl };
