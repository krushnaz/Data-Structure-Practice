//implement Undirected graph using Adjacency List
class UndirectedGraph {
    constructor() {
      this.graph = new Map(); // Use a Map to store the adjacency list.
    }
  
    addVertex(vertex) {
      if (!this.graph.has(vertex)) {
        this.graph.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.graph.has(vertex1) || !this.graph.has(vertex2)) {
        throw new Error('Both vertices must exist in the graph to add an edge.');
      }
  
      // For an undirected graph, you should add each vertex to the adjacency list of the other.
      this.graph.get(vertex1).push(vertex2);
      this.graph.get(vertex2).push(vertex1);
    }
  
    getVertices() {
      return Array.from(this.graph.keys());
    }
  
    getEdges(vertex) {
      if (!this.graph.has(vertex)) {
        return [];
      }
      return this.graph.get(vertex);
    }
  }
  
  // Example usage:
  const graph = new UndirectedGraph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  
  console.log(graph.getVertices()); // ['A', 'B', 'C']
  console.log(graph.getEdges('C')); // ['A', 'C']
  