3 things to know-
1.  Props
2. State
3. where to place state

--- 
**Tips:** Joto kom state create kora jay toto valo. And jei data ke ekta component theke arekta component e pass korbo oita kokhono state hote parbe na, ota props.

-  Data passing tai holo props. Green circle diye props define kora hoise.
- Jetar value change hobe ota state. Search box e jei value dibo, oi value barbar change hobe. so search value ta holo props. Props ke Blue circle diye identify kora hoise.

>Important-
1.  Ami jokhon Search component e search korbo tokhon BookList component ow change hobe. In hierarchy Search and BookList both components are in same lavel. and state ta ase amr Search component e. tai state ke state ta ke ami hierarchy te ek level upore niye jabo.  etake lifting state up bole.
2. Always common component or parent component e state rakhte hoy.
3. SerachTerm ke state dhorechi. now SerachTerm state ke ami Boimela component theke Search and BookList both component e props hishebe pathate parbo.
4. reusable data ke hierarchy er joto upore rakha jay toto better. for example: boimela te books array ta.

---
---
### **Identifying State in React**
👉 _State is a special type of variable in React that stores changing data and causes re-renders when updated._

✅ **State is a piece of data that:**

1. **Changes over time** (dynamically updates)
2. **Needs to trigger a re-render when updated**
3. **Is stored inside a component using `useState` (or `useReducer`)**

### **🔹 Is State a Variable or Data?**

- **State is data** ✅ because it holds dynamic values.
- **State is also a variable** ✅ because it is stored in a variable using `useState`.

---

### **🔹 How to Identify If Something Should Be a State?**

❓ Ask yourself these questions:

1. **Does the value change over time?**
    
    - If **YES** → It should be a state.
    - If **NO** → It can be a normal variable or prop.
2. **Does React need to re-render when this value changes?**
    
    - If **YES** → It should be a state.
    - If **NO** → It can be a ref (`useRef`) or a normal variable.
3. **Can the value be computed from existing props or state?**
    
    - If **YES** → Don't make it a state, just compute it dynamically.
    - If **NO** → Store it as a state.

---

### **🔹 Applying This to BoiMela**

✅ **`books` is a state** because:

- It **holds data** that changes when `toggleFeatured` is called.
- The UI **must update** when a book is marked as featured.

✅ **`searchTerm` is a state** because:

- It **changes dynamically** as the user types in the search bar.
- The UI **must update** to filter books accordingly.

🚫 **`toggleFeatured` is NOT a state** because:

- It **doesn’t hold data**—it just **updates** the `books` state.
- Functions **don’t trigger re-renders**; only state updates do.

---
