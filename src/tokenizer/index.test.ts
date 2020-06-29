import jestCases from 'jest-in-case';
import { tokenizer } from './index';

interface ICase {
  input: string;
  output: number;
  name?: string;
}

const cases: ICase[] = [
  {
    input: 'token',
    output: 5,
  },
  {
    input: 'to en',
    output: 4,
  },
  {
    input: ' ',
    output: 0,
  },
].map((data) => ({
  ...data,
  name: `'${data.input}' generate ${data.output} token(s)`,
}));

jestCases(
  'tokenizer',
  ({ input, output }: ICase) => {
    const tokens = tokenizer(input);

    expect(tokens.length).toBe(output);
  },
  cases,
);
