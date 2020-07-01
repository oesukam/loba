const LETTER = /[a-zA-Z]/;

const isLetter = {
  test: (text: string): boolean => LETTER.test(text),
  name: 'LETTER',
};

export { isLetter };
