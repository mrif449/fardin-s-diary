---
title: React General Concepts
date: "2025-01-27"
tags: ["React", "Interview"]
summary: "A concise overview of fundamental React concepts, including its definition, key features, and the use of JSX."
---

1. **What is React? Why is it used?**  

   React is a JavaScript library for building user interfaces. It is used for creating fast, scalable, and interactive UI components.

  

2. **Key features of React?**  

   - Declarative syntax  

   - Component-based architecture  

   - Virtual DOM  

   - Unidirectional data flow  

   - Support for hooks  

  

3. **What is JSX? How is it different from HTML?**  

   JSX is a syntax extension that allows embedding HTML within JavaScript. It differs from HTML because it must follow JavaScript rules (e.g., using `className` instead of `class`).

  

4. **What are components in React? Name their types.**  

   Components are reusable UI building blocks.  

   - Functional components  

   - Class components  

  

5. **Difference between functional and class components?**  

   - Functional: Stateless, use hooks for state and lifecycle.  

   - Class: Stateful, use lifecycle methods.

  

6. **What is the Virtual DOM? How does it work?**  

   A lightweight copy of the real DOM. React updates the Virtual DOM first and efficiently reconciles changes with the real DOM.

  

7. **What are props? How are they different from state?**  

   - Props: Immutable, passed from parent to child.  

   - State: Mutable, managed within the component.

  

8. **What is state? How do you manage it?**  

   State is a component’s local data. Managed using `useState` (functional components) or `this.setState` (class components).

  

9. **Controlled vs Uncontrolled components?**  

   - Controlled: State is managed by React.  

   - Uncontrolled: State is managed by the DOM.

  

10. **Role of `key` in lists?**  

   Ensures React can identify and track list items efficiently during updates.

  

---

  

### **Lifecycle Methods (Class Components)**

11. **What are React lifecycle methods?**  

   Methods invoked at different stages: mounting, updating, and unmounting.  

  

12. **Difference between `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`?**  

   - `componentDidMount`: Runs after the component renders.  

   - `componentDidUpdate`: Runs after updates.  

   - `componentWillUnmount`: Runs before the component is destroyed.

  

13. **Purpose of `shouldComponentUpdate`?**  

   Controls whether a component should re-render, improving performance.

  

---

  

### **React Hooks**

14. **What are hooks? Why were they introduced?**  

   Functions that let you use state and lifecycle in functional components. They avoid complexity in class components.

  

15. **How does `useState` work?**  

   Declares a state variable and a function to update it:  

   ```javascript

   const [count, setCount] = useState(0);

   ```

  

16. **How does `useEffect` work?**  

   Runs side effects after rendering (e.g., fetching data). Dependencies determine when it runs.  

  

17. **What is `useContext`?**  

   Simplifies state sharing between components without props.  

  

18. **`useMemo` vs `useCallback`?**  

   - `useMemo`: Memoizes computed values.  

   - `useCallback`: Memoizes functions.

  

19. **What is `useRef`?**  

   Accesses or stores a DOM element or mutable value without causing re-renders.

  

---

  

### **React Rendering and Performance**

20. **How does React handle rendering?**  

   React uses the Virtual DOM and updates only the changed parts in the real DOM.

  

21. **Single-page vs Multi-page apps?**  

   - SPA: Loads a single HTML file; updates dynamically.  

   - MPA: Loads separate HTML files for each page.

  

22. **What are React fragments?**  

   A lightweight wrapper to group elements without adding extra DOM nodes:  

   ```javascript

   <>Content</>

   ```

  

23. **How to optimize React performance?**  

   - Use React.memo  

   - Split code with dynamic imports  

   - Use lazy loading  

  

24. **What is React memoization?**  

   Prevents unnecessary re-renders by memoizing components.

  

---

  

### **React Routing**

25. **What is React Router?**  

   A library for handling navigation in SPAs.

  

26. **Difference between `BrowserRouter` and `HashRouter`?**  

   - `BrowserRouter`: Uses clean URLs.  

   - `HashRouter`: Uses hash-based URLs.

  

27. **Define routes in React Router?**  

   ```javascript

   <Route path="/about" element={<About />} />

   ```

  

28. **What is `Switch`?**  

   Renders the first matching route (Replaced by `Routes` in React Router v6).

  

29. **How to pass data between routes?**  

   - Via URL params, query strings, or state:  

   ```javascript

   <Link to="/route" state={{ key: value }} />

   ```

  

---

  

### **State Management**

30. **What is state lifting?**  

   Moving state to a common parent to share it between child components.

  

31. **What is Redux?**  

   A library for managing application-wide state.

  

32. **What is the Context API?**  

   Provides global state management without third-party libraries.

  

33. **Difference between global and local state?**  

   - Local: Component-specific.  

   - Global: Shared across the app.

  

---

  

### **Forms and Events**

34. **How to handle forms in React?**  

   Use controlled components and `onChange` events.

  

35. **Event handling in React?**  

   React uses synthetic events for cross-browser consistency.  

  

36. **Prevent default behavior?**  

   Use `event.preventDefault()`.  

  

37. **Bind methods to `this` in class components?**  

   - Use `.bind(this)` or arrow functions:  

   ```javascript

   this.handleClick = this.handleClick.bind(this);

   ```

  

---

  

### **React Styling**

38. **Ways to style React apps?**  

   Inline styles, CSS, CSS modules, styled-components, or libraries like TailwindCSS.

  

39. **Inline styles vs CSS modules?**  

   - Inline styles: Component-specific but no global styling.  

   - CSS modules: Scoped and reusable.

  

40. **What are styled-components?**  

   A library for writing CSS-in-JS.

  

---

  

### **Miscellaneous**

41. **What are HOCs?**  

   Functions that take a component and return an enhanced component.

  

42. **`React.createElement` vs JSX?**  

   JSX is syntactic sugar for `React.createElement`.

  

43. **What are portals?**  

   Render elements outside the parent DOM tree:  

   ```javascript

   ReactDOM.createPortal(child, container);

   ```

  

44. **What are PropTypes?**  

   Type-checking for props:  

   ```javascript

   MyComponent.propTypes = { name: PropTypes.string };

   ```

  

45. **What is SSR?**  

   Server-side rendering generates HTML on the server. Faster initial loads.

  

46. **What is `React.StrictMode`?**  

   Highlights potential problems without affecting production builds.

  

47. **`useReducer` vs `useState`?**  

   - `useReducer`: Better for complex state logic.  

   - `useState`: Simple state management.

  

48. **React vs Angular/Vue?**  

   React focuses on UI, with flexibility for libraries, while Angular and Vue are full frameworks.

  

49. **Default exports vs Named exports?**  

   - Default: One export per module.  

   - Named: Multiple exports.

  

50. **What are error boundaries?**  

   Components that catch JavaScript errors in child components. Implement with `componentDidCatch`.