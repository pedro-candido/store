import { convertNumberToDollar } from './formatter';

describe('formatter', () => {
  it('should return number parsed', () => {
    const value = convertNumberToDollar(1.0);

    expect(value).toBe('$ 1,00');
  });
});
