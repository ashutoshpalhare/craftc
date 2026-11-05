export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export interface Roadmap {
  id: string;
  title: string;
  language: 'C' | 'C++' | 'Both';
  description: string;
  phases: RoadmapPhase[];
}

export const roadmaps: Roadmap[] = [
  {
    id: 'c-roadmap',
    title: 'C Programming Roadmap',
    language: 'C',
    description: 'A structured path from complete beginner to job-ready C programmer.',
    phases: [
      {
        id: 'p1',
        title: 'Phase 1: Foundations',
        description: 'Set up your environment and write your first programs.',
        topics: ['Installation', 'Hello World', 'Variables', 'Data Types', 'Operators', 'Input/Output'],
        duration: '1 week',
      },
      {
        id: 'p2',
        title: 'Phase 2: Control Flow',
        description: 'Make decisions and repeat actions in your programs.',
        topics: ['If-Else', 'Switch', 'For Loop', 'While Loop', 'Do-While', 'Break & Continue'],
        duration: '1 week',
      },
      {
        id: 'p3',
        title: 'Phase 3: Functions & Arrays',
        description: 'Organize code and work with collections of data.',
        topics: ['Functions', 'Recursion', 'Arrays', 'Strings', 'Scope'],
        duration: '2 weeks',
      },
      {
        id: 'p4',
        title: 'Phase 4: Pointers & Memory',
        description: 'The heart of C — master memory and addresses.',
        topics: ['Pointers', 'Pointer Arithmetic', 'Dynamic Memory', 'malloc/free', 'Function Pointers'],
        duration: '2 weeks',
      },
      {
        id: 'p5',
        title: 'Phase 5: Structures & Files',
        description: 'Build custom types and persist data to disk.',
        topics: ['Structures', 'Unions', 'Enums', 'File Handling', 'Preprocessor'],
        duration: '2 weeks',
      },
      {
        id: 'p6',
        title: 'Phase 6: Projects & Interview',
        description: 'Apply everything and prepare for job interviews.',
        topics: ['Mini Projects', 'Advanced Projects', 'Interview Questions', 'Practice Programs'],
        duration: '2-3 weeks',
      },
    ],
  },
  {
    id: 'cpp-roadmap',
    title: 'C++ Programming Roadmap',
    language: 'C++',
    description: 'Master C++ from basics through OOP, STL, and modern features.',
    phases: [
      {
        id: 'p1',
        title: 'Phase 1: C++ Basics',
        description: 'Transition from C and learn C++ I/O and types.',
        topics: ['Installation', 'iostream', 'Variables', 'Data Types', 'Operators', 'Control Flow'],
        duration: '1 week',
      },
      {
        id: 'p2',
        title: 'Phase 2: Functions & Memory',
        description: 'Functions, references, and dynamic memory in C++.',
        topics: ['Functions', 'Overloading', 'References', 'new/delete', 'Default Arguments'],
        duration: '1 week',
      },
      {
        id: 'p3',
        title: 'Phase 3: Object-Oriented Programming',
        description: 'The core of C++ — classes, inheritance, and polymorphism.',
        topics: ['Classes & Objects', 'Constructors', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
        duration: '3 weeks',
      },
      {
        id: 'p4',
        title: 'Phase 4: Templates & Exceptions',
        description: 'Generic programming and error handling.',
        topics: ['Templates', 'Exception Handling', 'Function Templates', 'Class Templates'],
        duration: '2 weeks',
      },
      {
        id: 'p5',
        title: 'Phase 5: STL',
        description: 'Master the Standard Template Library.',
        topics: ['Vectors', 'Maps', 'Sets', 'Algorithms', 'Iterators', 'Lambda Expressions'],
        duration: '2 weeks',
      },
      {
        id: 'p6',
        title: 'Phase 6: Modern C++',
        description: 'Smart pointers, move semantics, and best practices.',
        topics: ['Smart Pointers', 'Move Semantics', 'RAII', 'auto', 'Range-based for'],
        duration: '1 week',
      },
      {
        id: 'p7',
        title: 'Phase 7: Projects & Interview',
        description: 'Build your portfolio and prepare for interviews.',
        topics: ['OOP Projects', 'STL Projects', 'Interview Questions', 'Practice Problems'],
        duration: '2-3 weeks',
      },
    ],
  },

  {
    id: 'dsa-roadmap',
    title: 'Data Structures & Algorithms Roadmap',
    language: 'Both',
    description: 'A language-independent problem-solving path supported by the C++17 examples in the DSA learning section.',
    phases: [
      { id: 'dsa-p1', title: 'Phase 1: Complexity & Problem Solving', description: 'Learn to reason about correctness, constraints, time and space.', topics: ['Input constraints', 'Big-O, Theta and Omega', 'Time vs space', 'Recursion basics', 'Dry runs and edge cases'], duration: '1 week' },
      { id: 'dsa-p2', title: 'Phase 2: Linear Data Structures', description: 'Understand contiguous and linked collections and their trade-offs.', topics: ['Arrays', 'Strings', 'Two pointers', 'Sliding window', 'Linked lists', 'Stacks', 'Queues'], duration: '2-3 weeks' },
      { id: 'dsa-p3', title: 'Phase 3: Searching, Sorting & Hashing', description: 'Choose techniques for ordering data and efficient lookups.', topics: ['Linear and binary search', 'Sorting', 'Stable sorting', 'Hash maps and sets', 'Frequency counting', 'Prefix sums'], duration: '2 weeks' },
      { id: 'dsa-p4', title: 'Phase 4: Recursion, Trees & Heaps', description: 'Model hierarchical data and decompose problems into smaller states.', topics: ['Backtracking', 'Binary trees', 'BST operations', 'Tree traversals', 'Heaps', 'Priority queues'], duration: '2-3 weeks' },
      { id: 'dsa-p5', title: 'Phase 5: Graphs & Greedy Algorithms', description: 'Explore graph traversal, shortest paths and greedy strategies.', topics: ['Graph representations', 'BFS and DFS', 'Topological sorting', 'Dijkstra constraints', 'Disjoint set union', 'Greedy proofs'], duration: '2-3 weeks' },
      { id: 'dsa-p6', title: 'Phase 6: Dynamic Programming & Interview Practice', description: 'Recognize overlapping subproblems and build a repeatable interview workflow.', topics: ['Memoization', 'Tabulation', 'Knapsack patterns', 'Subsequence patterns', 'Timed practice', 'Complexity explanation'], duration: '3-4 weeks' },
    ],
  },

];
