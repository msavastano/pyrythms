function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail';
    console.log(passFail, ': ', description);
    return outcome;
  }
  
  class Node {
    constructor(data) {
      this.data = data
      this.next = null
      this.previous = null
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head
    }
  
    setHead() {
      this.head = head
    }
  
    addToFront(data) {
        // O(1)
      let temp = new Node(data)
      temp.next = this.head
      this.head.previous = temp
      this.head = temp
    }
  
    size() {
        // O(n)
      if (this.head === null) {
        return 0
      }
      let count = 1
      let currentNode = this.head
      while (currentNode.next) {
        count += 1
        currentNode = currentNode.next
      }
      return count
    }
  
    printList() {
        // o(n)
      const list = []
      if (this.head === null) {
        return list
      }
  
      let currentNode = this.head
      while (currentNode) {
          console.log('##########')
        if (currentNode.previous) {
          console.log(currentNode.previous.data)
          console.log('0--')
        }
        console.log(currentNode.data)
  
        if (currentNode.next) {
            console.log('--0')
          console.log(currentNode.next.data)
        }
        console.log('!!!!!!!!!!')
        list.push(currentNode.data)
        currentNode = currentNode.next
      }
      return list
    }
    
    getFirstNode() {
        return this.head
    }
  
    getLastNode() {
        // o(n)
      if (this.head === null) {
        return null
      }
      if (this.head.next === null) {
        return this.head
      }
  
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      return currentNode
    }
  
    clear() {
      this.head = null
    }
  
    addToEnd(data) {
      let temp = new Node(data)
      if (this.head === null) {
        this.addToFront(data)
      } else {
        const lastNode = this.getLastNode()
        lastNode.next = temp
        temp.previous = lastNode
      }
    }
  
    search(data) {
      if (this.head === null) {
        return null
      }
  
      let currentNode = this.head
      let node = null
      while (currentNode) {
        if (currentNode.data === data) {
          node = currentNode
          break
        }
        currentNode = currentNode.next
      }
      return node
    }
  
    insertAfter(data, value) {
      let temp = new Node(value)
      const found = this.search(data)
      if (found) {
        temp.previous = found
        if (found.next) {
          temp.next = found.next
          found.next.previous = temp
        }
        found.next = temp
      }
    }
  
    insertBefore(data, value) {
      let temp = new Node(value)
      const found = this.search(data)
      if (found) {
        temp.next = found
        if (found.previous) {
          found.previous.next = temp
          temp.previous = found.previous
        } else {
          this.head = temp
        }
        found.previous = temp
      }
    }
  }
  
  let node1 = new Node(2)
  let ll = new LinkedList(node1)
  
  // test addToFront
  ll.addToFront(8)
  assert(ll.head.data === 8, 'head data is 8')
  assert(ll.head.previous === null, 'previous is null')
  assert(ll.head.next === node1, 'next is node1')
  
  
  // test size'list is 2 nodes')
  assert(ll.size() === 2, 'size is 2')
  
  // test getLastNode
  assert(ll.getLastNode().data === 2, 'last node data is 2')
  
  // test addToEnd
  ll.addToEnd(20)
  assert(ll.getLastNode().data === 20, 'last node data is 20')
  
  // test insertAfter
  ll.insertAfter(2, 99)
  
  // test insertAfter
  ll.insertBefore(99, 22)
  
  // test printList
  const ls = [8, 2, 22, 99, 20]
  assert(JSON.stringify(ll.printList()) === JSON.stringify(ls), 'list is [8, 2, 22, 99, 20]')
  
  // test search
  assert(ll.search(20).data === 20, 'found 20')
  assert(ll.search(8).data === 8, 'found 8')
  assert(ll.search(88) === null, 'found null')
  const empty = new LinkedList()
  assert(empty.search(882) === null, 'found null')
  
  
  let ll2 = new LinkedList(null)
  
  // test get first
  assert(ll2.getFirstNode() === null, 'first is null')
  assert(ll.getFirstNode().data === 8, 'first is 8')
  
  // test size
  assert(ll2.size() === 0, 'list is zero')
  
  // test clear
  const ll3 = new LinkedList(1234)
  assert(ll3.size(ll3.clear()) == 0, 'cleared')

  const g = { 'a': 1, 'b': 2, 'c': 3}
  for (let y in g) {
    console.log(g[y])
  }
  const j = [1,2,34,6,0]
  for(let h of j) {
    console.log(h)
  }
  
  
  