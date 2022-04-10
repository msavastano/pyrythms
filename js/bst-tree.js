function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail'
    console.log(passFail, ': ', description)
    return outcome
  }
  
  class BSTNode {
      constructor(val){
         this.val = val
       this.left = null
       this.right = null
    }
  }
  
  class BST {
      constructor() {
        this.root = null
    }
    
    add (node) {
        if (!this.root) {
          this.root = node
        return
      }
      console.log('nodeval', node.val)
      let currentNode = this.root
      console.log('cnval', currentNode.val)
      console.log('cnleft', currentNode.left)
      console.log('cnright', currentNode.right)
      if (node.val < currentNode.val && currentNode.left === null) {
          currentNode.left = node
      } else if (node.val > currentNode.val && currentNode.right === null) {
          currentNode.right = node
      } else {
          this.add(node)
      }
    }
  }
  
  const b = new BSTNode(3)
  const a = new BSTNode(1)
  const c = new BSTNode(2)
  
  const tree = new BST()
  tree.add(a)
  tree.add(b)