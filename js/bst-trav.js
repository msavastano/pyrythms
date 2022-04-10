function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail'
    console.log(passFail, ': ', description)
    return outcome
  }
  
  class BSTNode {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  
  
  }
  
  class BST {
    constructor() {
      this.root = null
    }

    height (node) {
      
      if (!node) {
        return -1
      }
      let lHeight = this.height(node.left)
      let rHeight = this.height(node.right)
      console.log(lHeight, 'lHeight')
      if (lHeight > rHeight) {
        return lHeight + 1
      } else {
        return rHeight + 1
      }
      
    }
    
   
    traverse = (node, type) => {
      if (!node) {
        return
      }
      if (type === 'pre') {
        console.log(node.val)
      }
      
      if (node.left) {
        this.traverse(node.left, type)
      } 
      
      if (type === 'in') {
            console.log(node.val)
      }
      
      if (node.right) {
        this.traverse(node.right, type)
      }
      
          if (type === 'post') {
            console.log(node.val)
      }
    }
    
    
    search(node, data) {
      if (!node) {
        return
      }
      //const node = this.root
      //const searching = function(node) {
      if (node.val === data) {
        return true
      }
        
      if (node.val > data && node.left) {
          return this.search(node.left, data)
      } 
      if (node.val < data && node.right) {
        return this.search(node.right, data)
      }
      return false
    }

  
    add(node, data) {
      if (!this.root) {
        this.root = new BSTNode(data)
        return
      }

      if (node.val === data) {
        console.log('same')
        return
      }
      if (node.val > data) {
        if (node.left === null) {
          node.left = new BSTNode(data)
          return
        } else {
          return this.add(node.left, data)
        }
      } else {
        if (node.right === null) {
          node.right = new BSTNode(data)
          return
        } else {
          return this.add(node.right, data)
        }
      }
        
    }
  }
  
  const tree = new BST()
  tree.add(tree.root, 6)
  tree.add(tree.root, 1)
  tree.add(tree.root, 3)
  tree.add(tree.root, 8)
  tree.add(tree.root, 2)
  tree.add(tree.root, -12)
  tree.add(tree.root, 9)
  tree.add(tree.root, 4)
  //console.log(tree.search(tree.root, 8))
  //console.log(tree.search(7))
  //console.log(tree.root.right.right.val)
  tree.traverse(tree.root, 'in')
  //console.log('height', tree.height(tree.root))
