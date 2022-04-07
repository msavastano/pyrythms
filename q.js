function assert(outcome, description) {
  var passFail = outcome ? 'pass' : 'fail';
  console.log(passFail, ': ', description);
  return outcome;
}
  
  const graph = {
    'a': ['b', 'g', 'z'],
    'b': ['c'],
    'd': ['e'],
    'c': ['e', 'h'],
    'e': [],
    'f': [],
    'g': ['f', 'e'],
    'h': ['z'],
    'z': ['t'],
    't': []
  }
  
  class BFS {
    constructor(graph) {
      this.graph = graph
    }
  
    find(s, d, visited) {
        console.log(s)
      const q = new Queue()
      q.enqueue(s)
      while (q.queue.length > 0) {
        const curr = q.dequeue()
        if (visited.has(curr)) {
            return false
        }
        
        visited.add(curr)
        
        if (curr === d) {
          return true
        }
        for (let neighbor of this.graph[curr]) {
          q.enqueue(neighbor)
        }
      }
      return false
    }

    sp(s, d, visited) {
      
      const q = new Queue()
      q.enqueue([s, 0])
      console.log(q)
      while (q.queue.length > 0) {
        // console.log(q)
        const [curr, distance] = q.dequeue()
        // if (visited.has(curr)) {
        //     return -1
        // }
        
        visited.add(curr)
        
        if (curr === d) {
          return distance
        }
        for (let neighbor of this.graph[curr]) {
          if (!visited.has(neighbor)){
            console.log(neighbor)
            q.enqueue([neighbor, distance + 1])
            visited.add(neighbor)
          }
        }
      }

      return -1
    }
  }
  
  
  class Queue {
    constructor() {
      this.queue = []
      this.last = 0
    }
  
    enqueue(data) {
      this.queue[this.last] = data
      this.last++
    }
  
    dequeue() {
      this.last--
      return this.queue.shift()
    }
  }
  
  const b = new BFS(graph)
  console.log(b.sp('a', 'b', new Set()))
  
  // test enquue
  //const q = new Queue()
  //q.enqueue(3)
  //q.enqueue(5)
  //console.log(q)
  //console.log(q.dequeue())
//   let y = [1]
//   y.push(7)
//   console.log(y)
//   console.log(y.shift())
  