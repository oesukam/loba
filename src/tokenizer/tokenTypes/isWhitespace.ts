const WHITESPACE = /\s+/;

const isWhitespace = (text: string): boolean => WHITESPACE.test(text);

export { isWhitespace };
