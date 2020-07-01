const QUOTE = /"/;

const isQuoteString = {
  test: (text: string): boolean => QUOTE.test(text),
  name: 'QUOTE_STRING',
};

export { isQuoteString };
