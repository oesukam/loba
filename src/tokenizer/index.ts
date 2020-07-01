import { isWhitespace } from './tokenTypes/isWhitespace';
import { isParenthesis } from './tokenTypes/isParenthesis';
import { isNumber } from './tokenTypes/isNumber';
import { isOperator } from './tokenTypes/isOperator';
import { isLetter } from './tokenTypes/isLetter';

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

    if (isOperator.test(value)) {
      tokens.push({ value, type: isOperator.name });
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

    if (isLetter.test(value)) {
      while (isLetter.test(text[++cursor]) && cursor < text.length) {
        value += text[cursor];
      }

      tokens.push({ value, type: isLetter.name });
      continue;
    }

    throw new Error(`Unrecognize character ${value}`);
  }

  return tokens;
}

export { tokenizer };
