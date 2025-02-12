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

import { ListNode } from '../../algorithms/list_node.ts';

export function middleNode(head: ListNode | null): ListNode | null {
  let pont1 = head;
  let retorno = head;
  let count = 0;
  while (pont1 != null) {
    pont1 = pont1.next;
    count++;
    if (count % 2 === 0) {
      retorno = retorno!.next;
    }
  }
  return retorno;
}
