export interface DsaTopic {
  id: string;
  title: string;
  level: 'Foundation' | 'Core' | 'Advanced';
  explanation: string;
  whenToUse: string;
  complexity: string;
  pitfalls: string[];
  example: string;
}

export interface DsaProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prompt: string;
  approach: string;
  complexity: string;
  solution: string;
}

export const dsaTopics: DsaTopic[] = [
  {
    id: 'complexity',
    title: 'Complexity Analysis',
    level: 'Foundation',
    explanation: 'Time complexity describes how operation counts grow with input size n; space complexity describes additional memory. Big-O is an asymptotic upper bound, not a stopwatch measurement.',
    whenToUse: 'Estimate whether an approach will scale before optimizing it. State assumptions and count the dominant operation.',
    complexity: 'Common growth: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ).',
    pitfalls: ['Dropping constants is useful asymptotically, but constants still affect real performance.', 'Nested loops are not automatically O(n²): inspect how many times each loop runs.', 'Distinguish auxiliary space from input storage.'],
    example: `// One pass: O(n) time, O(1) auxiliary space
int sum = 0;
for (int value : values) {
    sum += value;
}`,
  },
  {
    id: 'arrays-strings',
    title: 'Arrays & Strings',
    level: 'Foundation',
    explanation: 'Arrays store elements contiguously and support constant-time indexed access. Strings are character sequences; in C++ std::string manages its own storage and length.',
    whenToUse: 'Use arrays/vectors for indexed data, two-pointer scans, prefix sums, sliding windows, and sorting-based solutions.',
    complexity: 'Index access O(1); search O(n); insertion/deletion in the middle O(n); append to vector amortized O(1).',
    pitfalls: ['Check empty and one-element inputs.', 'Avoid off-by-one errors in half-open ranges [left, right).', 'Do not assume a vector append never reallocates or invalidates references.'],
    example: `#include <vector>
#include <algorithm>

int maxValue(const std::vector<int>& values) {
    if (values.empty()) return 0; // Contract: 0 for empty input
    return *std::max_element(values.begin(), values.end());
}`,
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    level: 'Core',
    explanation: 'A linked list stores nodes connected by pointers. A singly linked node points to the next node; a doubly linked node also points to the previous node.',
    whenToUse: 'Useful when nodes must be inserted or removed through a known iterator/node and contiguous storage is not required.',
    complexity: 'Search/index access O(n); insertion or removal at a known node O(1).',
    pitfalls: ['Handle an empty head and deletion of the head separately.', 'Update links before freeing a removed node.', 'Prefer std::list only when its iterator-stability and insertion behavior are actually needed.'],
    example: `struct Node {
    int value;
    Node* next;
};

Node* reverseList(Node* head) {
    Node* previous = nullptr;
    while (head != nullptr) {
        Node* nextNode = head->next;
        head->next = previous;
        previous = head;
        head = nextNode;
    }
    return previous;
}`,
  },
  {
    id: 'stack-queue',
    title: 'Stacks & Queues',
    level: 'Core',
    explanation: 'A stack is last-in, first-out (LIFO); a queue is first-in, first-out (FIFO). Both are abstract data types with restricted access to their ends.',
    whenToUse: 'Stacks help with parsing, undo operations, DFS and monotonic-stack problems. Queues help with scheduling and breadth-first search.',
    complexity: 'Push, pop and top/front are O(1) for standard stack/queue operations.',
    pitfalls: ['Check empty() before top(), pop(), front() or back().', 'Use std::deque or std::queue rather than erasing vector index zero repeatedly.'],
    example: `#include <queue>
#include <stack>

std::stack<int> history;
history.push(10);
if (!history.empty()) history.pop();

std::queue<int> jobs;
jobs.push(1);
if (!jobs.empty()) jobs.pop();`,
  },
  {
    id: 'hashing',
    title: 'Hash Tables',
    level: 'Core',
    explanation: 'Hash tables map keys to buckets using a hash function. Collisions are resolved internally; performance depends on the hash distribution and load factor.',
    whenToUse: 'Use std::unordered_map or std::unordered_set for frequency counting, membership tests and lookup by key.',
    complexity: 'Average lookup/insert/erase O(1); worst case O(n). Ordered std::map operations are O(log n).',
    pitfalls: ['Do not depend on unordered iteration order.', 'Use find() when a missing lookup must not insert a new key.', 'A hash table is not automatically faster for every tiny input or key type.'],
    example: `#include <unordered_map>
#include <vector>

std::unordered_map<int, int> frequency(const std::vector<int>& values) {
    std::unordered_map<int, int> counts;
    for (int value : values) ++counts[value];
    return counts;
}`,
  },
  {
    id: 'searching',
    title: 'Searching',
    level: 'Core',
    explanation: 'Linear search checks elements one by one. Binary search repeatedly halves a sorted search range and requires a monotonic/sorted condition.',
    whenToUse: 'Use linear search for unsorted small collections; binary search for sorted data or answer spaces with a monotonic predicate.',
    complexity: 'Linear O(n); binary O(log n) comparisons.',
    pitfalls: ['Binary search requires sorted data (or a valid monotonic predicate).', 'Use std::lower_bound/upper_bound for iterator-safe boundary searches.', 'Avoid overflow-prone midpoint expressions; use left + (right - left) / 2.'],
    example: `#include <algorithm>
#include <vector>

bool contains(const std::vector<int>& sorted, int target) {
    return std::binary_search(sorted.begin(), sorted.end(), target);
}`,
  },
  {
    id: 'sorting',
    title: 'Sorting',
    level: 'Core',
    explanation: 'Sorting arranges values under a comparison rule. It often simplifies duplicate detection, interval processing, greedy strategies and two-pointer scans.',
    whenToUse: 'Sort when order creates a simpler invariant; use a comparator to define a strict weak ordering.',
    complexity: 'std::sort: O(n log n) comparisons; std::stable_sort: O(n log n) comparisons with extra memory.',
    pitfalls: ['Comparators must define a strict weak ordering; do not use <=.', 'Sorting changes original order; copy first if it must be preserved.', 'std::sort requires random-access iterators.'],
    example: `#include <algorithm>
#include <vector>

std::sort(values.begin(), values.end(),
          [](int a, int b) { return a < b; });`,
  },
  {
    id: 'recursion',
    title: 'Recursion & Backtracking',
    level: 'Core',
    explanation: 'A recursive function solves a smaller instance of the same problem. Backtracking explores choices and undoes a choice when returning from a branch.',
    whenToUse: 'Use for tree traversal, divide-and-conquer, permutations, combinations and constraint search.',
    complexity: 'Depends on branching and depth; recursion also uses call-stack space proportional to maximum depth.',
    pitfalls: ['Every recursive path must make progress toward a base case.', 'Exponential search needs pruning or constraints to remain practical.', 'Deep recursion can overflow the call stack.'],
    example: `int factorial(int n) {
    if (n < 0) return -1; // Invalid input for this example contract
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
  },
  {
    id: 'trees',
    title: 'Trees & Binary Search Trees',
    level: 'Advanced',
    explanation: 'A tree is a hierarchical structure. In a binary search tree, keys in the left subtree are smaller and keys in the right subtree are larger under its comparator.',
    whenToUse: 'Use trees for hierarchical data, ordered lookup, expression parsing, and range/query structures.',
    complexity: 'Balanced BST search/insert/delete O(log n); unbalanced BST worst case O(n). Traversal O(n).',
    pitfalls: ['A plain BST is not guaranteed balanced.', 'Define duplicate-key behavior.', 'Use iterative traversal or guard recursion depth for untrusted tall trees.'],
    example: `struct TreeNode {
    int value;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;
};

void inorder(const TreeNode* node) {
    if (!node) return;
    inorder(node->left);
    // Visit node->value here.
    inorder(node->right);
}`,
  },
  {
    id: 'heaps',
    title: 'Heaps & Priority Queues',
    level: 'Advanced',
    explanation: 'A binary heap maintains a partial order so its highest- or lowest-priority element can be retrieved efficiently. std::priority_queue is a max-heap by default.',
    whenToUse: 'Use for top-k problems, scheduling, merging sorted streams and Dijkstra-style algorithms.',
    complexity: 'Top O(1); push/pop O(log n); building a heap from n elements O(n).',
    pitfalls: ['A heap is not fully sorted; only its top is guaranteed.', 'Choose the comparator carefully for min-heap behavior.', 'Lazy deletion may be needed when priorities can change.'],
    example: `#include <queue>
#include <vector>
#include <functional>

std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
minHeap.push(8);
minHeap.push(3);
int smallest = minHeap.top(); // 3`,
  },
  {
    id: 'graphs',
    title: 'Graphs & Traversals',
    level: 'Advanced',
    explanation: 'A graph models vertices connected by edges. It may be directed/undirected and weighted/unweighted. Adjacency lists are memory-efficient for sparse graphs.',
    whenToUse: 'Use BFS for shortest paths in unweighted graphs; DFS for reachability, components, cycle detection and topological workflows.',
    complexity: 'BFS/DFS O(V + E) with adjacency lists; adjacency matrix storage O(V²).',
    pitfalls: ['Track visited vertices to avoid revisiting cycles.', 'For disconnected graphs, start traversal from every unvisited vertex.', 'Use Dijkstra only with non-negative edge weights.'],
    example: `#include <queue>
#include <vector>

void bfs(const std::vector<std::vector<int>>& graph, int start) {
    std::vector<bool> visited(graph.size(), false);
    std::queue<int> pending;
    visited[start] = true;
    pending.push(start);
    while (!pending.empty()) {
        int node = pending.front();
        pending.pop();
        for (int next : graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                pending.push(next);
            }
        }
    }
}`,
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    level: 'Advanced',
    explanation: 'A greedy algorithm makes a locally optimal choice at each step. It is correct only when the problem has a proof-supported greedy-choice property and optimal substructure.',
    whenToUse: 'Common in interval scheduling, minimum spanning trees, Huffman coding and some coin systems.',
    complexity: 'Often dominated by sorting: O(n log n), followed by a linear scan.',
    pitfalls: ['A locally best choice is not always globally optimal.', 'Do not assume the greedy strategy works because it passes a few examples.', 'Write down the exchange or cut-property argument.'],
    example: `// Activity selection: sort by finish time, then take
// the next interval whose start >= the last finish.
// Sorting O(n log n); scan O(n).`,
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    level: 'Advanced',
    explanation: 'Dynamic programming stores answers to overlapping subproblems. Define a state, recurrence, base cases and evaluation order before writing code.',
    whenToUse: 'Use when a problem has overlapping subproblems and optimal substructure; choose memoization or tabulation.',
    complexity: 'Usually number of states × transitions per state.',
    pitfalls: ['State definitions must contain enough information.', 'Initialize impossible/unreachable states distinctly from valid zero values.', 'Check integer overflow and whether memory can be compressed.'],
    example: `#include <vector>

int fibonacci(int n) {
    if (n <= 1) return n;
    std::vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`,
  },
];

export const dsaProblems: DsaProblem[] = [
  {
    id: 'pair-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    prompt: 'Given an integer vector and a target, return the indices of two distinct elements whose sum equals the target. Assume exactly one answer exists.',
    approach: 'Scan once. For each value, look for target - value among values already seen; then store the current value and index.',
    complexity: 'Average O(n) time and O(n) extra space.',
    solution: `#include <unordered_map>
#include <vector>

std::vector<int> twoSum(const std::vector<int>& values, int target) {
    std::unordered_map<int, int> seen;
    for (int i = 0; i < static_cast<int>(values.size()); ++i) {
        int needed = target - values[i];
        auto match = seen.find(needed);
        if (match != seen.end()) return {match->second, i};
        seen.emplace(values[i], i);
    }
    return {};
}`,
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    prompt: 'Given a string containing only (), [] and {}, determine whether brackets are balanced and correctly nested.',
    approach: 'Push opening brackets. For each closing bracket, require a matching opening bracket at the stack top. The stack must be empty at the end.',
    complexity: 'O(n) time and O(n) worst-case space.',
    solution: `#include <stack>
#include <string>

bool isValid(const std::string& text) {
    std::stack<char> open;
    for (char ch : text) {
        if (ch == '(' || ch == '[' || ch == '{') {
            open.push(ch);
        } else {
            if (open.empty()) return false;
            char top = open.top();
            open.pop();
            if ((ch == ')' && top != '(') ||
                (ch == ']' && top != '[') ||
                (ch == '}' && top != '{')) return false;
        }
    }
    return open.empty();
}`,
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Easy',
    prompt: 'Return the index of target in a sorted vector, or -1 when it is absent.',
    approach: 'Maintain a half-open search interval [left, right). Discard half the interval after each comparison.',
    complexity: 'O(log n) time and O(1) extra space.',
    solution: `#include <vector>

int binarySearch(const std::vector<int>& values, int target) {
    int left = 0;
    int right = static_cast<int>(values.size());
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (values[mid] == target) return mid;
        if (values[mid] < target) left = mid + 1;
        else right = mid;
    }
    return -1;
}`,
  },
  {
    id: 'merge-sorted',
    title: 'Merge Two Sorted Arrays',
    difficulty: 'Easy',
    prompt: 'Merge two non-decreasing vectors into one sorted vector without sorting the combined result.',
    approach: 'Use two indices and append the smaller current value. Append the remaining suffix when one input ends.',
    complexity: 'O(n + m) time and O(n + m) output space.',
    solution: `#include <vector>

std::vector<int> mergeSorted(const std::vector<int>& a, const std::vector<int>& b) {
    std::vector<int> result;
    result.reserve(a.size() + b.size());
    std::size_t i = 0, j = 0;
    while (i < a.size() && j < b.size()) {
        if (a[i] <= b[j]) result.push_back(a[i++]);
        else result.push_back(b[j++]);
    }
    while (i < a.size()) result.push_back(a[i++]);
    while (j < b.size()) result.push_back(b[j++]);
    return result;
}`,
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    prompt: 'Find the maximum sum of a non-empty contiguous subarray.',
    approach: 'Kadane’s algorithm: at each position, either extend the previous best-ending subarray or start a new one.',
    complexity: 'O(n) time and O(1) extra space.',
    solution: `#include <algorithm>
#include <vector>

int maxSubarray(const std::vector<int>& values) {
    if (values.empty()) return 0; // Contract: 0 for empty input
    int endingHere = values[0];
    int best = values[0];
    for (std::size_t i = 1; i < values.size(); ++i) {
        endingHere = std::max(values[i], endingHere + values[i]);
        best = std::max(best, endingHere);
    }
    return best;
}`,
  },
  {
    id: 'first-non-repeating',
    title: 'First Non-Repeating Character',
    difficulty: 'Medium',
    prompt: 'Return the first character that occurs exactly once in a string, or nullopt if none exists. Treat bytes as characters for this exercise.',
    approach: 'Count frequencies in one pass, then scan again to find the first count of one.',
    complexity: 'O(n) time and O(1) auxiliary space for a fixed 256-byte alphabet.',
    solution: `#include <array>
#include <optional>
#include <string>

std::optional<char> firstUnique(const std::string& text) {
    std::array<int, 256> counts{};
    for (unsigned char ch : text) ++counts[ch];
    for (unsigned char ch : text) {
        if (counts[ch] == 1) return static_cast<char>(ch);
    }
    return std::nullopt;
}`,
  },
  {
    id: 'rotate-array',
    title: 'Rotate Array',
    difficulty: 'Medium',
    prompt: 'Rotate a vector to the right by k positions. Handle k larger than the vector length.',
    approach: 'Normalize k with modulo n, then reverse the whole vector, the first k elements and the remaining suffix.',
    complexity: 'O(n) time and O(1) extra space.',
    solution: `#include <algorithm>
#include <vector>

void rotateRight(std::vector<int>& values, std::size_t k) {
    if (values.empty()) return;
    k %= values.size();
    std::reverse(values.begin(), values.end());
    std::reverse(values.begin(), values.begin() + static_cast<std::ptrdiff_t>(k));
    std::reverse(values.begin() + static_cast<std::ptrdiff_t>(k), values.end());
}`,
  },
  {
    id: 'level-order',
    title: 'Binary Tree Level Order',
    difficulty: 'Medium',
    prompt: 'Return the values of a binary tree grouped by depth, from left to right.',
    approach: 'Use BFS. Capture the queue size at the start of each level so newly added children belong to the next level.',
    complexity: 'O(n) time and O(w) queue space, where w is maximum tree width.',
    solution: `#include <queue>
#include <vector>

struct Node {
    int value;
    Node* left = nullptr;
    Node* right = nullptr;
};

std::vector<std::vector<int>> levelOrder(Node* root) {
    std::vector<std::vector<int>> levels;
    if (!root) return levels;
    std::queue<Node*> pending;
    pending.push(root);
    while (!pending.empty()) {
        std::size_t count = pending.size();
        std::vector<int> level;
        while (count--) {
            Node* node = pending.front();
            pending.pop();
            level.push_back(node->value);
            if (node->left) pending.push(node->left);
            if (node->right) pending.push(node->right);
        }
        levels.push_back(std::move(level));
    }
    return levels;
}`,
  },
  {
    id: 'island-count',
    title: 'Number of Islands',
    difficulty: 'Medium',
    prompt: 'Given a rectangular grid of 0s and 1s, count connected groups of 1s using four-directional adjacency.',
    approach: 'Scan each cell. When an unvisited land cell is found, increment the count and flood-fill its component.',
    complexity: 'O(rows × columns) time and O(rows × columns) worst-case visited/stack space.',
    solution: `#include <queue>
#include <string>
#include <vector>

int countIslands(std::vector<std::string> grid) {
    if (grid.empty() || grid[0].empty()) return 0;
    const int rows = static_cast<int>(grid.size());
    const int cols = static_cast<int>(grid[0].size());
    const int dr[] = {-1, 1, 0, 0};
    const int dc[] = {0, 0, -1, 1};
    int islands = 0;
    for (int r = 0; r < rows; ++r) {
        for (int c = 0; c < cols; ++c) {
            if (grid[r][c] != '1') continue;
            ++islands;
            std::queue<std::pair<int, int>> q;
            q.push({r, c});
            grid[r][c] = '0';
            while (!q.empty()) {
                auto [row, col] = q.front();
                q.pop();
                for (int d = 0; d < 4; ++d) {
                    int nr = row + dr[d], nc = col + dc[d];
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1') {
                        grid[nr][nc] = '0';
                        q.push({nr, nc});
                    }
                }
            }
        }
    }
    return islands;
}`,
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    difficulty: 'Hard',
    prompt: 'Given positive coin denominations and an amount, return the minimum number of coins needed, or -1 if it cannot be formed. Each denomination can be used unlimited times.',
    approach: 'Bottom-up DP. dp[x] is the minimum coins required for amount x; initialize unreachable states to a sentinel.',
    complexity: 'O(amount × number of denominations) time and O(amount) space.',
    solution: `#include <algorithm>
#include <vector>

int minCoins(const std::vector<int>& coins, int amount) {
    const int unreachable = amount + 1;
    std::vector<int> dp(amount + 1, unreachable);
    dp[0] = 0;
    for (int value = 1; value <= amount; ++value) {
        for (int coin : coins) {
            if (coin > 0 && coin <= value && dp[value - coin] != unreachable) {
                dp[value] = std::min(dp[value], dp[value - coin] + 1);
            }
        }
    }
    return dp[amount] == unreachable ? -1 : dp[amount];
}`,
  },
  {
    id: 'top-k',
    title: 'Top K Frequent Elements',
    difficulty: 'Hard',
    prompt: 'Return the k most frequent integers. If frequencies tie, any order is acceptable.',
    approach: 'Count with a hash map, then maintain a min-heap of at most k (frequency, value) pairs.',
    complexity: 'O(n log k) expected time and O(n) extra space.',
    solution: `#include <queue>
#include <unordered_map>
#include <vector>
#include <utility>

std::vector<int> topKFrequent(const std::vector<int>& values, int k) {
    std::unordered_map<int, int> counts;
    for (int value : values) ++counts[value];
    using Entry = std::pair<int, int>; // frequency, value
    std::priority_queue<Entry, std::vector<Entry>, std::greater<Entry>> heap;
    for (const auto& [value, count] : counts) {
        heap.push({count, value});
        if (static_cast<int>(heap.size()) > k) heap.pop();
    }
    std::vector<int> result;
    while (!heap.empty()) {
        result.push_back(heap.top().second);
        heap.pop();
    }
    return result;
}`,
  },
];
