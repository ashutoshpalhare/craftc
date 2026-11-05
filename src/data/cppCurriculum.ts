import type { Curriculum } from '@/types';

export const cppCurriculum: Curriculum = {
  id: 'cpp',
  title: 'Learn C++ Programming',
  subtitle: 'Master C++ from basics to STL and modern features',
  language: 'cpp',
  categories: [
    {
      id: 'cpp-intro',
      title: 'Introduction',
      icon: 'Rocket',
      lessons: [
        {
          id: 'cpp-intro-lesson',
          title: 'Introduction to C++',
          slug: 'introduction',
          description: 'What C++ is and how it extends C with OOP and modern features.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content:
                'C++ is a powerful, general-purpose programming language created by Bjarne Stroustrup in 1985 as an extension of C. It adds object-oriented programming, templates, exception handling, and a rich standard library (STL) to C\'s efficiency. C++ is used everywhere — game engines, browsers, operating systems, finance systems, and high-performance applications.',
            },
            {
              type: 'theory',
              title: 'C vs C++',
              content:
                'C is procedural — you write functions and steps. C++ is multi-paradigm — it supports procedural, object-oriented, and generic programming. C++ adds classes, inheritance, polymorphism, templates, exceptions, and the STL while keeping C\'s low-level power. Most valid C code is also valid C++ code.',
            },
            {
              type: 'notes',
              title: 'Key Features of C++',
              items: [
                'Object-Oriented Programming (classes, inheritance, polymorphism).',
                'Templates — write generic code that works with any type.',
                'Exception Handling — graceful error management.',
                'STL — Standard Template Library with containers and algorithms.',
                'References — safer alternative to pointers in many cases.',
                'Namespace — avoids naming collisions.',
                'Memory management — new/delete plus smart pointers (modern C++).',
              ],
            },
            {
              type: 'realWorld',
              title: 'Real-World Usage',
              items: [
                'Game engines: Unreal Engine, Unity core (C++).',
                'Browsers: Chrome, Firefox, Safari engines.',
                'Operating systems: parts of Windows, macOS.',
                'Finance: high-frequency trading systems.',
                'Databases: MongoDB, MySQL.',
                'AI/ML frameworks: TensorFlow, PyTorch cores are C++.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Who created C++ and when?', a: 'Bjarne Stroustrup in 1985.' },
                { q: 'What is the main difference between C and C++?', a: 'C is procedural; C++ supports OOP, templates, exceptions, and the STL in addition to all C features.' },
                { q: 'Is C a subset of C++?', a: 'Mostly yes — most valid C code compiles as C++, but there are some differences in type checking.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ extends C with OOP, templates, exceptions, and the STL. It powers games, browsers, databases, and AI frameworks — making it one of the most important languages for performance-critical software.',
            },
          ],
        },
        {
          id: 'cpp-history',
          title: 'History of C++',
          slug: 'history',
          description: 'From "C with Classes" to modern C++20.',
          duration: '6 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ has evolved significantly since its creation. Each standard adds modern features that make the language safer and more expressive.',
            },
            {
              type: 'notes',
              title: 'C++ Evolution',
              items: [
                '1979 — Bjarne Stroustrup starts "C with Classes".',
                '1985 — C++ first released.',
                '1998 — C++98, first ISO standard.',
                '2003 — C++03 (bug fix release).',
                '2011 — C++11 (modern C++ — auto, lambdas, smart pointers).',
                '2014 — C++14 (refinements).',
                '2017 — C++17 (structured bindings, filesystem).',
                '2020 — C++20 (concepts, ranges, modules, coroutines).',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ evolved from "C with Classes" in 1979 to modern C++20, with major updates in 2011 and 2020 that transformed how the language is written.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-setup',
      title: 'Installation & Basics',
      icon: 'Download',
      lessons: [
        {
          id: 'cpp-install',
          title: 'Installation',
          slug: 'installation',
          description: 'Set up a C++ compiler and editor.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'To write C++ you need a compiler (g++) and an editor. VS Code with the C/C++ extension works great.',
            },
            {
              type: 'example',
              title: 'Install',
              code: {
                filename: 'terminal',
                language: 'bash',
                code: `# macOS
xcode-select --install

# Ubuntu/Debian
sudo apt install build-essential

# Verify g++
g++ --version

# Compile and run
g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o main
./main`,
              },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Install g++ via Xcode tools (macOS) or build-essential (Linux). Compile with g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o main and run the executable. The course examples use C++17.',
            },
          ],
        },
        {
          id: 'cpp-basics',
          title: 'C++ Basics',
          slug: 'basics',
          description: 'Your first C++ program with iostream.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ uses iostream instead of stdio.h for input and output. cout prints to the screen and cin reads from the keyboard.',
            },
            {
              type: 'example',
              title: 'Hello World',
              code: {
                filename: 'main.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, CraftC!" << endl;
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Hello, CraftC!` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: '#include <iostream> brings in the input/output stream library. cout is the standard output stream. << is the insertion operator. endl moves to the next line and flushes the buffer. using namespace std lets us use cout without the std:: prefix.',
            },
            {
              type: 'notes',
              title: 'Key Differences from C',
              items: [
                'cout/cin instead of printf/scanf.',
                '<< and >> operators instead of format strings.',
                '#include <iostream> instead of <stdio.h>.',
                'No need for & in cin — cin >> age works directly.',
                'endl or "\\n" for newlines.',
              ],
            },
            {
              type: 'example',
              title: 'Input Example',
              code: {
                filename: 'input.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old." << endl;
    return 0;
}`,
              },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ uses iostream, cout, and cin for I/O. The << operator inserts output, >> extracts input. Namespaces avoid naming conflicts.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-core',
      title: 'Core C++',
      icon: 'FileCode',
      lessons: [
        {
          id: 'cpp-variables',
          title: 'Variables',
          slug: 'variables',
          description: 'Variables in C++ with modern auto.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Variables in C++ work like C, but C++ adds auto for type inference and bool as a built-in type.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'variables.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 22;
    double pi = 3.14159;
    bool isStudent = true;
    char grade = 'A';
    string name = "CraftC";

    cout << "Age: " << age << endl;
    cout << "PI: " << pi << endl;
    cout << "Student: " << isStudent << endl;
    cout << "Name: " << name << endl;
    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'C++ Specifics',
              items: [
                'bool is a built-in type (true/false).',
                'auto lets the compiler deduce the type.',
                'string type from <string> (not char arrays).',
                'References (&) provide an alias to a variable.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ adds bool, auto type inference, and a proper string type. Variables are declared with a type and name, same as C.',
            },
          ],
        },
        {
          id: 'cpp-data-types',
          title: 'Data Types',
          slug: 'data-types',
          description: 'Built-in types in C++.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ has the same fundamental types as C plus bool and string.',
            },
            {
              type: 'notes',
              title: 'C++ Data Types',
              items: [
                'int — 4 bytes, whole numbers.',
                'float — 4 bytes, single-precision.',
                'double — 8 bytes, double-precision.',
                'char — 1 byte, single character.',
                'bool — 1 byte, true or false.',
                'string — from <string>, text.',
                'wchar_t — wide character for Unicode.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ data types include int, float, double, char, bool, and string. Use auto when the type is obvious from context.',
            },
          ],
        },
        {
          id: 'cpp-operators',
          title: 'Operators',
          slug: 'operators',
          description: 'Operators in C++ — same as C plus a few additions.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ has the same operators as C (arithmetic, relational, logical, bitwise) plus scope resolution (::) and member access operators for objects.',
            },
            {
              type: 'notes',
              title: 'Operators',
              items: [
                'Arithmetic: + - * / %',
                'Relational: == != > < >= <=',
                'Logical: && || !',
                'Bitwise: & | ^ ~ << >>',
                'Assignment: = += -= *= /=',
                'Scope resolution: ::',
                'Member access: . and ->',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ operators match C, plus :: for scope resolution and . / -> for object member access.',
            },
          ],
        },
        {
          id: 'cpp-control-flow',
          title: 'Control Flow',
          slug: 'control-flow',
          description: 'if, switch, and loops in C++.',
          duration: '12 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Control flow in C++ is the same as C — if, else, switch, for, while, do-while. C++ adds range-based for loops.',
            },
            {
              type: 'example',
              title: 'Range-based for Loop',
              code: {
                filename: 'rangefor.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};

    for (int n : nums) {
        cout << n << " ";
    }
    cout << endl;
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `1 2 3 4 5` },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ control flow matches C, plus range-based for loops for iterating over containers like vectors.',
            },
          ],
        },
        {
          id: 'cpp-functions',
          title: 'Functions',
          slug: 'functions',
          description: 'Functions, default arguments, and overloading in C++.',
          duration: '12 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ functions work like C, but add default arguments, function overloading (same name, different params), and references.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'functions.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

// Default arguments
int add(int a, int b = 10) {
    return a + b;
}

// Overloading — same name, different params
int multiply(int a, int b) { return a * b; }
double multiply(double a, double b) { return a * b; }

// Pass by reference
void increment(int &n) { n++; }

int main() {
    cout << "add(5): " << add(5) << endl;        // 15
    cout << "add(5, 20): " << add(5, 20) << endl; // 25
    cout << "multiply(3, 4): " << multiply(3, 4) << endl;
    cout << "multiply(3.5, 2.0): " << multiply(3.5, 2.0) << endl;

    int x = 5;
    increment(x);
    cout << "x after increment: " << x << endl;   // 6
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `add(5): 15\nadd(5, 20): 25\nmultiply(3, 4): 12\nmultiply(3.5, 2.0): 7\nx after increment: 6` },
            },
            {
              type: 'notes',
              title: 'C++ Function Features',
              items: [
                'Default arguments — parameters with default values.',
                'Overloading — multiple functions with the same name.',
                'Pass by reference — use & to modify the original.',
                'Inline functions — suggest the compiler inline the code.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ adds default arguments, function overloading, and pass-by-reference to C-style functions, making code more flexible and expressive.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-oop',
      title: 'Object-Oriented Programming',
      icon: 'Box',
      lessons: [
        {
          id: 'cpp-classes',
          title: 'Classes & Objects',
          slug: 'classes',
          description: 'The foundation of OOP in C++.',
          duration: '18 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A class is a blueprint that combines data (attributes) and behavior (methods). An object is an instance of a class. This is the heart of object-oriented programming.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'class.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollNo;

public:
    // Constructor
    Student(string n, int r) : name(n), rollNo(r) {}

    void display() {
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
    }
};

int main() {
    Student s1("Ashutosh", 101);
    s1.display();
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Name: Ashutosh\nRoll No: 101` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: 'The class has private data (name, rollNo) and public methods (constructor, display). The constructor initializes the object when it is created. private means only the class\'s own methods can access those members — this is encapsulation.',
            },
            {
              type: 'notes',
              title: 'Key Concepts',
              items: [
                'class — the blueprint.',
                'object — an instance of a class.',
                'private — only accessible within the class.',
                'public — accessible from anywhere.',
                'protected — accessible in the class and derived classes.',
                'Constructor — special method that runs when an object is created.',
                'Destructor — runs when an object is destroyed.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is a class?', a: 'A user-defined type that bundles data and functions together.' },
                { q: 'What is an object?', a: 'An instance of a class — a concrete variable of that type.' },
                { q: 'What is a constructor?', a: 'A special function that initializes an object when it is created. Same name as the class, no return type.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'A class bundles data and methods. Objects are instances. Use private for internal data, public for the interface, and constructors to initialize objects.',
            },
          ],
        },
        {
          id: 'cpp-inheritance',
          title: 'Inheritance',
          slug: 'inheritance',
          description: 'Reuse and extend classes.',
          duration: '15 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Inheritance lets a class (derived) acquire properties and methods from another class (base). It promotes code reuse and models "is-a" relationships.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'inheritance.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() { cout << "Eating..." << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Barking..." << endl; }
};

int main() {
    Dog d;
    d.eat();   // inherited from Animal
    d.bark();  // Dog's own method
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Eating...\nBarking...` },
            },
            {
              type: 'notes',
              title: 'Types of Inheritance',
              items: [
                'Single — one base, one derived.',
                'Multiple — one derived, multiple bases.',
                'Multilevel — A → B → C.',
                'Hierarchical — one base, multiple derived.',
                'Hybrid — combination of the above.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is inheritance?', a: 'A mechanism where a derived class acquires properties and methods from a base class.' },
                { q: 'What are the types of inheritance in C++?', a: 'Single, multiple, multilevel, hierarchical, and hybrid.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Inheritance lets a derived class reuse a base class\'s members. Use public inheritance for "is-a" relationships.',
            },
          ],
        },
        {
          id: 'cpp-polymorphism',
          title: 'Polymorphism',
          slug: 'polymorphism',
          description: 'Same interface, different behavior.',
          duration: '16 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Polymorphism means "many forms" — the same function call behaves differently depending on the object. It is achieved through virtual functions and overriding.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'polymorphism.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <memory>
#include <vector>
using namespace std;

class Shape {
public:
    virtual ~Shape() = default;
    virtual void draw() { cout << "Drawing a shape" << endl; }
};

class Circle : public Shape {
public:
    void draw() override { cout << "Drawing a circle" << endl; }
};

class Square : public Shape {
public:
    void draw() override { cout << "Drawing a square" << endl; }
};

int main() {
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Circle>());
    shapes.push_back(make_unique<Square>());

    for (const auto& shape : shapes) {
        shape->draw();
    }
    // unique_ptr releases each object automatically.
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Drawing a circle\nDrawing a square` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: 'virtual tells the compiler to use the derived class\'s version when called through a base pointer. override makes the intent explicit and lets the compiler catch mistakes. This is runtime polymorphism.',
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is polymorphism?', a: 'The ability of the same function call to behave differently based on the object type.' },
                { q: 'What does virtual do?', a: 'It enables runtime polymorphism — the derived class\'s override is called through a base pointer.' },
                { q: 'What is a pure virtual function?', a: 'A virtual function with no body (= 0). It makes the class abstract — you cannot instantiate it.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Polymorphism lets the same call behave differently. Use virtual functions and override for runtime polymorphism. Pure virtual functions create abstract classes.',
            },
          ],
        },
        {
          id: 'cpp-encapsulation',
          title: 'Encapsulation',
          slug: 'encapsulation',
          description: 'Bundle data and control access to it.',
          duration: '8 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Encapsulation bundles data and the methods that operate on it into a single unit (class), and controls access through public/private/protected.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'encapsulation.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount() : balance(0) {}

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    double getBalance() { return balance; }
};

int main() {
    BankAccount acc;
    acc.deposit(500);
    cout << "Balance: " << acc.getBalance() << endl;
    // acc.balance = -1000;  // error — private
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Balance: 500` },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Encapsulation hides internal data behind private access and exposes controlled methods. This protects data from invalid modifications.',
            },
          ],
        },
        {
          id: 'cpp-abstraction',
          title: 'Abstraction',
          slug: 'abstraction',
          description: 'Show essential details, hide complexity.',
          duration: '6 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Abstraction means showing only essential features and hiding implementation details. You use a TV remote without knowing the internal circuitry — that is abstraction.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'abstraction.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) { return a + b; }  // user sees this
    // internal details are hidden
};

int main() {
    Calculator c;
    cout << c.add(5, 3) << endl;  // user doesn't care how
    return 0;
}`,
              },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Abstraction hides implementation and exposes only what the user needs. Abstract classes (with pure virtual functions) enforce this at the language level.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-templates-advanced',
      title: 'Templates & Advanced',
      icon: 'Layers',
      lessons: [
        {
          id: 'cpp-templates',
          title: 'Templates',
          slug: 'templates',
          description: 'Write reusable generic functions and classes with compile-time type parameters.',
          duration: '15 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Templates let you write generic functions and classes. The compiler instantiates a specialization when a template is used with concrete template arguments. Templates are a foundation of the STL, but a template is not automatically valid for every possible type: the operations used in its body must be supported by the supplied type.',
            },
            {
              type: 'example',
              title: 'Function Template',
              code: {
                filename: 'template.cpp',
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

template <typename T>
T maxValue(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maxValue(10, 20) << endl;          // int
    cout << maxValue(3.5, 2.1) << endl;        // double
    cout << maxValue('a', 'z') << endl;        // char
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `20\n3.5\nz` },
            },
            {
              type: 'notes',
              title: 'Key Points',
              items: [
                'template <typename T> — declares a type parameter.',
                'The compiler instantiates a specialization for the template arguments used; this is not necessarily one separate copy for every type in every build.',
                'Class templates are instantiated with arguments such as Box<int>; each specialization has its own type.',
                'Templates can accept non-type parameters too, such as template <std::size_t N>.',
                'Function templates can be overloaded; overload resolution chooses the best viable function.',
                'Explicit specialization supplies a custom implementation for a particular template argument.',
                'Use typename for a dependent qualified name that denotes a type, such as typename T::value_type.',
                'Template definitions usually need to be visible at the point of instantiation, so they are commonly placed in headers.',
                'The entire STL is built on templates.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Function and class templates support generic programming. Learn type parameters, deduction, class-template instantiation, overloads, and explicit specialization. A template only works for types that support the operations its implementation requires.',
            },
          ],
        },
        {
          id: 'cpp-exceptions',
          title: 'Exception Handling',
          slug: 'exception-handling',
          description: 'Handle errors gracefully with try/catch.',
          duration: '12 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ exceptions report exceptional conditions by throwing an object. A matching catch handler can respond or rethrow; if no handler is found, the program terminates. Exceptions do not make every error recoverable, so use them for exceptional failures and validate ordinary input explicitly.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'exception.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <stdexcept>

int divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw std::invalid_argument("denominator must not be zero");
    }
    return numerator / denominator;
}

int main() {
    try {
        std::cout << divide(10, 0) << std::endl;
    } catch (const std::invalid_argument& error) {
        std::cout << "Invalid argument: " << error.what() << std::endl;
    } catch (const std::exception& error) {
        std::cout << "Standard exception: " << error.what() << std::endl;
    }

    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Invalid argument: denominator must not be zero` },
            },
            {
              type: 'notes',
              title: 'Key Concepts',
              items: [
                'throw creates an exception object; the exception type helps handlers distinguish failure categories.',
                'Catch standard library exceptions through const std::exception& and inspect what() for a diagnostic message.',
                'Place more specific handlers before broader base-class handlers; otherwise the broad handler may make later handlers unreachable.',
                'Catch by const reference to avoid unnecessary copies and preserve polymorphic exception information.',
                'Stack unwinding destroys automatic local objects as control leaves scopes; use RAII so resources are released during exception propagation.',
                'Use std::invalid_argument for invalid arguments and std::runtime_error for other runtime failures when those types fit.',
                'Do not use catch(...) as a routine substitute for handling known errors. It is appropriate only at deliberate boundaries where unknown failures can be safely handled or rethrown.',
                'After catching an exception, either recover meaningfully, translate it, or rethrow with throw; avoid silently swallowing failures.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Use try, throw, and catch to communicate exceptional failures. Prefer typed exceptions and catch standard exceptions by const reference. RAII protects resources during stack unwinding; catch(...) should be reserved for deliberate last-resort boundaries.',
            },
          ],
        },
        {
          id: 'cpp-smart-pointers',
          title: 'Smart Pointers',
          slug: 'smart-pointers',
          description: 'Modern C++ memory management.',
          duration: '14 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Smart pointers (introduced in C++11) automatically manage memory. They delete the object when it is no longer needed, preventing memory leaks.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'smartptr.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // unique_ptr — sole ownership
    unique_ptr<int> p1 = make_unique<int>(42);
    cout << *p1 << endl;

    // shared_ptr — shared ownership, reference counted
    shared_ptr<int> p2 = make_shared<int>(10);
    shared_ptr<int> p3 = p2;  // both share ownership
    cout << *p2 << " " << *p3 << endl;
    cout << "Count: " << p2.use_count() << endl;

    // no delete needed — automatic cleanup
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `42\n10 10\nCount: 2` },
            },
            {
              type: 'notes',
              title: 'Types of Smart Pointers',
              items: [
                'unique_ptr — one owner, cannot be copied.',
                'shared_ptr — multiple owners, reference counted.',
                'weak_ptr — non-owning reference to a shared_ptr (avoids cycles).',
                'Always prefer make_unique and make_shared over new.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is a smart pointer?', a: 'A wrapper that automatically manages memory and deletes the object when it goes out of scope.' },
                { q: 'unique_ptr vs shared_ptr?', a: 'unique_ptr has one owner and cannot be copied; shared_ptr has multiple owners with reference counting.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Smart pointers (unique_ptr, shared_ptr, weak_ptr) manage memory automatically. Prefer them over raw new/delete to avoid leaks and dangling pointers.',
            },
          ],
        },
        {
          id: 'cpp-move-semantics',
          title: 'Move Semantics',
          slug: 'move-semantics',
          description: 'Transfer resources instead of copying them.',
          duration: '12 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Move semantics (C++11) let you transfer ownership of resources instead of copying them, making code faster for large objects.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'move.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <string>
#include <utility>
using namespace std;

int main() {
    string a = "Hello CraftC";
    string b = move(a);  // std::move enables move construction

    cout << "b: " << b << endl;
    // a remains valid, but its value is unspecified; do not rely on it.
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `b: Hello CraftC` },
            },
            {
              type: 'notes',
              title: 'Key Concepts',
              items: [
                'std::move casts a value to an rvalue reference.',
                'Move constructors and move assignment operators transfer resources.',
                'The moved-from object is left in a valid but unspecified state.',
                'Improves performance for large containers (vector, string).',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Move semantics transfer resources instead of copying, improving performance for large objects. Use std::move to enable moves.',
            },
          ],
        },
        {
          id: 'cpp-file-handling',
          title: 'File Handling',
          slug: 'file-handling',
          description: 'File I/O with fstream.',
          duration: '12 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C++ uses fstream for file I/O — ofstream to write, ifstream to read, fstream for both.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'file.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Write; the stream closes automatically when it leaves scope.
    {
        ofstream out("data.txt");
        if (!out) {
            cerr << "Could not open data.txt for writing" << endl;
            return 1;
        }
        out << "CraftC C++ Tutorial" << endl;
        if (!out) {
            cerr << "Writing to data.txt failed" << endl;
            return 1;
        }
    }

    // Read and check that the file opened successfully.
    ifstream in("data.txt");
    if (!in) {
        cerr << "Could not open data.txt for reading" << endl;
        return 1;
    }

    string line;
    while (getline(in, line)) {
        cout << line << endl;
    }
    if (!in.eof()) {
        cerr << "Reading data.txt failed" << endl;
        return 1;
    }
    return 0;
}`,
              },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C++ file handling uses ofstream, ifstream, and fstream. Always close files or rely on destructors.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-stl',
      title: 'STL (Standard Template Library)',
      icon: 'Library',
      lessons: [
        {
          id: 'cpp-stl-intro',
          title: 'STL Overview',
          slug: 'stl-overview',
          description: 'Containers, algorithms, and iterators.',
          duration: '10 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'The Standard Template Library (STL) is the commonly used part of the C++ standard library built around generic containers, algorithms, iterators, and callable objects. Containers manage collections, iterators connect containers to algorithms, and algorithms perform operations over iterator ranges. The examples in this course use C++17.',
            },
            {
              type: 'notes',
              title: 'STL Components',
              items: [
                'Sequence containers — vector, deque, and list store elements in a sequence; choose based on access and insertion patterns.',
                'Associative containers — set and map keep unique keys in sorted order; their lookup and insertion are logarithmic.',
                'Unordered associative containers — unordered_set and unordered_map use hash tables; operations are average constant time but can be linear in the worst case, and iteration order is unspecified.',
                'Container adaptors — stack, queue, and priority_queue expose restricted interfaces over underlying containers.',
                'Algorithms — sort, find, reverse, count_if, and accumulate operate on iterator ranges; include the header that declares each algorithm.',
                'Iterators — connect containers to algorithms; [begin, end) includes the first iterator and excludes end().',
                'Callable objects — lambdas, function objects, and function pointers customize algorithms.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Choose a container by its access, ordering, and mutation requirements. Use iterator ranges with standard algorithms, and check each operation\'s complexity and invalidation rules rather than assuming all containers behave alike.',
            },
          ],
        },
        {
          id: 'cpp-vectors',
          title: 'Vectors',
          slug: 'vectors',
          description: 'Dynamic arrays that grow automatically.',
          duration: '14 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A vector is a dynamic array that grows and shrinks automatically. It is the most used STL container.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'vector.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};

    v.push_back(40);
    v.push_back(50);

    cout << "Size: " << v.size() << endl;

    for (int n : v) {
        cout << n << " ";
    }
    cout << endl;

    v.pop_back();
    cout << "After pop: " << v.size() << " elements" << endl;
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Size: 5\n10 20 30 40 50\nAfter pop: 4 elements` },
            },
            {
              type: 'notes',
              title: 'Common Methods',
              items: [
                'push_back(x) — add to end.',
                'pop_back() — remove last.',
                'size() — number of elements.',
                'at(i) — access with bounds checking; it throws std::out_of_range for an invalid index.',
                'operator[] — unchecked access; the index must be valid.',
                'empty() — check whether there are no elements; prefer it to comparing size() with zero.',
                'begin() / end() — the half-open iterator range [begin(), end()).',
                'reserve(n) — request capacity for at least n elements; it does not change size().',
                'clear() — remove all elements; existing element references and iterators are invalidated.',
                'A vector reallocation invalidates all iterators, pointers, and references to its elements. Insert/erase can also invalidate positions at or after the change; check the operation-specific rules.'
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Vectors are dynamic arrays. Use push_back to add, pop_back to remove, and range-based for loops to iterate. They are the go-to container in C++.',
            },
          ],
        },
        {
          id: 'cpp-maps',
          title: 'Maps',
          slug: 'maps',
          description: 'Key-value pairs with unique keys.',
          duration: '12 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A map stores key-value pairs with unique keys, sorted by key. It is like a dictionary.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'map.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Ashutosh"] = 22;
    ages["Rahul"] = 25;
    ages["Priya"] = 20;

    for (auto& [name, age] : ages) {
        cout << name << " -> " << age << endl;
    }

    auto it = ages.find("Rahul");
    if (it != ages.end()) {
        cout << "Rahul is " << it->second << endl;
    }
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Ashutosh -> 22\nPriya -> 20\nRahul -> 25\nRahul is 25` },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'std::map stores unique keys in sorted order and provides logarithmic lookup, insertion, and removal. operator[] inserts a default value when a key is absent; use find() or at() when you only want to inspect an existing key. std::unordered_map uses hashing, has average constant-time lookup, and does not preserve sorted iteration order.',
            },
          ],
        },
        {
          id: 'cpp-sets',
          title: 'Sets',
          slug: 'sets',
          description: 'Collections of unique, sorted elements.',
          duration: '8 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'std::set stores unique keys in sorted order. It is useful for membership checks and maintaining ordered unique values; insert, find, and erase take logarithmic time.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'set.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {3, 1, 4, 1, 5, 9, 2, 6};
    for (int n : s) cout << n << " ";
    cout << endl;
    // Duplicate values are removed; set iteration is sorted.
    if (s.find(5) != s.end()) {
        cout << "5 is present" << endl;
    }
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `1 2 3 4 5 6 9\n5 is present` },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'A std::set keeps unique values sorted by its comparison rule. Use find() to test membership; use std::unordered_set when ordering is unnecessary and average constant-time lookup is more important.',
            },
          ],
        },
        {
          id: 'cpp-algorithms',
          title: 'Algorithms',
          slug: 'algorithms',
          description: 'sort, find, reverse, accumulate, and more.',
          duration: '12 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'The <algorithm> header provides non-member algorithms that operate on iterator ranges. They work with containers whose iterators meet the algorithm\'s requirements; not every algorithm works with every container (for example, std::sort requires random-access iterators).' ,
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'algorithm.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};

    sort(v.begin(), v.end());
    for (int n : v) cout << n << " ";
    cout << endl;

    auto it = find(v.begin(), v.end(), 8);
    if (it != v.end()) cout << "Found 8" << endl;

    reverse(v.begin(), v.end());
    for (int n : v) cout << n << " ";
    cout << endl;

    const int total = accumulate(v.begin(), v.end(), 0);
    cout << "Sum: " << total << endl;
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `1 2 3 5 8 9\nFound 8\n9 8 5 3 2 1\nSum: 28` },
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Algorithms such as sort, find, reverse, count_if, and accumulate operate on iterator ranges. Check iterator requirements: std::sort needs random-access iterators, while std::find works with input iterators. Include <algorithm> for these algorithms and <numeric> for accumulate.',
            },
          ],
        },
        {
          id: 'cpp-lambda',
          title: 'Lambda Expressions',
          slug: 'lambda',
          description: 'Anonymous functions for inline use.',
          duration: '10 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A lambda is an anonymous function you can define inline. It is heavily used with STL algorithms.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'lambda.cpp',
                language: 'cpp',
                code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};

    // Sort descending using a lambda
    sort(v.begin(), v.end(), [](int a, int b) {
        return a > b;
    });

    for (int n : v) cout << n << " ";
    cout << endl;

    // Capture and use
    int threshold = 5;
    const auto countAbove = count_if(v.begin(), v.end(), [threshold](int x) {
        return x > threshold;
    });
    cout << "Above " << threshold << ": " << countAbove << endl;
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `9 8 5 2 1\nAbove 5: 2` },
            },
            {
              type: 'notes',
              title: 'Lambda Syntax',
              items: [
                '[capture](params) { body }',
                '[] — no captures.',
                '[=] — capture all by value.',
                '[&] — capture all by reference.',
                '[x] — capture x by value.',
                '[&x] — capture x by reference.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Lambdas are inline anonymous functions used heavily with STL algorithms. They can capture variables from the surrounding scope.',
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-projects',
      title: 'Projects & Interview',
      icon: 'Trophy',
      lessons: [
        {
          id: 'cpp-projects-lesson',
          title: 'C++ Projects',
          slug: 'projects',
          description: 'Build portfolio-worthy C++ applications.',
          duration: '40 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Build these projects to demonstrate your C++ skills to employers.',
            },
            {
              type: 'practice',
              title: 'Project Ideas',
              items: [
                'Bank Management System — OOP + file handling.',
                'Student Report Card System — classes and STL.',
                'Quiz Game — OOP and user interaction.',
                'Hotel Management System — classes, inheritance.',
                'Simple Game (Snake/Tetris) — using a library like SFML.',
                'Custom String Class — operator overloading practice.',
                'Task Manager — STL containers + file persistence.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Build at least 2 OOP-based projects (bank system, report card) and put them on GitHub with a README.',
            },
          ],
        },
        {
          id: 'cpp-interview',
          title: 'Interview Questions',
          slug: 'interview-questions',
          description: 'The most common C++ interview questions.',
          duration: '25 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Review these before any C++ interview.',
            },
            {
              type: 'interviewQuestions',
              title: 'Top C++ Interview Questions',
              questions: [
                { q: 'What are the four pillars of OOP?', a: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
                { q: 'What is a virtual function?', a: 'A member function declared with virtual that enables runtime polymorphism — the derived class version is called through a base pointer.' },
                { q: 'What is a pure virtual function?', a: 'A virtual function assigned to 0, making the class abstract. Derived classes must implement it.' },
                { q: 'Difference between struct and class in C++?', a: 'In a struct, members are public by default; in a class, they are private by default. Otherwise identical.' },
                { q: 'What is a smart pointer?', a: 'A RAII wrapper that manages memory automatically — unique_ptr, shared_ptr, weak_ptr.' },
                { q: 'What is RAII?', a: 'Resource Acquisition Is Initialization — resources are tied to object lifetime, acquired in constructors and released in destructors.' },
                { q: 'What is the difference between new/delete and malloc/free?', a: 'new/delete call constructors/destructors and are type-safe; malloc/free only allocate raw memory.' },
                { q: 'What is a lambda?', a: 'An anonymous function defined inline, used commonly with STL algorithms. It can capture surrounding variables.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Know the four OOP pillars, virtual functions, smart pointers, RAII, and lambdas. These are the core C++ interview topics.',
            },
          ],
        },
        {
          id: 'cpp-practice',
          title: 'Practice Problems',
          slug: 'practice-problems',
          description: 'Progressive C++ exercises with requirements, hints, and edge cases.',
          duration: '60 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Work through these problems in order. First make a correct solution, then improve its clarity and complexity. Unless a problem says otherwise, use C++17, validate input where appropriate, and explain the time and space complexity of your approach. Do not look at a solution before you have tried the examples and edge cases.',
            },
            {
              type: 'practice',
              title: 'Level 1 — STL Fundamentals',
              items: [
                '1. Reverse a vector — Input: [1, 2, 3, 4]. Return or print [4, 3, 2, 1] without creating a second vector. Hint: use two indices or std::reverse. Edge cases: empty vector, one element, duplicate values.',
                '2. Frequency counter — Given a vector of integers, use std::map to print each distinct value and its frequency in ascending key order. Hint: increment counts[value]. Edge cases: empty input, negative values, repeated values.',
                '3. Remove duplicates — Build a sorted collection of unique integers using std::set. Preserve the original vector unchanged. Hint: construct the set from the vector range. Edge cases: all values equal, already unique, empty input.',
                '4. Sort names — Read a list of names and sort them alphabetically with std::sort. State whether comparison is case-sensitive. Edge cases: duplicate names, empty strings, upper/lowercase mix.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 2 — Functions, Classes & Lambdas',
              items: [
                '5. Rectangle class — Create a Rectangle with width and height, constructor validation, area(), and perimeter(). Hint: keep dimensions private and expose const member functions. Edge cases: zero or negative dimensions; decide and document the policy.',
                '6. Filter even numbers — Use std::copy_if with a lambda to copy even values into a new vector. Hint: test value % 2 == 0. Edge cases: negative even numbers, no matches, empty input.',
                '7. Stack with vector — Implement push, pop, top, and empty using std::vector. Do not access the last element when empty; choose a clear error policy for pop/top. Edge cases: repeated push/pop and underflow.',
                '8. Word length sorter — Sort a vector of words by length using a lambda comparator; use alphabetical order as a tie-breaker. Edge cases: equal lengths, duplicate words, empty strings.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 3 — Templates, Files & Data Modeling',
              items: [
                '9. Generic maximum — Write a function template that returns the largest element in a non-empty vector. Hint: use a const reference and std::max or a comparison loop. Edge cases: empty vector (define a safe contract), negative values, equal maximums.',
                '10. CSV records — Read a simple CSV file into a vector of structs with at least two fields. Define the supported CSV format and handle missing files or malformed rows. Hint: start with a documented simple format; quoted commas require a real CSV parser.',
                '11. Student grade book — Model students with a struct or class, store them in a vector, calculate averages, and find the top student. Edge cases: no students, empty grade list, tied averages.',
                '12. Safe configuration lookup — Store string keys and values in std::map. Implement lookup without inserting missing keys. Edge cases: missing key, empty value, duplicate key policy.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 4 — OOP & Problem Solving',
              items: [
                '13. Vehicle hierarchy — Create a base Vehicle and derived Car and Bike types. Demonstrate runtime polymorphism through a base pointer or reference and include a virtual destructor. Edge cases: deleting derived objects through a base pointer.',
                '14. Shape collection — Store different Shape objects using std::vector<std::unique_ptr<Shape>> and calculate total area through a virtual function. Hint: use std::make_unique. Edge cases: empty collection and correct ownership.',
                '15. Inventory manager — Track product IDs, names, and quantities using STL containers. Support add, update, search, and remove operations. Edge cases: duplicate IDs, unknown IDs, zero quantity, invalid updates.',
                '16. Transaction summary — Read transaction amounts, calculate count, total, minimum, maximum, and average using STL algorithms. Edge cases: empty input, negative refunds, large totals and numeric type choice.',
              ],
            },
            {
              type: 'notes',
              title: 'Submission & Testing Checklist',
              items: [
                'Compile with: g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o main',
                'For every solution, document the input format, expected output, and any assumptions.',
                'Test normal input, empty input, one item, duplicates, boundary values, and invalid input where relevant.',
                'Prefer const references for read-only large objects and avoid unnecessary copies.',
                'Use standard algorithms and containers where they improve clarity; do not force STL usage when a simpler approach is clearer.',
                'State time and auxiliary-space complexity, including the container operations used.',
                'Separate each problem into its own source file or clearly named function so solutions can be reviewed independently.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Complete the levels in sequence and aim to solve at least 12 of the 16 problems independently. A solution is not complete until it handles edge cases, compiles with warnings enabled, and includes a short complexity explanation.',
            },
          ],
        },
        {
          id: 'cpp-job-ready',
          title: 'Job Ready Checklist',
          slug: 'job-ready-checklist',
          description: 'Everything you need to be job-ready in C++.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Complete this checklist to be confident applying for C++ roles.',
            },
            {
              type: 'notes',
              title: 'Checklist',
              items: [
                'Understand all four OOP pillars and can implement them.',
                'Comfortable with classes, inheritance, and polymorphism.',
                'Know templates and can write generic functions.',
                'Use STL containers (vector, map, set) fluently.',
                'Understand smart pointers and modern C++ memory management.',
                'Can handle exceptions properly.',
                'Have 2+ C++ projects on GitHub.',
                'Can solve the top 15 C++ interview questions.',
                'Understand RAII and move semantics basics.',
                'Know basic data structures using STL.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Complete this checklist and you are ready for entry-level C++ and OOP-focused roles.',
            },
          ],
        },
      ],
    },
  ],
};