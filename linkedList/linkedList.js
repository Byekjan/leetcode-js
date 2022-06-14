// function createNode(value) {
//     return {
//         value: value,
//         next: null,
//     };
// }

// let newNode = createNode("Hello");

// console.log(newNode);
function insert(value) {
    this.length++;
    let newNode = createNode(value); // or use new Node(value);
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
}

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print(); // 7 true 20    
