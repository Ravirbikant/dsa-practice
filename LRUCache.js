/*Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations

LRUCache(int capacity) Initialize the LRU cache of size capacity.
int get(int key) Return the value corresponding to the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in 
O
(
1
)
O(1) average time complexity.
*/

class LRUCache {
  map;
  recentKey;
  hashSet;
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.hashSet = new Set();
  }

  get(key) {
    if (this.map.get(key)) {
      this.hashSet.delete(key);
      this.hashSet.add(key);
      return this.map.get(key);
    } else {
      return -1;
    }
  }
  put(key, value) {
    if (!this.map.has(key) && this.map.size === this.capacity) {
      let oldest = [...this.hashSet][0];
      this.hashSet.delete(oldest);
      this.map.delete(oldest);
    }

    this.hashSet.delete(key);
    this.hashSet.add(key);
    this.map.set(key, value);
  }
}

const cache = new LRUCache(2);

console.log(cache.get(2));
cache.put(2, 6);
console.log(cache.get(1));
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1));
console.log(cache.get(2));
