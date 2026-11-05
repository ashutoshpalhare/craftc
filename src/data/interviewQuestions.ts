export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'C' | 'C++' | 'DSA' | 'General';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const interviewQuestions: InterviewQuestion[] = [
  // C
  { id: 'c1', category: 'C', difficulty: 'easy', question: 'What is a pointer in C?', answer: 'A pointer is a variable that stores the memory address of another variable. It enables indirect access to data, dynamic memory, and pass-by-reference.' },
  { id: 'c2', category: 'C', difficulty: 'easy', question: 'What is the difference between malloc and calloc?', answer: 'malloc allocates uninitialized memory; calloc allocates and zero-initializes memory.' },
  { id: 'c3', category: 'C', difficulty: 'medium', question: 'What is a memory leak and how do you prevent it?', answer: 'A memory leak occurs when allocated memory is never freed. Prevent it by calling free() for every malloc/calloc, or by using tools like Valgrind.' },
  { id: 'c4', category: 'C', difficulty: 'medium', question: 'Explain the difference between struct and union.', answer: 'A struct allocates separate memory for each member; a union shares one memory location among all members, so only one member is valid at a time.' },
  { id: 'c5', category: 'C', difficulty: 'easy', question: 'What does the static keyword do?', answer: 'It limits a variable or function to its translation unit (file scope) and keeps local variables alive between function calls.' },
  { id: 'c6', category: 'C', difficulty: 'hard', question: 'What is a function pointer and where is it used?', answer: 'A pointer that stores a function address. Used for callbacks, dispatch tables, and implementing polymorphism in C.' },
  { id: 'c7', category: 'C', difficulty: 'medium', question: 'Difference between ++i and i++?', answer: '++i is pre-increment (increment then use); i++ is post-increment (use then increment). ++i is slightly more efficient for objects.' },
  { id: 'c8', category: 'C', difficulty: 'hard', question: 'What is a dangling pointer?', answer: 'A pointer that still references memory that has been freed. Accessing it is undefined behavior.' },

  // C++
  { id: 'cpp1', category: 'C++', difficulty: 'easy', question: 'What are the four pillars of OOP?', answer: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
  { id: 'cpp2', category: 'C++', difficulty: 'medium', question: 'What is a virtual function?', answer: 'A member function declared with virtual that enables runtime polymorphism — the derived class version is called through a base pointer.' },
  { id: 'cpp3', category: 'C++', difficulty: 'medium', question: 'What is a pure virtual function?', answer: 'A virtual function assigned to 0, making the class abstract. Derived classes must implement it to be instantiated.' },
  { id: 'cpp4', category: 'C++', difficulty: 'easy', question: 'Difference between struct and class in C++?', answer: 'Default access: struct members are public, class members are private. Otherwise identical.' },
  { id: 'cpp5', category: 'C++', difficulty: 'hard', question: 'What is RAII?', answer: 'Resource Acquisition Is Initialization — resources are tied to object lifetime, acquired in constructors and released in destructors.' },
  { id: 'cpp6', category: 'C++', difficulty: 'medium', question: 'What is a smart pointer?', answer: 'A RAII wrapper that manages memory automatically — unique_ptr (sole ownership), shared_ptr (reference counted), weak_ptr (non-owning).' },
  { id: 'cpp7', category: 'C++', difficulty: 'hard', question: 'What is move semantics?', answer: 'Transferring ownership of resources instead of copying, using rvalue references and std::move. Improves performance for large objects.' },
  { id: 'cpp8', category: 'C++', difficulty: 'medium', question: 'What is a lambda expression?', answer: 'An anonymous function defined inline, commonly used with STL algorithms. It can capture variables from the surrounding scope.' },
  { id: 'cpp9', category: 'C++', difficulty: 'hard', question: 'Difference between new/delete and malloc/free?', answer: 'new/delete call constructors/destructors and are type-safe; malloc/free only allocate raw memory without construction.' },
  { id: 'cpp10', category: 'C++', difficulty: 'medium', question: 'What is the STL?', answer: 'The Standard Template Library — containers (vector, map, set), algorithms (sort, find), and iterators that provide reusable, generic data structures.' },

  // DSA
  { id: 'dsa1', category: 'DSA', difficulty: 'easy', question: 'What is the time complexity of binary search?', answer: 'O(log n) — it halves the search space each step.' },
  { id: 'dsa2', category: 'DSA', difficulty: 'easy', question: 'Difference between array and linked list?', answer: 'Arrays have O(1) random access but fixed size; linked lists have O(n) access but dynamic size and O(1) insert/delete at known positions.' },
  { id: 'dsa3', category: 'DSA', difficulty: 'medium', question: 'What is a stack? Give a real-world example.', answer: 'A LIFO data structure. Example: browser back button, undo/redo, call stack.' },
  { id: 'dsa4', category: 'DSA', difficulty: 'medium', question: 'What is a queue?', answer: 'A FIFO data structure. Elements are added at the rear and removed from the front — like a line at a ticket counter.' },
  { id: 'dsa5', category: 'DSA', difficulty: 'medium', question: 'What is recursion?', answer: 'A function calling itself with a smaller input, stopped by a base case. Used in factorial, tree traversal, divide-and-conquer.' },
  { id: 'dsa6', category: 'DSA', difficulty: 'hard', question: 'What is the time complexity of quicksort?', answer: 'Average O(n log n), worst O(n^2) when the pivot is always the smallest or largest. Space is O(log n) for the call stack.' },

  // General
  { id: 'g1', category: 'General', difficulty: 'easy', question: 'What is the difference between compiled and interpreted languages?', answer: 'Compiled languages translate source to machine code before execution (C, C++); interpreted languages execute line by line at runtime (Python).' },
  { id: 'g2', category: 'General', difficulty: 'easy', question: 'What is time complexity?', answer: 'A measure of how an algorithm\'s running time grows with input size, expressed in Big-O notation.' },
  { id: 'g3', category: 'General', difficulty: 'medium', question: 'What is the difference between stack and heap memory?', answer: 'Stack is automatic, fast, and scoped to function calls. Heap is manual (malloc/new), slower, and persists until freed.' },

  { id: 'c9', category: 'C', difficulty: 'medium', question: 'What is the difference between a declaration and a definition?', answer: 'A declaration introduces an identifier and its type. A definition also provides the entity itself, such as storage for an object or a function body. A declaration may be a definition, but not every declaration is one.' },
  { id: 'c10', category: 'C', difficulty: 'hard', question: 'What is undefined behavior in C?', answer: 'Behavior for which the C standard imposes no requirements. Examples include signed integer overflow, out-of-bounds access and dereferencing an invalid pointer. No portable result is guaranteed.' },
  { id: 'c11', category: 'C', difficulty: 'medium', question: 'Why should you check scanf return values?', answer: 'scanf returns the number of input items successfully assigned, or EOF for specified input failures. Checking the result prevents using uninitialized or stale values after malformed or incomplete input.' },
  { id: 'c12', category: 'C', difficulty: 'medium', question: 'What does volatile guarantee in C?', answer: 'It makes accesses to a volatile-qualified object observable under the abstract machine rules. It is useful for memory-mapped I/O, but it is not a thread synchronization primitive and does not make operations atomic.' },
  { id: 'cpp11', category: 'C++', difficulty: 'medium', question: 'What is the difference between a reference and a pointer?', answer: 'A reference is an alias that must be initialized and cannot be reseated. A pointer is an object that can be null or reassigned. Neither automatically owns the referred object.' },
  { id: 'cpp12', category: 'C++', difficulty: 'hard', question: 'Why should a polymorphic base class usually have a virtual destructor?', answer: 'Deleting a derived object through a base pointer requires a virtual base destructor for defined behavior. A polymorphic base intended for deletion through base pointers should generally declare one.' },
  { id: 'cpp13', category: 'C++', difficulty: 'medium', question: 'What are the Rule of Three, Five and Zero?', answer: 'Rule of Three: a class needing a destructor, copy constructor or copy assignment likely needs all three. Rule of Five adds move operations. Rule of Zero recommends composing RAII types so compiler-generated special members suffice.' },
  { id: 'cpp14', category: 'C++', difficulty: 'medium', question: 'What is the difference between unique_ptr and shared_ptr?', answer: 'unique_ptr expresses exclusive ownership and is movable but not copyable. shared_ptr shares ownership through a control block and reference count. Prefer unique_ptr unless shared ownership is required.' },
  { id: 'cpp15', category: 'C++', difficulty: 'hard', question: 'What is object slicing?', answer: 'Object slicing occurs when a derived object is copied into a base object by value, so the derived portion is not part of the resulting object. Use references or pointers for runtime polymorphism.' },
  { id: 'cpp16', category: 'C++', difficulty: 'medium', question: 'What is iterator invalidation?', answer: 'An operation invalidates an iterator when it can no longer be used safely. For vector, reallocation invalidates all iterators, references and pointers to elements; erase invalidates those at and after the erased position.' },
  { id: 'cpp17', category: 'C++', difficulty: 'medium', question: 'What is the difference between map and unordered_map?', answer: 'map keeps keys ordered and typically provides logarithmic operations. unordered_map uses hashing with average constant-time operations and linear worst-case operations; iteration order is unspecified.' },
  { id: 'cpp18', category: 'C++', difficulty: 'medium', question: 'What does std::move do?', answer: 'std::move is a cast that produces an xvalue so move overloads may be selected. It does not move resources by itself; the selected operation determines what happens.' },
  { id: 'dsa7', category: 'DSA', difficulty: 'medium', question: 'What is the difference between BFS and DFS?', answer: 'BFS explores level by level using a queue and finds shortest paths in unweighted graphs. DFS explores deeply using recursion or a stack. Both take O(V + E) with adjacency lists.' },
  { id: 'dsa8', category: 'DSA', difficulty: 'hard', question: 'When can Dijkstra’s algorithm fail?', answer: 'Dijkstra assumes non-negative edge weights. Negative edges can invalidate its greedy finalization rule; use an algorithm such as Bellman–Ford when negative edges must be supported.' },
  { id: 'dsa9', category: 'DSA', difficulty: 'medium', question: 'What is dynamic programming?', answer: 'Dynamic programming stores results of overlapping subproblems and combines them to solve a larger problem. It is commonly implemented top-down with memoization or bottom-up with tabulation.' },

];
