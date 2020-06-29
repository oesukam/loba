const NUMBER = /^[0-1]+$/;

const isNumber = {
  test: (text: string): boolean => NUMBER.test(text),
  name: 'NUMBER',
};

export { isNumber };
