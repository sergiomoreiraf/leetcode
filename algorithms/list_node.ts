export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


export function toArray(list: ListNode | null): number[] {
  if (list === null) {
    return [];
  }
  const retorno: number[] = [];
  while (list.next != null) {
    retorno.push(list.val);
    list = list.next;
  }
  retorno.push(list.val);
  return retorno;
}

export function toListNode(array: number[]): ListNode | null {
  let retorno: ListNode | null = null;
  let pont: ListNode | null = null;
  array.forEach((element) => {
    if (pont === null) {
      pont = new ListNode(element);
      retorno = pont;
    } else {
      pont.next = new ListNode(element);
      pont = pont.next;
    }
  });
  return retorno;
}