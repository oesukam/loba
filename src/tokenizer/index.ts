function tokenizer(text: string): Array<string> {
  const tokens: Array<string> = [];
  let cursor = 0;

  while (cursor < text.length) {
    cursor++;
    tokens.push(text[cursor]);
  }

  return tokens;
}

export { tokenizer };
