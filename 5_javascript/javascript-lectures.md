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
    - [**B. `while` Loop**](#b-while-loop)
      - [**Syntax:**](#syntax-5)
      - [**Example:**](#example-10)
    - [**C. `do...while` Loop**](#c-dowhile-loop)
      - [**Syntax:**](#syntax-6)
      - [**Example:**](#example-11)
- [**Day 4. Control flow in Javascript (Cont..)**](#day-4-control-flow-in-javascript-cont)
    - [**D. `for...of` Loop**](#d-forof-loop)
      - [**Syntax:**](#syntax-7)
      - [**Example:**](#example-12)
    - [**E. `for...in` Loop**](#e-forin-loop)
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
- [**Day 5: Functions in JavaScript**](#day-5-functions-in-javascript)
  - [**1. Function Declarations**](#1-function-declarations)
    - [**Syntax:**](#syntax-13)
    - [**Example:**](#example-21)
    - [**Characteristics:**](#characteristics)
  - [**2. Function Expressions**](#2-function-expressions)
    - [**Syntax:**](#syntax-14)
    - [**Example:**](#example-22)
    - [**Differences from Declarations:**](#differences-from-declarations)
  - [**3. Arrow Functions**](#3-arrow-functions)
    - [**Syntax:**](#syntax-15)
    - [**Example:**](#example-23)
    - [**Key Points:**](#key-points)
  - [**4. Using `Function()` Constructor**](#4-using-function-constructor)
        - [**Syntax:**](#syntax-16)
  - [**5. Parameters**](#5-parameters)
      - [**Rest Parameters**](#rest-parameters)
        - [**Syntax:**](#syntax-17)
        - [**Example:**](#example-24)
  - [**6. Return Values**](#6-return-values)
      - [**Example:**](#example-25)
  - [**7. Default Parameters**](#7-default-parameters)
        - [**Syntax:**](#syntax-18)
        - [**Example:**](#example-26)
  - [**8. Immediate Invoked Function Expressions (IIFE)**](#8-immediate-invoked-function-expressions-iife)
    - [**Syntax:**](#syntax-19)
    - [**Example:**](#example-27)
    - [**Uses:**](#uses)
  - [**9. Generator Functions**](#9-generator-functions)
    - [**Syntax:**](#syntax-20)
    - [**Example:**](#example-28)
    - [**Uses:**](#uses-1)
  - [**10. Async Functions**](#10-async-functions)
    - [**Syntax:**](#syntax-21)
    - [**Example:**](#example-29)
    - [**Key Points:**](#key-points-1)
  - [**11. Higher-Order Functions**](#11-higher-order-functions)
    - [**Syntax:**](#syntax-22)
    - [**Example:**](#example-30)
    - [**Uses:**](#uses-2)
  - [**12. Arrow Functions and `this` Binding**](#12-arrow-functions-and-this-binding)
        - [**Example:**](#example-31)
- [**Day 6:- Data Types in JavaScript: Numbers**](#day-6--data-types-in-javascript-numbers)
  - [**1. Overview of Number Data Type**](#1-overview-of-number-data-type)
    - [**Key Points:**](#key-points-2)
    - [**Examples of Number Declarations:**](#examples-of-number-declarations)
  - [**2. Special Numeric Values**](#2-special-numeric-values)
    - [**Infinity**](#infinity)
      - [**Syntax \& Example:**](#syntax--example)
    - [**NaN**](#nan)
      - [**Syntax \& Example:**](#syntax--example-1)
  - [**3. Methods of Number**](#3-methods-of-number)
    - [**Number.parseInt()**](#numberparseint)
      - [**Syntax \& Example:**](#syntax--example-2)
    - [**Number.parseFloat()**](#numberparsefloat)
      - [**Syntax \& Example:**](#syntax--example-3)
    - [**Number.isFinite()**](#numberisfinite)
      - [**Syntax \& Example:**](#syntax--example-4)
    - [**Number.isNaN()**](#numberisnan)
      - [**Syntax \& Example:**](#syntax--example-5)
    - [**Number.isInteger()**](#numberisinteger)
      - [**Syntax \& Example:**](#syntax--example-6)
  - [**4. Arithmetic Operations**](#4-arithmetic-operations)
    - [**Examples:**](#examples-8)
    - [**Handling Floating-Point Precision Issues:**](#handling-floating-point-precision-issues)
    - [**Modulus Operation:**](#modulus-operation)
      - [**Example:**](#example-32)
  - [**5. Real-World Scenarios**](#5-real-world-scenarios)
- [**Data Types in JavaScript: Booleans**](#data-types-in-javascript-booleans)
  - [**1. Overview of Boolean Data Type**](#1-overview-of-boolean-data-type)
    - [**Key Points:**](#key-points-3)
  - [**2. Conversion to Boolean**](#2-conversion-to-boolean)
    - [**Explicit Conversion Using `Boolean()` Function:**](#explicit-conversion-using-boolean-function)
      - [**Syntax \& Example:**](#syntax--example-7)
  - [**3. Boolean Operations**](#3-boolean-operations)
    - [**Logical Operators:**](#logical-operators)
      - [**Examples:**](#examples-9)
    - [**Short-Circuit Evaluation:**](#short-circuit-evaluation)
      - [**Real-World Use:**](#real-world-use)
  - [**4. Comparisons**](#4-comparisons)
      - [**Examples:**](#examples-10)
  - [**5. Real-World Scenarios**](#5-real-world-scenarios-1)
- [**Data Types in JavaScript: Strings**](#data-types-in-javascript-strings)
  - [**1. Overview of String Data Type**](#1-overview-of-string-data-type)
    - [**Key Points:**](#key-points-4)
    - [**Example of Creating Strings:**](#example-of-creating-strings)
  - [**2. Common String Methods**](#2-common-string-methods)
    - [**charAt()**](#charat)
      - [**Syntax \& Example:**](#syntax--example-8)
    - [**concat()**](#concat)
      - [**Syntax \& Example:**](#syntax--example-9)
    - [**includes()**](#includes)
      - [**Syntax \& Example:**](#syntax--example-10)
    - [**indexOf()**](#indexof)
      - [**Syntax \& Example:**](#syntax--example-11)
    - [**lastIndexOf()**](#lastindexof)
      - [**Syntax \& Example:**](#syntax--example-12)
    - [**match()**](#match)
      - [**Syntax \& Example:**](#syntax--example-13)
    - [**repeat()**](#repeat)
      - [**Syntax \& Example:**](#syntax--example-14)
    - [**replace()**](#replace)
      - [**Syntax \& Example:**](#syntax--example-15)
    - [**search()**](#search)
      - [**Syntax \& Example:**](#syntax--example-16)
    - [**slice()**](#slice)
      - [**Syntax \& Example:**](#syntax--example-17)
    - [**split()**](#split)
      - [**Syntax \& Example:**](#syntax--example-18)
    - [**substring()**](#substring)
      - [**Syntax \& Example:**](#syntax--example-19)
    - [**toLowerCase()**](#tolowercase)
      - [**Syntax \& Example:**](#syntax--example-20)
    - [**toUpperCase()**](#touppercase)
      - [**Syntax \& Example:**](#syntax--example-21)
    - [**trim()**](#trim)
      - [**Syntax \& Example:**](#syntax--example-22)
    - [**valueOf()**](#valueof)
      - [**Syntax \& Example:**](#syntax--example-23)
  - [**3. Real-World Scenarios for Using String Methods**](#3-real-world-scenarios-for-using-string-methods)
- [**Day 7:- Data Types in JavaScript: Arrays**](#day-7--data-types-in-javascript-arrays)
  - [**1. Overview of Array Data Type**](#1-overview-of-array-data-type)
    - [**Key Points:**](#key-points-5)
    - [**Example of Creating Arrays:**](#example-of-creating-arrays)
  - [**2. Common Array Methods**](#2-common-array-methods)
    - [**concat()**](#concat-1)
      - [**Syntax \& Example:**](#syntax--example-24)
    - [**every()**](#every)
      - [**Syntax \& Example:**](#syntax--example-25)
    - [**filter()**](#filter)
      - [**Syntax \& Example:**](#syntax--example-26)
    - [**find()**](#find)
      - [**Syntax \& Example:**](#syntax--example-27)
    - [**forEach()**](#foreach)
      - [**Syntax \& Example:**](#syntax--example-28)
    - [**indexOf()**](#indexof-1)
      - [**Syntax \& Example:**](#syntax--example-29)
    - [**join()**](#join)
      - [**Syntax \& Example:**](#syntax--example-30)
    - [**map()**](#map)
      - [**Syntax \& Example:**](#syntax--example-31)
    - [**pop()**](#pop)
      - [**Syntax \& Example:**](#syntax--example-32)
    - [**push()**](#push)
      - [**Syntax \& Example:**](#syntax--example-33)
    - [**reduce()**](#reduce)
      - [**Syntax \& Example:**](#syntax--example-34)
    - [**reverse()**](#reverse)
      - [**Syntax \& Example:**](#syntax--example-35)
    - [**slice()**](#slice-1)
      - [**Syntax \& Example:**](#syntax--example-36)
    - [**sort()**](#sort)
      - [**Syntax \& Example:**](#syntax--example-37)
    - [**splice()**](#splice)
      - [**Syntax \& Example:**](#syntax--example-38)
    - [**unshift()**](#unshift)
      - [**Syntax \& Example:**](#syntax--example-39)
  - [**3. Real-World Scenarios for Using Array Methods**](#3-real-world-scenarios-for-using-array-methods)
- [**Day 8:- Data Types in JavaScript: Objects**](#day-8--data-types-in-javascript-objects)
  - [**1. Overview of Object Data Type**](#1-overview-of-object-data-type)
    - [**Key Points:**](#key-points-6)
    - [**Example of Creating an Object:**](#example-of-creating-an-object)
  - [**2. Common Object Methods**](#2-common-object-methods)
    - [**Object.keys()**](#objectkeys)
      - [**Syntax \& Example:**](#syntax--example-40)
    - [**Object.values()**](#objectvalues)
      - [**Syntax \& Example:**](#syntax--example-41)
    - [**Object.entries()**](#objectentries)
      - [**Syntax \& Example:**](#syntax--example-42)
    - [**Object.assign()**](#objectassign)
      - [**Syntax \& Example:**](#syntax--example-43)
    - [**Object.freeze()**](#objectfreeze)
      - [**Syntax \& Example:**](#syntax--example-44)
    - [**Object.seal()**](#objectseal)
      - [**Syntax \& Example:**](#syntax--example-45)
    - [**Object.hasOwnProperty()**](#objecthasownproperty)
      - [**Syntax \& Example:**](#syntax--example-46)
  - [**3. Accessing Properties**](#3-accessing-properties)
    - [**Dot Notation:**](#dot-notation)
    - [**Bracket Notation:**](#bracket-notation)
  - [**4. Real-World Scenarios for Using Objects**](#4-real-world-scenarios-for-using-objects)
- [**Day 9:- Data Types in JavaScript: Dates**](#day-9--data-types-in-javascript-dates)
  - [**1. Overview of Date Data Type**](#1-overview-of-date-data-type)
    - [**Key Points:**](#key-points-7)
    - [**Example of Creating Dates:**](#example-of-creating-dates)
  - [**2. Common Date Methods**](#2-common-date-methods)
    - [**getDate() / setDate()**](#getdate--setdate)
      - [**Syntax \& Example:**](#syntax--example-47)
    - [**getMonth() / setMonth()**](#getmonth--setmonth)
      - [**Syntax \& Example:**](#syntax--example-48)
    - [**getFullYear() / setFullYear()**](#getfullyear--setfullyear)
      - [**Syntax \& Example:**](#syntax--example-49)
    - [**getHours() / setHours()**](#gethours--sethours)
      - [**Syntax \& Example:**](#syntax--example-50)
    - [**getTime() / setTime()**](#gettime--settime)
      - [**Syntax \& Example:**](#syntax--example-51)
    - [**getDay()**](#getday)
      - [**Syntax \& Example:**](#syntax--example-52)
    - [**toLocaleString()**](#tolocalestring)
      - [**Syntax \& Example:**](#syntax--example-53)
    - [**toUTCString()**](#toutcstring)
      - [**Syntax \& Example:**](#syntax--example-54)
    - [**getTimezoneOffset()**](#gettimezoneoffset)
      - [**Syntax \& Example:**](#syntax--example-55)
  - [**3. Real-World Scenarios for Using Dates**](#3-real-world-scenarios-for-using-dates)
  - [**4. Advanced Date Manipulation**](#4-advanced-date-manipulation)
- [**Day 10: Other Essential Data Types in JavaScript**](#day-10-other-essential-data-types-in-javascript)
  - [**1. Set**](#1-set)
    - [**Key Points:**](#key-points-8)
    - [**Example of Using Set:**](#example-of-using-set)
    - [**Common Use Cases:**](#common-use-cases)
  - [**2. Map**](#2-map)
    - [**Key Points:**](#key-points-9)
    - [**Example of Using Map:**](#example-of-using-map)
    - [**Common Use Cases:**](#common-use-cases-1)
  - [**3. Symbol**](#3-symbol)
    - [**Key Points:**](#key-points-10)
    - [**Example of Using Symbol:**](#example-of-using-symbol)
    - [**Common Use Cases:**](#common-use-cases-2)
  - [**4. Regular Expressions (Regex)**](#4-regular-expressions-regex)
    - [**Key Points:**](#key-points-11)
    - [**Example of Using Regex:**](#example-of-using-regex)
    - [**More Detailed Example:**](#more-detailed-example)
    - [**Explanation of the Regex:**](#explanation-of-the-regex)
    - [**Common Use Cases for Regex:**](#common-use-cases-for-regex)
  - [**5. JSON: JavaScript Object Notation**](#5-json-javascript-object-notation)
    - [**Key Points:**](#key-points-12)
    - [**Example of JSON:**](#example-of-json)
    - [**Parsing JSON in JavaScript:**](#parsing-json-in-javascript)
    - [**Example of Parsing and Stringifying JSON:**](#example-of-parsing-and-stringifying-json)
    - [**Common Use Cases for JSON:**](#common-use-cases-for-json)

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
### **B. `while` Loop**
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

### **C. `do...while` Loop**
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

# **Day 4. Control flow in Javascript (Cont..)**
### **D. `for...of` Loop**
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

### **E. `for...in` Loop**
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


# **Day 5: Functions in JavaScript**

In JavaScript, functions are one of the most important and versatile features, allowing code to be organized into reusable blocks. This lecture will cover all types of functions, their syntax, use cases, and nuances.

## **1. Function Declarations**

A function declaration defines a function with the specified parameters.

### **Syntax:**
```js
function functionName(parameters) {
  // Code to be executed
}
```

### **Example:**
```js
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet('Alice');  // Outputs: Hello, Alice!
```

### **Characteristics:**
- Function declarations are hoisted, meaning they can be called before they are defined in the code.

## **2. Function Expressions**

A function expression can be stored in a variable. The function can be anonymous (without a name) or named.

### **Syntax:**
```js
const functionName = function(parameters) {
  // Code to be executed
};
```

### **Example:**
```js
const square = function(number) {
  return number * number;
};
console.log(square(4));  // Outputs: 16
```

### **Differences from Declarations:**
- Function expressions are not hoisted. You must define them before you use them.

## **3. Arrow Functions**
Introduced in ES6, arrow functions offer a more concise syntax for writing function expressions.
### **Syntax:**
```js
const functionName = (parameters) => {
  // Code to be executed
};
```

### **Example:**
```js
const add = (a, b) => a + b;
console.log(add(5, 3));  // Outputs: 8
```

### **Key Points:**
- Arrow functions do not have their own `this` context; they inherit it from the enclosing execution context.

## **4. Using `Function()` Constructor**

You can dynamically create new function objects with the `Function` constructor, but this method is not commonly recommended due to security risks similar to `eval()`.

##### **Syntax:**
```js
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));  // Outputs: 8
```

## **5. Parameters**

Parameters are the variables listed as part of the function definition. JavaScript is dynamically typed, so parameters can receive values of any type.

#### **Rest Parameters**
Allows you to represent an indefinite number of arguments as an array.

##### **Syntax:**
```js
function functionName(...params) {
  // params is an array of all passed arguments
}
```

##### **Example:**
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));  // Outputs: 6
```

## **6. Return Values**

Functions can return values using the `return` statement. If no return is specified, the function returns `undefined`.

#### **Example:**
```js
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));  // Outputs: 6
```

## **7. Default Parameters**

Default parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

##### **Syntax:**
```js
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Function body
}
```

##### **Example:**
```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();  // Outputs: Hello, Guest
greet("Alice");  // Outputs: Hello, Alice
```


## **8. Immediate Invoked Function Expressions (IIFE)**

IIFEs are functions that run as soon as they are defined.

### **Syntax:**
```js
(function() {
  // Code to be executed
})();
```

### **Example:**
```js
(function(name) {
  console.log("Hello, " + name);
})('John');  // Outputs: Hello, John
```

### **Uses:**
- IIFEs are useful for creating private scopes and avoiding variable hoisting issues.



## **9. Generator Functions**

Generator functions can return multiple values over time, pausing execution between each yield.

### **Syntax:**
```js
function* functionName(parameters) {
  yield value;
}
```

### **Example:**
```js
function* idGenerator() {
  let id = 1;
  while(true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value);  // Outputs: 1
console.log(gen.next().value);  // Outputs: 2
```

### **Uses:**
- Generators are great for managing stateful iterations and asynchronous workflows.

## **10. Async Functions**

Async functions enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need for explicit promise chains.

### **Syntax:**
```js
async function functionName(parameters) {
  return value;
}
```

### **Example:**
```js
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  console.log(data);
}

fetchData();
```

### **Key Points:**
- Async functions always return a promise.
- The `await` keyword pauses the function execution until a promise is resolved.

## **11. Higher-Order Functions**

Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

### **Syntax:**
```js
function higherOrderFunction(callback) {
  callback();
}
```

### **Example:**
```js
function greet() {
  console.log("Hello World!");
}

higherOrderFunction(greet);  // Outputs: Hello World!
```

### **Uses:**
- Common in functional programming, they're used extensively for event handling, array manipulations, and asynchronous operations.

## **12. Arrow Functions and `this` Binding**

Arrow functions do not have their own `this` context; instead, they inherit it from the surrounding scope, which is a useful feature when working with methods that require a context that refers to the object.

##### **Example:**
```js
const person = {
  name: 'Alice',
  actions: ['walk', 'run', 'speak'],
  showActions() {
    this.actions.forEach(action => {
      console.log(this.name + " can " + action);
    });
  }
};

person.showActions();
```

# **Day 6:- Data Types in JavaScript: Numbers**

JavaScript provides a flexible and powerful way to work with numerical data through its `Number` data type. This includes integers, floating-point numbers, and even special numeric values like `Infinity` and `NaN` (Not-a-Number).

## **1. Overview of Number Data Type**

In JavaScript, all numbers are represented as double-precision 64-bit binary format IEEE 754 values, which includes both integers and decimals.

### **Key Points:**
- JavaScript does not differentiate between types of numbers, whether they are integer or floating-point.
- You can represent numbers in decimal, hexadecimal, octal, or binary format.

### **Examples of Number Declarations:**
```js
let decimal = 100;
let floatingPoint = 99.99;
let hexadecimal = 0xff;  // 255 in decimal
let octal = 0o377;       // 255 in decimal
let binary = 0b11111111; // 255 in decimal
```

## **2. Special Numeric Values**

### **Infinity**
Represents mathematical Infinity, is greater than any other number.

#### **Syntax & Example:**
```js
console.log(1 / 0);  // Outputs: Infinity
console.log(Infinity + 100);  // Outputs: Infinity
```

### **NaN**
Stands for "Not a Number", is a special value that results from an undefined or erroneous arithmetic operation.

#### **Syntax & Example:**
```js
console.log("abc" * 10);  // Outputs: NaN
```

## **3. Methods of Number**

### **Number.parseInt()**
Converts a string to an integer.

#### **Syntax & Example:**
```js
console.log(Number.parseInt("10"));  // Outputs: 10
console.log(Number.parseInt("10.5"));  // Outputs: 10
console.log(Number.parseInt("10abc"));  // Outputs: 10
```

### **Number.parseFloat()**
Converts a string to a floating-point number.

#### **Syntax & Example:**
```js
console.log(Number.parseFloat("10"));  // Outputs: 10
console.log(Number.parseFloat("10.5"));  // Outputs: 10.5
console.log(Number.parseFloat("10.5abc"));  // Outputs: 10.5
```

### **Number.isFinite()**
Checks if the value is a finite number.

#### **Syntax & Example:**
```js
console.log(Number.isFinite(Infinity));  // Outputs: false
console.log(Number.isFinite(-Infinity));  // Outputs: false
console.log(Number.isFinite(10));  // Outputs: true
```

### **Number.isNaN()**
Checks if the value is NaN.

#### **Syntax & Example:**
```js
console.log(Number.isNaN(NaN));  // Outputs: true
console.log(Number.isNaN("NaN"));  // Outputs: false
console.log(Number.isNaN(10));  // Outputs: false
```

### **Number.isInteger()**
Determines whether the passed value is an integer.

#### **Syntax & Example:**
```js
console.log(Number.isInteger(10));  // Outputs: true
console.log(Number.isInteger(10.5));  // Outputs: false
```

## **4. Arithmetic Operations**

You can perform all standard arithmetic operations like addition, subtraction, multiplication, and division.

### **Examples:**
```js
let sum = 10 + 5;  // 15
let difference = 10 - 5;  // 5
let product = 10 * 5;  // 50
let quotient = 10 / 5;  // 2
```

### **Handling Floating-Point Precision Issues:**
```js
let result = 0.1 + 0.2;  // Ideally should be 0.3, but due to precision issues, it isn't
console.log(result.toFixed(2));  // Outputs: 0.30, fixes the precision
```

### **Modulus Operation:**
Used for finding the remainder of a division operation, useful in scenarios like checking even or odd numbers.

#### **Example:**
```js
let remainder = 5 % 2;  // Outputs: 1
```

## **5. Real-World Scenarios**

- **Calculating Total Costs:** When calculating the total costs in an eCommerce cart.
- **Financial Calculations:** Interest rates, loan repayments.
- **Game Development:** Scoring systems, physics calculations.
- **Data Analysis:** Statistical calculations, conversions.

Numbers in JavaScript are straightforward yet powerful, allowing for a wide range of mathematical computations essential for daily programming tasks.

# **Data Types in JavaScript: Booleans**

In JavaScript, the `Boolean` data type is a primitive type that can hold one of two values: `true` or `false`. This binary nature makes Booleans extremely useful in controlling program flow and making logical decisions.

## **1. Overview of Boolean Data Type**

Booleans are fundamental in any programming language, serving as the building blocks for conditional statements and loops, enabling actions based on logical conditions.

### **Key Points:**
- Booleans represent a logical entity and can have only two values: `true` and `false`.
- They are often the result of comparisons and used to control conditional logic.

## **2. Conversion to Boolean**

JavaScript uses type coercion in logical contexts, converting values to a Boolean according to the following rules:

- **Truthy values:** These are values that convert to `true`. In JavaScript, any value that's not explicitly considered "falsy" is "truthy".
- **Falsy values:** These are values that convert to `false`. The list includes `0`, `-0`, `null`, `false`, `NaN`, `undefined`, and the empty string `""`.

### **Explicit Conversion Using `Boolean()` Function:**

#### **Syntax & Example:**
```js
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));  // false
```

## **3. Boolean Operations**

### **Logical Operators:**
- **AND (`&&`)**: Returns `true` if both operands are true; otherwise, returns `false`.
- **OR (`||`)**: Returns `true` if at least one of the operands is true.
- **NOT (`!`)**: Returns `true` if the operand is false; `false` if the operand is true.

#### **Examples:**
```js
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);  // false
```

### **Short-Circuit Evaluation:**
- **AND (`&&`)**: Evaluates operands from left to right, returning the first falsy value or the last value if no falsy value is found.
- **OR (`||`)**: Evaluates operands from left to right, returning the first truthy value or the last value if no truthy value is found.

#### **Real-World Use:**
```js
const access = (userHasAccess && userNotExpired);  // Determine if user can access a resource
const greeting = user.name || "Guest";  // Default to "Guest" if user.name is falsy
```

## **4. Comparisons**
Booleans are often the result of comparisons:
- **Equality (`==` vs `===`)**: `==` performs type coercion, `===` does not.
- **Relational Operators**: `<`, `>`, `<=`, `>=`.

#### **Examples:**
```js
console.log(10 > 5);  // true
console.log(10 === '10');  // false
console.log(10 == '10');  // true
```

## **5. Real-World Scenarios**
- **Conditional Rendering:** In web development, particularly in frameworks like React, conditional rendering uses booleans to determine which components to display.
- **Feature Toggling:** Managing feature availability in applications based on boolean flags.
- **Access Control:** Determining if a user's actions are permissible based on boolean checks.
- **Form Validations:** Ensuring data entered in forms meets certain criteria before submission.

Booleans, with their simplicity, play a crucial role in control structures and decisions in JavaScript, making them an indispensable part of programming logic.


# **Data Types in JavaScript: Strings**

Strings in JavaScript are used to represent text data. They are a sequence of characters, and JavaScript provides a variety of methods to perform operations on strings, making it easy to manipulate and process textual data.

## **1. Overview of String Data Type**

A string can be created using either single quotes `'`, double quotes `"`, or backticks (template literals) `` ` ``. Template literals allow for multi-line strings and expression embedding.

### **Key Points:**
- Strings are immutable in JavaScript, meaning once a string is created, it cannot be changed. However, you can create new strings from operations on existing strings.
- You can access characters in a string by their index using bracket notation.

### **Example of Creating Strings:**
```js
let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let templateLiteralString = `Hello World ${singleQuoteString}!`;
```

## **2. Common String Methods**

Here is a comprehensive list of string methods provided by JavaScript:

### **charAt()**
Returns the character at the specified index.

#### **Syntax & Example:**
```js
console.log("Hello".charAt(1));  // Outputs: 'e'
```

### **concat()**
Concatenates two or more strings.

#### **Syntax & Example:**
```js
console.log("Hello".concat(" ", "World!"));  // Outputs: 'Hello World!'
```

### **includes()**
Determines whether one string may be found within another string.

#### **Syntax & Example:**
```js
console.log("Hello World".includes("World"));  // Outputs: true
```

### **indexOf()**
Returns the index of the first occurrence of a specified value in a string.

#### **Syntax & Example:**
```js
console.log("Hello World".indexOf("World"));  // Outputs: 6
```

### **lastIndexOf()**
Returns the index of the last occurrence of a specified value in a string.

#### **Syntax & Example:**
```js
console.log("Hello World World".lastIndexOf("World"));  // Outputs: 12
```

### **match()**
Retrieves the result of matching a string against a regular expression.

#### **Syntax & Example:**
```js
console.log("Hello World".match(/[A-Z]/g));  // Outputs: ['H', 'W']
```

### **repeat()**
Returns a new string with a specified number of copies of the string it was called on.

#### **Syntax & Example:**
```js
console.log("Hello ".repeat(3));  // Outputs: 'Hello Hello Hello '
```

### **replace()**
Replaces occurrences of a specified substring or pattern with another substring.

#### **Syntax & Example:**
```js
console.log("Hello World".replace("World", "Everyone"));  // Outputs: 'Hello Everyone'
```

### **search()**
Executes a search for a match between a regular expression and this string.

#### **Syntax & Example:**
```js
console.log("Hello World".search("World"));  // Outputs: 6
```

### **slice()**
Extracts a section of a string and returns it as a new string.

#### **Syntax & Example:**
```js
console.log("Hello World".slice(0, 5));  // Outputs: 'Hello'
```

### **split()**
Splits a string into an array of strings by separating the string into substrings.

#### **Syntax & Example:**
```js
console.log("Hello World".split(" "));  // Outputs: ['Hello', 'World']
```

### **substring()**
Returns a subset of a string between one index and another.

#### **Syntax & Example:**
```js
console.log("Hello World".substring(0, 5));  // Outputs: 'Hello'
```

### **toLowerCase()**
Converts a string to lowercase letters.

#### **Syntax & Example:**
```js
console.log("HELLO WORLD".toLowerCase());  // Outputs: 'hello world'
```

### **toUpperCase()**
Converts a string to uppercase letters.

#### **Syntax & Example:**
```js
console.log("hello world".toUpperCase());  // Outputs: 'HELLO WORLD'
```

### **trim()**
Trims whitespace from both ends of a string.

#### **Syntax & Example:**
```js
console.log(" Hello World ".trim());  // Outputs: 'Hello World'
```

### **valueOf()**
Returns the primitive value of a string object.

#### **Syntax & Example:**
```js
console.log(new String("Hello World").valueOf());  // Outputs: 'Hello World'
```

## **3. Real-World Scenarios for Using String Methods**
- **Form Validations:** Using `trim()` to clean input fields.
- **URL Generation:** Using `toLowerCase()` to ensure URL uniformity.
- **Data Parsing:** Using `split()` to parse CSV data into an array.
- **User Input Feedback:** Using `includes()` to check if a user's input contains forbidden words.
- **Dynamic Content Generation:** Using template literals to embed variables and expressions into strings for dynamic content.

Strings are a versatile and essential data type in JavaScript, equipped with numerous methods that facilitate the manipulation and processing of textual data effectively.

# **Day 7:- Data Types in JavaScript: Arrays**

Arrays in JavaScript are used to store multiple values in a single variable. They are objects that can hold a mix of any types of values and offer a vast range of methods to manipulate these values efficiently.

## **1. Overview of Array Data Type**

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. They can contain any type of value: numbers, strings, objects, or even other arrays.

### **Key Points:**
- Arrays in JavaScript are zero-indexed: the first element of the array is at index 0, and the last element is at the index equal to the value of the array's length minus one.
- JavaScript arrays are dynamic, meaning they can grow or shrink in size dynamically.

### **Example of Creating Arrays:**
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // Outputs: 'Apple'
```

## **2. Common Array Methods**

Here's a comprehensive guide to some of the essential array methods provided by JavaScript:

### **concat()**
Merges two or more arrays.

#### **Syntax & Example:**
```js
let vegetables = ["Carrot", "Potato"];
let allFoods = fruits.concat(vegetables);
console.log(allFoods);  // Outputs: ['Apple', 'Banana', 'Cherry', 'Carrot', 'Potato']
```

### **every()**
Tests whether all elements in the array pass the test implemented by the provided function.

#### **Syntax & Example:**
```js
let ages = [32, 33, 16, 40];
console.log(ages.every(age => age >= 18));  // Outputs: false
```

### **filter()**
Creates a new array with all elements that pass the test implemented by the provided function.

#### **Syntax & Example:**
```js
let filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges);  // Outputs: [32, 33, 40]
```

### **find()**
Returns the value of the first element in the provided array that satisfies the provided testing function.

#### **Syntax & Example:**
```js
let found = ages.find(age => age < 20);
console.log(found);  // Outputs: 16
```

### **forEach()**
Executes a provided function once for each array element.

#### **Syntax & Example:**
```js
fruits.forEach(fruit => console.log(fruit));
```

### **indexOf()**
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

#### **Syntax & Example:**
```js
console.log(fruits.indexOf("Banana"));  // Outputs: 1
```

### **join()**
Joins all elements of an array into a string.

#### **Syntax & Example:**
```js
console.log(fruits.join(", "));  // Outputs: 'Apple, Banana, Cherry'
```

### **map()**
Creates a new array populated with the results of calling a provided function on every element in the calling array.

#### **Syntax & Example:**
```js
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
console.log(roots);  // Outputs: [1, 2, 3]
```

### **pop()**
Removes the last element from an array and returns that element.

#### **Syntax & Example:**
```js
let lastFruit = fruits.pop();
console.log(lastFruit);  // Outputs: 'Cherry'
```

### **push()**
Adds one or more elements to the end of an array and returns the new length of the array.

#### **Syntax & Example:**
```js
let newLength = fruits.push("Mango");
console.log(newLength);  // Outputs: 3
console.log(fruits);  // Outputs: ['Apple', 'Banana', 'Mango']
```

### **reduce()**
Executes a reducer function on each element of the array, resulting in a single output value.

#### **Syntax & Example:**
```js
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);  // Outputs: 14
```

### **reverse()**
Reverses an array in place.

#### **Syntax & Example:**
```js
console.log(fruits.reverse());  // Outputs: ['Mango', 'Banana', 'Apple']
```

### **slice()**
Returns a shallow copy of a portion of an array into a new array object.

#### **Syntax & Example:**
```js
let citrus = fruits.slice(1);
console.log(citrus);  // Outputs: ['Banana', 'Mango']
```

### **sort()**
Sorts the elements of an array in place and returns the array.

#### **Syntax & Example:**
```js
console.log(fruits.sort());  // Outputs: ['Apple', 'Banana', 'Mango']
```

### **splice()**
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

#### **Syntax & Example:**
```js
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);  // Outputs: ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Mango']
```

### **unshift()**
Adds one or more elements to the beginning of an array and returns the new length of the array.

#### **Syntax & Example:**
```js
let newLength = fruits.unshift("Strawberry");
console.log(newLength);  // Outputs: 6
console.log(fruits);  // Outputs: ['Strawberry', 'Apple', 'Banana', 'Lemon', 'Kiwi', 'Mango']
```

## **3. Real-World Scenarios for Using Array Methods**
- **Data Processing:** Using `map()`, `filter()`, and `reduce()` for transforming, filtering, and accumulating data.
- **UI Lists:** Using arrays to render lists in UI frameworks, with `map()` to transform data into components.
- **Analytics:** Using `forEach()` or `reduce()` to iterate through data points and calculate statistics or aggregates.
- **Form Inputs:** Using `push()` and `pop()` to manage stacks of input history or undo stacks in applications.

Arrays are central to handling collections of data in JavaScript, and their methods provide powerful tools for data manipulation and presentation.

# **Day 8:- Data Types in JavaScript: Objects**

In JavaScript, objects are collections of properties, where a property is an association between a key (or name) and a value. A value of a property can be a function, which is then considered a method of the object. Objects in JavaScript are extremely versatile and can be used as data structures (similar to dictionaries in Python or hashes in Ruby).

## **1. Overview of Object Data Type**

Objects in JavaScript can be used to store structured data, serve as a building block for Object Oriented Programming, and provide dynamic behavior through methods.

### **Key Points:**
- Objects are mutable: Properties can usually be changed, properties can be added, and properties can be deleted.
- They are used to store keyed collections of various data and more complex entities.
- Objects can be created using literal notation or the `Object` constructor.

### **Example of Creating an Object:**
```js
let person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
```

## **2. Common Object Methods**

JavaScript provides several built-in methods through the `Object` global constructor which are useful for dealing with objects:

### **Object.keys()**
Returns an array of a given object's own property names.

#### **Syntax & Example:**
```js
console.log(Object.keys(person));  // Outputs: ['name', 'age', 'greet']
```

### **Object.values()**
Returns an array of a given object's own enumerable property values.

#### **Syntax & Example:**
```js
console.log(Object.values(person));  // Outputs: ['John Doe', 30, f]
```

### **Object.entries()**
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

#### **Syntax & Example:**
```js
console.log(Object.entries(person));  // Outputs: [['name', 'John Doe'], ['age', 30], ['greet', f]]
```

### **Object.assign()**
Copies all enumerable own properties from one or more source objects to a target object.

#### **Syntax & Example:**
```js
let additionalInfo = { gender: "male", occupation: "engineer" };
Object.assign(person, additionalInfo);
console.log(person);
```

### **Object.freeze()**
Freezes an object: other code cannot delete or change any properties.

#### **Syntax & Example:**
```js
Object.freeze(person);
person.name = "Jane Doe";  // This will not change the name because the object is frozen.
console.log(person.name);  // Outputs: 'John Doe'
```

### **Object.seal()**
Prevents new properties from being added to an object and marks all existing properties as non-configurable.

#### **Syntax & Example:**
```js
Object.seal(person);
person.age = 35;  // This will change the age.
delete person.gender;  // This will not work because the object is sealed.
console.log(person);
```

### **Object.hasOwnProperty()**
Determines whether an object has a property with the specified name.

#### **Syntax & Example:**
```js
console.log(person.hasOwnProperty('name'));  // Outputs: true
```

## **3. Accessing Properties**
You can access properties of an object using the dot notation or square bracket notation:

### **Dot Notation:**
```js
console.log(person.name);  // Outputs: 'John Doe'
```

### **Bracket Notation:**
```js
console.log(person['age']);  // Outputs: 30
```

## **4. Real-World Scenarios for Using Objects**
- **Configuration Objects:** Storing and managing configurations for applications.
- **Models in MVC Frameworks:** Representing data structures in model components of MVC (Model-View-Controller) frameworks.
- **Options for Functions/Methods:** Functions can accept a single object containing named parameters.
- **JSON Data:** JavaScript Object Notation (JSON) is a common data exchange format closely associated with JavaScript objects.

Objects are a foundational element in JavaScript, providing a powerful toolset for creating structured, interactive applications. They can hold various types of data and functions, allowing for flexible and dynamic programming approaches.


# **Day 9:- Data Types in JavaScript: Dates**

In JavaScript, the `Date` object is used to work with dates and times. It's part of the built-in object types that JavaScript provides to handle the complexity of date and time operations.

## **1. Overview of Date Data Type**

The `Date` object is used for all types of calendar and clock-related tasks. It can be created to represent a specific point in time, manipulated, and formatted to various locale-specific outputs.

### **Key Points:**
- Dates are created using the `Date` constructor.
- The JavaScript `Date` object provides methods to perform various operations like getting, setting, and manipulating dates and times.
- Dates in JavaScript are stored as the number of milliseconds since the Unix Epoch (January 1, 1970, UTC).

### **Example of Creating Dates:**
```js
let now = new Date();
console.log(now);  // Outputs current date and time

let specificDate = new Date(2023, 0, 1);  // January 1, 2023
console.log(specificDate);  // Outputs: 2023-01-01T00:00:00.000Z
```

## **2. Common Date Methods**

Here are several useful methods provided by the `Date` object:

### **getDate() / setDate()**
Gets or sets the day of the month.

#### **Syntax & Example:**
```js
console.log(now.getDate());  // Outputs: day of the month
now.setDate(15);
console.log(now);  // Sets the day to the 15th
```

### **getMonth() / setMonth()**
Gets or sets the month.

#### **Syntax & Example:**
```js
console.log(now.getMonth());  // Outputs: month (0-11)
now.setMonth(11);  // Sets month to December (0 indexed)
```

### **getFullYear() / setFullYear()**
Gets or sets the year.

#### **Syntax & Example:**
```js
console.log(now.getFullYear());  // Outputs: year
now.setFullYear(2024);
```

### **getHours() / setHours()**
Gets or sets the hours.

#### **Syntax & Example:**
```js
console.log(now.getHours());  // Outputs: hours
now.setHours(20);
```

### **getTime() / setTime()**
Gets or sets the time (milliseconds since January 1, 1970).

#### **Syntax & Example:**
```js
console.log(now.getTime());  // Outputs: milliseconds
now.setTime(1672531200000);  // Sets a specific time
```

### **getDay()**
Gets the day of the week.

#### **Syntax & Example:**
```js
console.log(now.getDay());  // Outputs: day of the week (0-6, where 0 is Sunday)
```

### **toLocaleString()**
Converts a date and time to a string, using locale conventions.

#### **Syntax & Example:**
```js
console.log(now.toLocaleString());  // Outputs: date and time in local format
```

### **toUTCString()**
Converts a date to a UTC string.

#### **Syntax & Example:**
```js
console.log(now.toUTCString());  // Outputs: date and time in UTC format
```

### **getTimezoneOffset()**
Returns the time-zone offset from UTC, in minutes, for the current locale.

#### **Syntax & Example:**
```js
console.log(now.getTimezoneOffset());  // Outputs: timezone offset in minutes
```

## **3. Real-World Scenarios for Using Dates**
- **Event Scheduling:** Handling dates and times for events in calendars.
- **Logs and Timestamps:** Recording times of events in logging systems.
- **Age Verification:** Calculating age from birthdates.
- **Timezone Conversions:** Managing display of times for users in different time zones.
- **Countdowns and Timers:** Implementing countdowns or measuring durations.

## **4. Advanced Date Manipulation**
For more complex date manipulations (like adding days or calculating differences between dates), JavaScript developers often use libraries like `date-fns` or `Moment.js` to simplify these tasks, although many are moving towards `date-fns` due to its modular approach.

The `Date` object in JavaScript provides a comprehensive set of methods for creating, modifying, and formatting dates, making it suitable for a wide array of applications dealing with time-sensitive data.


# **Day 10: Other Essential Data Types in JavaScript**

In addition to the fundamental data types like numbers, strings, booleans, objects, and dates, JavaScript offers several advanced and highly useful data structures. These include `Set`, `Map`, `Symbol`, and regular expressions (regex). Each of these types enhances JavaScript's versatility and is crucial in solving specific problems in web development.

Let’s explore each one in detail.

---

## **1. Set**

A `Set` is a collection of unique values, meaning it does not allow any duplicates. This feature makes `Set` useful for storing data that must remain distinct, such as filtering out duplicate entries from arrays.

### **Key Points:**
- Sets are ideal when you need to ensure that your data contains no duplicates.
- It maintains the insertion order of values.
- Set operations (add, delete, and check existence) are optimized for performance.

### **Example of Using Set:**
```js
let mySet = new Set([1, 2, 3, 4, 4, 4]);  // Duplicate 4s will be eliminated
console.log(mySet);  // Outputs: Set { 1, 2, 3, 4 }

// Adding items to the Set
mySet.add(5);

// Checking if an item exists in the Set
console.log(mySet.has(3));  // true

// Getting the size of the Set
console.log(mySet.size);  // 5

// Deleting an item from the Set
mySet.delete(2);

// Iterating over the Set
mySet.forEach(value => {
  console.log(value);
});
```

### **Common Use Cases:**
- Removing duplicate elements from an array.
- Performing operations where the uniqueness of elements is important, such as maintaining a set of visited pages.

---

## **2. Map**

`Map` is similar to an object but with some key differences. It is a collection of key-value pairs where keys can be of any type (even functions or objects), unlike objects which restrict keys to strings or symbols.

### **Key Points:**
- `Map` objects maintain the order of key-value pairs, meaning the order of insertion is preserved.
- Keys in a `Map` can be of any data type, including objects, which is not possible with regular JavaScript objects.
- It is optimized for adding and retrieving key-value pairs.

### **Example of Using Map:**
```js
let myMap = new Map();

// Setting values in the Map
myMap.set('name', 'Alice');
myMap.set('age', 25);

// Retrieving a value using its key
console.log(myMap.get('name'));  // Outputs: 'Alice'

// Checking if a key exists
console.log(myMap.has('age'));  // true

// Size of the Map
console.log(myMap.size);  // 2

// Iterating through the Map
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
```

### **Common Use Cases:**
- When you need to store a collection of key-value pairs where the keys are not just strings but any type.
- Maintaining the order of insertion, unlike plain objects that may not retain this order.

---

## **3. Symbol**

Symbols are a unique, immutable primitive data type introduced in ES6. They are typically used to create unique property keys that will never clash with other property keys.

### **Key Points:**
- Every `Symbol()` call generates a completely unique identifier, even if given the same description.
- Symbols are not enumerable, which means they do not show up in typical object iteration, such as `for...in` loops.

### **Example of Using Symbol:**
```js
let sym1 = Symbol('identifier');
let sym2 = Symbol('identifier');

console.log(sym1 === sym2);  // false

// Using Symbols as object property keys
let user = {
  [sym1]: 'Alice',
  age: 25
};

// Accessing the Symbol property
console.log(user[sym1]);  // Outputs: 'Alice'
```

### **Common Use Cases:**
- Creating hidden or unique properties in objects.
- Using them to avoid naming collisions in objects, especially in frameworks or large codebases.

---

## **4. Regular Expressions (Regex)**

Regular expressions (regex) are powerful tools for matching patterns in strings. They are used for validating, searching, and manipulating text. A regular expression is essentially a sequence of characters that defines a search pattern.

### **Key Points:**
- Regular expressions are represented by the `RegExp` object in JavaScript.
- They are useful for validating data (like email formats), searching for patterns (like all words starting with "a"), or replacing parts of a string.
- You can use flags to modify regex behavior, such as `g` (global search), `i` (case-insensitive search), and `m` (multi-line search).

### **Example of Using Regex:**
```js
let text = "The quick brown fox jumps over the lazy dog.";
let regex = /quick/;

// Test if the pattern exists
console.log(regex.test(text));  // true

// Replace 'quick' with 'slow'
let newText = text.replace(regex, 'slow');
console.log(newText);  // Outputs: "The slow brown fox jumps over the lazy dog."
```

### **More Detailed Example:**
```js
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let email1 = "user@example.com";
let email2 = "userexample.com";

console.log(emailPattern.test(email1));  // true (valid email)
console.log(emailPattern.test(email2));  // false (invalid email)
```

### **Explanation of the Regex:**
- `/^`: Anchors the pattern at the beginning of the string.
- `[a-zA-Z0-9._-]+`: Matches one or more letters, digits, dots, underscores, or hyphens (the local part of the email before `@`).
- `@`: Requires the presence of exactly one `@` symbol.
- `[a-zA-Z0-9.-]+`: Matches one or more letters, digits, dots, or hyphens (the domain part of the email).
- `\.`: Requires a literal dot.
- `[a-zA-Z]{2,}`: Matches at least two letters for the top-level domain (like `.com` or `.org`).
- `$/`: Anchors the pattern at the end of the string.

### **Common Use Cases for Regex:**
- Validating user input such as email addresses, phone numbers, and passwords.
- Extracting specific patterns from a block of text.
- Finding and replacing patterns in a string.

---

## **5. JSON: JavaScript Object Notation**

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of JavaScript's object literal syntax.

### **Key Points:**
- JSON is often used when data is sent between a server and a client (such as APIs).
- It represents data as key-value pairs and arrays, making it a good fit for transmitting structured data.
- Unlike JavaScript objects, all keys in JSON must be strings, and only specific types (strings, numbers, arrays, booleans, `null`) are allowed as values.

### **Example of JSON:**
```json
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

### **Parsing JSON in JavaScript:**

You can convert a JSON string into a JavaScript object using `JSON.parse()` and vice versa using `JSON.stringify()`.

### **Example of Parsing and Stringifying JSON:**
```js
// JSON string
let jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';

// Parse JSON string into a JavaScript object
let userObj = JSON.parse(jsonString);
console.log(userObj.name);  // Outputs: 'Alice'

// Convert a JavaScript object into a JSON string
let newUser = {
  name: "Bob",
  age: 28,
  city: "Chicago"
};
let jsonOutput = JSON.stringify(newUser);
console.log(jsonOutput);  // Outputs: '{"name":"Bob","age":28,"city":"Chicago"}'
```

### **Common Use Cases for JSON:**
- Data exchange between server and client in web applications.
- Configuration files for projects or applications.
- Storage of structured data, like API responses or settings.

---

Understanding and using these data types effectively will enhance your ability to write flexible, efficient, and maintainable JavaScript code, especially when handling complex data or dealing with web APIs.