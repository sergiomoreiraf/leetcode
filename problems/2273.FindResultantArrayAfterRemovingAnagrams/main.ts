/**
 * Removes anagrams from an array of strings
 * Only the first occurrence of each anagram is kept
 * @param words The array of strings
 * @returns Array with anagrams removed
 */
export function removeAnagrams(words: string[]): string[] {
  if (words.length <= 1) {
    return words;
  }

  const result: string[] = [words[0]];

  for (let i = 1; i < words.length; i++) {
    // Only add the current word if it's not an anagram of the previous word
    if (!areAnagrams(words[i], words[i - 1])) {
      result.push(words[i]);
    }
  }

  return result;
}

/**
 * Checks if two strings are anagrams of each other
 * @param s1 First string
 * @param s2 Second string
 * @returns True if the strings are anagrams, false otherwise
 */
function areAnagrams(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  // Simple approach: sort both strings and compare
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');

  return sortedS1 === sortedS2;
}
