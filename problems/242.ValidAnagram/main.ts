import { assertEquals } from "@std/assert/equals";

Deno.test("problem 242", () => {
  assertEquals(isAnagram("anagram", "nagaram"), true);
  assertEquals(isAnagram("rat", "car"), false);
});

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const arr = new Array(26).fill(0);
  const charA = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const idxA = s.charCodeAt(i) - charA;
    const idxB = t.charCodeAt(i) - charA;
    arr[idxA]++;
    arr[idxB]--;
  }
  return arr.every((x) => x === 0);
}
