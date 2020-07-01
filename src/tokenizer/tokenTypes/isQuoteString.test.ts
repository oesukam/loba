import jestCases from 'jest-in-case';
import { isQuoteString } from './isQuoteString';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: '"',
    output: true,
  },
  {
    input: 'a',
    output: false,
  },
  {
    input: '1',
    output: false,
  },
  {
    input: ' ',
    output: false,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' does${!data.output ? "n't" : ''} have a quote`,
}));

jestCases(
  `tokenTypes - ${isQuoteString.name}`,
  ({ input, output }: ICase) => {
    expect(isQuoteString.test(input)).toBe(output);
  },
  cases,
);
