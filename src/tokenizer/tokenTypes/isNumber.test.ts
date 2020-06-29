import jestCases from 'jest-in-case';
import { isNumber } from './isNumber';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: '100',
    output: true,
  },
  {
    input: '1',
    output: true,
  },
  {
    input: 'A',
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
  `tokenTypes - ${isNumber.name}`,
  ({ input, output }: ICase) => {
    expect(isNumber.test(input)).toBe(output);
  },
  cases,
);
