export interface DownloadItem {
  id: string;
  name: string;
  description: string;
  platforms: string[];
  url: string;
  icon: string;
  category: 'editor' | 'compiler' | 'tools';
}

export const downloads: DownloadItem[] = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'A free, lightweight, and powerful code editor with excellent C/C++ support through extensions. The most popular choice for modern development.',
    platforms: ['Windows', 'macOS', 'Linux'],
    url: 'https://code.visualstudio.com/download',
    icon: 'Code',
    category: 'editor',
  },
  {
    id: 'mingw',
    name: 'MinGW-w64',
    description: 'A free C and C++ compiler for Windows. Provides GCC (gcc and g++) so you can compile programs from the command line or VS Code.',
    platforms: ['Windows'],
    url: 'https://www.mingw-w64.org/downloads/',
    icon: 'Terminal',
    category: 'compiler',
  },
  {
    id: 'codeblocks',
    name: 'Code::Blocks',
    description: 'A free C/C++ IDE that comes bundled with MinGW. Great for beginners who want an all-in-one setup without configuring a compiler separately.',
    platforms: ['Windows', 'macOS', 'Linux'],
    url: 'https://www.codeblocks.org/downloads/binaries/',
    icon: 'Blocks',
    category: 'editor',
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Version control system essential for every developer. Track changes, collaborate, and push your projects to GitHub.',
    platforms: ['Windows', 'macOS', 'Linux'],
    url: 'https://git-scm.com/downloads',
    icon: 'GitBranch',
    category: 'tools',
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    description: 'A visual Git client that makes version control easy without memorizing commands. Perfect for beginners managing their first repositories.',
    platforms: ['Windows', 'macOS'],
    url: 'https://desktop.github.com/',
    icon: 'Github',
    category: 'tools',
  },
  {
    id: 'cmake',
    name: 'CMake (Optional)',
    description: 'A build system generator that manages the compilation process for larger projects. Optional for beginners but essential for advanced C/C++ projects.',
    platforms: ['Windows', 'macOS', 'Linux'],
    url: 'https://cmake.org/download/',
    icon: 'Settings',
    category: 'tools',
  },
];
