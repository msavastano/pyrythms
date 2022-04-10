function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail';
    console.log(passFail, ': ', description);
    return outcome;
}

const graph = {
    'a': ['b'],
    'b': ['c', 'd', 'a', 'p'],
    'd': ['e', 'b'],
    'c': ['b'],
    'e': ['d'],
    'f': ['g'],
    'g': ['f'],
    'x': []
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
        const [a, b] = edge
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

    largestComponent () {
        const visited = new Set()
        let longest = 0
        for (let node in this.graph) {
            const size = this.exploreSize (node, visited);
            if (size > longest) longest = size
        }
        return longest
    }

    exploreSize(node, visited) {
        if (visited.has(node)) return 0;
        visited.add(node)
        let size = 1
        for (let neighbor in this.graph[node]) {
            size+=this.exploreSize(neighbor, visited)
        }
        return size
    }

    connectedComponentCount() {
        const visited = new Set()
        let count = 0

        for (let node in this.graph) {
            if (!(visited.has(node))) console.log('node', count+1)
            if (this.explore(node, visited) == true) {
                
                count++
            }
        }

        return count
    }

    explore(node, visited) {
        if (visited.has(node)) {
            return false
        }
        visited.add(node)
        console.log('--node', node)
        for (let neighbor of this.graph[node]) {
            this.explore(neighbor, visited)
        }
        return true
    }

    find(c, d, visited) {
        if (c === d) {
            return true
        }

        if (visited.has(c)) {
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

    pop() {
        return this.stack.pop()
    }

    push(data) {
        this.stack.push(data)
    }

    print() {
        return JSON.stringify(this.stack)
    }
}

// test push
const d = new DFS(graph)
//console.log(d.find('a', 'e', new Set()))
console.log(d.largestComponent())