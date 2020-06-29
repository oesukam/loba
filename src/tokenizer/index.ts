import { isWhitespace } from './tokenTypes/isWhitespace';

interface IToken {
  name?: string;
  value: string | number;
}

function tokenizer(text: string): IToken[] {
  const tokens: IToken[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const input = text[cursor];
    cursor++;
    if (isWhitespace.test(input)) {
      continue;
    }
    tokens.push({ value: text[cursor] });
  }

  return tokens;
}

export { tokenizer };
