import jestCases from 'jest-in-case';
import { isLetter } from './isLetter';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: 'A',
    output: true,
  },
  {
    input: 'a',
    output: true,
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
  name: `'${data.input}' does${!data.output ? "n't" : ''} have a parenthesis`,
}));

jestCases(
  `tokenTypes - ${isLetter.name}`,
  ({ input, output }: ICase) => {
    expect(isLetter.test(input)).toBe(output);
  },
  cases,
);
