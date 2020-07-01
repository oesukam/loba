import jestCases from 'jest-in-case';
import { isOperator } from './isOperator';

interface ICase {
  input: string;
  output: boolean;
  name?: string;
}

const cases: ICase[] = [
  {
    input: '+',
    output: true,
  },
  {
    input: '-',
    output: true,
  },
  {
    input: '/',
    output: true,
  },
  {
    input: '*',
    output: true,
  },
  {
    input: 'a',
    output: false,
  },
  {
    input: ' ',
    output: false,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' does${!data.output ? "n't" : ''} have an opertaror`,
}));

jestCases(
  `tokenTypes - ${isOperator.name}`,
  ({ input, output }: ICase) => {
    expect(isOperator.test(input)).toBe(output);
  },
  cases,
);
