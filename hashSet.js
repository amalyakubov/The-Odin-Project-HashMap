export class HashSet {
  constructor(loadFactor) {
    this.map = new Array(16);
    this.loadFactor = loadFactor;
    this.size = 0;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.map.length;
    }
    return hashCode;
  }
  set(key) {
    const INDEX = this.hash(key);
    if (!this.map[INDEX]) {
      this.map[INDEX] = new setNode(key);
      this.size++;
    } else {
      let currentNode = this.map[INDEX];
      while (currentNode) {
        if (!currentNode.next) {
          currentNode.next = new setNode(key);
          this.size++;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    if (this.size > this.map.length * this.loadFactor) {
      this.resize();
    }
  }
  resize() {
    const oldMap = this.map;
    this.map = new Array(oldMap.length * 2);
    this.size = 0;
    for (const node of oldMap) {
      let currentNode = node;
      while (currentNode) {
        this.set(currentNode.key);
        currentNode = currentNode.next;
      }
    }
  }
  hasKey(key) {
    const index = this.hash(key);
    if (this.map[index]) {
      let currentNode = this.map[index];
      while (currentNode !== null && currentNode !== undefined) {
        if (currentNode.key === key) {
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  removeKey(key) {
    const index = this.hash(key);
    if (this.map[index]) {
      if (this.map[index].key === key) {
        this.map[index] = null;
        this.size--;
        return true;
      } else {
        let currentNode = this.map[index];
        while (currentNode.next !== null && currentNode.next !== undefined) {
          if (currentNode.next.key === key) {
            currentNode.next = null;
            this.size--;
            return true;
          }
        }
      }
    } else {
      return false;
    }
  }
  length() {
    debugger;
    return this.size;
  }
  clear() {
    this.map = new Array(16);
    this.size = 0;
  }
  keys() {
    let arrayOfKeys = [];
    this.map.filter((node) => {
      if (node !== null && node !== undefined) {
        arrayOfKeys.push(node.key);
        let currentNode = node;
        while (currentNode.next !== null && currentNode.next !== undefined) {
          arrayOfKeys.push(currentNode.next.key);
          currentNode = currentNode.next;
        }
      }
    });
    return arrayOfKeys;
  }

  entries() {
    let arrayOfEntries = [];
    if (this.map.length > 0) {
      for (let i = 0; i < this.map.length - 1; i++) {
        if (this.map[i] !== null && this.map[i] !== undefined) {
          let nodeEntry = [];
          nodeEntry.push(this.map[i].key);
          arrayOfEntries.push(nodeEntry);
          if (this.map[i].next !== null && this.map[i].next !== undefined) {
            nodeEntry.push(this.map[i].next.key);
          }
        }
      }
    }
    return arrayOfEntries;
  }
}

class setNode {
  constructor(key, value) {
    return {
      key: key,
      next: null,
    };
  }
}
