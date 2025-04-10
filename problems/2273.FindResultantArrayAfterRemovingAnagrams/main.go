package problems

// RemoveAnagrams removes anagrams from an array of strings
// Only the first occurrence of each anagram is kept
// For example, ["abba","baba","bbaa","cd","cd"] -> ["abba","cd"]
func RemoveAnagrams(words []string) []string {
	if len(words) <= 1 {
		return words
	}

	result := []string{words[0]}

	for i := 1; i < len(words); i++ {
		// Only add the current word if it's not an anagram of the previous word
		if !areAnagrams(words[i], words[i-1]) {
			result = append(result, words[i])
		}
	}

	return result
}

// areAnagrams checks if two strings are anagrams of each other
func areAnagrams(s1, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}

	// Count characters in both strings
	charCount := make(map[rune]int)

	// Increment count for first string
	for _, ch := range s1 {
		charCount[ch]++
	}

	// Decrement count for second string
	for _, ch := range s2 {
		charCount[ch]--
		if charCount[ch] < 0 {
			return false
		}
	}

	// Check if all counts are zero
	for _, count := range charCount {
		if count != 0 {
			return false
		}
	}

	return true
}
