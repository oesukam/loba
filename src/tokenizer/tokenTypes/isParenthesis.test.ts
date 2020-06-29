import jestCases from 'jest-in-case';
import { isParenthesis } from './isParenthesis';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: '(',
    output: true,
  },
  {
    input: ')',
    output: true,
  },
  {
    input: '()',
    output: true,
  },
  {
    input: '( )',
    output: true,
  },
  {
    input: 'abc',
    output: false,
  },
  {
    input: ' ',
    output: false,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' does${!data.output ? "n't" : ''} have a parenthesis`,
}));

jestCases(
  'tokenTypes - isParenthesis',
  ({ input, output }: ICase) => {
    expect(isParenthesis.test(input)).toBe(output);
  },
  cases,
);
