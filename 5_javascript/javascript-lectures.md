# Javascript Lectures
## **Introduction to JavaScript**
JavaScript (JS) is a **programming language** primarily used to make web pages interactive. While HTML structures the content of a webpage and CSS styles it, JavaScript adds **dynamic behavior** to the page, like responding to user actions, handling events, and updating content without reloading the entire page.

### **Uses of JavaScript**
- **Web Development:** Adding interactivity to websites (e.g., animations, form validations, dynamic content updates)
- **Mobile App Development:** Frameworks like React Native allow you to build mobile apps using JavaScript.
- **Server-Side Programming:** With **Node.js**, JavaScript can be used to build backend services and APIs.
- **Game Development:** JavaScript can also be used to create browser-based games.
- **Automation and Scripting:** It can automate repetitive tasks in browsers or other environments.

### **History of JavaScript**
- **Created in 1995** by Brendan Eich while working at Netscape Communications, JavaScript was developed in just **10 days** to make web pages dynamic. Initially, it was called **Mocha**, then renamed **LiveScript**, and finally **JavaScript** to ride the popularity wave of Java at the time.
- Over the years, JavaScript has become a **full-fledged programming language** with **ECMAScript** standardizing its features. ECMAScript 6 (ES6) in 2015 introduced many modern features like `let` and `const`, arrow functions, template literals, etc., and continues to evolve.

### **Prerequisites for Learning JavaScript**
Before learning JavaScript, students should have:
1. **Basic HTML** knowledge – understanding the structure of web pages and how elements are added.
2. **CSS knowledge** – understanding how styling works, as JavaScript often interacts with CSS to manipulate the style of elements dynamically.
3. **Logical thinking** – Basic programming logic and problem-solving skills will help in writing functions and understanding control structures in JavaScript.

## Contents
- [Javascript Lectures](#javascript-lectures)
  - [**Introduction to JavaScript**](#introduction-to-javascript)
    - [**Uses of JavaScript**](#uses-of-javascript)
    - [**History of JavaScript**](#history-of-javascript)
    - [**Prerequisites for Learning JavaScript**](#prerequisites-for-learning-javascript)
  - [Contents](#contents)
- [**Day 1: Introduction to JavaScript**](#day-1-introduction-to-javascript)
  - [**1. JavaScript in the Browser**](#1-javascript-in-the-browser)
      - [**Ways to Include JavaScript:**](#ways-to-include-javascript)
  - [**2. Testing JavaScript in the Browser**](#2-testing-javascript-in-the-browser)
  - [**3. Basic Syntax and Data Types**](#3-basic-syntax-and-data-types)
      - [**Variables in JavaScript**](#variables-in-javascript)
      - [**Examples:**](#examples)
      - [**Data Types in JavaScript:**](#data-types-in-javascript)
  - [**4. JavaScript Statements**](#4-javascript-statements)
    - [**Structure of a JavaScript Statement:**](#structure-of-a-javascript-statement)
    - [**Examples of Statements:**](#examples-of-statements)
    - [**Code Blocks:**](#code-blocks)
  - [**5. JavaScript Comments**](#5-javascript-comments)
    - [**Types of Comments:**](#types-of-comments)
  - [**6. Displaying Outputs in JavaScript**](#6-displaying-outputs-in-javascript)
    - [**Console Output:**](#console-output)
    - [**Alert Box:**](#alert-box)
    - [**Document Write:**](#document-write)
    - [**Inner HTML:**](#inner-html)
- [**Day 2: Introduction to Javascript (Cont..)**](#day-2-introduction-to-javascript-cont)
  - [**7. Operators in JavaScript**](#7-operators-in-javascript)
    - [**A. Arithmetic Operators:**](#a-arithmetic-operators)
      - [**Examples:**](#examples-1)
    - [**B. Assignment Operators:**](#b-assignment-operators)
      - [**Examples:**](#examples-2)
    - [**C. Comparison Operators:**](#c-comparison-operators)
      - [**Examples:**](#examples-3)
    - [**D. Logical Operators:**](#d-logical-operators)
      - [**Examples:**](#examples-4)
    - [**E. Bitwise Operators:**](#e-bitwise-operators)
    - [**F. Ternary Operator (Conditional Operator):**](#f-ternary-operator-conditional-operator)
      - [**Syntax:**](#syntax)
      - [**Example:**](#example)
    - [**7.1. Operator Precedence**](#71-operator-precedence)
      - [**Example of Precedence:**](#example-of-precedence)
    - [**7.2. Modern JavaScript Operators**](#72-modern-javascript-operators)
      - [**A. Spread Operator (`...`)**](#a-spread-operator-)
        - [**Examples:**](#examples-5)
      - [**B. Rest Operator (`...`)**](#b-rest-operator-)
        - [**Examples:**](#examples-6)
      - [**C. Nullish Coalescing Operator (`??`)**](#c-nullish-coalescing-operator-)
        - [**Example:**](#example-1)
      - [**D. Optional Chaining (`?.`)**](#d-optional-chaining-)
        - [**Example:**](#example-2)
      - [**E. Exponentiation Operator (`**`)**](#e-exponentiation-operator-)
        - [**Example:**](#example-3)
      - [**F. Logical Assignment Operators (`||=`, `&&=`, `??=`)**](#f-logical-assignment-operators---)
      - [**G. Destructuring Assignment**](#g-destructuring-assignment)
        - [**Examples:**](#examples-7)
      - [**H. Dot Operator (`.`)**](#h-dot-operator-)
        - [**Example:**](#example-4)
- [**Day 3: Control Flow in JavaScript**](#day-3-control-flow-in-javascript)
  - [**1. Conditional Statements: `if`, `else if`, `else`**](#1-conditional-statements-if-else-if-else)
    - [**A. `if` Statement**](#a-if-statement)
      - [**Syntax:**](#syntax-1)
      - [**Example:**](#example-5)
    - [**B. `else if` Statement**](#b-else-if-statement)
      - [**Syntax:**](#syntax-2)
      - [**Example:**](#example-6)
    - [**C. `else` Statement**](#c-else-statement)
      - [**Example:**](#example-7)
  - [**2. `switch` Statement**](#2-switch-statement)
    - [**Syntax:**](#syntax-3)
    - [**Example:**](#example-8)
    - [**Notes:**](#notes)
  - [**3. Loops in JavaScript**](#3-loops-in-javascript)
    - [**A. `for` Loop**](#a-for-loop)
      - [**Syntax:**](#syntax-4)
      - [**Example:**](#example-9)
    - [**B. `for...of` Loop**](#b-forof-loop)
      - [**Syntax:**](#syntax-5)
      - [**Example:**](#example-10)
    - [**C. `for...in` Loop**](#c-forin-loop)
      - [**Syntax:**](#syntax-6)
      - [**Example:**](#example-11)
    - [**D. `while` Loop**](#d-while-loop)
      - [**Syntax:**](#syntax-7)
      - [**Example:**](#example-12)
    - [**E. `do...while` Loop**](#e-dowhile-loop)
      - [**Syntax:**](#syntax-8)
      - [**Example:**](#example-13)
  - [**4. Control Statements: `break` and `continue`**](#4-control-statements-break-and-continue)
    - [**A. `break` Statement**](#a-break-statement)
      - [**Example:**](#example-14)
    - [**B. `continue` Statement**](#b-continue-statement)
      - [**Example:**](#example-15)
  - [**5. Timeouts and Intervals**](#5-timeouts-and-intervals)
    - [**A. `setTimeout()`**](#a-settimeout)
      - [**Syntax:**](#syntax-9)
      - [**Example:**](#example-16)
    - [**B. `setInterval()`**](#b-setinterval)
      - [**Syntax:**](#syntax-10)
      - [**Example:**](#example-17)
    - [**Stopping a Timeout/Interval:**](#stopping-a-timeoutinterval)
      - [**Example (Stopping an interval):**](#example-stopping-an-interval)
  - [**6. Exception Handling: `try`, `catch`, `finally`, `throw`**](#6-exception-handling-try-catch-finally-throw)
    - [**A. `try...catch` Block**](#a-trycatch-block)
      - [**Syntax:**](#syntax-11)
      - [**Example:**](#example-18)
    - [**B. `finally` Block**](#b-finally-block)
      - [**Example:**](#example-19)
    - [**C. `throw` Statement**](#c-throw-statement)
      - [**Syntax:**](#syntax-12)
      - [**Example:**](#example-20)

# **Day 1: Introduction to JavaScript**
## **1. JavaScript in the Browser**
JavaScript is mainly used in the browser to manipulate web pages and interact with users. Here's how it can be integrated with HTML:

#### **Ways to Include JavaScript:**
1. **Inline JavaScript:**
   - Adding JavaScript directly to HTML elements using the `onclick`, `onload`, or other event attributes.
   ```html
   <button onclick="alert('Hello!')">Click Me</button>
   ```

2. **Internal JavaScript:**
   - Placing JavaScript code inside the `<script>` tag within the HTML document.
   ```html
   <script>
     document.write("Welcome to JavaScript!");
   </script>
   ```

3. **External JavaScript:**
   - Linking a separate JavaScript file (.js) to an HTML document for better organization and reusability.
   ```html
   <script src="app.js"></script>
   ```
## **2. Testing JavaScript in the Browser**
Most modern browsers come with developer tools that allow you to test and debug your JavaScript code. Here’s how to access it:

1. **Open Developer Tools:**
   - Right-click on the webpage → **Inspect** (or press `ctrl` + `shift` + `i`) → Go to the **Console** tab. 
2. **Testing JavaScript:**
   - Type any JavaScript code directly into the console and press Enter.
   - Example:
   ```js
   console.log("Hello from the console!");
   ```
   - The message `"Hello from the console!"` will appear in the console.

## **3. Basic Syntax and Data Types**
#### **Variables in JavaScript**
Variables store data values that can be referenced and manipulated in a program. JavaScript provides three ways to declare variables:
1. **`var`**: Used before ES6. Variables declared with `var` are function-scoped.
2. **`let`**: Introduced in ES6. Variables declared with `let` are block-scoped.
3. **`const`**: Also introduced in ES6. Used to declare constants, i.e., values that cannot be reassigned.

#### **Examples:**
```js
var name = "John"; // function-scoped
let age = 30;      // block-scoped
const pi = 3.1416; // constant
```

#### **Data Types in JavaScript:**
1. **Numbers**: Integers and floating-point numbers.
   ```js
   let num = 42;
   let price = 19.99;
   ```
2. **Strings**: Sequence of characters enclosed in single or double quotes.
   ```js
   let name = "Alice";
   let greeting = 'Hello, World!';
   ```
3. **Booleans**: Logical values `true` or `false`.
   ```js
   let isLoggedIn = true;
   ```
4. **Arrays**: Ordered lists of values.
   ```js
   let colors = ["red", "green", "blue"];
   ```
5. **Objects**: Key-value pairs.
   ```js
   let person = {name: "John", age: 25};
   ```
## **4. JavaScript Statements**
JavaScript statements are instructions that tell the browser what to do. A program is essentially a collection of these statements.

### **Structure of a JavaScript Statement:**
- A **statement** generally consists of **values**, **operators**, **expressions**, and **keywords** that make up an instruction.
- Every statement is **terminated with a semicolon (`;`)**, though JavaScript can often infer the end of a statement without it.

### **Examples of Statements:**
```js
let x = 10;    // Assignment statement
x = x + 5;     // Expression statement
console.log(x); // Output statement
```

### **Code Blocks:**
Multiple JavaScript statements can be grouped together inside **curly braces `{}`**, forming a block of code.
```js
{
  let a = 5;
  let b = 6;
  let sum = a + b;
}
```

## **5. JavaScript Comments**
Comments are used to add explanations or notes to your code, making it easier to understand or temporarily disable code.

### **Types of Comments:**
- **Single-line Comment:** Starts with `//`
   ```js
   // This is a single-line comment
   let x = 5;  // Declare a variable x
   ```

- **Multi-line Comment:** Starts with `/*` and ends with `*/`
   ```js
   /* 
   This is a multi-line comment.
   Useful for explaining larger blocks of code.
   */
   let y = 10;
   ```

## **6. Displaying Outputs in JavaScript**
JavaScript provides several ways to display outputs or feedback:

### **Console Output:**
The `console.log()` function is used to display output in the browser’s console (developer tools).
```js
console.log("Hello, World!");  // Outputs: Hello, World!
```

### **Alert Box:**
The `alert()` function displays a pop-up message to the user.
```js
alert("This is an alert box!");
```

### **Document Write:**
The `document.write()` function writes directly to the HTML document. It’s not commonly used today but is helpful for quick testing.
```js
document.write("Hello from JavaScript!");
```

### **Inner HTML:**
You can also use JavaScript to dynamically change the content of HTML elements using `innerHTML`.
```js
document.getElementById("demo").innerHTML = "JavaScript is fun!";
```
# **Day 2: Introduction to Javascript (Cont..)**
## **7. Operators in JavaScript**
JavaScript has a rich set of operators for performing operations on data.

### **A. Arithmetic Operators:**
These operators are used for basic arithmetic calculations.

| Operator | Description                  | Example          |
|----------|------------------------------|------------------|
| `+`      | Addition                      | `x + y`          |
| `-`      | Subtraction                   | `x - y`          |
| `*`      | Multiplication                | `x * y`          |
| `/`      | Division                      | `x / y`          |
| `%`      | Modulus (Remainder)           | `x % y`          |
| `++`     | Increment (adds 1)            | `x++` or `++x`   |
| `--`     | Decrement (subtracts 1)       | `x--` or `--x`   |

#### **Examples:**
```js
let a = 10;
let b = 3;

console.log(a + b); // Outputs: 13
console.log(a % b); // Outputs: 1 (remainder of 10 / 3)
```

### **B. Assignment Operators:**
These operators assign values to variables.

| Operator | Example  | Equivalent to       |
|----------|----------|---------------------|
| `=`      | `x = 5`  | Assigns 5 to `x`    |
| `+=`     | `x += 2` | `x = x + 2`         |
| `-=`     | `x -= 2` | `x = x - 2`         |
| `*=`     | `x *= 2` | `x = x * 2`         |
| `/=`     | `x /= 2` | `x = x / 2`         |
| `%=`     | `x %= 2` | `x = x % 2`         |

#### **Examples:**
```js
let x = 10;
x += 5; // Same as x = x + 5
console.log(x); // Outputs: 15
```

### **C. Comparison Operators:**
These operators compare two values and return a boolean (`true` or `false`).

| Operator | Description                     | Example            |
|----------|---------------------------------|--------------------|
| `==`     | Equal to                        | `x == 10`          |
| `===`    | Strict equal (value + type)      | `x === "10"`       |
| `!=`     | Not equal to                    | `x != 5`           |
| `!==`    | Strict not equal                | `x !== "5"`        |
| `>`      | Greater than                    | `x > 5`            |
| `<`      | Less than                       | `x < 10`           |
| `>=`     | Greater than or equal to        | `x >= 10`          |
| `<=`     | Less than or equal to           | `x <= 10`          |

#### **Examples:**
```js
let a = 10;
let b = "10";

console.log(a == b);  // Outputs: true (loose comparison)
console.log(a === b); // Outputs: false (strict comparison)
```

### **D. Logical Operators:**
Logical operators are used to combine or invert conditions.

| Operator | Description                     | Example               |
|----------|---------------------------------|-----------------------|
| `&&`     | Logical AND                     | `x > 5 && x < 15`     |
| `\|\|`   | Logical OR                      | `x > 5 \|\| y < 10`   |
| `!`      | Logical NOT (inverts boolean)   | `!(x > 10)`           |

#### **Examples:**
```js
let age = 20;
console.log(age > 18 && age < 30); // Outputs: true (both conditions are true)
console.log(age > 25 || age < 30); // Outputs: true (one condition is true)
```

### **E. Bitwise Operators:**
These operators perform bit-level operations on operands.

| Operator | Description  | Example  |
|----------|--------------|----------|
| `&`      | AND          | `a & b`  |
| `\|`     | OR           | `a \| b` |
| `^`      | XOR          | `a ^ b`  |
| `~`      | NOT          | `~a`     |
| `<<`     | Left Shift   | `a << 2` |
| `>>`     | Right Shift  | `a >> 2` |

### **F. Ternary Operator (Conditional Operator):**
A shorthand for `if-else` statements, used to assign a value based on a condition.

#### **Syntax:**
```js
condition ? value_if_true : value_if_false;
```

#### **Example:**
```js
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);  // Outputs: Yes
```

### **7.1. Operator Precedence**
JavaScript evaluates expressions based on the **precedence** of operators. Operators with higher precedence are evaluated first.

| Operator       | Description                 |
|----------------|-----------------------------|
| `()`           | Parentheses (highest)       |
| `++` / `--`    | Increment / Decrement       |
| `*` / `/` / `%`| Multiplication, Division, Modulus |
| `+` / `-`      | Addition, Subtraction       |
| `>` / `<`      | Comparison                  |
| `&&`           | Logical AND                 |
| `\|\|`         | Logical OR                  |
| `=`            | Assignment (lowest)         |

#### **Example of Precedence:**
```js
let result = 10 + 5 * 2;  // Outputs: 20 (multiplication happens first)
```

### **7.2. Modern JavaScript Operators**

#### **A. Spread Operator (`...`)**
The **spread operator** allows an array or object to be expanded where multiple elements or values are expected.

##### **Examples:**
- **In Arrays:**
   ```js
   const numbers = [1, 2, 3];
   const newNumbers = [...numbers, 4, 5, 6];
   console.log(newNumbers); // Outputs: [1, 2, 3, 4, 5, 6]
   ```
- **In Objects:**
   ```js
   const user = { name: "Alice", age: 25 };
   const updatedUser = { ...user, location: "New York" };
   console.log(updatedUser); // Outputs: { name: "Alice", age: 25, location: "New York" }
   ```

#### **B. Rest Operator (`...`)**
The **rest operator** collects multiple elements into an array or object. It is typically used in function parameters to gather the remaining arguments.

##### **Examples:**
- **In Function Parameters:**
   ```js
   function sum(...numbers) {
     return numbers.reduce((acc, curr) => acc + curr, 0);
   }
   console.log(sum(1, 2, 3, 4)); // Outputs: 10
   ```

- **In Object Destructuring:**
   ```js
   const { name, ...details } = { name: "Alice", age: 25, city: "New York" };
   console.log(details); // Outputs: { age: 25, city: "New York" }
   ```

#### **C. Nullish Coalescing Operator (`??`)**
The **nullish coalescing operator** returns the right-hand operand when the left-hand operand is `null` or `undefined`. Otherwise, it returns the left-hand operand.

##### **Example:**
```js
let value = null;
let defaultValue = value ?? "Default Value";
console.log(defaultValue); // Outputs: "Default Value"
```

This is particularly useful when you want to provide a default value, but `0`, `false`, or empty strings are valid values (unlike the `||` operator which treats those as falsy).

#### **D. Optional Chaining (`?.`)**
The **optional chaining operator** allows you to safely access deeply nested properties without worrying about whether an intermediate property is `null` or `undefined`. If the value before `?.` is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.

##### **Example:**
```js
let user = { name: "John", address: { city: "New York" } };
console.log(user?.address?.city);  // Outputs: "New York"
console.log(user?.phone?.number);  // Outputs: undefined (no error thrown)
```

#### **E. Exponentiation Operator (`**`)**
This is a shorthand for performing exponentiation (power) calculations. It replaces `Math.pow()`.

##### **Example:**
```js
let base = 2;
let exponent = 3;
console.log(base ** exponent);  // Outputs: 8 (2^3)
```

#### **F. Logical Assignment Operators (`||=`, `&&=`, `??=`)**
These operators provide shorthand ways to assign values to variables based on certain conditions.

- **`||=` (Logical OR Assignment):** Assigns a value if the left operand is falsy.
   ```js
   let x = 0;
   x ||= 10;  // x remains 0 (since it's falsy)
   let y = null;
   y ||= 10;  // y becomes 10
   ```

- **`&&=` (Logical AND Assignment):** Assigns a value if the left operand is truthy.
   ```js
   let isActive = true;
   isActive &&= false;  // isActive becomes false
   ```

- **`??=` (Nullish Coalescing Assignment):** Assigns a value if the left operand is `null` or `undefined`.
   ```js
   let z = null;
   z ??= "default";
   console.log(z);  // Outputs: "default"
   ```

#### **G. Destructuring Assignment**
Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

##### **Examples:**
- **Array Destructuring:**
   ```js
   const numbers = [1, 2, 3];
   const [first, second, third] = numbers;
   console.log(first);  // Outputs: 1
   ```

- **Object Destructuring:**
   ```js
   const person = { name: "Alice", age: 25 };
   const { name, age } = person;
   console.log(name);  // Outputs: "Alice"
   ```

#### **H. Dot Operator (`.`)**
The dot operator is used to access properties and methods of objects.

##### **Example:**
```js
const person = {
  name: "John",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

console.log(person.name); // Accesses the "name" property
person.greet(); // Calls the "greet" method
```


# **Day 3: Control Flow in JavaScript**
## **1. Conditional Statements: `if`, `else if`, `else`**

Conditional statements allow your code to make decisions based on certain conditions.

### **A. `if` Statement**
The `if` statement executes a block of code if the condition evaluates to `true`.

#### **Syntax:**
```js
if (condition) {
  // Code to be executed if condition is true
}
```

#### **Example:**
```js
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

### **B. `else if` Statement**
The `else if` statement allows you to test multiple conditions. If the first condition is false, it checks the next.

#### **Syntax:**
```js
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if all conditions are false
}
```

#### **Example:**
```js
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

### **C. `else` Statement**
The `else` block executes if none of the previous conditions were true.

#### **Example:**
```js
let age = 16;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

## **2. `switch` Statement**

The `switch` statement is used to perform different actions based on different conditions. It is a cleaner alternative to multiple `if...else if` conditions.

### **Syntax:**
```js
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  default:
    // Code to be executed if no matching case
}
```

### **Example:**
```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

### **Notes:**
- The `break` statement prevents the code from falling through to the next case.
- The `default` block runs if no matching case is found.

## **3. Loops in JavaScript**

Loops allow you to repeat a block of code a certain number of times or while a condition is true.

### **A. `for` Loop**
A `for` loop repeats until a specified condition evaluates to `false`.

#### **Syntax:**
```js
for (initialization; condition; increment) {
  // Code to be executed
}
```

#### **Example:**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Outputs: 0, 1, 2, 3, 4
```

### **B. `for...of` Loop**
The `for...of` loop iterates over iterable objects (arrays, strings, etc.).

#### **Syntax:**
```js
for (element of iterable) {
  // Code to be executed for each element
}
```

#### **Example:**
```js
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// Outputs: red, green, blue
```

### **C. `for...in` Loop**
The `for...in` loop iterates over the keys of an object or the indices of an array.

#### **Syntax:**
```js
for (key in object) {
  // Code to be executed for each key
}
```

#### **Example:**
```js
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Outputs: name: Alice, age: 25, city: New York
```

### **D. `while` Loop**
The `while` loop executes as long as a specified condition is true.

#### **Syntax:**
```js
while (condition) {
  // Code to be executed while condition is true
}
```

#### **Example:**
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Outputs: 0, 1, 2, 3, 4
```

### **E. `do...while` Loop**
The `do...while` loop is similar to the `while` loop, but the block of code is executed **at least once** before checking the condition.

#### **Syntax:**
```js
do {
  // Code to be executed
} while (condition);
```

#### **Example:**
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Outputs: 0, 1, 2, 3, 4
```

## **4. Control Statements: `break` and `continue`**

### **A. `break` Statement**
The `break` statement exits a loop prematurely when a specified condition is met.

#### **Example:**
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Outputs: 0, 1, 2, 3, 4
```

### **B. `continue` Statement**
The `continue` statement skips the current iteration of the loop and moves to the next iteration.

#### **Example:**
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Outputs: 0, 1, 3, 4
```

## **5. Timeouts and Intervals**

### **A. `setTimeout()`**
The `setTimeout()` function allows you to run a function **once** after a specified delay (in milliseconds).

#### **Syntax:**
```js
setTimeout(function, delay);
```

#### **Example:**
```js
setTimeout(() => {
  console.log("This message is displayed after 2 seconds.");
}, 2000); // 2000 ms = 2 seconds
```

### **B. `setInterval()`**
The `setInterval()` function allows you to run a function **repeatedly** at specified intervals (in milliseconds).

#### **Syntax:**
```js
setInterval(function, interval);
```

#### **Example:**
```js
let count = 0;
let intervalID = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) clearInterval(intervalID); // Stops after 5 counts
}, 1000); // 1000 ms = 1 second
```

### **Stopping a Timeout/Interval:**
- `clearTimeout()` stops the `setTimeout()` execution.
- `clearInterval()` stops the `setInterval()` execution.

#### **Example (Stopping an interval):**
```js
let id = setInterval(() => {
  console.log("Repeating every 2 seconds");
}, 2000);

// To stop the interval after 10 seconds:
setTimeout(() => clearInterval(id), 10000);  // Stops after 10 seconds
```
## **6. Exception Handling: `try`, `catch`, `finally`, `throw`**

JavaScript provides mechanisms to handle runtime errors through `try`, `catch`, and `finally` blocks.

### **A. `try...catch` Block**
The `try` block allows you to test a block of code for errors, and the `catch` block handles the error if it occurs.

#### **Syntax:**
```js
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

#### **Example:**
```js
try {
  let result = x / 0;
} catch (error) {
  console.log("An error occurred: " + error.message);
}
// Outputs: An error occurred: x is not defined
```

### **B. `finally` Block**
The `finally` block will always execute after the `try` and `catch` blocks, regardless of whether an error occurred.

#### **Example:**
```js
try {
  let result = x / 0;
} catch (error) {
  console.log("Error: " + error.message);
} finally {
  console.log("This will run no matter what.");
}
```

### **C. `throw` Statement**
The `throw` statement lets you create custom errors. When an error is thrown, control is passed to the nearest `catch` block.

#### **Syntax:**
```js
throw new Error("Custom error message");
```

#### **Example:**
```js
let age = -5;
try {
  if (age < 0) throw new Error("Age cannot be negative.");
} catch (error)

 {
  console.log(error.message);
}
// Outputs: Age cannot be negative.
```