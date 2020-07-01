const WHITESPACE = /\s+/;

const isWhitespace = {
  test: (text: string): boolean => WHITESPACE.test(text),
  name: 'WHITE_SPACE',
};

export { isWhitespace };
