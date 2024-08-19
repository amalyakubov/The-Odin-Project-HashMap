import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";
const test = new HashMap(0.75); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

const testHashSet = () => {
  const hashSet = new HashSet(0.75);

  // Test adding elements
  hashSet.set("apple");
  hashSet.set("banana");
  hashSet.set("cherry");

  console.log("Entries after adding elements:", hashSet.entries());

  // Test hasKey
  console.log("Has key 'banana':", hashSet.hasKey("banana")); // true
  console.log("Has key 'grape':", hashSet.hasKey("grape")); // false

  // Test removeKey
  console.log("Removing 'banana':", hashSet.removeKey("banana")); // true
  console.log("Has key 'banana' after removal:", hashSet.hasKey("banana")); // false

  // Test length
  console.log("Current size:", hashSet.length()); // 2

  // Test clear
  hashSet.clear();
  console.log("Size after clear:", hashSet.length()); // 0
};

testHashSet();
