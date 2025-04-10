package problems

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsAnagram(t *testing.T) {
	assert := assert.New(t)

	assert.True(isAnagram("anagram", "nagaram"), "anagram and nagaram should be anagrams")
	assert.False(isAnagram("rat", "car"), "rat and car should not be anagrams")
}
