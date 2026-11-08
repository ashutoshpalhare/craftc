export type PracticeCategory = 'C' | 'C++' | 'DSA';
export type PracticeDifficulty = 'easy' | 'medium' | 'hard';

export interface PracticeQuestion {
  id: string;
  category: PracticeCategory;
  topic: string;
  difficulty: PracticeDifficulty;
  prompt: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

// Questions are written for the C language and C++17 baseline used by CraftC.
export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'c-array-size', category: 'C', topic: 'Arrays', difficulty: 'easy',
    prompt: 'In the same scope where this is declared, what does sizeof return for int values[10]?',
    options: [{ id: 'a', text: 'The number of elements (10)' }, { id: 'b', text: 'The total size in bytes of all 10 int elements' }, { id: 'c', text: 'The address of the first element' }, { id: 'd', text: 'Always 40 bytes on every C implementation' }],
    correctOptionId: 'b',
    explanation: 'For an actual array expression, sizeof returns the whole array size in bytes: 10 * sizeof(int). The byte count is implementation-dependent because sizeof(int) is not fixed by the C standard.'
  },
  {
    id: 'c-static-local', category: 'C', topic: 'Storage duration', difficulty: 'easy',
    prompt: 'What is the lifetime of a block-scope variable declared with static?',
    options: [{ id: 'a', text: 'Only while the block is executing' }, { id: 'b', text: 'Until the next function call' }, { id: 'c', text: 'The entire execution of the program' }, { id: 'd', text: 'Until the containing function returns' }],
    correctOptionId: 'c',
    explanation: 'A block-scope static object has static storage duration. It exists for the entire program execution and retains its value between function calls.'
  },
  {
    id: 'c-pointer-arithmetic', category: 'C', topic: 'Pointers', difficulty: 'medium',
    prompt: 'If p points to element 0 of an int array, what does p + 1 point to?',
    options: [{ id: 'a', text: 'The next byte after p' }, { id: 'b', text: 'The next int element in the same array' }, { id: 'c', text: 'The previous int element' }, { id: 'd', text: 'An address exactly 1 bit later' }],
    correctOptionId: 'b',
    explanation: 'Pointer arithmetic is scaled by the pointed-to type. p + 1 advances by sizeof(int) bytes and points to the next array element, when that element exists.'
  },
  {
    id: 'c-malloc-free', category: 'C', topic: 'Dynamic memory', difficulty: 'medium',
    prompt: 'Which operation correctly releases memory returned by a successful malloc call?',
    options: [{ id: 'a', text: 'delete pointer;' }, { id: 'b', text: 'remove(pointer);' }, { id: 'c', text: 'free(pointer);' }, { id: 'd', text: 'sizeof(pointer);' }],
    correctOptionId: 'c',
    explanation: 'Memory allocated by malloc, calloc or realloc must be released with free. The C++ delete operator is not the matching deallocator for malloc.'
  },
  {
    id: 'c-string-literal', category: 'C', topic: 'Strings', difficulty: 'hard',
    prompt: 'What is the result of attempting to modify a string literal through char *p = "hello"; p[0] = \'H\';?',
    options: [{ id: 'a', text: 'The first character is guaranteed to change' }, { id: 'b', text: 'The program has undefined behavior' }, { id: 'c', text: 'The compiler must convert p to const char *' }, { id: 'd', text: 'The statement is always a compile-time error in C' }],
    correctOptionId: 'b',
    explanation: 'In C, a string literal has an array type of char, but attempting to modify it has undefined behavior. Use a writable character array when mutation is required.'
  },
  {
    id: 'c-function-pointer', category: 'C', topic: 'Functions and pointers', difficulty: 'hard',
    prompt: 'Which declaration declares fp as a pointer to a function taking an int and returning int?',
    options: [{ id: 'a', text: 'int *fp(int);' }, { id: 'b', text: 'int (*fp)(int);' }, { id: 'c', text: 'int (*fp(int));' }, { id: 'd', text: 'int fp*(int);' }],
    correctOptionId: 'b',
    explanation: 'Parentheses bind the pointer declarator to fp before the function parameter list: fp is a pointer to a function returning int. Without those parentheses, int *fp(int) declares a function returning int pointer.'
  },
  {
    id: 'cpp-raii', category: 'C++', topic: 'RAII', difficulty: 'easy',
    prompt: 'What is the central idea behind RAII in C++?',
    options: [{ id: 'a', text: 'Acquire a resource during object construction and release it during destruction' }, { id: 'b', text: 'Allocate every object with new' }, { id: 'c', text: 'Manually call every destructor' }, { id: 'd', text: 'Avoid constructors and destructors' }],
    correctOptionId: 'a',
    explanation: 'RAII ties resource lifetime to object lifetime. Scope exit and stack unwinding invoke destructors, helping release resources reliably.'
  },
  {
    id: 'cpp-unique-ptr', category: 'C++', topic: 'Smart pointers', difficulty: 'easy',
    prompt: 'Which standard smart pointer expresses exclusive ownership of a dynamically allocated object?',
    options: [{ id: 'a', text: 'std::weak_ptr' }, { id: 'b', text: 'std::shared_ptr' }, { id: 'c', text: 'std::unique_ptr' }, { id: 'd', text: 'std::auto_ptr' }],
    correctOptionId: 'c',
    explanation: 'std::unique_ptr has exclusive ownership and is movable but not copyable. std::auto_ptr is deprecated and removed in modern C++.'
  },
  {
    id: 'cpp-virtual-destructor', category: 'C++', topic: 'Polymorphism', difficulty: 'medium',
    prompt: 'When should a polymorphic base class generally have a virtual destructor?',
    options: [{ id: 'a', text: 'Whenever it has a data member' }, { id: 'b', text: 'When objects may be deleted through a base-class pointer' }, { id: 'c', text: 'Only when it has no virtual functions' }, { id: 'd', text: 'Never; destructors cannot be virtual' }],
    correctOptionId: 'b',
    explanation: 'Deleting a derived object through a base pointer requires a virtual base destructor for correct destruction of the derived part. This is a standard rule for polymorphic interfaces.'
  },
  {
    id: 'cpp-vector-growth', category: 'C++', topic: 'STL containers', difficulty: 'medium',
    prompt: 'What can happen to iterators into a std::vector when an insertion causes reallocation?',
    options: [{ id: 'a', text: 'They are all guaranteed to remain valid' }, { id: 'b', text: 'Only the end iterator changes' }, { id: 'c', text: 'All iterators, pointers and references to its elements are invalidated' }, { id: 'd', text: 'The vector automatically converts them to indices' }],
    correctOptionId: 'c',
    explanation: 'A reallocation moves the elements to new storage, invalidating pointers, references and iterators to the old elements, including the past-the-end iterator.'
  },
  {
    id: 'cpp-map-lookup', category: 'C++', topic: 'STL containers', difficulty: 'hard',
    prompt: 'What is the typical time complexity of std::map::find in terms of the number of elements n?',
    options: [{ id: 'a', text: 'O(1) worst case' }, { id: 'b', text: 'O(log n)' }, { id: 'c', text: 'O(n log n)' }, { id: 'd', text: 'O(n²)' }],
    correctOptionId: 'b',
    explanation: 'std::map is an ordered associative container, commonly implemented as a balanced search tree. Lookup is logarithmic in the number of elements.'
  },
  {
    id: 'cpp-range-for', category: 'C++', topic: 'Language features', difficulty: 'hard',
    prompt: 'In C++17, which statement about auto in a range-based for loop is correct?',
    options: [{ id: 'a', text: 'auto x copies each element; auto& x can refer to each element' }, { id: 'b', text: 'auto always creates a pointer' }, { id: 'c', text: 'auto& always makes elements const' }, { id: 'd', text: 'auto is not allowed in range-based for loops' }],
    correctOptionId: 'a',
    explanation: 'auto deduces a value type, so auto x normally copies each element. auto& binds to the original element; use const auto& for read-only access without copying.'
  },
  {
    id: 'dsa-binary-search', category: 'DSA', topic: 'Searching', difficulty: 'easy',
    prompt: 'What prerequisite does the standard binary search algorithm require?',
    options: [{ id: 'a', text: 'The input must be stored in a linked list' }, { id: 'b', text: 'The search range must be sorted according to the search ordering' }, { id: 'c', text: 'All values must be unique' }, { id: 'd', text: 'The number of elements must be a power of two' }],
    correctOptionId: 'b',
    explanation: 'Binary search discards half of the remaining range based on ordering. Without a range sorted according to the comparison, that decision is not valid.'
  },
  {
    id: 'dsa-stack', category: 'DSA', topic: 'Linear data structures', difficulty: 'easy',
    prompt: 'Which access rule describes a stack?',
    options: [{ id: 'a', text: 'FIFO — first in, first out' }, { id: 'b', text: 'LIFO — last in, first out' }, { id: 'c', text: 'Random access only' }, { id: 'd', text: 'Priority order only' }],
    correctOptionId: 'b',
    explanation: 'A stack removes the most recently added item first. Push and pop operate at the same end, called the top.'
  },
  {
    id: 'dsa-bfs-queue', category: 'DSA', topic: 'Graphs', difficulty: 'medium',
    prompt: 'Which data structure is conventionally used by breadth-first search?',
    options: [{ id: 'a', text: 'Stack' }, { id: 'b', text: 'Min-heap' }, { id: 'c', text: 'Queue' }, { id: 'd', text: 'Hash set only' }],
    correctOptionId: 'c',
    explanation: 'BFS uses a FIFO queue to explore vertices in layers of increasing distance from the start vertex.'
  },
  {
    id: 'dsa-merge-sort', category: 'DSA', topic: 'Sorting', difficulty: 'medium',
    prompt: 'What is the time complexity of merge sort in the average and worst cases?',
    options: [{ id: 'a', text: 'O(n²)' }, { id: 'b', text: 'O(log n)' }, { id: 'c', text: 'O(n log n)' }, { id: 'd', text: 'O(1)' }],
    correctOptionId: 'c',
    explanation: 'Merge sort divides the input into logarithmically many levels and performs linear total merging work per level, giving O(n log n).'
  },
  {
    id: 'dsa-hash-table', category: 'DSA', topic: 'Hashing', difficulty: 'hard',
    prompt: 'What is the expected lookup time of a well-designed hash table with a controlled load factor?',
    options: [{ id: 'a', text: 'O(1) expected, with O(n) worst case' }, { id: 'b', text: 'O(log n) expected and worst case' }, { id: 'c', text: 'O(n log n) expected' }, { id: 'd', text: 'O(1) in every possible case' }],
    correctOptionId: 'a',
    explanation: 'A good hash function and controlled load factor give constant expected lookup time. Collisions can still produce linear worst-case behavior.'
  },
  {
    id: 'dsa-linked-list', category: 'DSA', topic: 'Linked lists', difficulty: 'hard',
    prompt: 'In a singly linked list, what is the time complexity of inserting a node immediately after a node whose pointer you already have?',
    options: [{ id: 'a', text: 'O(n), because every insertion scans the list' }, { id: 'b', text: 'O(log n)' }, { id: 'c', text: 'O(1)' }, { id: 'd', text: 'O(n log n)' }],
    correctOptionId: 'c',
    explanation: 'With a pointer to the target node, insertion only updates a constant number of links. Finding that node may take O(n), but the insertion itself is O(1).'
  }
];
