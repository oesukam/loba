const OPERATORS = /[\+\-\*\/]/;

const isOperator = {
  test: (text: string): boolean => OPERATORS.test(text),
  name: 'OPERATOR',
};

export { isOperator };
