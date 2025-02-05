import { assertEquals } from '@std/assert/equals';
import { ListNode, middleNode } from './main.ts';

const list_1q = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const list_1a = new ListNode(3, new ListNode(4, new ListNode(5)));
const list_2q = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
const list_2a = new ListNode(4, new ListNode(5, new ListNode(6)));


Deno.test('problem 876', () => {
  assertEquals(middleNode(list_1q), list_1a);
  assertEquals(middleNode(list_2q), list_2a);
});