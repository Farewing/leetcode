/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//   let map = new Map();
//   let node = head;
//   while (node) {
//     if (map.has(node)) return map.get(node)
//     map.set(node, node)
//     node = node.next;
//   }
//   return null
// };

var detectCycle = function (head) {
  let quick = head,
    slow = head;
  let hasC = false;
  if (!head) return null
  // if(!head.next || !head.next.next) return null;

  while (quick.next && quick.next.next) {
    quick = quick.next.next;
    slow = slow.next;
    if (quick == slow) {
      hasC = true;
      break;
    }
  }

  if (hasC) {
    let node = head;
    while (slow != node) {
      slow = slow.next;
      node = node.next;
    }
    return node;
  } else
    return null;

};