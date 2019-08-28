/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m === n) return head;
  let r = head;
  let array = [],
    index = 1,
    startNode = null,
    tempList = null;
  while (head) {
    if (index + 1 == m) {
      startNode = head;
    }
    if (index >= m && index <= n) {
      array.unshift(head.val);
    }
    if (index == n) {
      console.log(array);
      tempList = new ListNode(array[0]);
      t = tempList;
      for (let i = 1; i < array.length; i++) {
        t.next = new ListNode(array[i]);
        t = t.next;
      }
      t.next = head.next;
      if (startNode) {
        startNode.next = tempList;
        return r;
      }
      return tempList;
    }
    index++;
    head = head.next;
  }
};
