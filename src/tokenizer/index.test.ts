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
    outputLength: 5,
  },
  {
    input: 'to en',
    outputLength: 4,
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

describe('tokenizer - snapshots', () => {
  test('should match tokens', () => {
    expect(tokenizer('to 1')).toMatchInlineSnapshot(`
      Array [
        Object {
          "value": "t",
        },
        Object {
          "value": "o",
        },
        Object {
          "type": "NUMBER",
          "value": "1",
        },
      ]
    `);
  });
});
