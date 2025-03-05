package problems

import "testing"

func TestContainsDuplicate(t *testing.T) {
	if x := containsDuplicate([]int{1, 2, 3, 1}); x != true {
		t.Error("Error")
	}
	if x := containsDuplicate([]int{1, 2, 3, 4}); x != false {
		t.Error("Error")
	}
	if x := containsDuplicate([]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}); x != true {
		t.Error("Error")
	}
}
