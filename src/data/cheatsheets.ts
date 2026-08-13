export interface Cheatsheet {
  id: string;
  title: string;
  language: 'C' | 'C++';
  items: { topic: string; syntax: string; description: string }[];
}

export const cheatsheets: Cheatsheet[] = [
  {
    id: 'c-basics',
    title: 'C Basics Cheatsheet',
    language: 'C',
    items: [
      { topic: 'Hello World', syntax: '#include <stdio.h>\nint main() {\n  printf("Hello\\n");\n  return 0;\n}', description: 'Basic program structure' },
      { topic: 'Variables', syntax: 'int x = 10;\nfloat y = 3.14;\nchar c = "A";', description: 'Declare variables' },
      { topic: 'Input', syntax: 'scanf("%d", &x);', description: 'Read integer input' },
      { topic: 'Output', syntax: 'printf("Value: %d", x);', description: 'Print formatted output' },
      { topic: 'If-Else', syntax: 'if (x > 0) { ... }\nelse { ... }', description: 'Conditional branching' },
      { topic: 'For Loop', syntax: 'for (int i = 0; i < n; i++) { ... }', description: 'Loop with counter' },
      { topic: 'While Loop', syntax: 'while (condition) { ... }', description: 'Loop with condition' },
      { topic: 'Function', syntax: 'int add(int a, int b) {\n  return a + b;\n}', description: 'Define a function' },
      { topic: 'Pointer', syntax: 'int *p = &x;\nprintf("%d", *p);', description: 'Pointer declaration and dereference' },
      { topic: 'Array', syntax: 'int arr[5] = {1,2,3,4,5};', description: 'Array declaration' },
      { topic: 'String', syntax: 'char str[] = "Hello";', description: 'String as char array' },
      { topic: 'Struct', syntax: 'struct Point {\n  int x;\n  int y;\n};', description: 'Define a structure' },
      { topic: 'Malloc', syntax: 'int *p = (int*)malloc(n * sizeof(int));', description: 'Dynamic memory allocation' },
      { topic: 'Free', syntax: 'free(p);', description: 'Release allocated memory' },
      { topic: 'File Write', syntax: 'FILE *f = fopen("file.txt", "w");\nfprintf(f, "text");\nfclose(f);', description: 'Write to a file' },
    ],
  },
  {
    id: 'cpp-basics',
    title: 'C++ Basics Cheatsheet',
    language: 'C++',
    items: [
      { topic: 'Hello World', syntax: '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello" << endl;\n  return 0;\n}', description: 'Basic program structure' },
      { topic: 'Input', syntax: 'cin >> x;', description: 'Read input' },
      { topic: 'Output', syntax: 'cout << "Value: " << x;', description: 'Print output' },
      { topic: 'String', syntax: 'string s = "Hello";', description: 'C++ string type' },
      { topic: 'Vector', syntax: 'vector<int> v = {1, 2, 3};\nv.push_back(4);', description: 'Dynamic array' },
      { topic: 'Map', syntax: 'map<string, int> m;\nm["key"] = 1;', description: 'Key-value container' },
      { topic: 'Set', syntax: 'set<int> s = {1, 2, 3};', description: 'Unique sorted elements' },
      { topic: 'Class', syntax: 'class Person {\npublic:\n  string name;\n  Person(string n) : name(n) {}\n};', description: 'Define a class' },
      { topic: 'Inheritance', syntax: 'class Dog : public Animal { ... };', description: 'Inherit from base class' },
      { topic: 'Virtual', syntax: 'virtual void draw() { ... }', description: 'Enable polymorphism' },
      { topic: 'Template', syntax: 'template<typename T>\nT max(T a, T b) { return a > b ? a : b; }', description: 'Generic function' },
      { topic: 'Lambda', syntax: 'auto f = [](int x) { return x * 2; };', description: 'Anonymous function' },
      { topic: 'Smart Pointer', syntax: 'auto p = make_unique<int>(42);', description: 'Automatic memory management' },
      { topic: 'Sort', syntax: 'sort(v.begin(), v.end());', description: 'STL sort algorithm' },
      { topic: 'Try-Catch', syntax: 'try { throw "error"; }\ncatch (const char* e) { ... }', description: 'Exception handling' },
    ],
  },
];
