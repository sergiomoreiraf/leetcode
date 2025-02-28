import { assertEquals } from '@std/assert/equals';

Deno.test('problem 217', () => {
  assertEquals(containsDuplicate([1, 2, 3, 1]), true);
  assertEquals(containsDuplicate([1, 2, 3, 4]), false);
  assertEquals(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true);
});

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

