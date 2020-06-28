import { tokenizer } from './index';

describe('tokenizer', () => {
  test('should return 2 tokens', () => {
    const tokens = tokenizer('ad');

    expect(tokens.length).toBe(2);
  });
});
