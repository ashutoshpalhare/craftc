export interface ProjectItem {
  id: string;
  title: string;
  language: 'C' | 'C++';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  topics: string[];
  estimatedTime: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'calculator',
    title: 'Calculator',
    language: 'C',
    difficulty: 'beginner',
    description: 'A command-line calculator that performs addition, subtraction, multiplication, and division using functions and a switch-case menu.',
    topics: ['Functions', 'Switch', 'Loops', 'Input/Output'],
    estimatedTime: '1-2 hours',
  },
  {
    id: 'number-guessing',
    title: 'Number Guessing Game',
    language: 'C',
    difficulty: 'beginner',
    description: 'Generate a random number and let the user guess it with hints — a great way to practice loops and conditionals.',
    topics: ['rand()', 'Loops', 'Conditionals'],
    estimatedTime: '1 hour',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    language: 'C',
    difficulty: 'intermediate',
    description: 'A two-player console game using a 2D array. Practice game logic, input validation, and win detection.',
    topics: ['2D Arrays', 'Functions', 'Game Logic'],
    estimatedTime: '3-4 hours',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    language: 'C',
    difficulty: 'intermediate',
    description: 'Manage student records with add, search, display, and delete operations using structs and file handling.',
    topics: ['Structs', 'File Handling', 'Arrays'],
    estimatedTime: '5-6 hours',
  },
  {
    id: 'phonebook',
    title: 'Phonebook Application',
    language: 'C',
    difficulty: 'advanced',
    description: 'A full CRUD phonebook with file persistence — add, search, edit, and delete contacts.',
    topics: ['Structs', 'File I/O', 'Dynamic Memory', 'Menus'],
    estimatedTime: '6-8 hours',
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    language: 'C++',
    difficulty: 'advanced',
    description: 'An OOP-based library system with books, members, borrowing, and returning — persisted to files.',
    topics: ['OOP', 'Classes', 'Inheritance', 'File I/O'],
    estimatedTime: '8-10 hours',
  },
  {
    id: 'bank-system',
    title: 'Bank Management System',
    language: 'C++',
    difficulty: 'advanced',
    description: 'Account creation, deposits, withdrawals, and transfers using classes, encapsulation, and file storage.',
    topics: ['OOP', 'Encapsulation', 'STL', 'File I/O'],
    estimatedTime: '8-10 hours',
  },
  {
    id: 'quiz-game',
    title: 'Quiz Game',
    language: 'C++',
    difficulty: 'intermediate',
    description: 'A multiple-choice quiz with scoring, using classes to represent questions and a vector to store them.',
    topics: ['OOP', 'Vectors', 'Strings'],
    estimatedTime: '3-4 hours',
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    language: 'C++',
    difficulty: 'advanced',
    description: 'The classic Snake game using a console or graphics library like SFML. Practice real-time game loops and collision.',
    topics: ['Game Loop', 'Arrays', 'Loops', 'Graphics'],
    estimatedTime: '10+ hours',
  },
  {
    id: 'custom-string-class',
    title: 'Custom String Class',
    language: 'C++',
    difficulty: 'advanced',
    description: 'Implement your own string class with operator overloading — a classic interview project that teaches deep copying and operators.',
    topics: ['Operator Overloading', 'Memory Management', 'OOP'],
    estimatedTime: '5-6 hours',
  },
  {
    id: 'http-server',
    title: 'Basic HTTP Server',
    language: 'C',
    difficulty: 'advanced',
    description: 'A socket-based HTTP server that serves static files. Great for understanding networking and system calls.',
    topics: ['Sockets', 'Networking', 'File I/O', 'System Calls'],
    estimatedTime: '10+ hours',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    language: 'C++',
    difficulty: 'intermediate',
    description: 'A to-do list application using STL containers with file persistence — add, complete, and delete tasks.',
    topics: ['STL', 'Vectors', 'File I/O', 'Classes'],
    estimatedTime: '4-5 hours',
  },
];
