function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail'
    console.log(passFail, ': ', description)
    return outcome
  }

const offsets = {
  "right": [0, 1],
  "left": [0, -1],
  "up": [-1, 0],
  "down": [1, 0]
}

  const mz = [['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'], ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'], ['*', ' ', '*', ' ', '*', '*', '*', '*', '*', '*'], ['*', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*'], ['*', ' ', '*', '*', ' ', '*', ' ', '*', '*', '*'], ['*', ' ', '*', ' ', ' ', '*', ' ', '*', ' ', '*'], ['*', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*'], ['*', ' ', '*', '*', '*', ' ', '*', '*', '*', '*'], ['*', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*'], ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*']]
  //const mz = [['*', '*', '*', '*'],['*', ' ', ' ', '*'], ['*', ' ', ' ', '*'],['*', '*', '*', '*']]
  
  class QNode {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
  
  class PriorityQ {
    constructor() {
      this.pq = []
    }
  
    // functions to be implemented
    enqueue(item, priority) {
      const node = new QNode(item, priority)
      let added = false
  
      // 0(n)
      for (let i = 0; i < this.pq.length; i++) {
        if (this.pq[i].priority > node.priority) {
          this.pq.splice(i, 0, node)
          added = true
          break
        }
      }
      if (!added) {
        this.pq.push(node)
      }
    }
  
    dequeue() {
      if (this.isEmpty())
        return null;
      return this.pq.shift();
    }
  
    isEmpty() {
      return this.size() === 0
    }
  
    printQueue() {
      for (let i = 0; i < this.pq.length; i++) {
        console.log(this.pq[i])
      }
    }
  
    size() {
      return this.pq.length
    }

    

  }

  class Graph {
    constructor() {
      this.nodes = [];
      this.adjacencyList = {};
      this.maze = []
    }

    addMaze(maze) {
      this.maze = maze
    }

    isLegalPos(pos) {
      //console.log(pos)
      const [i, j] = pos
      const num_rows = this.maze.length
      //console.log(this.maze)
      const num_cols = this.maze[0].length
      return 0 <= i < num_rows && 0 <= j < num_cols && this.maze[i][j] != "*"
    }

    heuristic(a, b) {
      const [x1, y1] = a
      const [x2, y2] = b
      return Math.abs(x1 - x2) + Math.abs(y1 - y2)
    }

    addNode(node) {
      this.nodes.push(node); 
      this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight, h) {
      this.adjacencyList[node1].push({node:node2, weight: weight, heuristic: h});
      this.adjacencyList[node2].push({node:node1, weight: weight, heuristic: h});
    }

    getPath(predecessors, start, goal){
      let current = goal
      let path = []
      while (current != start){
          path.push(current)
          current = predecessors[current]
      }
      path.push(start)
      path.reverse()
      return path
    }

    astarShortestPath(startNode, endNode) {
      let pq = new PriorityQ();
      let g_values = {}
      g_values[startNode] = 0
      let backtrace = {};
      backtrace[startNode] = startNode.toString()
      pq.enqueue(startNode, 0);
      while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        if (shortestStep.element.toString() === endNode.toString()) {
          const path = this.getPath(backtrace, startNode, endNode)
          console.log(path)
          return path
        }
        let currentNode = `${shortestStep.element[0]},${shortestStep.element[1]}`;
        for(let direction of ["up", "right", "down", "left"]) {
          let [row_offset, col_offset] = offsets[direction]
          const neighbor = [shortestStep.element[0] + row_offset, shortestStep.element[1] + col_offset]
          const nkey = `${neighbor[0]},${neighbor[1]}`;
          if (this.isLegalPos(neighbor) && !(neighbor in g_values)) {
            let new_cost = g_values[currentNode] + 1
            g_values[nkey] = new_cost
            pq.enqueue(neighbor, new_cost + this.heuristic(neighbor, endNode));
            backtrace[nkey] = currentNode
          }
        }
      } 

      //console.log(visited)

      let path = [endNode];
      let lastStep = endNode;
      //console.log(backtrace)
      while(lastStep !== startNode) {
        path.unshift(backtrace[lastStep])
        lastStep = backtrace[lastStep]
      }
      return `Path is ${path} and time is ${times[endNode]}`
    }
  }

  let map = new Graph();
  // map.addNode("Fullstack");
  // map.addNode("Starbucks");
  // map.addNode("Dig Inn");
  // map.addNode("Dubliner");
  // map.addNode("Cafe Grumpy");
  // map.addNode("Insomnia Cookies");
  
  // map.addNode("SFC");
  // map.addNode("SEA");
  // map.addNode("CHI");
  // map.addNode("IDO");
  // map.addNode("NYC");

  // map.addEdge("SFC", "SEA", 3, 100);
  // map.addEdge("SFC", "IDO", 5, 7);
  // map.addEdge("IDO", "NYC", 6, 787);
  // map.addEdge("SEA", "CHI", 2, 123); 
  // map.addEdge("SEA", "IDO", 1, 90);
  // map.addEdge("IDO", "CHI", 3, 87);
  // map.addEdge("CHI", "NYC", 4, 55);

  // map.addEdge("Cafe Grumpy", "Dig Inn", 9); 

  // map.addEdge("Cafe Grumpy", "Insomnia Cookies", 5);
  
  // map.addEdge("Dubliner", "Starbucks", 3);

  // map.addEdge("Insomnia Cookies", "Starbucks", 6);
  // console.log(map.adjacencyList)
  
  map.addMaze(mz)
  //console.log(map.astarShortestPath([1,1], [6,6]))
  map.astarShortestPath([1,1], [8,8])
  //console.log(map.maze)
  //console.log(map.heuristic([0,0], [1,1]))
  //console.log(map.isLegalPos([2,0]))
  //console.log(map.adjacencyList)
  // console.log(map.nodes)
  
  //let pq = new PriorityQ()
  //pq.enqueue("Starbucks", 6)
  //console.log(pq.pq)
  
  // test enqueue  and size
  // assert(pq.size() === 0, 'size 0')
  // pq.enqueue('car', 3)
  // assert(pq.size() === 1, `size is 1 = ${pq.size()}`)
  // pq.enqueue('dog', 2)
  // assert(pq.size() === 2, `size is 2 = ${pq.size()}`)
  // // pq.printQueue()
  // pq.enqueue('cat', 1)
  // pq.enqueue('hat', 4)
  // pq.enqueue('tag', 6)
  // pq.enqueue('cab', 5)
  // pq.enqueue('mat', 7)
  // assert(pq.size() === 7, `size is 7 = ${pq.size()}`)
  // pq.printQueue()
  
  // console.log(pq.dequeue())
  // assert(pq.size() === 6, `size is 6 = ${pq.size()}`)
  