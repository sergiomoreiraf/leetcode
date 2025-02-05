import { assertEquals } from '@std/assert';
import { runningSum } from './main.ts';

Deno.test('problem 1480', () => {
	assertEquals(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
	assertEquals(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
	assertEquals(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
});
