import { isWhitespace } from './tokenTypes/isWhitespace';

function tokenizer(text: string): Array<string> {
  const tokens: Array<string> = [];
  let cursor = 0;

  while (cursor < text.length) {
    const input = text[cursor];
    cursor++;
    if (isWhitespace(input)) {
      continue;
    }
    tokens.push(text[cursor]);
  }

  return tokens;
}

export { tokenizer };
