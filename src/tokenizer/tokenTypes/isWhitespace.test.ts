import jestCases from 'jest-in-case';
import { isWhitespace } from './isWhitespace';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: ' ',
    output: true,
  },
  {
    input: 'a b',
    output: true,
  },
  {
    input: 'ab',
    output: false,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' should${!data.output ? "n't" : ''} have whitespace`,
}));

jestCases(
  'tokenTypes - isWhitespace',
  ({ input, output }: ICase) => {
    expect(isWhitespace(input)).toBe(output);
  },
  cases,
);
