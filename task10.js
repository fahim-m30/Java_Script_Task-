class Node 
{
  constructor(key, value) 
  {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache 
{
  constructor(limit) 
  {
    this.limit = limit;
    this.map = new Map();

    this.head = null;
    this.tail = null;
  }

  moveToFront(node) 
  {
    if (node === this.head) 
      {
        return;
      }
    if (node.prev) 
      {
        node.prev.next = node.next;
      }
      
    if (node.next) 
      {
        node.next.prev = node.prev;
      }
    
    if (node === this.tail) 
    {
        this.tail = node.prev;
    }
    
    node.prev = null;
    node.next = this.head;

    if (this.head) 
      {
          this.head.prev = node;
      }
    
    this.head = node;

    if (!this.tail) 
      {
         this.tail = node;
      }
  }
  put(key, value) 
  {

    if (this.map.has(key)) 
    {
      let node = this.map.get(key);
      node.value = value;
      this.moveToFront(node);
      return;
    }
    let newNode = new Node(key, value);
    newNode.next = this.head;

    if (this.head) 
      {
        this.head.prev = newNode;

      }

    this.head = newNode;

    if (!this.tail) 
    {
      this.tail = newNode;
    }

    this.map.set(key, newNode);
    if (this.map.size > this.limit) 
      {

      this.map.delete(this.tail.key);

      this.tail = this.tail.prev;

      if (this.tail) 
      {
        this.tail.next = null;
      }
    }
  }
  get(key) 
  {

    if (!this.map.has(key)) 
    {
      return null;
    }

    let node = this.map.get(key);

    this.moveToFront(node);

    return node.value;
  }
  size() 
  {
    return this.map.size;
  }

  clear() 
  {
    this.map.clear();
    this.head = null;
    this.tail = null;
  }
  print() 
  {
    let current = this.head;

    while (current) 
    {
      console.log(current.key + " : " + current.value);
      current = current.next;
    }
  }
}
const cache = new LRUCache(3);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
console.log("Get:", cache.get(1)); 
cache.put(4, "D"); 
console.log("\nCurrent Cache:");
cache.print();
console.log("\nSize:", cache.size());
cache.clear();
console.log("\nAfter Clear:");
console.log("Size:", cache.size())