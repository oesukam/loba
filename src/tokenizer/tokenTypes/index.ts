const WHITESPACE = /\s+/;

export const isWhitespace = (text: string): boolean => WHITESPACE.test(text);
