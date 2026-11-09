import type { Curriculum } from '@/types';

export const cCurriculum: Curriculum = {
  id: 'c',
  title: 'Learn C Programming',
  subtitle: 'From zero to job-ready, one lesson at a time',
  language: 'c',
  categories: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: 'Rocket',
      lessons: [
        {
          id: 'c-intro',
          title: 'Introduction to C',
          slug: 'introduction',
          description: 'What C is, why it matters, and where it fits in modern programming.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content:
                'C is a general-purpose, compiled programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It became especially important for operating systems and other software that needs direct control over memory and hardware resources. C also influenced the design of languages such as C++, Java, and many others. Learning C helps you understand data representation, pointers, memory, and how source code becomes a running program.',
            },
            {
              type: 'theory',
              title: 'Why C Still Matters',
              content:
                'Although C is more than 50 years old, it is still widely used in operating-system components, embedded firmware, device drivers, databases, networking software, and performance-critical libraries. The Linux kernel is predominantly written in C; Windows and macOS contain substantial C code alongside other languages. C offers low-level memory and data-layout control, but it still runs within an operating system and hardware environment rather than removing every abstraction.',
            },
            {
              type: 'notes',
              title: 'Key Characteristics',
              items: [
                'Compiled language — source code is translated to machine code before execution.',
                'Statically typed — variable types are checked at compile time.',
                'Procedural — programs are organized around functions and steps.',
                'Portable — C code compiled on one machine can run on another with minimal changes.',
                'Low-level memory access through pointers.',
                'Small standard library — you build most functionality yourself.',
              ],
            },
            {
              type: 'realWorld',
              title: 'Real-World Usage',
              items: [
                'Operating systems: Linux kernel is written almost entirely in C.',
                'Embedded systems: microcontrollers in cars, appliances, and medical devices.',
                'Databases: PostgreSQL, Redis, and SQLite cores are written in C.',
                'Language implementations: CPython (the standard Python implementation), the PHP interpreter, and CRuby (the standard Ruby implementation) use substantial C code; other implementations may use different languages.',
                'IoT and robotics: Arduino and many RTOS platforms use C.',
              ],
            },
            {
              type: 'tips',
              title: 'Tips for Beginners',
              items: [
                'Do not rush through pointers — they are the heart of C.',
                'Write small programs daily instead of reading passively.',
                'Compile and run every example yourself.',
                'Read compiler warnings carefully — they catch real bugs.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Who invented C and in which year?', a: 'Dennis Ritchie at Bell Labs in 1972.' },
                { q: 'Is C compiled or interpreted?', a: 'C is a compiled language — source code is translated to machine code by a compiler.' },
                { q: 'Why is C called a middle-level language?', a: 'It combines high-level constructs (functions, structures) with low-level features (pointers, memory management).' },
                { q: 'Name three major software systems written in C.', a: 'Linux kernel, PostgreSQL, and the Python interpreter (CPython).' },
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Write a one-line description of C in your own words.',
                'List three devices around you that likely run C code.',
                'Explain to a friend why C is still relevant today.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Essential C Concepts',
              items: [
                'Source code: the human-readable instructions you write, usually saved in a .c file.',
                'Compiler: translates C source code into object code and reports diagnostics such as errors and warnings.',
                'Linker: combines object files and required libraries to create an executable program.',
                'Typical build flow: edit source → compile → link → run → test and debug. Some toolchains combine compile and link in one command.',
                'Entry point: a hosted C program normally starts at main. Use int main(void) when no command-line arguments are needed, and return 0 to report success.',
                'Standard library: headers such as <stdio.h> declare functions like printf. Include the header for each library feature you use.',
                'Portability: code is portable when it follows the C standard and avoids assumptions about a particular compiler, operating system, or data type size.',
                'Undefined behavior: the C standard gives no requirements for what happens (for example, signed integer overflow or dereferencing an invalid pointer). Do not rely on a program appearing to work.',
                'Compiler warnings are useful feedback, not noise. Practise compiling with warnings enabled and fix them instead of ignoring them.',
                'Larger programs can be split across .c and .h files: put declarations in headers, definitions in source files, and compile/link all required source files together.'
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content:
                'C is a powerful, low-level compiled language that underpins much of modern computing. It teaches you how memory and the machine truly work, and remains essential for systems programming, embedded development, and performance-critical software.',
            },
          ],
        },
        {
          id: 'c-history',
          title: 'History of C',
          slug: 'history-of-c',
          description: 'The origin story of C — from BCPL and B to the language that shaped computing.',
          duration: '6 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content:
                'Understanding the history of C helps you appreciate its design decisions. C did not appear out of nowhere — it evolved from earlier languages designed for systems programming at Bell Labs.',
            },
            {
              type: 'theory',
              title: 'The Evolution',
              content:
                'In the late 1960s, Martin Richards created BCPL (Basic Combined Programming Language) at Cambridge. Ken Thompson later simplified BCPL into a language called B for the early Unix system on the PDP-7. B was elegant but limited — it worked with words and was too slow on the newer PDP-11. Dennis Ritchie extended B into a new language he called C, adding data types, structures, and proper typing, first appearing around 1972.',
            },
            {
              type: 'diagram',
              title: 'Language Family Tree',
              content: 'BCPL → B → C (1972) → C++ (1985). Java and C# were influenced by C/C++ syntax but are separate languages.',
            },
            {
              type: 'notes',
              title: 'Key Milestones',
              items: [
                '1967 — BCPL created by Martin Richards.',
                '1969 — B created by Ken Thompson for early Unix.',
                '1972 — C developed by Dennis Ritchie at Bell Labs.',
                '1978 — "The C Programming Language" (K&R) published.',
                '1989 — ANSI C standard (C89) released.',
                '1999 — C99 standard adds new features.',
                '2011 — C11 standard.',
                '2018 — C18 standard.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Which languages preceded C?', a: 'BCPL and then B were the direct ancestors of C.' },
                { q: 'What does K&R refer to?', a: 'The book "The C Programming Language" by Brian Kernighan and Dennis Ritchie, published in 1978.' },
                { q: 'What was the first standard of C?', a: 'ANSI C, also known as C89, standardized in 1989.' },
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: C Standards',
              items: [
                'A language standard defines the rules and library that conforming compilers are expected to support.',
                'K&R C describes the language before formal ANSI/ISO standardization; modern code should generally follow a selected standard such as C17/C23.',
                'C89/C90 introduced the first widely adopted formal standard. C99 added features such as // comments and declarations inside for loops; support for some features varies.',
                'C11 added features including atomics and optional multithreading support. C17/C18 is primarily a bug-fix revision of C11.',
                'C23 is the newer ISO C revision. Compiler support varies, so check your compiler version and selected language mode before relying on new features.',
                'C++ is a separate language that evolved from C but is not simply “C with extra features”; some valid C programs are not valid C++ programs.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content:
                'C evolved from BCPL through B, with Dennis Ritchie developing C at Bell Labs around 1972. Its standards include C89/C90, C99, C11, C17/C18, and the newer C23 revision.',
            },
          ],
        },
        {
          id: 'c-why-learn',
          title: 'Why Learn C',
          slug: 'why-learn-c',
          description: 'The concrete reasons C is worth your time in a modern world.',
          duration: '5 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content:
                'With so many modern languages available, you might wonder why you should learn C. The answer is that C teaches you fundamentals that higher-level languages hide from you.',
            },
            {
              type: 'theory',
              title: 'What C Teaches You',
              content:
                'C forces you to think about memory layout, pointers, and how data is actually stored. When you later use Python, JavaScript, or Java, you will understand what those languages are doing under the hood — garbage collection, references, arrays versus linked lists. This makes you a better debugger, a better architect, and a better engineer.',
            },
            {
              type: 'bestPractices',
              title: 'Best Practices',
              items: [
                'Learning C before C++ can help, but it is a learning preference rather than a universal requirement.',
                'Use C to understand pointers before studying data structures.',
                'Build small projects (calculator, file utility) to solidify concepts.',
              ],
            },
            {
              type: 'realWorld',
              title: 'Career Opportunities',
              items: [
                'Embedded Systems Engineer — work with microcontrollers and IoT.',
                'Systems Programmer — work on OS kernels and drivers.',
                'Firmware Engineer — write code for hardware devices.',
                'Game Engine Developer — many engines use C/C++ cores.',
                'Database Engineer — contribute to databases like PostgreSQL.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Learning C Effectively',
              items: [
                'C is especially useful for learning memory layout, pointers, compilation, data representation, and resource management.',
                'Learning C before C++ can help some learners, but it is not a requirement; choose the sequence that matches your goals.',
                'Build a strong foundation in expressions, control flow, functions, arrays, strings, pointers, structures, and file I/O before advanced projects.',
                'Use a compiler with warnings enabled, read diagnostics, and test boundary cases rather than relying only on examples that appear to work.',
                'C does not automatically protect you from invalid memory access, buffer overflows, or resource leaks; careful design and testing matter.',
                'Learning a language is not enough for a job by itself. Pair C knowledge with debugging, data structures, Git, testing, and projects relevant to the role.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content:
                'Learning C gives you deep insight into memory, performance, and how computers actually work. It opens career paths in embedded systems, OS development, and high-performance computing.',
            },
          ],
        },
        {
          id: 'c-applications',
          title: 'Applications of C',
          slug: 'applications',
          description: 'Where C is used in the real world today.',
          duration: '5 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'C is everywhere — often invisibly powering the software and devices you use every day.',
            },
            {
              type: 'realWorld',
              title: 'Major Application Areas',
              items: [
                'Operating Systems: Linux, Windows, macOS kernels.',
                'Embedded Systems: Arduino, smart watches, medical devices.',
                'Databases: MySQL, PostgreSQL, SQLite, Redis.',
                'Language runtimes: CPython, the PHP interpreter, and CRuby use substantial C code; this does not mean every implementation of those languages is written in C.',
                'Network drivers and protocol stacks.',
                'Desktop applications: parts of Photoshop, AutoCAD.',
                'Game engines and graphics libraries.',
                'IoT devices and robotics.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Name three real-world applications of C.', a: 'Operating systems, embedded systems, and databases.' },
                { q: 'Which popular database engines are written in C?', a: 'MySQL, PostgreSQL, and SQLite.' },
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Where C Is Used',
              items: [
                'Systems software: operating-system kernels, device drivers, runtime libraries, and low-level utilities.',
                'Embedded and firmware: microcontrollers and devices with limited memory or strict timing requirements.',
                'Databases and networking: C is used in major database engines, protocol implementations, and performance-sensitive services.',
                'Language runtimes: CPython, PHP, and CRuby use substantial C code, but other implementations can be built with different languages.',
                'A product can combine multiple languages. Avoid saying an entire operating system, database, or application is written in C unless that claim is specifically verified.',
                'C is a tool, not a guarantee of speed: algorithm choice, compiler settings, memory access patterns, and system design also affect performance.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C powers operating systems, embedded devices, databases, compilers, and game engines — it is one of the most impactful languages in computing history.',
            },
          ],
        },
        {
          id: 'c-career',
          title: 'Career Opportunities',
          slug: 'career-opportunities',
          description: 'Job roles and career paths that value C skills.',
          duration: '5 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Knowing C opens doors to specialized, high-demand engineering roles that many developers cannot fill.',
            },
            {
              type: 'realWorld',
              title: 'Top Job Roles',
              items: [
                'Embedded Software Engineer — develops software for microcontrollers and resource-constrained devices.',
                'Systems Software Engineer — OS, drivers, virtualization.',
                'Firmware Engineer — hardware-level programming.',
                'Kernel Developer — Linux and custom OS development.',
                'Database internals engineer.',
                'Automotive software engineer (AUTOSAR, ADAS).',
              ],
            },
            {
              type: 'tips',
              title: 'Tips to Stand Out',
              items: [
                'Build at least 2 C projects on GitHub.',
                'Learn data structures in C — interviews love this.',
                'Contribute to an open-source C project (Redis, SQLite).',
                'Learn basic C++ after C — many jobs want both.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Career Preparation',
              items: [
                'Common C-heavy paths include embedded software, firmware, device drivers, operating-system work, networking, and database internals.',
                'Job requirements vary. Some roles expect C plus electronics or microcontrollers; others expect Linux, debugging, concurrency, or systems knowledge.',
                'For each project, document the problem, design choices, build steps, test cases, limitations, and what you learned.',
                'Practise reading compiler warnings, using a debugger, tracing memory bugs, and writing small tests—not only writing code from scratch.',
                'A portfolio and interview readiness depend on demonstrated skills and the target role; completing this course alone does not guarantee employment.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C is relevant to embedded, systems, and firmware roles. Each role also requires practical projects and domain-specific skills.',
            },
          ],
        },
      ],
    },
    {
      id: 'installation',
      title: 'Installation & Setup',
      icon: 'Download',
      lessons: [
        {
          id: 'c-vscode',
          title: 'VS Code Setup',
          slug: 'vscode-setup',
          description: 'Install and configure Visual Studio Code for C development.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Visual Studio Code is a free, lightweight editor perfect for C development. This lesson walks you through installing it and setting it up with a C compiler.',
            },
            {
              type: 'theory',
              title: 'What You Need',
              content: 'You need two things: the VS Code editor itself, and a C compiler. On Windows, the most common compiler is MinGW. On macOS, you install Xcode Command Line Tools. On Linux, GCC is usually pre-installed.',
            link: {
    label: 'Download VS Code',
    url: 'https://code.visualstudio.com/',
    icon: 'vscode',
  },
            },
            {
              type: 'example',
              title: 'Install Steps',
              code: {
                filename: 'terminal',
                language: 'bash',
                code: `# macOS — install command line tools
xcode-select --install

# Ubuntu/Debian — install GCC
sudo apt update && sudo apt install build-essential

# Verify installation
gcc --version`,
              },
            },
            {
              type: 'notes',
              title: 'Recommended VS Code Extensions',
              items: [
                'C/C++ by Microsoft — intellisense and debugging.',
                'Code Runner — run code with one click.',
                'C/C++ Extension Pack — bundle of useful tools.',
              ],
            },
            {
              type: 'bestPractices',
              title: 'Best Practices',
              items: [
                'Enable format on save in VS Code settings.',
                'Use the integrated terminal for compiling.',
                'Create a dedicated workspace folder for C projects.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Editor vs Compiler',
              items: [
                'VS Code is an editor, not a C compiler. Install a compiler toolchain separately and make sure its executable is available in the terminal PATH.',
                'On Windows, a MinGW-w64 toolchain is common; MSYS2 is one supported way to install and update MinGW-w64 tools.',
                'On macOS, xcode-select --install installs Apple command-line developer tools, including Clang. The gcc command may invoke Clang rather than GNU GCC.',
                'On Ubuntu/Debian, build-essential installs common build tools, including GCC and make; other Linux distributions use their own package manager.',
                'Verify the compiler with gcc --version or clang --version, then compile a .c file from the integrated terminal.',
                'An editor extension provides highlighting, completion, and debugging integration; it does not replace the compiler or debugger itself.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Install VS Code and a C compiler (GCC via MinGW, Xcode tools, or build-essential), then add the C/C++ extension. You are now ready to write and run C programs.',
            },
          ],
        },
        {
          id: 'c-mingw',
          title: 'MinGW Setup (Windows)',
          slug: 'mingw-setup',
          description: 'Install MinGW on Windows to get the GCC compiler.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'MinGW (Minimalist GNU for Windows) provides the GCC compiler on Windows so you can compile and run C programs.',
            },
            {
              type: 'theory',
              title: 'How MinGW Works',
              content: 'MinGW installs a set of development tools including gcc, g++, and make. After installation you must add the bin folder to your Windows PATH so the terminal can find the gcc command.',
            },
            {
              type: 'example',
              title: 'Verify Installation',
              code: {
                filename: 'cmd',
                language: 'bash',
                code: `# Check that the compiler is available
gcc --version

# Compile hello.c into a Windows executable
gcc hello.c -o hello.exe

# Run from Command Prompt in the current folder
hello.exe`,
              },
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Forgetting to add MinGW bin to PATH — "gcc is not recognized".',
                'Installing a toolchain but adding the wrong bin directory to PATH.',
                'Restarting the terminal after adding to PATH is required.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: Windows Build Workflow',
              items: [
                'Install a maintained MinGW-w64 toolchain, for example through MSYS2, and follow that distribution’s current setup instructions.',
                'Add the correct toolchain bin directory to PATH. Open a new terminal afterward so it receives the updated environment.',
                'Run gcc --version to check that the terminal finds the expected compiler; “command not found” or “not recognized” usually points to PATH or installation setup.',
                'Compile from the folder containing the source file: gcc hello.c -o hello.exe. The output file is an executable, not the C source.',
                'Run the program from Command Prompt with hello.exe, or from PowerShell with .\\hello.exe when the current directory is not searched automatically.',
                'Compiler version output is produced by gcc --version; it is not a command to copy into the terminal.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Install MinGW-w64, add its bin folder to your system PATH, verify with gcc --version. You can now compile C programs on Windows.',
            },
          ],
        },
        {
          id: 'c-codeblocks',
          title: 'Code::Blocks Setup',
          slug: 'codeblocks-setup',
          description: 'Install Code::Blocks — a beginner-friendly C/C++ IDE.',
          duration: '6 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Code::Blocks is a free, open-source IDE that comes bundled with a compiler (MinGW). It is great for beginners who want a one-click setup.',
            },
            {
              type: 'theory',
              title: 'Why Code::Blocks',
              content: 'Unlike VS Code, Code::Blocks does not require separate compiler configuration. Download the version "with MinGW" and you can create, compile, and run C programs immediately.',
            },
            {
              type: 'notes',
              title: 'Steps',
              items: [
                'Download codeblocks-20.03mingw-setup.exe from codeblocks.org.',
                'Run the installer with default settings.',
                'Open Code::Blocks → File → New → Project → Console Application → C.',
                'Write your code and press F9 to build and run.',
              ],
            },
            {
              type: 'notes',
              title: 'Quick Notes: IDE Setup',
              items: [
                'Choose an installer that includes a compatible compiler toolchain if you want an all-in-one Windows setup; verify that the download is from the official project source.',
                'Create a Console Application project and explicitly choose C when prompted, because IDEs may also offer C++ projects.',
                'Build first, then run. If the build fails, read the first compiler error and its file/line location before changing code.',
                'IDE keyboard shortcuts can vary by version and operating system; use the Build menu if a shortcut differs.',
                'The concepts remain the same across IDEs: source file, compiler, linker, executable, terminal input, and program output.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Code::Blocks with MinGW is the easiest all-in-one setup for beginners on Windows. Install, create a C project, and press F9 to run.',
            },
          ],
        },
      ],
    },
    {
      id: 'basics',
      title: 'C Basics',
      icon: 'FileCode',
      lessons: [
        {
          id: 'c-hello-world',
          title: 'Hello World',
          slug: 'hello-world',
          description: 'Your first C program — write, compile, and run it.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Every programmer starts with Hello World. It is the simplest program that produces visible output, and it teaches you the basic structure of a C program.',
            },
            {
              type: 'syntax',
              title: 'Structure of a C Program',
              content: 'A C program has four main parts: preprocessor directives, the main function, statements, and a return value.',
            },
            {
              type: 'example',
              title: 'Hello World Example',
              code: {
                filename: 'hello.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: {
                filename: 'output',
                language: 'bash',
                code: `Hello, World!`,
              },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content:
                '#include <stdio.h> tells the compiler to include the standard input/output library so we can use printf. int main() is the entry point — execution starts here. printf prints text to the screen. return 0 tells the operating system the program ran successfully.',
            },
            {
              type: 'notes',
              title: 'Breaking It Down',
              items: [
                '#include — preprocessor directive that includes a header file.',
                '<stdio.h> — Standard Input Output header, contains printf and scanf.',
                'int main() — the main function, returns an integer.',
                'printf() — prints formatted text to the console.',
                '\\n — newline character.',
                'return 0 — exit code, 0 means success.',
                'Every statement ends with a semicolon ;.',
              ],
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Always end statements with a semicolon.',
                'Indent your code inside functions for readability.',
                'Use \\n to move to the next line.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Forgetting the semicolon at the end of a statement.',
                'Missing the closing brace }.',
                'Forgetting #include <stdio.h> when using printf.',
                'Using printf without double quotes.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Modify the program to print your name instead of "Hello, World!".',
                'Print two lines: your name and your city.',
                'Print a sentence with a tab character \\t in the middle.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What does #include <stdio.h> do?', a: 'It includes the standard input/output header file so functions like printf and scanf can be used.' },
                { q: 'Why does main return int?', a: 'The return value is the exit status reported to the operating system — 0 means success.' },
                { q: 'What happens if you omit return 0?', a: 'In C99 and later, main implicitly returns 0, but explicitly returning 0 is best practice.' },
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: C Program Structure',
              items: [
                "Include the standard header that declares each library function you call; stdio.h declares printf.",
                "A hosted C program starts at main. Use int main(void) when no command-line arguments are needed.",
                "Statements normally end with a semicolon; braces group a function body or control-flow block.",
                "printf writes formatted text to standard output. The escape sequence \\n starts a new line.",
                "Compile and run the program yourself; syntax highlighting does not prove that code compiles.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'A C program includes headers, defines a main function, uses printf to print output, and returns 0 on success. Every statement ends with a semicolon and functions are wrapped in braces.',
            },
          ],
        },
        {
          id: 'c-input-output',
          title: 'Input & Output',
          slug: 'input-output',
          description: 'Read user input with scanf and display output with printf.',
          duration: '12 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Real programs interact with users. In C, printf sends output to the screen and scanf reads input from the keyboard.',
            },
            {
              type: 'syntax',
              title: 'Syntax',
              content: 'printf("format string", args); writes formatted output. scanf("format string", &args); reads formatted input. The & before a variable in scanf gives the memory address where input should be stored.',
            },
            {
              type: 'example',
              title: 'Example: Read and Print',
              code: {
                filename: 'input.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int age;
    char name[50];

    printf("Enter your name: ");
    if (scanf("%49s", name) != 1) return 1;

    printf("Enter your age: ");
    if (scanf("%d", &age) != 1) return 1;

    printf("Hello %s, you are %d years old.\\n", name, age);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: {
                filename: 'output',
                language: 'bash',
                code: `Enter your name: Ashutosh
Enter your age: 22
Hello Ashutosh, you are 22 years old.`,
              },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content:
                '%s is a format specifier for strings, %d for integers. Note that scanf for a string does not use & because the array name itself is already an address. For int variables, you must use & to pass the address.',
            },
            {
              type: 'notes',
              title: 'Common Format Specifiers',
              items: [
                '%d — integer (int)',
                'printf %f prints a floating-point value passed as double; scanf %f reads into float *.',
                'scanf %lf reads into double *.',
                '%c — single character',
                '%s — string (char array)',
                '%x — hexadecimal',
                '%o — octal',
                '%% — prints a literal %',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Passing the wrong argument to scanf (such as omitting & for an int) causes undefined behavior; it is not limited to a predictable crash or garbage value.',
                'A char array name usually converts to a pointer to its first element in this call, so use name with %s and a width limit; arrays are not pointer variables.',
                'Use matching format specifiers: scanf %f expects float *, while scanf %lf expects double *.',
                'scanf stops reading strings at whitespace — use fgets for full lines.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Write a program to read two numbers and print their sum.',
                'Read a character and print its ASCII value.',
                'Read a float and print it with 2 decimal places.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Safe Input and Output',
              items: [
                "printf and scanf have different requirements for floating-point formats: printf %f receives a double value, while scanf %f expects float * and scanf %lf expects double *. Format specifiers must match argument types; a mismatch can cause undefined behavior.",
                "scanf needs the address of ordinary variables, such as &age, but an array name like name already converts to a pointer to its first element.",
                "Always check scanf's return value to confirm the expected number of items was read successfully.",
                "scanf(\"%s\", name) stops at whitespace and can overflow a small buffer without a width limit; for safer line input, learn fgets.",
                "Never use untrusted input as the printf format string. Use printf(\"%s\", text) to print text as data.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'printf outputs data using format specifiers; scanf reads input using the same specifiers plus the address operator &. Master these two functions and you can build interactive C programs.',
            },
          ],
        },
        {
          id: 'c-variables',
          title: 'Variables',
          slug: 'variables',
          description: 'Store and use data with variables in C.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A variable is a named container in memory that holds a value. In C, you must declare a variable with its type before using it.',
            },
            {
              type: 'syntax',
              title: 'Syntax',
              content: 'type variableName = value;',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'variables.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int age = 22;
    float height = 5.9f;
    char grade = 'A';
    char name[] = "Ashutosh";

    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Name: Ashutosh\nAge: 22\nHeight: 5.9\nGrade: A` },
            },
            {
              type: 'notes',
              title: 'Variable Naming Rules',
              items: [
                'Must start with a letter or underscore.',
                'Can contain letters, digits, and underscores.',
                'Case-sensitive — age and Age are different.',
                'Cannot use C keywords (int, return, etc.).',
                'Use descriptive names — totalScore not ts.',
              ],
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Initialize variables when you declare them to avoid garbage values.',
                'Use camelCase or snake_case consistently.',
                'Constants can be created with const or #define.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Declare variables for a student: name, roll number, marks, grade.',
                'Swap values of two variables using a third variable.',
                'Declare a constant PI and calculate the area of a circle.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Variables',
              items: [
                "A declaration gives a variable a type and name; initialization also provides its first value.",
                "Local automatic variables that are not initialized have indeterminate values. Do not read them before assigning a valid value.",
                "Identifiers are case-sensitive and must follow C naming rules; keywords such as int cannot be used as variable names.",
                "Choose a type that represents the required range and meaning; do not assume every platform uses the same type sizes.",
                "Scope determines where a name can be used, while storage duration determines how long the object exists.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Variables store data in memory. Declare them with a type and a name, initialize them to avoid garbage, and follow naming rules for clean, readable code.',
            },
          ],
        },
        {
          id: 'c-data-types',
          title: 'Data Types',
          slug: 'data-types',
          description: 'Understand int, float, char, double, and more.',
          duration: '12 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Data types tell the compiler what kind of data a variable holds and how much memory to allocate. C has several categories of data types.',
            },
            {
              type: 'theory',
              title: 'Primary Data Types',
              content: 'The fundamental types in C are int (integers), float (single-precision floating point), double (double-precision), and char (single character). Each has variations like short, long, signed, and unsigned.',
            },
            {
              type: 'example',
              title: 'Example with Sizes',
              code: {
                filename: 'datatypes.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int a = 10;
    float b = 5.75f;
    double c = 19.99;
    char d = 'C';

    printf("int: %d, size: %zu bytes\\n", a, sizeof(int));
    printf("float: %f, size: %zu bytes\\n", b, sizeof(float));
    printf("double: %f, size: %zu bytes\\n", c, sizeof(double));
    printf("char: %c, size: %zu bytes\\n", d, sizeof(char));
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Example output (sizes vary by platform):\nint: 10, size: 4 bytes\nfloat: 5.750000, size: 4 bytes\ndouble: 19.990000, size: 8 bytes\nchar: C, size: 1 byte` },
            },
            {
              type: 'notes',
              title: 'Data Type Table',
              items: [
                'int — size and range are implementation-dependent; use <limits.h> when exact limits matter.',
                'float — commonly 4 bytes with about 6–7 decimal digits precision; implementation details can vary.',
                'double — commonly 8 bytes with about 15 decimal digits precision; implementation details can vary.',
                'char — 1 byte — single character or small integer.',
                'short — at least 16 bits; its exact size is implementation-dependent.',
                'long — at least 32 bits; its exact size depends on the implementation and data model.',
                'unsigned int — non-negative integers only.',
              ],
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Use double when precision matters more than memory.',
                'Use unsigned when a value can never be negative.',
                'sizeof() helps you check sizes on your system.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is the size of int on a 64-bit system?', a: 'Typically 4 bytes, but the standard only guarantees a minimum — use sizeof to verify.' },
                { q: 'Difference between float and double?', a: 'float is 4 bytes with ~7 digits precision; double is 8 bytes with ~15 digits precision.' },
                { q: 'What does sizeof return?', a: 'The number of bytes a type or variable occupies in memory.' },
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: C Data Types',
              items: [
                "Integer types include char, short, int, long, and long long, with signed and unsigned variants where supported.",
                "void represents no value in contexts such as a function return type; _Bool represents 0 or 1, and stdbool.h provides bool, true, and false names in C99 and later.",
                "float, double, and long double represent floating-point values; floating-point calculations can involve rounding.",
                "sizeof returns a size in bytes and its result type is size_t, printed with %zu. Exact sizes vary by implementation.",
                "char is an integer type capable of representing a byte-sized character value; use single quotes for character constants such as 'C'.",
                "Use limits from <limits.h> and <float.h> when exact ranges matter instead of assuming int is always 4 bytes.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C has int, float, double, and char as primary types, with modifiers like short, long, signed, and unsigned. Use sizeof to check sizes on your platform.',
            },
          ],
        },
        {
          id: 'c-operators',
          title: 'Operators',
          slug: 'operators',
          description: 'Arithmetic, relational, logical, bitwise, and assignment operators.',
          duration: '14 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Operators are symbols that perform operations on variables and values. C has a rich set of operators grouped into categories.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'operators.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int a = 10, b = 3;

    // Arithmetic
    printf("a + b = %d\\n", a + b);
    printf("a %% b = %d\\n", a % b);

    // Relational
    printf("a > b: %d\\n", a > b);

    // Logical
    printf("(a > 5 && b < 5): %d\\n", (a > 5 && b < 5));

    // Assignment
    a += 5;
    printf("a += 5 → %d\\n", a);

    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `a + b = 13\na % b = 1\na > b: 1\n(a > 5 && b < 5): 1\na += 5 → 15` },
            },
            {
              type: 'notes',
              title: 'Operator Categories',
              items: [
                'Arithmetic: + - * / %',
                'Relational: == != > < >= <=',
                'Logical: && || !',
                'Bitwise: & | ^ ~ << >>',
                'Assignment: = += -= *= /= %=',
                'Increment/Decrement: ++ --',
                'Conditional (ternary): condition ? x : y',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Using = (assignment) instead of == (comparison).',
                'Integer division: 5 / 2 gives 2, not 2.5 — cast to float.',
                'Forgetting that % requires integer operands.',
                'Confusing && and & (logical vs bitwise).',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Write a program to check if a number is even or odd using %.',
                'Swap two numbers without a third variable using arithmetic.',
                'Use the ternary operator to find the max of two numbers.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Operators',
              items: [
                "Arithmetic operators include +, -, *, /, and %. Integer division discards the fractional part; % is for integer operands.",
                "Relational and equality operators produce 0 or 1 in C. Do not confuse = (assignment) with == (comparison).",
                "&& and || short-circuit: the right operand is evaluated only when needed to determine the result.",
                "Operator precedence affects grouping; use parentheses when they make the intended expression clearer.",
                "Bitwise operators (&, |, ^, ~, <<, >>) operate on integer bits; they are different from logical operators && and ||.",
                "The conditional operator (condition ? value1 : value2) is a compact expression form; do not confuse it with an if statement.",
                "Avoid modifying the same scalar object multiple times in one expression unless evaluation order is fully understood.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C operators include arithmetic, relational, logical, bitwise, assignment, increment, and ternary. Watch out for = vs == and integer division.',
            },
          ],
        },
        {
          id: 'c-type-casting',
          title: 'Type Casting',
          slug: 'type-casting',
          description: 'Convert between data types explicitly and implicitly.',
          duration: '8 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Type casting converts a value from one data type to another. C supports both implicit (automatic) and explicit (manual) casting.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'casting.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int a = 5, b = 2;

    // Implicit — integer division
    float result1 = a / b;
    printf("Without cast: %f\\n", result1);

    // Explicit — float division
    float result2 = (float)a / b;
    printf("With cast: %f\\n", result2);

    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Without cast: 2.000000\nWith cast: 2.500000` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: 'Without casting, a / b does integer division (5/2 = 2) before assigning to the float. With (float)a, the division becomes floating-point and gives 2.5.',
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Cast to float before division to avoid losing the decimal part.',
                'Casting does not change the original variable — it creates a temporary converted value.',
                'Be careful when casting float to int — the decimal part is truncated, not rounded.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Type Conversion',
              items: [
                "Implicit conversions happen automatically according to C's conversion rules; explicit casts request a conversion.",
                "If both operands of division are integers, the fractional part is discarded before assignment to a floating-point variable.",
                "Cast one operand before division, such as (double)a / b, when you need a fractional result.",
                "Converting a value to a type that cannot represent it may change the value; floating-to-integer conversion discards the fractional part when representable.",
                "A cast does not automatically make an unsafe operation safe; understand the source and destination types.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Type casting converts values between types. Implicit casting is automatic; explicit casting uses (type)value. Cast before division to preserve decimals.',
            },
          ],
        },
      ],
    },
    {
      id: 'control-flow',
      title: 'Decision Making & Loops',
      icon: 'GitBranch',
      lessons: [
        {
          id: 'c-decision',
          title: 'Decision Making',
          slug: 'decision-making',
          description: 'if, else if, switch, and nested conditionals.',
          duration: '14 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Decision making lets your program take different paths based on conditions. C uses if, else if, else, and switch statements.',
            },
            {
              type: 'example',
              title: 'if-else Example',
              code: {
                filename: 'decision.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int score;
    printf("Enter your score: ");
    if (scanf("%d", &score) != 1) return 1;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 75) {
        printf("Grade: B\\n");
    } else if (score >= 60) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    return 0;
}`,
              },
            },
            {
              type: 'example',
              title: 'switch Example',
              code: {
                filename: 'switch.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        default: printf("Invalid day\\n");
    }
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Wednesday` },
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Forgetting break in switch — causes fall-through to the next case.',
                'Using = instead of == in conditions.',
                'Missing braces {} around multi-line if blocks.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Check if a number is positive, negative, or zero.',
                'Write a calculator using switch (add, subtract, multiply, divide).',
                'Find the largest of three numbers.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Conditions',
              items: [
                "if and else choose branches based on whether an expression compares unequal to zero.",
                "Use else if for mutually exclusive ranges and order conditions from the most specific or highest threshold when needed.",
                "switch works with integer types and enum values; case labels must be constant expressions.",
                "break exits the nearest switch or loop. Without break, execution can fall through to the next case.",
                "Validate input before using it in a condition, and include a default branch when appropriate.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Use if-else for range checks and complex conditions, switch for fixed value matching. Always break after switch cases to prevent fall-through.',
            },
          ],
        },
        {
          id: 'c-loops',
          title: 'Loops',
          slug: 'loops',
          description: 'for, while, and do-while loops for repetition.',
          duration: '15 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Loops let you repeat a block of code multiple times. C has three loops: for, while, and do-while.',
            },
            {
              type: 'example',
              title: 'for Loop',
              code: {
                filename: 'forloop.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("Iteration %d\\n", i);
    }
    return 0;
}`,
              },
            },
            {
              type: 'example',
              title: 'while Loop',
              code: {
                filename: 'whileloop.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int n = 5;
    while (n > 0) {
        printf("Countdown: %d\\n", n);
        n--;
    }
    return 0;
}`,
              },
            },
            {
              type: 'example',
              title: 'do-while Loop',
              code: {
                filename: 'dowhile.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int i = 1;
    do {
        printf("Run %d\\n", i);
        i++;
    } while (i <= 3);
    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'When to Use Which',
              items: [
                'for — when you know the number of iterations in advance.',
                'while — when the condition is checked before each iteration.',
                'do-while — when the body must run at least once.',
                'break — exits the loop immediately.',
                'continue — skips to the next iteration.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Print the multiplication table of a number using a for loop.',
                'Find the factorial of a number using a while loop.',
                'Print all even numbers from 1 to 100 using continue.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Difference between while and do-while?', a: 'while checks the condition before the body; do-while checks after, so the body always runs at least once.' },
                { q: 'What does break do?', a: 'It immediately exits the nearest enclosing loop or switch.' },
                { q: 'What does continue do?', a: 'It skips the rest of the current iteration and moves to the next.' },
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Loops',
              items: [
                "for is useful when initialization, continuation condition, and update fit together; while checks its condition before each iteration.",
                "do-while executes its body at least once because the condition is checked afterward.",
                "Make sure loop state changes so the termination condition can eventually become false; otherwise the loop may run forever.",
                "break exits the nearest loop; continue skips to the next iteration according to that loop's rules.",
                "Check loop boundaries carefully: array indexes commonly run from 0 through length - 1, not through length.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'C has three loops: for (known count), while (condition first), do-while (body first). Use break to exit and continue to skip iterations.',
            },
          ],
        },
      ],
    },
    {
      id: 'functions',
      title: 'Functions & Recursion',
      icon: 'FunctionSquare',
      lessons: [
        {
          id: 'c-functions',
          title: 'Functions',
          slug: 'functions',
          description: 'Break programs into reusable, modular functions.',
          duration: '15 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A function is a reusable block of code that performs a specific task. Functions help you organize code, avoid repetition, and make programs easier to maintain.',
            },
            {
              type: 'syntax',
              title: 'Syntax',
              content: 'returnType functionName(parameters) { body; return value; }',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'functions.c',
                language: 'c',
                code: `#include <stdio.h>

// Function declaration
int add(int a, int b) {
    return a + b;
}

void greet(const char *name) {
    printf("Hello, %s!\\n", name);
}

int main(void) {
    greet("Ashutosh");
    int sum = add(10, 20);
    printf("Sum = %d\\n", sum);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Hello, Ashutosh!\nSum = 30` },
            },
            {
              type: 'notes',
              title: 'Key Concepts',
              items: [
                'Declaration (prototype) — tells the compiler the function exists.',
                'Definition — the actual body of the function.',
                'Call — using the function by name.',
                'Parameters — values passed into the function.',
                'Return type — the type of value the function returns (void = none).',
                'Pass by value — C passes copies of arguments by default.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Write a function to check if a number is prime.',
                'Write a function to calculate the factorial of a number.',
                'Write a function that swaps two numbers using pointers.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Functions',
              items: [
                "A function declaration (prototype) tells the compiler the function's name, return type, and parameter types before a call.",
                "Parameters receive argument values; ordinary C arguments are passed by value. A pointer can be passed when a function must modify an object owned by its caller.",
                "A command-line program can declare int main(int argc, char *argv[]) to receive the argument count and argument strings.",
                "A function pointer stores a function address and enables callbacks or dispatch tables; its type must match the function signature.",
                "Use void as the return type when a function returns no value, and do not use a returned value after a function that promises none.",
                "Keep function responsibilities focused and give parameters and return values clear meanings.",
                "Use int main(void) for a program that accepts no command-line arguments; use the standard argc/argv form when arguments are needed.",
                "For your own no-parameter functions, write void function_name(void) to state clearly that no arguments are accepted; empty parentheses in older C declarations do not express that as clearly.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Functions are reusable code blocks with a return type, name, parameters, and body. C passes arguments by value — use pointers to modify originals.',
            },
          ],
        },
        {
          id: 'c-recursion',
          title: 'Recursion',
          slug: 'recursion',
          description: 'Functions that call themselves — with classic examples.',
          duration: '12 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a base case to stop, otherwise it runs forever.',
            },
            {
              type: 'example',
              title: 'Factorial Using Recursion',
              code: {
                filename: 'recursion.c',
                language: 'c',
                code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1)         // base case
        return 1;
    return n * factorial(n - 1);  // recursive call
}

int main(void) {
    printf("5! = %d\\n", factorial(5));
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `5! = 120` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: 'factorial(5) calls factorial(4), which calls factorial(3), and so on until factorial(1) returns 1 (the base case). Then the calls unwind: 2*1, 3*2, 4*6, 5*24 = 120.',
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Always define a base case first.',
                'Each recursive call should move toward the base case.',
                'Recursion uses stack memory — deep recursion can cause stack overflow.',
                'Some problems (like Fibonacci) are clearer with iteration for large inputs.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is a base case in recursion?', a: 'The condition that stops the recursion. Without it, the function calls itself infinitely and crashes.' },
                { q: 'What is stack overflow in recursion?', a: 'Each recursive call uses stack memory. Too many calls without reaching the base case exhausts the stack.' },
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Print Fibonacci series up to n terms using recursion.',
                'Find the sum of digits of a number using recursion.',
                'Reverse a string using recursion.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Recursion',
              items: [
                "A recursive function calls itself directly or indirectly to solve a smaller version of a problem.",
                "A base case must stop recursion; without a reachable base case, calls can continue until resources are exhausted.",
                "Each call has its own parameters and local variables, so deep recursion can consume substantial stack space.",
                "Factorial is defined here only for non-negative integers; int can overflow even for relatively small inputs, so validate inputs and choose types carefully.",
                "Use iteration when it is simpler or when input depth could be very large.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Recursion is a function calling itself with a smaller input, stopped by a base case. It is elegant for problems like factorial, Fibonacci, and tree traversal — but watch for stack overflow.',
            },
          ],
        },
      ],
    },
    {
      id: 'arrays-strings',
      title: 'Arrays & Strings',
      icon: 'List',
      lessons: [
        {
          id: 'c-arrays',
          title: 'Arrays',
          slug: 'arrays',
          description: 'Store multiple values of the same type in one variable.',
          duration: '15 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'An array is a collection of values of the same type stored in contiguous memory. You access elements by index, starting from 0.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'arrays.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++) {
        printf("Element %d = %d\\n", i, numbers[i]);
    }

    // Sum of array
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Element 0 = 10\nElement 1 = 20\nElement 2 = 30\nElement 3 = 40\nElement 4 = 50\nSum = 150` },
            },
            {
              type: 'notes',
              title: 'Key Points',
              items: [
                'Array indices start at 0 and go up to size-1.',
                'Arrays are stored in contiguous memory locations.',
                'In most expressions, an array expression converts to a pointer to its first element; arrays and pointers are different types, and this conversion has exceptions such as sizeof and unary &.',
                'You cannot change the size of an array after declaration.',
                '2D arrays: int matrix[rows][cols] represent grids.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Accessing index out of bounds — undefined behavior.',
                'Forgetting that the last index is size-1, not size.',
                'Not initializing array elements — they contain garbage.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Find the largest and smallest element in an array.',
                'Reverse an array in place.',
                'Sort an array using bubble sort.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Arrays',
              items: [
                "An array stores a fixed number of elements of the same type in contiguous memory.",
                "Array indexes start at 0; for an array of length n, valid indexes are 0 through n - 1.",
                "C does not automatically check array bounds. Accessing an index outside the array is undefined behavior.",
                "When an array is passed to a function, the parameter is adjusted to a pointer; the function does not automatically receive the array length.",
                "Initialize arrays deliberately and pass the element count separately when a function needs to know how many elements it may access.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Arrays store same-type elements contiguously and use zero-based indexes. Array expressions often convert to pointers, but arrays and pointers are not interchangeable; C does not automatically check array bounds.',
            },
          ],
        },
        {
          id: 'c-strings',
          title: 'Strings',
          slug: 'strings',
          description: 'Work with character arrays and string functions.',
          duration: '14 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'In C, a string is a one-dimensional array of characters terminated by a null character \\0. C provides the <string.h> library with useful string functions.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'strings.c',
                language: 'c',
                code: `#include <stdio.h>
#include <string.h>

int main(void) {
    char str1[] = "CraftC";
    char str2[20];

    strcpy(str2, str1);              // safe here: str2 has enough capacity
    printf("Copied: %s\\n", str2);

    printf("Length: %zu\\n", strlen(str1));

    strcat(str2, " is awesome");     // safe here: destination has enough capacity
    printf("Concatenated: %s\\n", str2);

    if (strcmp(str1, "CraftC") == 0)
        printf("Strings are equal\\n");

    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Copied: CraftC\nLength: 6\nConcatenated: CraftC is awesome\nStrings are equal` },
            },
            {
              type: 'notes',
              title: 'String Functions (string.h)',
              items: [
                'strlen(s) — returns the number of characters before the terminating \\0; it does not count the terminator.',
                'strcpy(dest, src) — copies the string including \\0; dest must have enough space for the entire source string.',
                'strcat(dest, src) — appends the source including its terminator; dest must already contain a valid string and have enough remaining capacity.',
                'strcmp(s1, s2) — compares strings lexicographically; 0 means equal, a negative value means less than, and a positive value means greater than.',
                'strrev(s) is not part of the ISO C standard library; avoid relying on it in portable C programs.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Forgetting the null terminator — strings need \\0 at the end.',
                'Not allocating enough space for the full string plus the terminating \\0 before using strcpy/strcat; these functions do not check destination capacity.',
                'Comparing strings with == instead of strcmp.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: C Strings',
              items: [
                "A C string is a sequence of char values terminated by the null character '\\0'; the terminator needs space in the array.",
                "strlen counts characters before the null terminator, not the full allocated capacity of the array.",
                "strcpy and strcat do not know the destination buffer capacity; ensure enough space before calling them.",
                "strcmp returns a negative, zero, or positive value depending on lexicographic ordering; test == 0 to check equality.",
                "Prefer bounded input such as fgets and always account for the final null terminator.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Strings in C are char arrays ending with \\0. Use <string.h> functions for length, copy, concatenate, and compare. Never compare with ==.',
            },
          ],
        },
      ],
    },
    {
      id: 'pointers',
      title: 'Pointers',
      icon: 'MousePointer',
      lessons: [
        {
          id: 'c-pointers',
          title: 'Pointers',
          slug: 'pointers',
          description: 'The most important topic in C — memory addresses explained simply.',
          duration: '20 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A pointer is a variable that stores the memory address of another variable. Pointers are the most powerful — and most misunderstood — feature of C. Master them and you understand C.',
            },
            {
              type: 'theory',
              title: 'The Core Idea',
              content: 'Every variable lives at a memory address. The & operator gives you that address. A pointer variable stores that address. The * operator dereferences the pointer — it reads the value at that address.',
            },
            {
              type: 'syntax',
              title: 'Syntax',
              content: 'type *pointerName; — declare. &variable — get address. *pointer — dereference (get value at address).',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'pointers.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    int x = 42;
    int *ptr = &x;   // ptr stores the address of x

    printf("Value of x: %d\\n", x);
    printf("Address of x: %p\\n", (void*)&x);
    printf("ptr points to: %p\\n", (void*)ptr);
    printf("Value via *ptr: %d\\n", *ptr);

    *ptr = 100;      // change x through the pointer
    printf("New value of x: %d\\n", x);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Value of x: 42\nAddress of x: implementation-dependent\nptr points to: same address as x\nValue via *ptr: 42\nNew value of x: 100` },
            },
            {
              type: 'explanation',
              title: 'Explanation',
              content: '&x gives the address of x. ptr stores that address. *ptr reads the value at that address (42). By writing *ptr = 100, we change the value at that address — so x becomes 100 without touching x directly.',
            },
            {
              type: 'notes',
              title: 'Pointer Essentials',
              items: [
                '& — address-of operator.',
                '* — dereference operator (value at address).',
                'Use a pointer type compatible with the object type; void * can hold an object pointer value generically, with appropriate conversion before dereferencing.',
                'An uninitialized pointer may contain an indeterminate value — do not dereference it.',
                'A null pointer value does not point to an object or function; check it before dereferencing.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Dereferencing an uninitialized pointer — crash or corruption.',
                'Confusing * in declaration vs * as dereference operator.',
                'Forgetting & when passing to a function that expects a pointer.',
                'Not checking whether a pointer is null before dereferencing it; invalid dereferences cause undefined behavior, not a guaranteed specific symptom.'
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is a pointer?', a: 'A variable that stores the memory address of another variable.' },
                { q: 'Difference between & and *?', a: '& gives the address of a variable; * dereferences a pointer to access the value at that address.' },
                { q: 'What is a null pointer?', a: 'A null pointer value compares unequal to every pointer to an object or function. Dereferencing it has undefined behavior; it may crash, but a crash is not guaranteed.' },
                { q: 'What is a dangling pointer?', a: 'A pointer that still holds the address of memory that has been freed — using it is undefined behavior.' },
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Write a program to swap two numbers using pointers.',
                'Print the address and value of 5 variables using pointers.',
                'Write a function that doubles a number using a pointer parameter.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Pointers',
              items: [
                "A pointer stores an address or a null pointer value. The type tells the compiler what kind of object the pointer can point to.",
                "&x obtains an object's address; *ptr dereferences a valid pointer to access the pointed-to object.",
                "Initialize pointers before use. Dereferencing a null, dangling, uninitialized, or otherwise invalid pointer causes undefined behavior.",
                "Pointer arithmetic is only defined within an array object and one position past its end; the one-past pointer must not be dereferenced.",
                "A void pointer (void *) can hold an object pointer value generically, but must be converted to an appropriate object-pointer type before dereferencing.",
                "A pointer-to-pointer stores the address of another pointer; a function pointer stores a function address and uses a function-type declaration.",
                "Use %p to print an address and pass (void *)pointer to match printf's %p conversion.",
                "const int *p prevents modification through p; int *const p prevents p itself from being reassigned after initialization.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Pointers store memory addresses. Use & to get an address, * to read or change the value at that address. Always initialize pointers and check for NULL before dereferencing.',
            },
          ],
        },
      ],
    },
    {
      id: 'structures',
      title: 'Structures, Unions & Enums',
      icon: 'Box',
      lessons: [
        {
          id: 'c-structures',
          title: 'Structures',
          slug: 'structures',
          description: 'Group related data into custom types.',
          duration: '15 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A structure lets you group different types of variables under one name. It is C\'s way of creating custom data types — like a record or an object without methods.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'struct.c',
                language: 'c',
                code: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int rollNo;
    float marks;
};

int main(void) {
    struct Student s1;
    strcpy(s1.name, "Ashutosh");
    s1.rollNo = 101;
    s1.marks = 92.5;

    printf("Name: %s\\n", s1.name);
    printf("Roll No: %d\\n", s1.rollNo);
    printf("Marks: %.1f\\n", s1.marks);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Name: Ashutosh\nRoll No: 101\nMarks: 92.5` },
            },
            {
              type: 'notes',
              title: 'Key Concepts',
              items: [
                'Use struct keyword to define a structure.',
                'Access members with the dot operator (.).',
                'When using pointers to structs, use the arrow operator (->).',
                'Structures can be passed to functions and returned from them.',
                'typedef can simplify struct usage.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Questions',
              items: [
                'Create a struct for a Book (title, author, price) and display it.',
                'Create an array of 3 students and print all of them.',
                'Write a function that takes a struct pointer and modifies it.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Structures',
              items: [
                "A struct groups named members, potentially of different types, into one object.",
                "Use the dot operator (.) to access a member through a struct object and the arrow operator (->) through a pointer to a struct.",
                "Struct assignment copies member values, including array members as part of the structure object; it does not deep-copy memory referenced by pointer members.",
                "Padding may be added between members, so sizeof(struct Type) can exceed the sum of member sizes.",
                "Use designated initializers in C99 and later when they make member initialization clearer.",
                "typedef creates a type alias; it does not create a new distinct type by itself.",
                "Self-referential structures can contain pointers to the same struct type and are commonly used to build linked lists and trees."
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Structures group different data types into one unit. Access members with . (direct) or -> (via pointer). They are the foundation for building complex data in C.',
            },
          ],
        },
        {
          id: 'c-unions',
          title: 'Unions',
          slug: 'unions',
          description: 'Like structures but sharing the same memory.',
          duration: '8 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'A union is like a structure, but all its members share the same memory location. Only one member can hold a value at a time, so unions save memory when you need to store different types at different times.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'union.c',
                language: 'c',
                code: `#include <stdio.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main(void) {
    union Data d;
    d.i = 10;
    printf("d.i = %d\\n", d.i);

    d.f = 220.5;
    printf("d.f = %.1f\\n", d.f);  // d.f is the member most recently written

    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'Key Points',
              items: [
                'All members share the same memory — size equals the largest member.',
                'Only one member is valid at a time.',
                'Useful for type punning and memory-constrained systems.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Unions',
              items: [
                "All union members share the same storage, so the union is large enough for its largest member plus any required alignment.",
                "A union is useful when a program stores one of several alternative representations at a time.",
                "Track which member is currently meaningful; reading another member is not a portable way to retrieve the old value and may produce an implementation-dependent or invalid representation.",
                "Use a tagged union pattern—an enum or other tag plus the union—to record which member is active.",
                "Unlike a struct, whose members occupy separate storage, union members overlap.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Unions let multiple members share one memory location, saving space when only one value is needed at a time.',
            },
          ],
        },
        {
          id: 'c-enums',
          title: 'Enums',
          slug: 'enums',
          description: 'Named integer constants for readable code.',
          duration: '6 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'An enum (enumeration) assigns names to integer constants, making code more readable.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'enum.c',
                language: 'c',
                code: `#include <stdio.h>

enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };

int main(void) {
    enum Day today = WED;
    printf("Day number: %d\\n", today);  // WED = 2
    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'Short Notes: Enumerations',
              items: [
                "An enum defines named integer constants, making code more readable than unexplained numeric values.",
                "Unless explicitly assigned, the first enumerator has value 0 and each following enumerator increments by one.",
                "You can assign explicit values, but duplicate values are allowed and may be intentional.",
                "Use enum names in conditions and switch statements to make the meaning of each case clear.",
                "An enum's compatible integer type and representation are implementation-defined within the language rules; do not assume a specific size without checking.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Enums give names to integer constants, improving readability. Values start at 0 by default and increase by 1.',
            },
          ],
        },
      ],
    },
    {
      id: 'memory',
      title: 'Memory & Files',
      icon: 'Database',
      lessons: [
        {
          id: 'c-storage-classes',
          title: 'Storage Classes',
          slug: 'storage-classes',
          description: 'auto, register, static, and extern.',
          duration: '10 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Storage-class specifiers affect an identifier’s storage duration, linkage, or declaration role. The four commonly taught specifiers are auto, register, static, and extern. The C standard also includes typedef and, since C11, _Thread_local; these do not all describe the same kind of storage behavior.',
            },
            {
              type: 'notes',
              title: 'Storage-Class Specifiers',
              items: [
                'auto — the usual default for block-scope local objects; gives automatic storage duration. The object normally exists while its block is active and is not automatically initialized.',
                'register — requests that an object be placed in a fast-access register if practical; it is only a hint, not a guarantee. You cannot apply the address-of operator (&) to an object declared register.',
                'static at block scope — gives the object static storage duration. It is initialized once and retains its value for the entire program execution, but its name remains visible only in that block.',
                'static at file scope — gives an object or function internal linkage, restricting that name to the current translation unit. A file-scope object already has static storage duration even without the static keyword.',
                'extern — declares an object or function that may be defined elsewhere. An extern declaration is not automatically a definition; linkage and whether storage is defined depend on the declaration context.',
                'typedef — creates a type alias; despite being classified syntactically as a storage-class specifier, it does not give an object a storage duration.',
                '_Thread_local (C11) — gives an object thread storage duration, so each thread has its own instance. It can be combined with static or extern; C23 also provides the spelling thread_local.',
              ],
            },
            {
              type: 'example',
              title: 'Block-Scope static vs File-Scope static',
              code: {
                filename: 'static.c',
                language: 'c',
                code: `#include <stdio.h>

static int module_calls = 0; // internal linkage: this file only

void counter(void) {
    static int count = 0;     // block scope, static storage duration
    count++;
    module_calls++;
    printf("Local count: %d\\n", count);
    printf("Module calls: %d\\n", module_calls);
}

int main(void) {
    counter();
    counter();
    counter();
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `Local count: 1\nModule calls: 1\nLocal count: 2\nModule calls: 2\nLocal count: 3\nModule calls: 3` },
            },
            {
              type: 'notes',
              title: 'Scope, Linkage, and Storage Duration',
              items: [
                'Scope answers where a name can be used: block, function, function-prototype, or file scope.',
                'Linkage answers whether declarations in different scopes or translation units can refer to the same entity: no linkage, internal linkage, or external linkage.',
                'Storage duration answers how long an object exists: automatic, static, thread, or allocated.',
                'A block-scope static variable has block scope but static storage duration; these terms are not interchangeable.',
                'A file-scope object has static storage duration whether or not it is declared static. Adding static changes its linkage to internal.',
                'Do not assume every extern declaration allocates memory. A declaration can refer to an existing definition in another translation unit.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is the difference between scope and storage duration?', a: 'Scope describes where a name is visible; storage duration describes how long the object exists.' },
                { q: 'What does static mean inside a function?', a: 'The name has block scope, but the object has static storage duration and retains its value between calls.' },
                { q: 'What does static mean at file scope?', a: 'It gives the file-scope object or function internal linkage, limiting that name to the current translation unit.' },
                { q: 'Is extern always a definition?', a: 'No. It commonly declares an object or function defined elsewhere; whether a declaration is also a definition depends on its exact form and context.' },
                { q: 'Does register guarantee CPU-register storage?', a: 'No. It is only a hint, and modern compilers choose placement. The address-of operator cannot be applied to a register-declared object.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Learn scope, linkage, and storage duration as three separate ideas. The effect of static changes with its scope; extern usually declares an entity defined elsewhere; typedef creates a type alias; and _Thread_local provides one object instance per thread.',
            },
          ],
        },
        {
          id: 'c-dma',
          title: 'Dynamic Memory Allocation',
          slug: 'dynamic-memory-allocation',
          description: 'malloc, calloc, realloc, and free.',
          duration: '16 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Dynamic memory allocation lets a C program request and release memory while it runs. The allocation functions are declared in <stdlib.h>. Allocated storage remains available until it is released with free or the program ends; it is not automatically managed like a local automatic variable.',
            },
            {
              type: 'notes',
              title: 'The Four Memory Functions',
              items: [
                'malloc(size) — requests size bytes. The contents are uninitialized, so read only after you have stored valid values. It returns NULL if the request cannot be satisfied.',
                'calloc(count, size) — requests space for count elements, each size bytes, and initializes every byte to zero. This is not a guarantee that every possible pointer or floating-point value becomes its semantic null or 0.0 value.',
                'realloc(ptr, new_size) — changes the size of a previously allocated block and may move it. On failure for a nonzero size, it returns NULL and the original block remains allocated and unchanged.',
                'free(ptr) — releases a block previously returned by an allocation function. free(NULL) is safe; freeing an invalid pointer or freeing the same block twice causes undefined behavior.',
                'In C, include <stdlib.h> and do not cast the return value of malloc, calloc, or realloc.',
                'Use sizeof *pointer when allocating an array; it keeps the element size tied to the pointed-to type if that type changes.',
              ],
            },
            {
              type: 'example',
              title: 'Allocate, Resize, and Free Safely',
              code: {
                filename: 'dma.c',
                language: 'c',
                code: `#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main(void) {
    size_t count = 3;

    if (count > SIZE_MAX / sizeof(int)) {
        fprintf(stderr, "Requested size is too large.\\n");
        return 1;
    }

    int *numbers = malloc(count * sizeof *numbers);
    if (numbers == NULL) {
        fprintf(stderr, "Initial allocation failed.\\n");
        return 1;
    }

    for (size_t i = 0; i < count; i++) {
        numbers[i] = (int)(i + 1);
    }

    size_t new_count = 5;
    if (new_count > SIZE_MAX / sizeof *numbers) {
        free(numbers);
        fprintf(stderr, "Requested size is too large.\\n");
        return 1;
    }

    int *resized = realloc(numbers, new_count * sizeof *numbers);
    if (resized == NULL) {
        // The original numbers block is still valid.
        free(numbers);
        fprintf(stderr, "Resize failed.\\n");
        return 1;
    }

    numbers = resized;
    for (size_t i = count; i < new_count; i++) {
        numbers[i] = (int)(i + 1);
    }

    for (size_t i = 0; i < new_count; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");

    free(numbers);
    numbers = NULL;
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
              type: 'notes',
              title: 'Important Rules and Safety',
              items: [
                'Always check allocation results against NULL before using the returned pointer.',
                'If realloc fails for a nonzero requested size, the original allocation remains valid. Store the result in a temporary pointer so you do not lose the original address.',
                'If realloc succeeds, the old pointer is invalidated—even if the block happens to remain at the same address. Use the returned pointer.',
                'Only pass free a pointer returned by an allocation function, or NULL. Do not pass an interior pointer such as ptr + 1.',
                'After free, do not access the released memory. Setting one pointer variable to NULL does not clear other pointers that may refer to the same block.',
                'A memory leak occurs when allocated storage becomes unreachable without being freed. A dangling pointer refers to storage that is no longer valid.',
                'Avoid realloc(ptr, 0) in portable teaching examples; zero-size behavior has changed across C standard versions and implementations.',
                'Check multiplication before allocating count * sizeof(element), because an overflow can produce a smaller allocation than intended.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Reading malloc memory before initializing it.',
                'Overwriting the only pointer with realloc directly: ptr = realloc(ptr, size). If realloc fails, the original allocation address is lost.',
                'Using a pointer after free, or freeing the same allocation more than once.',
                'Assuming calloc makes every object representation a semantic null pointer or floating-point 0.0.',
                'Forgetting to check whether allocation size calculations overflow.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What is the difference between malloc and calloc?', a: 'malloc requests one block of bytes without initializing its contents. calloc requests space for an array and sets all bytes in the allocated space to zero.' },
                { q: 'Why should realloc be assigned to a temporary pointer?', a: 'If realloc fails for a nonzero size, it returns NULL and leaves the original block allocated. A temporary pointer prevents losing the original address.' },
                { q: 'What happens if malloc fails?', a: 'It returns NULL. Check the result before dereferencing it.' },
                { q: 'Is free(NULL) valid?', a: 'Yes. It has no effect.' },
                { q: 'What is a dangling pointer?', a: 'A pointer whose target object or allocated storage is no longer valid, often because the storage was freed.' },
                { q: 'Does calloc guarantee null pointers for pointer elements?', a: 'No. It sets all bytes to zero, but the C standard does not require an all-bits-zero representation to be a null pointer representation.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Use malloc or calloc to allocate, realloc to resize, and free to release. Check for NULL, guard allocation-size calculations against overflow, initialize memory before reading it, and preserve the original pointer when realloc fails.',
            },
          ],
        },
        {
          id: 'c-file-handling',
          title: 'File Handling',
          slug: 'file-handling',
          description: 'Read, write, append, and safely manage text and binary files.',
          duration: '20 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'File handling lets a C program work with data stored outside the program. The <stdio.h> library provides FILE streams and functions to open, read, write, position, and close them. A successful fopen returns a FILE pointer; a failed open returns NULL.',
            },
            {
              type: 'example',
              title: 'Write to a Text File',
              code: {
                filename: 'filewrite.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    FILE *fp = fopen("notes.txt", "w");
    if (fp == NULL) {
        perror("Could not open notes.txt");
        return 1;
    }

    if (fprintf(fp, "Learning C with CraftC\\n") < 0) {
        perror("Could not write to notes.txt");
        fclose(fp);
        return 1;
    }

    if (fclose(fp) == EOF) {
        perror("Could not close notes.txt");
        return 1;
    }

    puts("File written successfully");
    return 0;
}`,
              },
            },
            {
              type: 'example',
              title: 'Read a Text File Line by Line',
              code: {
                filename: 'fileread.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    FILE *fp = fopen("notes.txt", "r");
    if (fp == NULL) {
        perror("Could not open notes.txt");
        return 1;
    }

    char line[100];
    while (fgets(line, sizeof line, fp) != NULL) {
        fputs(line, stdout);
    }

    if (ferror(fp)) {
        perror("Error while reading notes.txt");
        fclose(fp);
        return 1;
    }

    if (fclose(fp) == EOF) {
        perror("Could not close notes.txt");
        return 1;
    }

    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'File Opening Modes',
              items: [
                '"r" — open an existing file for reading; fails if it does not exist.',
                '"w" — open for writing; creates the file or truncates an existing file to zero length.',
                '"a" — open for appending; creates the file if needed and writes at the end.',
                '"r+" — open an existing file for both reading and writing without truncating it.',
                '"w+" — open for reading and writing; creates or truncates the file.',
                '"a+" — open for reading and appending; creates the file if needed, and writes go to the end.',
                'Add "b" for binary mode where the platform distinguishes it, such as "rb", "wb", or "ab".',
              ],
            },
            {
              type: 'notes',
              title: 'Important File Functions',
              items: [
                'fopen(path, mode) opens a stream and returns NULL on failure. Always check the result before using it.',
                'fclose(stream) closes an open stream and returns EOF if a close-time error occurs. Do not use the stream after closing it.',
                'fprintf and fscanf perform formatted output and input. Check their return values; fscanf returns the number of successfully assigned items, or EOF in relevant input-failure cases.',
                'fgets reads at most size - 1 characters and appends a null terminator. It returns NULL when it cannot read another string.',
                'fputs writes a string; fputs does not automatically add a newline.',
                'fread and fwrite transfer blocks of bytes and return the number of complete elements read or written. Compare the result with the requested element count.',
                'fseek changes the file position, ftell reports it when supported, and rewind moves to the beginning while clearing the stream error and EOF indicators.',
              ],
            },
            {
              type: 'notes',
              title: 'EOF and Error Handling',
              items: [
                'Do not use while (!feof(file)) as a read loop. EOF is set only after a read attempt fails because the end has been reached.',
                'Drive a read loop using the function result, such as fgets(...) != NULL or fscanf(...) == the expected number of fields.',
                'After a read loop, use ferror(stream) to detect a read error; reaching normal end-of-file is not itself a read error.',
                'Use perror or a clear diagnostic when an operation fails. The current working directory determines how a relative path such as "notes.txt" is resolved.',
                'Close every successfully opened stream on every control-flow path. Check fclose when write errors or buffered output matter.',
                'Use text modes for text data and binary modes for raw bytes or binary formats; do not assume binary data is safely handled as a C string.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Using a FILE pointer without checking whether fopen returned NULL.',
                'Opening an important existing file with "w" by mistake, which immediately truncates its contents.',
                'Using while (!feof(fp)) and processing stale or invalid data after a failed read.',
                'Assuming fscanf always reads every requested value; always check its return count.',
                'Forgetting fclose, ignoring write/close errors, or using a stream after it has been closed.',
                'Treating arbitrary binary file contents as null-terminated strings.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'What does fopen return when it fails?', a: 'It returns NULL. Check the result before using the stream.' },
                { q: 'What is the difference between "w" and "a" mode?', a: '"w" truncates an existing file or creates a new one. "a" preserves existing contents and writes at the end.' },
                { q: 'Why should we check the return value of fscanf?', a: 'It reports how many input items were successfully assigned, so the program can detect incomplete or invalid input.' },
                { q: 'Why is while (!feof(fp)) a bad read loop?', a: 'The EOF indicator is set only after a read attempt reaches the end. The loop can therefore process stale data once more.' },
                { q: 'What is the purpose of ferror?', a: 'It checks whether the stream has its error indicator set, helping distinguish a read error from normal end-of-file.' },
                { q: 'What is the difference between text and binary mode?', a: 'Text mode may apply implementation-defined text transformations. Binary mode is intended for reading and writing bytes without those text transformations.' },
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Use fopen with the correct mode, check every operation, drive read loops from their return values, distinguish EOF from errors with ferror, and close each stream with fclose.',
            },
          ],
        },
        {
          id: 'c-preprocessor',
          title: 'Preprocessor Directives',
          slug: 'preprocessor-directives',
          description: 'Understand header inclusion, macros, include guards, and conditional compilation before the compiler translates C code.',
          duration: '18 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'What Does the Preprocessor Do?',
              content: 'A C program is processed in several translation phases. The preprocessor handles directives such as #include and #define before the compiler performs the main compilation work. Directives begin with #, and the # must be the first non-whitespace character on its logical line. The preprocessor does not understand C types or evaluate ordinary C expressions; it mainly performs header inclusion, macro replacement, and conditional inclusion.',
            },
            {
              type: 'notes',
              title: 'The Main Directives',
              items: [
                '#include — asks the implementation to process a header or source file at that point. Use <header.h> for implementation/system headers and "header.h" for project headers; the exact search rules are implementation-defined.',
                '#define — creates an object-like macro or a function-like macro. Macro replacement is preprocessing-token substitution, not a typed C variable or function.',
                '#undef — removes a macro definition so later code no longer sees that macro as defined.',
                '#if / #elif / #else / #endif — include or skip source regions based on integer constant expressions evaluated by the preprocessor.',
                '#ifdef NAME and #ifndef NAME — convenient tests for whether a macro is defined or not defined.',
                '#error — requires the implementation to issue a diagnostic when the directive is reached; compilers commonly stop the build, but the standard requirement is the diagnostic.',
                '#pragma — communicates implementation-specific instructions; behavior is not universally portable.',
                '#line — changes the reported source line number and/or file name used for diagnostics.',
              ],
            },
            {
              type: 'example',
              title: 'Including Headers and Defining Constants',
              code: {
                filename: 'constants.c',
                language: 'c',
                code: '#include <stdio.h>\n\n#define TAX_RATE 0.18\n#define APP_NAME "CraftC"\n\nint main(void) {\n    double price = 100.0;\n    printf("%s\\n", APP_NAME);\n    printf("Tax: %.2f\\n", price * TAX_RATE);\n    return 0;\n}',
              },
            },
            {
              type: 'notes',
              title: 'Object-Like vs Function-Like Macros',
              items: [
                'An object-like macro has no parameter list: #define BUFFER_SIZE 256. Each matching macro name is replaced with its replacement list.',
                'A function-like macro has its opening parenthesis immediately after the macro name: #define MAX(a, b) ... . A space between the name and ( changes it into an object-like macro.',
                'Prefer uppercase names by convention so macros are visually distinct from variables and functions; this is a convention, not a language requirement.',
                'Macros have no type checking or normal function-call semantics, and they do not follow C block scope. Use const objects, enum constants, or inline functions when they better express the intent.',
              ],
            },
            {
              type: 'example',
              title: 'Write Safer Function-Like Macros',
              code: {
                filename: 'macros.c',
                language: 'c',
                code: '#include <stdio.h>\n\n#define SQUARE(x) ((x) * (x))\n#define MIN(a, b) ((a) < (b) ? (a) : (b))\n\nint main(void) {\n    int value = 5;\n    printf("Square: %d\\n", SQUARE(value));\n    printf("Smaller: %d\\n", MIN(7, 3));\n    return 0;\n}',
              },
            },
            {
              type: 'notes',
              title: 'Macro Pitfalls You Must Know',
              items: [
                'Parenthesize every parameter use and the complete replacement expression. Without parentheses, operator precedence can change the result.',
                'A macro argument may be substituted more than once. SQUARE(i++) can increment i more than once and may produce undefined behavior; do not pass expressions with side effects to such macros.',
                'A macro can evaluate an argument conditionally or repeatedly, unlike a normal function call. A function is usually safer when evaluation behavior matters.',
                'A multi-statement macro should commonly use the do { ... } while (0) pattern so it behaves like one statement in if/else code. Avoid a trailing semicolon inside the macro definition.',
                'Macro names are replaced only when they are recognized as preprocessing tokens; the preprocessor does not replace matching text inside ordinary string literals.',
              ],
            },
            {
              type: 'example',
              title: 'Conditional Compilation',
              code: {
                filename: 'config.c',
                language: 'c',
                code: '#include <stdio.h>\n\n#define DEBUG 1\n\nint main(void) {\n#if DEBUG\n    puts("Debug logging is enabled");\n#else\n    puts("Debug logging is disabled");\n#endif\n\n#ifdef _WIN32\n    puts("Windows-specific build");\n#elif defined(__linux__)\n    puts("Linux build");\n#else\n    puts("Other platform or compiler");\n#endif\n    return 0;\n}',
              },
            },
            {
              type: 'notes',
              title: 'Include Guards and Header Hygiene',
              items: [
                'A header may be included through multiple paths. An include guard prevents its declarations from being processed more than once in a translation unit.',
                'Use a project-unique guard name such as CRAFTC_STUDENT_H; define it immediately after the #ifndef and close the guard with #endif.',
                '#pragma once is widely supported, but it is not part of the ISO C standard. Include guards are the portable conventional technique.',
                'Headers should normally contain declarations, type definitions, and macros—not ordinary non-static function or object definitions that would create multiple-definition linker errors when included in several source files.',
              ],
            },
            {
              type: 'example',
              title: 'A Portable Include Guard',
              code: {
                filename: 'student.h',
                language: 'c',
                code: '#ifndef CRAFTC_STUDENT_H\n#define CRAFTC_STUDENT_H\n\ntypedef struct {\n    int id;\n    char name[40];\n} Student;\n\nvoid print_student(const Student *student);\n\n#endif /* CRAFTC_STUDENT_H */',
              },
            },
            {
              type: 'notes',
              title: 'Preprocessor vs Runtime Decisions',
              items: [
                'Conditional compilation (#if) decides which source text is compiled. A normal if statement is compiled and decides which statement executes while the program runs.',
                'The expression in #if must be an integer constant expression after macro expansion; it cannot inspect a runtime variable.',
                'defined(NAME) can be used in #if expressions to test whether a macro exists, for example #if defined(TRACE) && TRACE.',
                'Use conditional compilation for platform-specific code, optional features, and debug builds—not as a substitute for ordinary program logic.',
              ],
            },
            {
              type: 'practice',
              title: 'Practice Tasks',
              items: [
                'Create a PI macro and calculate the area of a circle. Explain why a macro is not a typed constant variable.',
                'Write a function-like macro CUBE(x), then test it with a simple variable. Do not call it with x++ or another side-effecting expression.',
                'Create a header file with an include guard and include it from two different C source files.',
                'Use #ifdef to compile a debug message only when DEBUG is defined.',
                'Use #if and #elif to select a platform-specific message based on a macro.',
                'Temporarily define a macro, remove it with #undef, and verify the later #ifdef branch.',
              ],
            },
            {
              type: 'notes',
              title: 'Common Mistakes',
              items: [
                'Writing #define SQUARE x * x without parentheses can produce unexpected results when used in a larger expression.',
                'Putting a space between a function-like macro name and its opening parenthesis makes it object-like rather than function-like.',
                'Assuming #pragma once is guaranteed by every C compiler; use include guards when portability is important.',
                'Confusing #ifdef with a runtime if statement; #ifdef checks macro existence during preprocessing.',
                'Defining ordinary global variables or non-inline function bodies in a header included by multiple source files.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'The preprocessor handles directives before the main compilation stage. Use #include for headers, #define and #undef for macros, #if/#ifdef/#ifndef for conditional compilation, and include guards to protect headers. Parenthesize macro expressions carefully, avoid side effects in macro arguments, and remember that #pragma behavior is implementation-specific.',
            },
          ],
        },
      ],
    },
    {
      id: 'projects-c',
      title: 'Projects',
      icon: 'FolderGitRoot',
      lessons: [
        {
          id: 'c-mini-projects',
          title: 'Mini Projects',
          slug: 'mini-projects',
          description: 'Build small, complete C applications that turn core language concepts into practical programming skills.',
          duration: '45 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'From Exercises to Small Applications',
              content: 'A project combines several concepts into one working program. The goal is not to write the most lines of code; it is to solve a clearly defined problem, validate input, handle errors, and make the program understandable. Start with a small version, get it working, then add features in controlled steps. These projects are console-based so you can focus on C fundamentals before adding graphical interfaces or external libraries.',
            },
            {
              type: 'notes',
              title: 'A Reliable Workflow for Every Project',
              items: [
                'Write down the problem, expected inputs, outputs, and rules before coding. List normal cases, invalid input, and boundary cases.',
                'Break the program into functions with one clear responsibility. Keep main focused on coordinating the program rather than containing every operation.',
                'Choose data structures deliberately: arrays for fixed-size collections, structs for related fields, and dynamic allocation only when the required size is not known in advance.',
                'Validate user input and check the return values of functions such as scanf, fopen, malloc, and file-writing operations.',
                'When using files, define what happens if the file is missing, empty, malformed, or cannot be written. Close every successfully opened file.',
                'Compile with warnings enabled, test normal and failure paths, and fix warnings instead of hiding them.',
                'Write a README with the problem statement, features, build command, usage, sample run, limitations, and concepts demonstrated.',
              ],
            },
            {
              type: 'practice',
              title: 'Beginner Projects',
              items: [
                'Temperature Converter — convert Celsius, Fahrenheit, and Kelvin. Validate the selected conversion and use functions for each formula.',
                'Basic Calculator — support addition, subtraction, multiplication, and division using a switch statement. Reject invalid operators and division by zero.',
                'Number Guessing Game — generate a pseudo-random target with rand, seed it once with srand, provide higher/lower hints, and count attempts. Explain that rand is not suitable for security-sensitive randomness.',
                'Unit Converter — convert a small set of distance, weight, or time units. Keep conversion formulas separate from menu and input handling.',
              ],
            },
            {
              type: 'practice',
              title: 'Intermediate Projects',
              items: [
                'Quiz Application — store questions and answers, accept choices, calculate a score, and show a final result. Handle invalid choices without accidentally awarding points.',
                'Tic-Tac-Toe — represent the board with a 3 × 3 array, validate moves, detect wins and draws, and prevent players from overwriting occupied cells.',
                'Student Record Manager — use a struct and an array or dynamically allocated collection to add, list, search, update, and delete records. Validate IDs and handle capacity limits.',
                'Contact Book — store names and phone numbers, support search and deletion, and persist records in a text file. Handle missing or malformed data safely.',
              ],
            },
            {
              type: 'practice',
              title: 'Projects That Combine Multiple Topics',
              items: [
                'Expense Tracker — record a description, category, and amount; calculate totals and category summaries; save and reload entries from a file.',
                'Bank Account Simulator — model account number, holder, and balance; support deposit and withdrawal with validation. Clearly label it as a learning simulation, not real banking software.',
                'Library Catalog — manage book records, search by title or ID, and track whether a book is available. Keep record operations separate from menu code.',
              ],
            },
            {
              type: 'notes',
              title: 'How to Design the Program',
              items: [
                'Use a loop for a menu that repeats until the user chooses Exit; do not duplicate the full menu after every operation.',
                'Use helper functions such as read_int, find_record, add_record, and print_record to make the code easier to test and maintain.',
                'For fixed-size arrays, track the number of used elements separately from the maximum capacity and check capacity before inserting.',
                'For text input, prefer fgets over an unbounded %s conversion. Remove the trailing newline carefully and detect overlong input when necessary.',
                'For numeric input, check conversion success and reject trailing junk; do not assume every user entry is a valid number.',
                'For file persistence, check fopen, every read/write operation, and fclose. Do not assume a successful fopen guarantees later writes will succeed.',
                'If using realloc, store its result in a temporary pointer so the original allocation is not lost when allocation fails.',
              ],
            },
            {
              type: 'tips',
              title: 'Testing Checklist',
              items: [
                'Test the smallest valid input, typical input, maximum supported input, and values just outside the supported range.',
                'Try letters where numbers are expected, empty input, invalid menu options, duplicate IDs, and repeated operations.',
                'For games, test win, loss, draw, and invalid-move scenarios.',
                'For file-based projects, test missing files, empty files, corrupted records, and write-permission failures where practical.',
                'Run the program repeatedly and check that allocated memory and opened files are released correctly.',
              ],
            },
            {
              type: 'practice',
              title: 'Your First Project Milestone',
              items: [
                'Choose one beginner project and write its requirements in 5–8 bullet points before coding.',
                'Draw a simple function plan showing what main and each helper function will do.',
                'Implement the smallest working version before adding extra features.',
                'Compile with a command such as gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o app and resolve the warnings.',
                'Create at least five test cases, including one invalid-input case, and record the expected result.',
                'Publish the source code and a useful README in a GitHub repository.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Start with a converter or calculator, then move to a game and a record-management application. A complete beginner project should have clear requirements, modular functions, validated input, checked file and memory operations where relevant, meaningful tests, and documentation. Finish a small project properly before starting a larger one.',
            },
          ],
        },
        {
          id: 'c-advanced-projects',
          title: 'Advanced Projects',
          slug: 'advanced-projects',
          description: 'Plan, build, test, and publish substantial C projects with a professional GitHub workflow.',
          duration: '60 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Build Projects That Prove Engineering Skills',
              content: 'An advanced project should solve a defined problem and demonstrate modular design, safe resource handling, meaningful testing, documentation, and maintainable code. Choose a scope you can finish. Build a reliable command-line version first, then add optional features only after the core behavior works.',
            },
            {
              type: 'practice',
              title: 'Advanced Project Ideas',
              items: [
                'Contact Management CLI — add, search, update, delete, sort, and persist contacts. Validate input, handle duplicate identifiers, and recover gracefully from malformed data.',
                'Library Management System — manage books, members, issue/return records, due dates, and persistent storage. Separate catalog, member, transaction, and storage modules.',
                'Terminal Snake Game — implement a game loop, input handling, collision detection, score tracking, and a portable fallback or documented terminal-library dependency.',
                'Mini Command Shell — parse command lines, support built-in commands such as cd and exit, and launch external programs using platform-appropriate process APIs. Document the supported platform.',
                'HTTP/1.0 Static File Server — accept socket connections, parse a bounded request line, serve files from a configured document root, and return correct status codes. Never expose arbitrary filesystem paths.',
                'Markdown-to-HTML Converter — tokenize a documented subset of Markdown, escape HTML-sensitive text, and write output safely. State unsupported syntax clearly.',
                'Log Analyzer — stream large log files line by line, count event types, filter by date or severity, and produce a summary without loading the entire file into memory.',
                'CSV Data Processor — parse quoted fields correctly, validate row structure, calculate aggregates, and export a clean report. Do not treat a simple comma split as a complete CSV parser.',
              ],
            },
            {
              type: 'notes',
              title: 'Architecture and Engineering Checklist',
              items: [
                'Write a concise specification: users, inputs, outputs, constraints, error cases, and features deliberately excluded from the first release.',
                'Split code into focused modules such as cli, validation, domain logic, persistence, and reporting; expose shared declarations through headers.',
                'Define ownership for every allocated object and close every opened file or socket on all exit paths.',
                'Check return values and handle partial reads/writes, allocation failures, invalid data, and platform-specific system-call errors.',
                'Use bounded buffers and explicit length checks; never build a shell command by concatenating untrusted input.',
                'Add unit tests for pure logic and integration tests for file or socket behavior. Include regression tests for every bug fixed.',
                'Compile with strict warnings (for example, gcc -std=c11 -Wall -Wextra -Wpedantic) and use sanitizers or a memory checker where available.',
                'Document build prerequisites, supported platforms, architecture, commands, sample output, test instructions, and known limitations.',
              ],
            },
            {
              type: 'notes',
              title: 'Projects Already Published on Your GitHub',
              items: [
                'C-Programs — your collection of 100 C programming examples: https://github.com/ashutoshpalhare/C-Programs',
                'C-CPP-Playground — your searchable C and C++ project directory: https://github.com/ashutoshpalhare/C-CPP-Playground',
                'Browse all repositories on your GitHub profile: https://github.com/ashutoshpalhare?tab=repositories',
                'These links point to existing repositories. The advanced project ideas above are learning briefs; they are not claimed to exist as completed repositories unless a matching project is actually present.',
              ],
            },
            {
              type: 'practice',
              title: 'Publish One Project Professionally',
              items: [
                'Choose one project and write a README-first specification with features, non-goals, and sample workflows.',
                'Create a clear folder structure with separate source, headers, tests, and sample data where appropriate.',
                'Implement the smallest complete version, then add features in small commits.',
                'Test valid inputs, invalid inputs, empty files, large inputs, resource failures, and repeated operations.',
                'Add a build command or Makefile, usage examples, screenshots or terminal output where useful, and known limitations.',
                'Push the project to your GitHub profile and link the exact repository from your portfolio or learning notes.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'A portfolio-grade C project is more than a feature list: it has a clear scope, modular architecture, safe input and resource handling, repeatable tests, and documentation. Start from one project, finish it to a professional standard, and publish the real repository link.',
            },
          ],
        },
      ],
    },
    {
      id: 'interview-practice-c',
      title: 'Interview & Practice',
      icon: 'Trophy',
      lessons: [
        {
          id: 'c-interview-questions',
          title: 'Interview Questions',
          slug: 'interview-questions',
          description: 'Core C interview questions with precise answers, code reasoning, and practical follow-ups.',
          duration: '40 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'How to Use This Interview Set',
              content: 'Do not memorize one-line definitions. Explain the rule, give a small example, and mention an edge case. Distinguish what the C standard guarantees from what is common on a particular platform.',
            },
            {
              type: 'interviewQuestions',
              title: 'C Fundamentals and Language Rules',
              questions: [
                { q: 'What is the difference between a declaration and a definition?', a: 'A declaration introduces an identifier and its type. A definition is a declaration that also creates the entity or provides its function body. For example, extern int count; is typically a declaration, while int count = 0; is a definition. A function prototype declares a function; its body defines it.' },
                { q: 'What is the difference between an array and a pointer?', a: 'An array is an object containing a fixed number of elements. A pointer is a separate object that stores an address. In many expressions an array expression converts to a pointer to its first element, but arrays are not pointers: sizeof array gives the whole array size in its defining scope, and an array cannot be assigned to.' },
                { q: 'What is the difference between struct and union?', a: 'A struct gives each member its own storage (with possible padding), so members can hold values simultaneously. A union overlays its members in shared storage; its size is sufficient for its largest member, including alignment requirements.' },
                { q: 'What is a pointer, and what is a null pointer?', a: 'A pointer is an object whose value designates an object or function, or is a null pointer value. A null pointer does not designate an object and must not be dereferenced. NULL is a macro for a null pointer constant.' },
                { q: 'Explain const int *p, int *const p, and const int *const p.', a: 'const int *p: the pointed-to int cannot be modified through p, but p can point elsewhere. int *const p: p cannot be reassigned, but the int may be modified through it. const int *const p: neither can be changed through that declaration.' },
                { q: 'What is the difference between malloc and calloc?', a: 'malloc allocates a block whose contents are indeterminate. calloc allocates space for an array and initializes all bits to zero. All-bits-zero is not guaranteed to represent every possible type zero value or a null pointer, so do not generalize it to arbitrary objects.' },
                { q: 'What does realloc do, and how should its result be handled?', a: 'realloc changes the size of an allocated block and may move it. For a nonzero requested size, store the result in a temporary pointer; if it returns NULL, the original block remains allocated. On success, use the returned pointer and do not use the old pointer. Avoid relying on realloc(ptr, 0); call free explicitly when releasing storage.' },
                { q: 'What is undefined behavior in C?', a: 'Undefined behavior is behavior for which the C standard imposes no requirements. Examples include signed integer overflow, accessing an array out of bounds, using a pointer after its allocation is freed, and unsequenced conflicting modifications.' },
                { q: 'What is the difference between ++i and i++?', a: 'Both increment i. The expression ++i yields the value after incrementing; i++ yields the value before incrementing. If the expression value is discarded, both simply increment i.' },
                { q: 'Does C pass arguments by reference?', a: 'No. C passes arguments by value. To let a function modify a caller object, pass a pointer value; the function receives a copy of the address and can use it to access the original object.' },
                { q: 'What is the difference between stack and heap?', a: 'These are common implementation terms, not two storage classes defined by the C standard. Automatic objects often use a call stack; dynamically allocated storage comes from allocation functions and remains allocated until released. Do not assume every implementation uses a conventional stack.' },
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Pointers, Functions, and Memory',
              questions: [
                { q: 'What is pointer arithmetic, and when is it valid?', a: 'Pointer arithmetic is defined within an array object and can produce a pointer to an element or one past the final element. A one-past pointer must not be dereferenced. Arithmetic outside the permitted array range is undefined.' },
                { q: 'What happens to an array parameter in a function?', a: 'A function parameter written with an array type is adjusted to a pointer parameter. For example, void f(int a[10]) is adjusted to void f(int *a); the function does not receive the array size automatically. Pass the length separately.' },
                { q: 'What is a function pointer?', a: 'A function pointer stores a function designator address and can call a compatible function. It is useful for callbacks, dispatch tables, and selecting behavior at runtime. Its type must match the function signature.' },
                { q: 'What is a memory leak?', a: 'A memory leak occurs when dynamically allocated storage is no longer reachable for release while the program still needs to manage it. Define ownership, pair successful allocations with free, and handle every failure path.' },
                { q: 'What is a dangling pointer?', a: 'A dangling pointer refers to an object whose lifetime has ended or whose storage is no longer valid, such as memory after free. Dereferencing it is undefined behavior. Setting one pointer variable to NULL does not fix other aliases.' },
                { q: 'What is the difference between a shallow copy and a deep copy?', a: 'A shallow copy copies member values as-is; pointer members then refer to the same allocated objects. A deep copy duplicates owned resources and establishes independent ownership.' },
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Strings, Files, and Preprocessor',
              questions: [
                { q: 'Why must a C string end with a null character?', a: 'A C string is a sequence of characters terminated by a null character. Functions such as strlen and printf with %s use that terminator to find the end. An unterminated character array is not a valid C string for those functions and may cause an out-of-bounds read.' },
                { q: 'What is the difference between sizeof and strlen?', a: 'sizeof reports the size in bytes of an object or type; for an array it includes the full array storage. strlen counts characters before the first null character in a valid C string and excludes the terminator.' },
                { q: 'How should bounded line input be read in C?', a: 'Use fgets with the destination buffer size. Then handle a retained newline and detect input that was truncated because the line exceeded the buffer. Always check the function result before using the buffer.' },
                { q: 'What is the difference between EOF and a null character?', a: 'EOF is a negative int macro used by input functions to indicate end-of-file or an input error. The null character has value zero and terminates C strings. Store getchar results in int so every unsigned-char value remains distinguishable from EOF.' },
                { q: 'What is the difference between text mode and binary mode file I/O?', a: 'Text mode may translate external text representations according to the implementation. Binary mode aims to transfer bytes without those text translations. Use the mode appropriate to the file format and check every file operation for errors.' },
                { q: 'What are header guards?', a: 'Header guards use preprocessor conditionals to prevent a header contents from being processed more than once in a translation unit. The guard macro should be unique and consistently named.' },
                { q: 'What is the difference between a macro and a function?', a: 'A function has a declared type and normal argument evaluation and call semantics. A function-like macro performs token substitution before compilation and does not provide normal type checking; an argument may be substituted more than once. Parenthesize macro parameters and prefer functions when possible.' },
              ],
            },
            {
              type: 'practice',
              title: 'Code-Tracing and Scenario Questions',
              items: [
                'Predict the output of a loop containing i++ and ++i. Explain the value yielded by each expression.',
                'A function receives int values[100]. Why does sizeof(values) inside that function report pointer size rather than the caller array size?',
                'A program overwrites its only pointer with the result of realloc. What can go wrong if allocation fails? Rewrite the operation using a temporary pointer.',
                'A program prints a character array using %s but never writes a null terminator. Explain the risk and show how to ensure termination within the buffer.',
                'A file opens successfully but a later fprintf fails. Which return values and final close status should be checked?',
                'Two pointers refer to the same allocation. One pointer is freed. Why is the other pointer unsafe to dereference?',
                'A program works without optimization but fails with optimization enabled. Explain how undefined behavior can cause this.',
                'Design a function that reads an integer safely from a line of input. Explain how to detect conversion failure, trailing characters, and out-of-range values.',
              ],
            },
            {
              type: 'notes',
              title: 'Interview Preparation Strategy',
              items: [
                'For every answer, state the rule first, give a short example, and then mention one limitation or edge case.',
                'Distinguish C language guarantees from operating-system behavior, compiler extensions, and common hardware conventions.',
                'Practise tracing pointer and array code; draw object lifetimes and ownership when discussing dynamic memory.',
                'When asked to code, clarify input constraints, return/error behavior, and buffer sizes before writing the implementation.',
                'Compile examples with -std=c11 -Wall -Wextra -Wpedantic and test boundary cases; use sanitizers when available.',
                'If you do not know a detail, state the assumption and reason from the standard rather than inventing a confident answer.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Strong C interview preparation requires more than definitions. Understand arrays and pointers, object lifetimes, allocation, strings, file I/O, preprocessing, and undefined behavior. Practise explaining code precisely and separating standard guarantees from implementation details.',
            },
          ],
        },
        {
          id: 'c-practice-programs',
          title: 'Practice Programs',
          slug: 'practice-programs',
          description: 'A progressive C problem set with requirements, hints, edge cases, and testing goals.',
          duration: '90 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'How to Use This Practice Set',
              content: 'Work through the problems in order, but do not copy a solution before attempting it. For each task, identify inputs, outputs, constraints, invalid cases, and expected behavior. Write a small algorithm or pseudocode first, then implement, compile, test, and explain your solution.',
            },
            {
              type: 'notes',
              title: 'Build and Test Your Programs',
              items: [
                'Compile a single-file C11 program with: gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o app',
                'Run the program with normal, boundary, and invalid inputs; record the expected output before testing.',
                'Use int main(void) for programs that do not need command-line arguments, and return a success or failure status deliberately.',
                'Check input conversion results. Do not assume scanf or fgets always receives valid, complete input.',
                'Avoid signed overflow, out-of-bounds array access, uninitialized values, and unsafe string handling.',
                'Split larger solutions into small functions and pass array lengths explicitly.',
                'For each solution, add a short README note with the problem, approach, complexity, compile command, and sample run.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 1 — Fundamentals and Number Logic',
              items: [
                'Even or odd: read an integer and classify it. Test zero and negative values.',
                'Positive, negative, or zero: classify an integer without assuming it is positive.',
                'Largest of three numbers: handle ties and negative inputs.',
                'Prime number checker: define behavior for values below 2 and avoid unnecessary divisibility checks.',
                'Reverse an integer: consider negative values and detect overflow before multiplying or adding digits.',
                'Palindrome number: compare digits without relying on strings, and document how negative values are handled.',
                'Sum of digits: handle zero and decide how negative input is treated.',
                'Factorial: implement iterative and recursive versions; detect values that exceed the chosen integer type.',
                'Fibonacci sequence: print the first n terms and prevent arithmetic overflow.',
                'GCD and LCM: use the Euclidean algorithm and consider zero inputs and LCM overflow.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 2 — Loops, Patterns, and Conversions',
              items: [
                'Multiplication table: print a table for a user-provided integer and validate the requested range.',
                'Armstrong number: support a clearly defined digit-count rule and test single-digit values.',
                'Decimal to binary: handle zero and use an unsigned representation or clearly constrain the input.',
                'Binary to decimal: reject invalid digits and detect overflow during conversion.',
                'Simple calculator: use switch for +, -, *, and /; handle division by zero and invalid operators.',
                'Print star and number patterns: use nested loops and explain the row/column relationship.',
                'Count digits: handle zero and negative values without overflowing when taking an absolute value.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 3 — Arrays and Searching',
              items: [
                'Find minimum and maximum in an array; define behavior for an empty array.',
                'Calculate sum and average; use a suitable type and check for accumulation overflow where required.',
                'Reverse an array in place using two indices.',
                'Find the second-largest distinct element and report when it does not exist.',
                'Remove duplicate values from an array while preserving the original order.',
                'Linear search: return the index or a documented not-found value.',
                'Binary search: require sorted input and test first, last, and absent values.',
                'Sort an array using bubble sort, then explain its time complexity and early-exit optimization.',
                'Merge two sorted arrays into one sorted result and check destination capacity.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 4 — Strings and Functions',
              items: [
                'Find string length without strlen, stopping only at the terminating null character.',
                'Reverse a string in place without writing outside its array bounds.',
                'Check whether a string is a palindrome; define whether spaces and letter case matter.',
                'Count vowels, consonants, digits, whitespace, and other characters using unsigned-char-safe character classification.',
                'Copy and concatenate strings with explicit destination-capacity checks.',
                'Compare two strings lexicographically and explain the role of the terminating null character.',
                'Create reusable functions for prime checking, factorial, swapping, and array statistics.',
                'Use recursion for factorial and Fibonacci, then compare recursive and iterative trade-offs.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 5 — Matrices, Structures, and Pointers',
              items: [
                'Add and subtract two matrices after validating their dimensions.',
                'Find the transpose of a matrix and explain row/column indexing.',
                'Multiply compatible matrices and test incompatible dimensions.',
                'Store and display student records using a structure and an array of structures.',
                'Pass an array and its length to a function; explain why the array length is not carried by the pointer parameter.',
                'Swap two integers using pointer parameters and explain that C still passes the pointer value by value.',
                'Allocate an integer array dynamically, check allocation failure, use it, and free it exactly once.',
                'Build a small linked list with create, traverse, search, and cleanup operations; handle allocation failure.',
              ],
            },
            {
              type: 'practice',
              title: 'Level 6 — Files and Mini Utilities',
              items: [
                'Read a text file line by line with fgets and detect whether a line was truncated.',
                'Count lines, words, and characters in a text file; define how whitespace is treated.',
                'Copy one file to another and check read, write, and close errors.',
                'Store and retrieve a small set of records in a text file using a documented format.',
                'Build a contact-list CLI with add, list, search, and delete operations.',
                'Build a menu-driven student record manager with validation and safe file handling.',
              ],
            },
            {
              type: 'notes',
              title: 'Hints Without Giving Away the Solution',
              items: [
                'Prime checking: test divisors only while divisor <= n / divisor to avoid overflow from divisor * divisor.',
                'Integer reversal: check the next multiply-and-add against the limits of the chosen integer type before performing it.',
                'Binary search: use low + (high - low) / 2 for the midpoint and maintain a clear inclusive or half-open range invariant.',
                'String processing: keep the buffer capacity separate from the current string length; reserve space for the null terminator.',
                'Dynamic memory: assign realloc to a temporary pointer and preserve the original allocation if resizing fails.',
                'File processing: distinguish EOF from read errors with ferror, and check output functions as well as fclose.',
              ],
            },
            {
              type: 'notes',
              title: 'Testing Checklist',
              items: [
                'Test the smallest valid input, the largest supported input, and values immediately around important boundaries.',
                'Test zero, negative values, duplicate values, empty strings, one-character strings, and already-sorted or reverse-sorted arrays where relevant.',
                'Test invalid menu choices, malformed input, missing files, empty files, and file permission failures.',
                'Check every input, allocation, file operation, and function result before using it.',
                'Compile with warnings enabled and fix warnings instead of suppressing them.',
                'Run sanitizers or a memory checker when available, especially for pointer, array, and dynamic-memory exercises.',
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Complete the levels progressively: number logic, loops, arrays, strings, functions, matrices, pointers, structures, and files. Aim to solve at least 20 problems independently, test edge cases, and explain the algorithm and complexity. A correct program is one that handles invalid and boundary inputs—not only the sample case.',
            },
          ],
        },
        {
          id: 'c-job-ready',
          title: 'C Developer — Job-Ready Roadmap',
          slug: 'job-ready-checklist',
          description: 'A practical readiness roadmap covering C fundamentals, systems concepts, projects, debugging, and interview preparation.',
          duration: '60 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'What Job-Ready Means',
              content: 'Knowing C syntax is only the starting point. Entry-level readiness means you can explain how your code works, write and debug small programs independently, use memory and files safely, work with common data structures, and present projects that another developer can build and test. Requirements vary by role: embedded, systems, firmware, and general software positions emphasize different tools and depth.',
            },
            {
              type: 'notes',
              title: 'Stage 1 — Core C Competence',
              items: [
                'Explain integer and floating types, conversions, operators, expressions, control flow, functions, scope, and lifetime.',
                'Use arrays, multidimensional arrays, strings, structures, unions, enums, and typedef appropriately.',
                'Explain pointers, pointer arithmetic, const correctness, arrays-versus-pointers, and function pointers.',
                'Understand the preprocessor, header files, declarations versus definitions, and separate compilation.',
                'Explain undefined behavior, implementation-defined behavior, unspecified behavior, and why compiler warnings matter.',
                'Write portable C11 code and compile with warnings enabled, for example: gcc -std=c11 -Wall -Wextra -Wpedantic.',
              ],
            },
            {
              type: 'notes',
              title: 'Stage 2 — Memory, Files, and Debugging',
              items: [
                'Use malloc, calloc, realloc, and free with correct size calculations, failure handling, ownership, and cleanup.',
                'Recognize memory leaks, use-after-free, double-free, buffer overflows, out-of-bounds access, and uninitialized reads.',
                'Read and write text and binary files; check return values, EOF, ferror, and close errors.',
                'Use a debugger to set breakpoints, step through code, inspect variables, and examine a crash or invalid memory access.',
                'Use sanitizers or memory-analysis tools when available; treat a clean run as evidence, not proof, of correctness.',
                'Read compiler diagnostics and reduce a bug to a small reproducible example before changing code.',
              ],
            },
            {
              type: 'notes',
              title: 'Stage 3 — Data Structures and Problem Solving',
              items: [
                'Implement and explain arrays, linked lists, stacks, queues, and hash-table basics.',
                'Understand searching and sorting, including linear search, binary search, and common sorting trade-offs.',
                'Estimate time and space complexity using Big O notation for common operations.',
                'Solve at least 20–30 problems independently across numbers, arrays, strings, recursion, pointers, and files.',
                'For each solution, test empty, minimum, maximum, duplicate, invalid, and boundary inputs where applicable.',
                'Explain the algorithm before coding and justify important data-structure choices.',
              ],
            },
            {
              type: 'notes',
              title: 'Stage 4 — Build a Verifiable Portfolio',
              items: [
                'Complete at least two substantial C projects rather than collecting many unfinished tutorial exercises.',
                'Choose projects that demonstrate different skills, such as a contact manager, CSV processor, log analyzer, shell, or file server.',
                'Include clear source organization, meaningful function boundaries, input validation, and reliable resource cleanup.',
                'Add a README with problem statement, features, prerequisites, build/run commands, sample output, tests, and limitations.',
                'Keep repository history understandable and include only work you can explain and maintain.',
                'Link relevant work from your portfolio: https://github.com/ashutoshpalhare/C-Programs and https://github.com/ashutoshpalhare/C-CPP-Playground. Add direct project links only when the specific project exists in those repositories.',
              ],
            },
            {
              type: 'notes',
              title: 'Stage 5 — Role-Specific Preparation',
              items: [
                'For embedded and firmware roles, study bitwise operations, integer widths, volatile, memory-mapped I/O concepts, interrupts, and hardware constraints.',
                'For systems roles, study processes, operating-system interfaces, sockets, concurrency concepts, and resource management.',
                'For general C roles, strengthen data structures, debugging, testing, build tools, and code review fundamentals.',
                'Read the actual job description and identify its required platform, compiler, libraries, protocols, and domain knowledge.',
                'Do not claim proficiency in tools or hardware you have not used; build a small demonstrable exercise first.',
              ],
            },
            {
              type: 'notes',
              title: 'Interview Readiness',
              items: [
                'Practise explaining pointers, arrays, strings, storage duration, linkage, dynamic allocation, and file handling without memorized definitions.',
                'Trace short code snippets and identify valid behavior, undefined behavior, and edge cases.',
                'Write a solution while explaining assumptions, complexity, tests, and possible improvements.',
                'Prepare concise explanations of two projects, including design decisions, difficult bugs, testing, and what you would improve.',
                'Ask clarifying questions when requirements are incomplete instead of silently inventing constraints.',
              ],
            },
            {
              type: 'notes',
              title: 'Final Self-Assessment',
              items: [
                'I can build, run, and debug a C program from a clean checkout using documented instructions.',
                'I can explain pointer and memory ownership decisions and show how every allocation is released.',
                'I can handle malformed input, boundary cases, and file or allocation failures deliberately.',
                'I can implement and explain basic data structures and estimate algorithm complexity.',
                'I have at least two complete, documented projects that I can demonstrate and discuss honestly.',
                'I can solve unfamiliar problems methodically without relying on copied solutions.',
              ],
            },
            {
              type: 'summary',
              title: 'Your Next Step',
              content: 'You are ready to target a C-related entry-level role when you can demonstrate these skills consistently—not merely tick every box. Pick a target role, compare its job description with your evidence, close the biggest gaps, and keep your projects reproducible. This roadmap is a preparation guide, not a guarantee of employment.',
            },
          ],
        },
      ],
    },
  ],
};
