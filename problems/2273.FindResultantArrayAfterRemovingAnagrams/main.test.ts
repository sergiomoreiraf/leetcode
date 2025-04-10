import { removeAnagrams } from './main.ts';
import { assertEquals } from '@std/assert/equals';

Deno.test('Example 1: Remove consecutive anagrams', () => {
  const words = ['abba', 'baba', 'bbaa', 'cd', 'cd'];
  const expected = ['abba', 'cd'];
  assertEquals(removeAnagrams(words), expected);
});

Deno.test('Example 2: No anagrams present', () => {
  const words = ['a', 'b', 'c', 'd', 'e'];
  const expected = ['a', 'b', 'c', 'd', 'e'];
  assertEquals(removeAnagrams(words), expected);
});

Deno.test('Example 3: Non-consecutive similar words', () => {
  const words = ['a', 'b', 'a'];
  const expected = ['a', 'b', 'a'];
  assertEquals(removeAnagrams(words), expected);
});

Deno.test('Empty input array', () => {
  const words: string[] = [];
  const expected: string[] = [];
  assertEquals(removeAnagrams(words), expected);
});

Deno.test('Single word in array', () => {
  const words = ['hello'];
  const expected = ['hello'];
  assertEquals(removeAnagrams(words), expected);
});

Deno.test('All consecutive anagrams', () => {
  const words = ['abc', 'bca', 'cab', 'acb'];
  const expected = ['abc'];
  assertEquals(removeAnagrams(words), expected);
});
