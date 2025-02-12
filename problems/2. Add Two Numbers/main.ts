/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode, toArray, toListNode } from "../../algorithms/list_node.ts";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const arg1 = toArray(l1);
  const arg2 = toArray(l2);
  const num1 = BigInt(arg1.reverse().join(""));
  const num2 = BigInt(arg2.reverse().join(""));
  const numRetorno = num1 + num2;
  const retorno = numRetorno
    .toString()
    .split("")
    .map((x) => +x);
  return toListNode(retorno.reverse());
}
