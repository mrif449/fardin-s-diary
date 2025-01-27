---
title: Python Basics
date: "2025-01-27"
tags: ["Python", "Interview"]
summary: "A concise overview of fundamental Python concepts, including its key features, differences between Python 2 and 3, interpretation, built-in data types, mutability, copying, and namespaces."
---

1. **What are Python’s key features?**
    - Easy-to-learn syntax.
    - Dynamically typed.
    - Interpreted.
    - Extensive standard library.
    - Supports multiple programming paradigms.
2. **What is the difference between Python 2 and Python 3?**  
    Python 3 is the modern version with Unicode by default, improved syntax (e.g., `print()` function), and better libraries. Python 2 is outdated.
    
3. **How is Python interpreted?**  
    Python code is converted into bytecode and executed by the Python virtual machine (PVM).
    
4. **What are Python’s built-in data types?**
    - Numeric: `int`, `float`, `complex`
    - Sequence: `str`, `list`, `tuple`
    - Set: `set`, `frozenset`
    - Mapping: `dict`
    - Boolean: `bool`
5. **What are mutable and immutable data types in Python?**
    - Mutable: Can be modified (e.g., `list`, `dict`, `set`).
    - Immutable: Cannot be modified (e.g., `str`, `tuple`, `int`).
6. **What is the difference between a shallow copy and a deep copy?**
    - Shallow copy: Copies only the top-level structure.
    - Deep copy: Copies all levels of an object.
7. **What are Python's namespaces?**  
    A namespace is a container that maps names to objects, like variables and functions.
    
8. **How are arguments passed in Python: by reference or by value?**  
    Python uses **pass-by-object-reference**. Mutable objects can be modified, but reassignment creates a new object.
    
9. **What is the purpose of the `self` keyword?**  
    Refers to the current instance of a class, used to access instance variables and methods.
    
10. **Explain the difference between `is` and `==` operators.**
    - `is`: Checks object identity (same memory address).
    - `==`: Checks value equality.

---

### **Advanced Python**

11. **What are Python decorators, and how are they used?**  
    Functions that modify the behavior of other functions or methods:
    
    ```python
    def decorator(func):
        def wrapper():
            print("Before function")
            func()
            print("After function")
        return wrapper
    ```
    
12. **What are generators in Python?**  
    Functions that yield values one at a time, used for memory efficiency:
    
    ```python
    def generator():
        yield 1
        yield 2
    ```
    
13. **Explain the difference between `@staticmethod`, `@classmethod`, and instance methods.**
    - `@staticmethod`: Does not access class or instance.
    - `@classmethod`: Accesses the class via `cls`.
    - Instance methods: Access instance via `self`.
14. **What is a Python context manager? How is it implemented using `with`?**  
    Manages resources, ensuring proper cleanup (e.g., closing files):
    
    ```python
    with open('file.txt') as f:
        data = f.read()
    ```
    
15. **What are metaclasses in Python?**  
    Classes that define behavior of other classes. Used for class customization.
    
16. **Explain the Global Interpreter Lock (GIL) in Python.**  
    GIL ensures only one thread executes Python bytecode at a time.
    
17. **What is the difference between `deepcopy()` and `copy()` in the `copy` module?**
    - `copy()`: Shallow copy.
    - `deepcopy()`: Recursively copies all objects.
18. **How can you manage memory in Python?**  
    Python uses automatic garbage collection, but you can manually use `del` or manage references.
    
19. **Explain Python's `*args` and `**kwargs`.**
    - `*args`: Accepts variable positional arguments.
    - `**kwargs`: Accepts variable keyword arguments.
20. **What is the purpose of the `__init__` method in Python?**  
    Initializes a class instance, setting initial values.
    

---

### **Object-Oriented Programming (OOP)**

21. **What are the four pillars of OOP?**
    - Encapsulation
    - Inheritance
    - Polymorphism
    - Abstraction
22. **What is the difference between a class and an object?**
    - Class: Blueprint for creating objects.
    - Object: Instance of a class.
23. **How does Python implement encapsulation?**  
    Using private attributes (`__attribute`) and methods with controlled access.
    
24. **What are Python’s special or magic methods?**  
    Methods with double underscores (`__`). Examples: `__init__`, `__str__`, `__len__`.
    
25. **Explain inheritance in Python and its types.**  
    Enables child classes to inherit from parent classes.  
    Types: Single, multiple, multilevel, hierarchical, hybrid.
    
26. **What is method overriding in Python?**  
    Redefining a parent class method in a child class.
    
27. **Explain the concept of polymorphism with examples.**  
    Same method names behaving differently based on context (e.g., method overriding).
    
28. **How is multiple inheritance handled in Python?**  
    Python resolves conflicts using the Method Resolution Order (MRO).
    
29. **What is the purpose of the `super()` function?**  
    Calls the parent class’s methods or constructors.
    
30. **Explain abstraction and how it is achieved in Python.**  
    Hides implementation details using abstract base classes (`abc` module).
    

---

### **Data Structures**

#### **Built-in Data Structures**

31. **What are Python’s built-in data structures?**  
    `list`, `tuple`, `set`, `dict`, `frozenset`.
    
32. **How is a list different from a tuple?**
    - List: Mutable.
    - Tuple: Immutable.
33. **What are sets in Python? How do they differ from lists?**  
    Unordered collections of unique elements. No duplicate values.
    
34. **What is a dictionary in Python, and how is it implemented?**  
    Key-value pairs implemented using hash tables.
    
35. **How can you merge two dictionaries in Python?**  
    Use `update()` or `**` unpacking:
    
    ```python
    merged = {**dict1, **dict2}
    ```
    

#### **Custom Implementations**

36. **How would you implement a stack in Python?**  
    Using a list with `append` and `pop` methods.
    
37. **How would you implement a queue in Python?**  
    Using `collections.deque`.
    
38. **Explain the difference between a linked list and an array.**
    - Linked list: Dynamic, uses nodes.
    - Array: Static, continuous memory.
39. **What is a binary search tree (BST)?**  
    Tree where left node < root < right node.
    
40. **What are heaps?**  
    Binary trees that maintain a heap property (min-heap or max-heap).
    

---

### **Algorithms**

#### **Sorting Algorithms**

46. **How does the quicksort algorithm work?**  
    Partitions the array around a pivot and recursively sorts subarrays.
    
47. **How is merge sort different from quicksort?**  
    Merge sort is stable and uses extra space. Quicksort is faster on average.
    
48. **Explain bubble sort and its time complexity.**  
    Repeatedly swaps adjacent elements if out of order. O(n²).
    
49. **What is the difference between stable and unstable sorting algorithms?**  
    Stable algorithms preserve order of equal elements.
    
50. **How would you sort a dictionary by its values in Python?**
    ```python
    sorted_dict = dict(sorted(my_dict.items(), key=lambda x: x[1]))
    ```

#### **Searching Algorithms**

51. **What is the binary search algorithm?**  
    Searches in sorted arrays by repeatedly dividing the search range. Time: O(log n).
    
52. **How does linear search work?**  
    Iterates through the array. Time: O(n).
    
53. **What is the difference between depth-first search (DFS) and breadth-first search (BFS)?**  
    DFS uses stacks, explores deeply. BFS uses queues, explores level-by-level.
    
#### **Greedy Algorithms**

54. **What is a greedy algorithm?**
    
    - An algorithm that makes the optimal choice at each step, aiming for the global optimum.
55. **Explain the coin change problem using a greedy approach.**
    
    - The problem: Find the minimum number of coins needed to make a given amount.
    - Greedy approach: Always pick the largest coin denomination available until the total is reached.
    - Example in Python:
    
    ```python
    def coin_change(coins, amount):
        coins.sort(reverse=True)
        count = 0
        for coin in coins:
            if amount == 0:
                break
            count += amount // coin
            amount %= coin
        return count
    ```
    

---

#### **Dynamic Programming**

56. **What is dynamic programming?**
    - A method for solving problems by breaking them into overlapping subproblems and solving each only once.
    - Examples: Fibonacci, Knapsack problem.
57. **How would you solve the 0/1 Knapsack problem using dynamic programming?**
    - Use a 2D array `dp` where `dp[i][w]` represents the maximum value for the first `i` items and weight `w`.
58. **Explain the Fibonacci sequence problem and its dynamic programming solution.**
    - Use a bottom-up approach to store Fibonacci numbers:
    
    ```python
    def fibonacci(n):
        dp = [0, 1]
        for i in range(2, n + 1):
            dp.append(dp[i - 1] + dp[i - 2])
        return dp[n]
    ```
    

---

#### **Graph Algorithms**

59. **How would you represent a graph in Python?**
    - Using adjacency lists:
    
    ```python
    graph = { 
        'A': ['B', 'C'], 
        'B': ['A', 'D'], 
        'C': ['A', 'D'], 
        'D': ['B', 'C'] 
    }
    ```
    
60. **What is Dijkstra’s algorithm, and how is it implemented in Python?**
    - Finds the shortest path from a source node to all other nodes.
    - Implementation uses a priority queue:
    
    ```python
    import heapq
    def dijkstra(graph, start):
        pq, distances = [(0, start)], {start: 0}
        while pq:
            current_distance, current_node = heapq.heappop(pq)
            for neighbor, weight in graph[current_node]:
                distance = current_distance + weight
                if neighbor not in distances or distance < distances[neighbor]:
                    distances[neighbor] = distance
                    heapq.heappush(pq, (distance, neighbor))
        return distances
    ```
    
61. **Explain the difference between Prim’s and Kruskal’s algorithms for MST.**
    - **Prim’s**: Builds the MST starting from a node, adding the smallest edge connected to the tree.
    - **Kruskal’s**: Sorts edges by weight and adds them to the MST if they don’t form a cycle.
62. **How does the Bellman-Ford algorithm differ from Dijkstra's?**
    - Bellman-Ford works with negative weights and relaxes edges repeatedly.
    - Dijkstra is faster but requires non-negative weights.
63. **How can you detect a cycle in a directed graph?**
    - Use depth-first search (DFS) and maintain a recursion stack.

---

#### **Miscellaneous**

64. **What is the sliding window technique? Provide an example.**
    - Technique to solve problems involving subarrays or substrings of fixed or variable lengths.
    - Example: Find the maximum sum of a subarray of size `k`:
    
    ```python
    def max_sum_subarray(arr, k):
        max_sum, window_sum = 0, sum(arr[:k])
        for i in range(len(arr) - k):
            window_sum += arr[i + k] - arr[i]
            max_sum = max(max_sum, window_sum)
        return max_sum
    ```
    
65. **How does the two-pointer technique work?**
    - Uses two pointers to traverse the array in different directions, solving problems like pair sums or palindromes efficiently.
66. **Explain the concept of backtracking with an example.**
    - Backtracking explores all possibilities but abandons paths that fail to satisfy constraints.
    - Example: Solving N-Queens problem.
67. **What are divide-and-conquer algorithms?**
    - Divide the problem into smaller subproblems, solve them recursively, and combine results.
    - Examples: Merge Sort, Quick Sort.

---

### **Complexity and Optimization**

68. **Explain time and space complexity with examples.**
    - **Time complexity**: Measure of time as a function of input size. Example: Linear search is O(n).
    - **Space complexity**: Memory usage by an algorithm. Example: Recursive Fibonacci uses O(n) space for the call stack.
69. **What is the difference between `O(n)` and `O(log n)`?**
    - O(n): Linear growth; processes each element (e.g., linear search).
    - O(log n): Logarithmic growth; halves the problem size at each step (e.g., binary search).
70. **What are some ways to optimize Python code?**
    - Use built-in functions and libraries (e.g., `sum`, `sorted`).
    - Use list comprehensions instead of loops.
    - Avoid redundant calculations; use memoization.
    - Leverage generators for large data.
    - Use NumPy for numerical computations.

---
