# 2273. Find Resultant Array After Removing Anagrams

## Problem Description

You are given a 0-indexed string array `words`.

In one operation, you can pick any two **adjacent** strings in `words` and delete the second string if it's an **anagram** of the first string.

- An **anagram** is a string formed by rearranging the letters of another string using all the original letters exactly once.

Return the final array after performing this operation as many times as possible on `words`.

### Example 1:

```
Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
- "baba" is an anagram of "abba", so "baba" is deleted.
- "bbaa" is an anagram of "abba", so "bbaa" is deleted.
- "cd" is an anagram of "cd", so the second "cd" is deleted.
After these operations, we're left with words = ["abba","cd"].
```

### Example 2:

```
Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation: No adjacent strings in words are anagrams, so no operations are performed.
```

### Example 3:

```
Input: words = ["a","b","a"]
Output: ["a","b","a"]
Explanation: No adjacent strings in words are anagrams, so no operations are performed.
```

### Constraints:

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.

## Approach

1. Start with the first word in the array.
2. For each subsequent word, check if it's an anagram of the previous word.
3. If it's not an anagram, add it to the result.
4. Return the final result.

This efficiently implements the operation of removing adjacent anagrams as described in the problem.
