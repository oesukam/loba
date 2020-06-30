import { isWhitespace } from './identifies/isWhitespace';
import { isParenthesis } from './identifies/isParenthesis';
import { isNumber } from './identifies/isNumber';

interface IToken {
  type?: string;
  value: string | number;
}

function tokenizer(text: string): IToken[] {
  const tokens: IToken[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let value = text[cursor];
    cursor++;
    if (isWhitespace.test(value)) {
      continue;
    }

    if (isParenthesis.test(value)) {
      tokens.push({ value, type: isParenthesis.name });
      continue;
    }

    if (isNumber.test(value)) {
      while (isNumber.test(text[++cursor])) {
        value += text[cursor];
      }

      tokens.push({ value, type: isNumber.name });
      continue;
    }

    tokens.push({ value });
  }

  return tokens;
}

export { tokenizer };
