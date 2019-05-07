/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new node();
};

var node = function() {
  this._isWord = false;
  this.edge = new Map();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.edge.has(word[i])) {
      cur.edge.set(word[i], new node());
    }
    cur = cur.edge.get(word[i]);
  }
  cur._isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.edge || !cur.edge.has(word[i])) {
      return false;
    }
    cur = cur.edge.get(word[i]);
  }
  return cur._isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!cur.edge.has(prefix[i])) return false;
    cur = cur.edge.get(prefix[i]);
    if (!cur && i < word.length - 1) return false;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
