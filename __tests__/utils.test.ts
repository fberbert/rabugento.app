import { cn } from '@/lib/utils';

describe('utils.cn', () => {
  it('deve mesclar classes e remover duplicatas', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
    expect(cn('foo', 'foo')).toBe('foo');
  });
});