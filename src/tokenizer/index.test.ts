import jestCases from 'jest-in-case';
import { tokenizer } from './index';

interface ICase {
  input: string;
  outputLength: number;
  name?: string;
}

const cases: ICase[] = [
  {
    input: 'token',
    outputLength: 1,
  },
  {
    input: 'to en',
    outputLength: 2,
  },
  {
    input: ' ',
    outputLength: 0,
  },
  {
    input: '()',
    outputLength: 2,
  },
  {
    input: '1',
    outputLength: 1,
  },
  {
    input: '111',
    outputLength: 1,
  },
  {
    input: '+',
    outputLength: 1,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' generate ${data.outputLength} token(s)`,
}));

jestCases(
  'tokenizer',
  ({ input, outputLength }: ICase) => {
    const tokens = tokenizer(input);

    expect(tokens.length).toBe(outputLength);
  },
  cases,
);

describe('tokenizer', () => {
  test('should throw an error', () => {
    const error = new Error(`Unrecognize character _`);
    expect(() => tokenizer('_')).toThrow(error);
  });

  test('should match tokens', () => {
    expect(tokenizer('to 1')).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "LETTER",
          "value": "t",
        },
        Object {
          "type": "NUMBER",
          "value": "1",
        },
      ]
    `);
  });
});
