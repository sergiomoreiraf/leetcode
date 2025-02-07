import { assertStrictEquals } from '@std/assert/strict-equals';
import { canConstruct } from './main.ts';
import { assertFalse } from '@std/assert/false';

Deno.test('problem 383', () => {
  assertFalse(canConstruct('a', 'b'));
  assertFalse(canConstruct('aa', 'ab'));
  assertStrictEquals(canConstruct('aa', 'aab'), true);
});