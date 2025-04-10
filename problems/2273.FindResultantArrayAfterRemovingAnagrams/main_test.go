package problems

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRemoveAnagrams(t *testing.T) {
	tests := []struct {
		name     string
		words    []string
		expected []string
	}{
		{
			name:     "Example 1",
			words:    []string{"abba", "baba", "bbaa", "cd", "cd"},
			expected: []string{"abba", "cd"},
		},
		{
			name:     "Example 2",
			words:    []string{"a", "b", "c", "d", "e"},
			expected: []string{"a", "b", "c", "d", "e"},
		},
		{
			name:     "Example 3",
			words:    []string{"a", "b", "a"},
			expected: []string{"a", "b", "a"},
		},
		{
			name:     "Empty input",
			words:    []string{},
			expected: []string{},
		},
		{
			name:     "Single word",
			words:    []string{"hello"},
			expected: []string{"hello"},
		},
		{
			name:     "All same anagrams",
			words:    []string{"abc", "bca", "cab", "acb"},
			expected: []string{"abc"},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := RemoveAnagrams(tt.words)
			assert.Equal(t, tt.expected, result, "The arrays should be equal")
		})
	}
}
