function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail'
    console.log(passFail, ': ', description)
    return outcome
  }
  
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
    }

    addNode(node) {
      this.nodes.push(node); 
      this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight) {
      this.adjacencyList[node1].push({node:node2, weight: weight});
      this.adjacencyList[node2].push({node:node1, weight: weight});
    }

    dijkstraShortestPath(startNode, endNode) {
      let times = {};
      let backtrace = {};
      let pq = new PriorityQ();
      let visited = new Set()
      times[startNode] = 0;
  
      this.nodes.forEach(node => {
        if (node !== startNode) {
          times[node] = Infinity
        }
      });

      pq.enqueue(startNode, 0);
      //console.log(pq)
      while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        visited.add(shortestStep.element)
        //console.log('shortest step', shortestStep)
        let currentNode = shortestStep.element;
        //console.log('ALIST', currentNode)
        this.adjacencyList[currentNode].forEach(neighbor => {
          let time = times[currentNode] + neighbor.weight;
          if (time < times[neighbor.node]) {
            times[neighbor.node] = time;
            backtrace[neighbor.node] = currentNode;
            if (!(visited.has(neighbor.node))) pq.enqueue(neighbor.node, time);
          }
        });
      } 

      console.log(visited)

      let path = [endNode];
      let lastStep = endNode;
      console.log(backtrace)
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
  
  map.addNode("SFC");
  map.addNode("SEA");
  map.addNode("CHI");
  map.addNode("IDO");
  map.addNode("NYC");

  map.addEdge("SFC", "SEA", 3);
  map.addEdge("SFC", "SEA", 5);
  map.addEdge("IDO", "NYC", 6);
  map.addEdge("SEA", "CHI", 2); 
  map.addEdge("SEA", "IDO", 1);
  map.addEdge("IDO", "CHI", 3);
  map.addEdge("CHI", "NYC", 4);

  // map.addEdge("Cafe Grumpy", "Dig Inn", 9); 

  // map.addEdge("Cafe Grumpy", "Insomnia Cookies", 5);
  
  // map.addEdge("Dubliner", "Starbucks", 3);

  // map.addEdge("Insomnia Cookies", "Starbucks", 6);
  // console.log(map.adjacencyList)
  console.log(map.dijkstraShortestPath('SFC', 'IDO'))
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
  