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
];
