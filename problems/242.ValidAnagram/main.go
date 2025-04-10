package problems

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	arr := make([]int, 26)
	charA := int('a')

	for i := 0; i < len(s); i++ {
		idxA := int(s[i]) - charA
		idxB := int(t[i]) - charA
		arr[idxA]++
		arr[idxB]--
	}

	for _, count := range arr {
		if count != 0 {
			return false
		}
	}

	return true
}
