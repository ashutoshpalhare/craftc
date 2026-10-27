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
                'Use a pointer type compatible with the object type; void * can hold an object pointer value generically, with appropriate conversion before dereferencing.'
                'An uninitialized pointer contains a garbage address — never dereference it.',
                'A null pointer value does not point to an object or function; check it before dereferencing.'
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
                { q: 'What is a null pointer?', a: 'A pointer value that compares unequal to every pointer to an object or function. Dereferencing it has undefined behavior; it may crash, but a crash is not guaranteed.' }
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
              content: 'Storage classes define the scope, lifetime, and visibility of variables. C has four: auto, register, static, and extern.',
            },
            {
              type: 'notes',
              title: 'Storage Classes',
              items: [
                'auto — local variables inside functions (default).',
                'register — a historical hint that an object may benefit from fast access; modern compilers decide placement, and standard C does not allow applying the address-of operator to a register-declared object.',
                'static — at block scope, gives an object static storage duration so it retains its value; at file scope, static gives an identifier internal linkage.',
                'extern — declares an identifier with external linkage in common cases; it often refers to an object or function defined elsewhere, but declaration and definition are not the same thing.',
              ],
            },
            {
              type: 'example',
              title: 'static Example',
              code: {
                filename: 'static.c',
                language: 'c',
                code: `#include <stdio.h>

void counter(void) {
    static int count = 0;  // initialized once
    count++;
    printf("Count: %d\\n", count);
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
              code: { filename: 'output', language: 'bash', code: `Count: 1\nCount: 2\nCount: 3` },
            },
            {
              type: 'notes',
              title: 'Short Notes: Storage Duration and Scope',
              items: [
                "A local automatic variable normally exists for the duration of its block execution; its value is not automatically initialized.",
                "A block-scope static variable retains its value between function calls and exists for the entire program execution.",
                "A file-scope object has static storage duration; static at file scope also gives an identifier internal linkage.",
                "extern declares an object or function defined elsewhere; it does not by itself allocate a second object definition.",
                "Scope, linkage, and storage duration are different concepts—learn them separately rather than treating static as having only one meaning.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Distinguish scope (where a name is visible), storage duration (how long an object exists), and linkage (whether declarations refer to the same entity). The meaning of static depends on whether it appears at block or file scope; extern is a declaration specifier, not simply a cross-file variable command.',
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
              content: 'Normally, array sizes are fixed at compile time. Dynamic memory allocation lets you request memory at runtime, so you can create arrays whose size is decided while the program runs.',
            },
            {
              type: 'example',
              title: 'Example: malloc',
              code: {
                filename: 'dma.c',
                language: 'c',
                code: `#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main(void) {
    int n;
    printf("How many numbers? ");
    if (scanf("%d", &n) != 1 || n <= 0) {
        fprintf(stderr, "Enter a positive count.\\n");
        return 1;
    }

    if ((size_t)n > SIZE_MAX / sizeof(int)) {
        fprintf(stderr, "Requested size is too large.\\n");
        return 1;
    }

    int *arr = malloc((size_t)n * sizeof *arr);
    if (arr == NULL) {
        fprintf(stderr, "Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    free(arr);
    return 0;
}`,
              },
            },
            {
              type: 'output',
              title: 'Output',
              code: { filename: 'output', language: 'bash', code: `How many numbers? 5\n1 2 3 4 5` },
            },
            {
              type: 'notes',
              title: 'The Four Functions',
              items: [
                'malloc(size) — allocates size bytes (uninitialized).',
                'calloc(n, size) — allocates n*size bytes, initialized to 0.',
                'realloc(ptr, size) — resizes a previously allocated block.',
                'free(ptr) — releases the memory back to the system.',
              ],
            },
            {
              type: 'commonMistakes',
              title: 'Common Mistakes',
              items: [
                'Forgetting to free memory — memory leak.',
                'Using memory after it has been freed — use-after-free.',
                'Not checking if malloc returned NULL.',
                'Freeing the same block twice — double free.',
              ],
            },
            {
              type: 'interviewQuestions',
              title: 'Interview Questions',
              questions: [
                { q: 'Difference between malloc and calloc?', a: 'malloc allocates uninitialized memory; calloc allocates and initializes all bytes to 0.' },
                { q: 'What is a memory leak?', a: 'Allocated memory that is never freed. Over time it exhausts available memory.' },
                { q: 'What does realloc do?', a: 'It resizes a previously allocated block, possibly moving it to a new location.' },
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Dynamic Memory',
              items: [
                "malloc allocates a block of uninitialized storage; calloc allocates storage and initializes its bytes to zero.",
                "Include <stdlib.h> for malloc, calloc, realloc, and free. In C, do not cast malloc's return value.",
                "Always check whether allocation returned NULL before accessing the memory, and free each allocated block when it is no longer needed.",
                "After free, do not dereference the pointer. Setting a local pointer to NULL can prevent accidental reuse of that same variable but does not fix other aliases.",
                "realloc can move the block and fail while leaving the original allocation intact; assign its result to a temporary pointer first.",
                "Check requested sizes and multiplication overflow before allocating arrays from user-supplied counts.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Dynamic memory allocation (malloc, calloc, realloc, free) lets you manage memory at runtime. Always check for NULL and always free what you allocate.',
            },
          ],
        },
        {
          id: 'c-file-handling',
          title: 'File Handling',
          slug: 'file-handling',
          description: 'Read from and write to files.',
          duration: '16 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'File handling lets your programs store data permanently. C uses FILE pointers and functions from <stdio.h> to open, read, write, and close files.',
            },
            {
              type: 'example',
              title: 'Write to a File',
              code: {
                filename: 'filewrite.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    FILE *fp = fopen("notes.txt", "w");
    if (fp == NULL) {
        printf("Could not open file\\n");
        return 1;
    }
    if (fprintf(fp, "Learning C with CraftC\\n") < 0) {
        perror("Could not write to file");
        fclose(fp);
        return 1;
    }
    if (fclose(fp) == EOF) {
        perror("Could not close file");
        return 1;
    }
    printf("File written successfully\\n");
    return 0;
}`,
              },
            },
            {
              type: 'example',
              title: 'Read from a File',
              code: {
                filename: 'fileread.c',
                language: 'c',
                code: `#include <stdio.h>

int main(void) {
    FILE *fp = fopen("notes.txt", "r");
    if (fp == NULL) {
        printf("Could not open file\\n");
        return 1;
    }
    char line[100];
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);
    }
    if (ferror(fp)) {
        perror("Error while reading file");
        fclose(fp);
        return 1;
    }
    if (fclose(fp) == EOF) {
        perror("Could not close file");
        return 1;
    }
    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'File Modes',
              items: [
                '"r" — read (file must exist).',
                '"w" — write (overwrites or creates).',
                '"a" — append (adds to end).',
                '"r+" — read and write.',
                '"w+" — read and write (overwrites).',
                'Always close files with fclose().',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: File Handling',
              items: [
                "fopen returns a FILE pointer on success and NULL on failure; check it before using the stream.",
                "Common modes include r for reading, w for writing/truncating, and a for appending. Binary modes use b where relevant, such as rb or wb.",
                "fgets reads at most size - 1 characters and null-terminates a successful result; use its return value to detect end-of-file or errors.",
                "Close files with fclose when finished. Check write and close results when reliable persistence matters.",
                "After a read loop, check ferror(stream) when you need to distinguish a read error from normal end-of-file; feof becomes true only after an attempted read reaches EOF.",
                "Use perror or another diagnostic to explain file errors, and do not assume the current working directory is the source-code directory.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'File handling uses fopen, fprintf, fgets, fclose. Choose the right mode (r, w, a) and always close your files.',
            },
          ],
        },
        {
          id: 'c-preprocessor',
          title: 'Preprocessor Directives',
          slug: 'preprocessor-directives',
          description: '#include, #define, macros, and conditional compilation.',
          duration: '10 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'The preprocessor runs before the compiler. It handles directives starting with # — including files, defining macros, and conditional compilation.',
            },
            {
              type: 'example',
              title: 'Example',
              code: {
                filename: 'preprocessor.c',
                language: 'c',
                code: `#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main(void) {
    printf("PI = %f\\n", PI);
    printf("Square of 5 = %d\\n", SQUARE(5));
    return 0;
}`,
              },
            },
            {
              type: 'notes',
              title: 'Common Directives',
              items: [
                '#include — include a header file.',
                '#define — define a macro or constant.',
                '#ifdef / #ifndef — conditional compilation.',
                '#undef — undefine a macro.',
                '#pragma — compiler-specific instructions.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Preprocessor',
              items: [
                "#include inserts header contents before compilation; angle brackets are commonly used for system headers and quotes for project headers.",
                "#define creates object-like or function-like macros. Parenthesize macro parameters and the full expression.",
                "Macros perform textual substitution and can evaluate an argument more than once; avoid passing expressions with side effects to macros such as SQUARE(i++).",
                "Use include guards or #pragma once (where supported) to prevent repeated inclusion of a header.",
                "#if, #ifdef, #ifndef, #else, and #endif support conditional compilation; they do not replace runtime if statements.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Preprocessor directives run before compilation. Use #include for headers, #define for constants and macros, and #ifdef for conditional compilation.',
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
          description: 'Build small real-world C programs to solidify your skills.',
          duration: '30 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Projects are where theory becomes skill. Build these mini projects to practice everything you have learned.',
            },
            {
              type: 'practice',
              title: 'Project Ideas',
              items: [
                'Calculator — add, subtract, multiply, divide using functions and switch.',
                'Number Guessing Game — use rand() and loops.',
                'Student Management System — structs + arrays + file handling.',
                'Tic-Tac-Toe — 2D arrays and game logic.',
                'Temperature Converter — functions and conditionals.',
                'Bank Management System — structs, files, and menus.',
              ],
            },
            {
              type: 'tips',
              title: 'Tips',
              items: [
                'Start with the smallest project and build up.',
                'Commit each project to GitHub.',
                'Write clean code with meaningful function names.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Building Mini Projects',
              items: [
                "Break a project into small functions with clear responsibilities instead of placing the entire program inside main.",
                "Validate input and handle invalid choices, empty data, and boundary values—not only the happy path.",
                "Choose appropriate data structures and keep data separate from menu/input logic when practical.",
                "Compile with warnings, test normal and edge cases, and fix memory/resource leaks before publishing.",
                "Document the build command, sample usage, limitations, and what the project demonstrates in the README.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Build at least 3 mini projects to move from theory to practice. A calculator, a game, and a file-based management system cover the core skills.',
            },
          ],
        },
        {
          id: 'c-advanced-projects',
          title: 'Advanced Projects',
          slug: 'advanced-projects',
          description: 'Larger projects to build your portfolio.',
          duration: '45 min',
          difficulty: 'advanced',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Once you are comfortable with mini projects, tackle these larger ones to build a real portfolio.',
            },
            {
              type: 'practice',
              title: 'Advanced Project Ideas',
              items: [
                'Phonebook Application — add, search, delete contacts with file storage.',
                'Library Management System — full CRUD with file handling.',
                'Snake Game — use ncurses or console rendering.',
                'Custom Shell — parse and execute commands like a mini bash.',
                'HTTP Server — a basic socket-based web server.',
                'Markdown to HTML converter — file parsing and output.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Planning Larger Projects',
              items: [
                "Define the requirements and data model before coding; list the commands or operations the program must support.",
                "Separate modules such as input validation, business logic, storage, and reporting when the project grows.",
                "Handle failures explicitly: file errors, invalid input, allocation failures, and inconsistent data.",
                "Add tests for edge cases and regression cases so later changes do not silently break existing behavior.",
                "An advanced project should demonstrate design, correctness, documentation, and maintainability—not just a large number of lines.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Advanced projects like a library system, custom shell, or HTTP server demonstrate real engineering ability and make your portfolio stand out.',
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
          description: 'The most common C interview questions with answers.',
          duration: '25 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'These are the most frequently asked C interview questions. Review them before any C or systems programming interview.',
            },
            {
              type: 'interviewQuestions',
              title: 'Top C Interview Questions',
              questions: [
                { q: 'What is the difference between struct and union?', a: 'A struct allocates separate memory for each member; a union shares one memory location among all members, so only one member is valid at a time.' },
                { q: 'What is a pointer? Why use it?', a: 'A pointer stores a memory address. It enables dynamic memory, pass-by-reference, efficient array/string handling, and function pointers.' },
                { q: 'What is the difference between malloc and calloc?', a: 'malloc allocates uninitialized memory; calloc allocates and zero-initializes it.' },
                { q: 'What is a memory leak?', a: 'Memory allocated with malloc/calloc that is never freed, gradually exhausting available memory.' },
                { q: 'What is the difference between ++i and i++?', a: '++i increments before using the value (pre-increment); i++ uses the value then increments (post-increment).' },
                { q: 'What is a function pointer?', a: 'A pointer that stores the address of a function, allowing functions to be called dynamically — used in callbacks and dispatch tables.' },
                { q: 'What is the difference between const char* and char* const?', a: 'const char* points to constant data (cannot modify the chars); char* const is a constant pointer (cannot change where it points).' },
                { q: 'Explain the difference between stack and heap memory.', a: 'Stack is automatic, fast, and scoped to function calls. Heap is manual (malloc/free), slower, and persists until freed.' },
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: C Interview Revision',
              items: [
                "Be able to explain pointers, arrays versus pointers, strings and '\\0', struct versus union, and stack versus dynamically allocated storage.",
                "Know the differences between malloc and calloc, declaration and definition, and const int * versus int *const.",
                "Explain undefined behavior with concrete examples such as out-of-bounds array access or dereferencing an invalid pointer.",
                "Practice tracing short code snippets and state assumptions; avoid memorized answers that ignore C standard details.",
                "Interview answers are stronger when paired with a small example and a note about edge cases.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Know pointers, memory management, struct vs union, const correctness, and stack vs heap. These are the core C interview topics.',
            },
          ],
        },
        {
          id: 'c-practice-programs',
          title: 'Practice Programs',
          slug: 'practice-programs',
          description: 'Hands-on programs to sharpen your C skills.',
          duration: '40 min',
          difficulty: 'intermediate',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Solve these programs to build muscle memory. Each one targets a specific concept.',
            },
            {
              type: 'practice',
              title: 'Program List',
              items: [
                'Check if a number is prime.',
                'Reverse a number.',
                'Check if a string is a palindrome.',
                'Find the factorial of a number (iterative and recursive).',
                'Print the Fibonacci series.',
                'Bubble sort an array.',
                'Find the sum of digits of a number.',
                'Count vowels and consonants in a string.',
                'Swap two numbers without a temp variable.',
                'Convert decimal to binary.',
                'Implement a simple calculator using switch.',
                'Find the transpose of a matrix.',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: How to Practise',
              items: [
                "Before coding, write down the inputs, expected output, constraints, and at least one edge case.",
                "Test boundary inputs such as 0, 1, negative values where allowed, empty strings, and maximum supported sizes.",
                "Use helper functions and meaningful variable names so the solution is easy to explain.",
                "Compile with warnings and test more than one input; a single successful run does not prove correctness.",
                "After solving, explain the algorithm and its time/space complexity where relevant.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Solve at least 10 of these programs without looking at solutions. This is the fastest way to get comfortable with C syntax and logic.',
            },
          ],
        },
        {
          id: 'c-job-ready',
          title: 'Job Ready Checklist',
          slug: 'job-ready-checklist',
          description: 'Everything you need to be job-ready in C.',
          duration: '10 min',
          difficulty: 'beginner',
          sections: [
            {
              type: 'introduction',
              title: 'Introduction',
              content: 'Use this checklist to make sure you are ready to apply for C-related roles.',
            },
            {
              type: 'notes',
              title: 'Checklist',
              items: [
                'Comfortable with all data types and operators.',
                'Can write and understand functions and recursion.',
                'Understand pointers deeply — including function pointers.',
                'Can use arrays, strings, and structures confidently.',
                'Can do dynamic memory allocation without leaks.',
                'Can read and write files.',
                'Have built at least 3 projects on GitHub.',
                'Can solve 20+ practice programs without help.',
                'Can answer the top 15 C interview questions.',
                'Understand basic data structures (arrays, linked lists, stacks).',
              ],
            },
            {
              type: 'notes',
              title: 'Short Notes: Self-Assessment',
              items: [
                "Do not mark a topic complete just because you read it; explain it in your own words and solve a small problem without copying.",
                "Be able to compile, run, debug, and test programs from the terminal or your chosen IDE.",
                "Demonstrate safe handling of strings, pointers, dynamic memory, and file errors in at least one project.",
                "Keep project READMEs honest and reproducible, with requirements, build steps, sample output, and known limitations.",
                "Use this checklist as a learning guide, not a guarantee of employment; job readiness depends on the role and demonstrated skills.",
              ],
            },
            {
              type: 'summary',
              title: 'Summary',
              content: 'Completing this checklist shows progress, but it does not guarantee job readiness or employment. Compare your skills with the roles you want and keep practising with real projects.'
            },
          ],
        },
      ],
    },
  ],
};
