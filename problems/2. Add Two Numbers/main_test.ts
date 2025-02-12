import { assertEquals } from '@std/assert/equals';
import { ListNode } from "../../algorithms/list_node.ts";
import { addTwoNumbers } from './main.ts';

const list_1aq = new ListNode(2, new ListNode(4, new ListNode(3)));
const list_1bq = new ListNode(5, new ListNode(6, new ListNode(4)));
const list_1a = new ListNode(7, new ListNode(0, new ListNode(8)));

const list_2aq = new ListNode(0);
const list_2bq = new ListNode(0);
const list_2a = new ListNode(0);

const list_3aq = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const list_3bq = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9)))
);
const list_3a = new ListNode(
  8,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
      )
    )
  )
);

Deno.test('problem 2', () => {
  assertEquals(addTwoNumbers(list_1aq, list_1bq), list_1a);
  assertEquals(addTwoNumbers(list_2aq, list_2bq), list_2a);
  assertEquals(addTwoNumbers(list_3aq, list_3bq), list_3a);
});
