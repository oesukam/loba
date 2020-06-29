const LEFT_PARENTHESIS = /\(/;
const RIGHT_PARENTHESIS = /\)/;

const isParenthesis = {
  test: (text: string): boolean =>
    LEFT_PARENTHESIS.test(text) || RIGHT_PARENTHESIS.test(text),
  name: 'PARENTHESIS',
};

export { isParenthesis };
