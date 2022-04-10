function assert( outcome, description ) { 
    var passFail = outcome ? 'pass' : 'fail'; 
    console.log(passFail, ': ', description);
    return outcome;
  }
  
  const graph = {
    'a': ['b'],
    'b': ['c', 'd'],
    'd': ['e'],
    'c': [],
    'e': [],
    'f': [],
    'g': ['f']
  }
  
  const edges = [
      ['a', 'b'],
    ['c', 'f'],
    ['b', 'g'],
    ['b', 'c']
  ]
  
  const buildGraph = (edges) => {
      const graph = {}
    
    for (let edge of edges) {
      const [ a, b ] = edge 
      if (!(a in graph)) {
          graph[a] = []
      }
      
      if (!(b in graph)) {
          graph[b] = []
      }
      graph[b].push(a)
      graph[a].push(b)
    }
    
    return graph
  }
  
  class DFS {
    constructor(graph) {
      this.graph = graph
    }
    
    connectedComponentCount() {
        const visited = new Set()
        let count = 0
      
      for (let node in this.graph) {
          
          if(this.explore(node, visited) == true) {
          console.log('node', node)
            count++
        }
      }
      
      return count
    }
    
    explore (node, visited) {
        if (visited.has(node)){
          return false
      }
      visited.add(node)
      
      for (let neighbor of this.graph[node]) {
        this.explore(neighbor, visited)
      }
      return true
    }
  
    find(c, d, visited) {
      if (c === d) {
        return true
      }
      
      if (visited.has(c)){
          return false
      }
      
      visited.add(c)
      for (let item of visited) console.log(item)
      for (let neighbor of this.graph[c]) {
        if (this.find(neighbor, d, visited) === true) {
          return true
        }
      }
      return false
    }
  }
  
  class Stack {
      constructor() {
        this.stack = []
    }
    
    pop () {
       return this.stack.pop()
    }
    
    push (data) {
        this.stack.push(data)
    }

    peek (){
      return this.stack[this.stack.length-1];
    };

    print() {
        return JSON.stringify(this.stack)
    }

    isEmpty() {
      return this.stack.length === 0
    }
  }
  
  // test push
  //const d = new DFS(graph)
  //console.log(d.find('a', 'e', new Set()))
  //console.log(d.connectedComponentCount())
  
  // console.log(buildGraph(edges))
  const stack = new Stack()
  stack.push(1)
  stack.push(3)
  console.log(stack.peek())
  
  assert(stack.print() === JSON.stringify([1, 2]), 'stack is [1, 2]')
  
  // test pop
  assert(stack.pop() == 2, 'pop off 2')
  assert(stack.print() === JSON.stringify([1]), 'stack is [1]')

function baseConverter(decNumber, base){

    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'; //{6}

    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]; //{7}
    }
    return baseString;
}

console.log(baseConverter(32, 16))
  
  
  