import { isWhitespace } from './tokenTypes/isWhitespace';
import { isParenthesis } from './tokenTypes/isParenthesis';

interface IToken {
  name?: string;
  value: string | number;
}

function tokenizer(text: string): IToken[] {
  const tokens: IToken[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const value = text[cursor];
    cursor++;
    if (isWhitespace.test(value)) {
      continue;
    }

    if (isParenthesis.test(value)) {
      tokens.push({ value, name: isParenthesis.name });
      continue;
    }

    tokens.push({ value: text[cursor] });
  }

  return tokens;
}

export { tokenizer };
