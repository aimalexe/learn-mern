# MERN Stack Roadmap

## Content
- [MERN Stack Roadmap](#mern-stack-roadmap)
  - [Content](#content)
  - [HTML 5 Roadmap](#html-5-roadmap)
  - [CSS 3 Roadmap](#css-3-roadmap)
  - [Bootstrap 5](#bootstrap-5)
  - [JavaScript Roadmap](#javascript-roadmap)
    - [Basics](#basics)
    - [Data Serialization](#data-serialization)
    - [Strings](#strings)
    - [Rest vs Spread](#rest-vs-spread)
    - [Number Methods](#number-methods)
    - [Date Methods](#date-methods)
    - [Math Methods](#math-methods)
    - [Array Methods](#array-methods)
    - [Sets](#sets)
    - [Classes and Objects](#classes-and-objects)
    - [Modules](#modules)
    - [DOM](#dom)
    - [AJAX](#ajax)
    - [Async JavaScript](#async-javascript)
    - [API](#api)
    - [Sample Apps to Practice JavaScript](#sample-apps-to-practice-javascript)
  - [NodeJS Roadmap](#nodejs-roadmap)
  - [React JS Roadmap](#react-js-roadmap)
    - [React JS Basics](#react-js-basics)
    - [React JS Intermediate](#react-js-intermediate)
    - [React JS Advanced](#react-js-advanced)
  - [React Native Roadmap](#react-native-roadmap)
  - [DevOps Roadmap](#devops-roadmap)



## HTML 5 Roadmap
- **HTML, Head, Body**
    - Understand the structure of an HTML document.
    - Learn the purpose of the `<html>`, `<head>`, and `<body>` tags.
    - Understand how to include metadata, styles, and scripts in the `<head>`.
- **Semantic Markup**
    - Use semantic tags like `<header>`, `<footer>`, `<article>`, `<section>`, and `<aside>` to create meaningful HTML structures.
- **Tags and Attributes**
    - Learn common HTML tags and their purposes.
    - Understand how to use attributes to provide additional information about elements (e.g., `class`, `id`, `style`).
- **Tables**
    - Create tables using `<table>`, `<tr>`, `<th>`, and `<td>` tags.
    - Use attributes like `colspan` and `rowspan` for complex table layouts.
- **Lists**
    - Create ordered lists with `<ol>` and unordered lists with `<ul>`.
    - Use `<li>` to define list items.
- **Headings**
    - Use `<h1>` to `<h6>` tags for headings, with `<h1>` being the highest level.
- **Paragraphs**
    - Use `<p>` to define paragraphs.
    - Learn to manage text flow and spacing with line breaks (`<br>`) and horizontal rules (`<hr>`).
- **Links**
    - Create hyperlinks using the `<a>` tag.
    - Understand how to use the `href` attribute to link to other pages or resources.
    - Learn about target attributes like `_blank` to open links in new tabs.
- **Images**
    - Embed images using the `<img>` tag.
    - Use attributes like `src`, `alt`, `width`, and `height`.
- **Forms**
    - Create forms using `<form>`, `<input>`, `<textarea>`, `<select>`, and `<button>` tags.
    - Learn about form attributes like `action`, `method`, and `name`.
    - Use input types such as text, email, password, submit, radio, checkbox, date, and more.
- **Inline vs Block Elements**
    - Understand the difference between inline elements (e.g., `<span>`, `<a>`, `<img>`) and block elements (e.g., `<div>`, `<p>`, `<h1>`).
    - Learn how each type affects layout and flow.
- **SVG**
    - Learn to include Scalable Vector Graphics using the `<svg>` tag.
    - Understand basic shapes like `<circle>`, `<rect>`, and `<line>`.
- **iframe**
    - Embed external content with the `<iframe>` tag.
    - Use attributes like `src`, `width`, `height`, and `sandbox`.
- **Audio/Video**
    - Embed audio files using the `<audio>` tag.
    - Embed video files using the `<video>` tag.
    - Understand how to use attributes like `controls`, `autoplay`, `loop`, `muted`, and `poster`.



## CSS 3 Roadmap
- **CSS Selectors**
    - **Basic Selectors**
        - id (`#id`)
        - class (`.class`)
        - tag (`tag`)
        - universal (`*`)
    - **Attribute Selectors**
        - `[attribute=value]`
    - **Pseudo-class Selectors**
        - `:hover`, `:active`, `:focus`, `:nth-child`, `:nth-of-type`
    - **Pseudo-element Selectors**
        - `::before`, `::after`, `::first-letter`, `::first-line`
- **CSS Properties**
    - Common properties for styling elements (e.g., `color`, `font-size`, `margin`, `padding`)
- **CSS Values**
    - Understanding different value types (e.g., keywords, colors, lengths, percentages)
- **CSS Units**
    - Absolute units (e.g., `px`, `cm`)
    - Relative units (e.g., `em`, `rem`, `%`)
- **CSS Color**
    - Color values (`hex`, `rgb`, `rgba`, `hsl`, `hsla`)
    - Using `color` and `background-color` properties
- **CSS Fonts**
    - Font properties (`font-family`, `font-size`, `font-weight`, `font-style`)
    - Web fonts and `@font-face`
- **CSS Text**
    - Text properties (`text-align`, `text-decoration`, `text-transform`, `line-height`, `letter-spacing`)
- **CSS Positioning**
    - Position properties (`static`, `relative`, `absolute`, `fixed`, `sticky`)
    - Understanding `z-index` and stacking context
- **CSS Floats**
    - Using `float` and `clear`
    - Clearing floats with the clearfix hack
- **CSS Margin**
    - Margin properties (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `margin`)
- **CSS Padding**
    - Padding properties (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `padding`)
- **CSS Borders**
    - Border properties (`border-width`, `border-style`, `border-color`, `border-radius`)
    - Border shorthand
- **CSS Backgrounds**
    - Background properties (`background-color`, `background-image`, `background-repeat`, `background-position`, `background-size`)
- **CSS Shadows**
    - Box shadow (`box-shadow`)
    - Text shadow (`text-shadow`)
- **CSS Animations**
    - Defining keyframes (`@keyframes`)
    - Animation properties (`animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`)
- **CSS Transitions**
    - Transition properties (`transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`)
- **CSS Flexbox**
    - Flex container properties (`display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`)
    - Flex item properties (`flex-grow`, `flex-shrink`, `flex-basis`, `align-self`)
- **CSS Grid**
    - Grid container properties (`display: grid`, `grid-template-columns`, `grid-template-rows`, `grid-gap`, `grid-template-areas`)
    - Grid item properties (`grid-column`, `grid-row`, `grid-area`)
- **CSS Responsive Design**
    - Using relative units and flexible grids
    - Responsive images and media
- **CSS Media Queries**
    - Defining media queries (`@media`)
    - Using media queries to apply styles based on device characteristics (e.g., width, height, orientation)
- **CSS Pseudo Classes**
    - Common pseudo-classes (`:hover`, `:focus`, `:nth-child`, `:nth-of-type`)
- **CSS Box Model**
    - Understanding the box model (content, padding, border, margin)
    - Using `box-sizing` to control how the box model is applied



## Bootstrap 5
- **Bootstrap Basics**
    - **Containers**
        - .container (fixed width)
        - .container-fluid (full width)
        - .container-sm | md | lg | xl
    - **Grids**
        - 12 column layout
        - .col- < 576
        - .col-sm- ≥ 576
        - .col-md- ≥ 768
        - .col-lg- ≥ 992
        - .col-xl- ≥ 1200
        - .row
        - .col-sm-4 and .col-sm-8
    - **Text/Typography**
        - Default H1 to H6
        - .display-1 to 4
        - .blockquote for blockquote tag
        - Definition list (dl > dt > dd)
        - code
        - kbd
        - pre
        - .text-lowercase
        - .text-uppercase
        - .text-capitalize
        - .lead
        - .font-weight-bold
        - .font-weight-bolder
        - .font-italic
        - .text-left | right | center
    - **Tables**
        - .table
        - .table-striped
        - .table-bordered
        - .table-hover
        - .table-dark
        - .table-borderless
        - .table-primary | success | danger | info | active | secondary | dark
        - .thead-dark
        - .table-sm
        - .table-responsive
        - .table-responsive-sm | md | lg | xl
    - **Images**
        - .img-fluid (responsive)
        - .rounded
        - .rounded-circle
        - .img-thumbnail
        - .float-right | left
        - .d-block (display as block)
    - **Jumbotron**
        - .jumbotron
        - .jumbotron-fluid
    - **Alerts**
        - .alert
        - .alert-success | danger | info | primary | secondary
        - .alert-dismissible
        - .alert alert-danger alert-dismissible fade show (animated alerts)
    - **Buttons**
        - .btn
        - .btn-info | primary | secondary | success | info | warning | danger | dark | light | link
        - .btn-outline-info | primary | secondary | success | info | warning | danger | dark | light | link
        - .btn-lg | sm
        - .btn-block
        - .disabled
        - button > span.spinner-border spinner-border-sm
        - button > span.spinner-grow spinner-grow-sm
        - .btn-group btn-group-lg (all buttons will be large)
        - .btn-group-vertical
        - Dropdown
            - button.btn btn-primary dropdown-toggle and data-toggle="dropdown" immediately after div.dropdown-menu > a.dropdown-item
    - **Pagination**
        - ul.pagination               
        - li.page-item > a.page-link
        - .active
        - li.disabled
        - .pagination-lg
        - .pagination-sm
    - **List Groups**
        - ul.list-group
            - li.list-group-item
            - li.list-group-item active
            - li.list-group-item disabled
        - ul.list-group-item-success | info | warning | danger
            - li.list-group-item
                - span.badge
        - h4.list-group-item-heading
            - p.list-group-item-text
    - **Dropdowns**
        - div.dropdown | dropright | dropleft | dropup
            - button.dropdown-toggle data-toggle='dropdown'
            - div.dropdown-menu
                - a.dropdown-item
                - div.dropdown-divider
                - h5.dropdown-header
                - active
                - disabled
        - Grouped Buttons
            - div.btn-group | vertical
                - Buttons (1 or 2)
                - div.btn-group
                    - button.dropdown-toggle (split) data-toggle='dropdown'
                    - div.dropdown-menu
                        - a.dropdown-item
                        - a.dropdown-item
    - **Collapse**
        - button data-toggle='collapse' data-target='#test'
        - div#test.collapse (show) > text
        - Accordion
            - div#accordion
                - div.card
                    - div.card-header
                        - a.card-link data-toggle="collapse" href="#one"
                    - div#one .collapse show data-parent="#accordion"
                        - div.card-body
    - **Navigation Bar**
        - Basic Navbar
            - nav.navbar navbar-expand-sm bg-light | dark | primary (remove expand-sm for vertical)
                - ul.navbar-nav
                    - li.nav-item
                        - a.nav-link
        - Centered Navbar
            - nav.navbar navbar-expand-sm bg-light justify-content-center
        - Navbar with Logo/Text
            - nav.navbar navbar-expand-sm bg-dark navbar-dark
                - a.navbar-brand
                    - img
        - Collapsing Navbar
            - nav.navbar navbar-expand-md bg-dark navbar-dark
                - a.navbar-brand
                - button.navbar-toggler data-toggle="collapse" data-target="#test"
                    - span.navbar-toggler-icon
                - div.collapse navbar-collapse id="test"
                    - ul.navbar-nav
                        - li.nav-item
                            - a.nav-link    
        - Navbar with Forms and Buttons
            - nav.navbar navbar-expand-sm bg-dark navbar-dark
                - form.form-inline
                    - input.form-control mr-sm-2
                    - button.btn btn-success
        - Fixed Top Navbar
            - nav.navbar navbar-expand-sm bg-dark navbar-dark fixed-top
    - **Forms**
        - form
            - div.form-group | form-inline.was-validated
                - label
                - input.form-control text
                - label
                - input.form-control passwd
            - div.form-group form-check (for checkbox)
                - label.form-check-label
                    - input.form-check-input type='checkbox'
        - Validation
            - form.was-validated   
                - div.form-group (for username)
                    - label
                    - input.form-control required
                    - div.valid-feedback
                    - div.invalid-feedback
                - div.form-group (for password)
                    - label
                    - input.form-control required
                    - div.valid-feedback
                    - div.invalid-feedback
                - div.form-group form-check (for checkbox)
                    - label.form-check-label
                        - input.form-check-input required
                        - div.valid-feedback
                        - div.invalid-feedback
    - **Carousel**
        - div#test .carousel slide data-ride='carousel'
            - ul.carousel-indicators
                - li.active data-target='#test' data-slide-to="0"
                - li data-target='#test' data-slide-to="1"
                - li data-target='#test' data-slide-to="2"
            - div.carousel-inner
                - div.carousel-item active
                    - img
                - div.carousel-item
                    - img
                - div.carousel-item
                    - img
            - a.carousel-control-prev href="#test" data-slide="prev"
                - span.carousel-control-prev-icon
            - a.carousel-control-next href="#test" data-slide="next"
                - span.carousel-control-next-icon
    - **Flex**
        - **Display**
            - d-flex
            - d-inline-flex
            - flex-row (default)
            - flex-row-reverse
            - flex-column
            - flex-column-reverse
            - flex-fill
            - flex-grow-1
            - flex-shrink-1
        - **Content Alignment**
            - justify-content-start
            - justify-content-end
            - justify-content-center
            - justify-content-between
            - justify-content-around
            - align-items-start
            - align-items-end
            - align-items-center
            - align-items-baseline
            - align-items-stretch
            - align-content-start
            - align-content-end
            - align-content-center
            - align-content-between
            - align-content-around
            - align-content-stretch
        - **Order**
            - order-first
            - order-last
            - order-0
            - order-1
            - ms-auto (push to the right)
            - me-auto (push to the left)
    - **Utilities**
        - **Margin and Padding**
            - bg-primary m-5 p-5
            - my-5 mx-5 px-5 py-5
            - mt-3 mb-3 mr-3 ms-5 me-5
            - ps-3 pb-3 pr-3 pe-3
            - w-25 (25%)
            - w-auto


## JavaScript Roadmap

### Basics

- **Variables**
    - **var**: Declares a variable, optionally initializing it to a value.
    ```javascript
    var x = 10;
    ```
    - **let**: Declares a block-scoped variable, optionally initializing it to a value.
    ```javascript
    let y = 20;
    ```
    - **const**: Declares a block-scoped, read-only named constant.
    ```javascript
    const z = 30;
    ```

- **Popups**
    - **alert**: Displays an alert box with a message and an OK button.
    ```javascript
    alert("Hello, World!");
    ```
    - **confirm**: Displays a dialog box with a message, an OK button, and a Cancel button.
    ```javascript
    let result = confirm("Are you sure?");
    ```
    - **prompt**: Displays a dialog box that prompts the user for input.
    ```javascript
    let name = prompt("What is your name?");
    ```

- **Data Types**
    - **String**: Represents textual data.
    ```javascript
    let str = "Hello";
    ```
    - **Number**: Represents both integer and floating-point numbers.
    ```javascript
    let num = 100;
    ```
    - **Boolean**: Represents true or false.
    ```javascript
    let isTrue = true;
    ```
    - **Array**: Represents a collection of elements.
    ```javascript
    let arr = [1, 2, 3];
    ```
    - **Object**: Represents an instance of a class.
    ```javascript
    let obj = { name: "John", age: 30 };
    ```
    - **Function**: Represents a block of code designed to perform a particular task.
    ```javascript
    function greet() {
        console.log("Hello, World!");
    }
    ```

- **Conditions**
    - **if**: Executes a block of code if a specified condition is true.
    ```javascript
    if (x > 10) {
        console.log("x is greater than 10");
    }
    ```
    - **else**: Executes a block of code if the same condition is false.
    ```javascript
    if (x > 10) {
        console.log("x is greater than 10");
    } else {
        console.log("x is not greater than 10");
    }
    ```
    - **else if**: Specifies a new condition to test if the first condition is false.
    ```javascript
    if (x > 10) {
        console.log("x is greater than 10");
    } else if (x === 10) {
        console.log("x is equal to 10");
    } else {
        console.log("x is less than 10");
    }
    ```
    - **switch**: Specifies many alternative blocks of code to be executed.
    ```javascript
    switch (color) {
        case "red":
            console.log("Color is red");
            break;
        case "blue":
            console.log("Color is blue");
            break;
        default:
            console.log("Color is not red or blue");
    }
    ```
    - **Ternary Operators**: Shortened conditional operator.
    ```javascript
    let result = x > 10 ? "greater" : "less or equal";
    ```

- **Loops**
    - **for**: Loops through a block of code a number of times.
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```
    - **while**: Loops through a block of code as long as a specified condition is true.
    ```javascript
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    ```
    - **do while**: Also loops through a block of code, but it will always run at least once.
    ```javascript
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
    ```
    - **for in**: Loops through the properties of an object.
    ```javascript
    let person = { fname: "John", lname: "Doe", age: 25 };
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    ```
    - **for of**: Loops through the values of an iterable object.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    for (let value of arr) {
        console.log(value);
    }
    ```

- **Functions**
    - **with arguments**: Functions that take input parameters.
    ```javascript
    function sum(a, b) {
        return a + b;
    }
    ```
    - **without arguments**: Functions without input parameters.
    ```javascript
    function greet() {
        console.log("Hello!");
    }
    ```
    - **return**: Specifies the value to be returned by the function.
    ```javascript
    function square(x) {
        return x * x;
    }
    ```
    - **default parameters**: Parameters with default values.
    ```javascript
    function multiply(a, b = 1) {
        return a * b;
    }
    ```
    - **rest parameters**: Represents an indefinite number of arguments as an array.
    ```javascript
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num);
    }
    ```
    - **arrow functions**: Shorter syntax for writing functions.
    ```javascript
    let add = (a, b) => a + b;
    ```
    - **function binding**: The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.
    ```javascript
    let person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    let getFullName = person.fullName.bind(person);
    console.log(getFullName());
    ```

### Data Serialization

- **JSON**
    - **Parse**: Converts a JSON string into a JavaScript object.
    ```javascript
    let obj = JSON.parse('{"name":"John", "age":30}');
    ```
    - **Stringify**: Converts a JavaScript object into a JSON string.
    ```javascript
    let jsonStr = JSON.stringify({ name: "John", age: 30 });
    ```

- **CSV**
    - CSV is a delimited text file.
    - Common in data science, data scraping, and data mining.
    - MySQL and MongoDB can be populated with CSV data.
    - Excellent for non-complex data.

- **XML**
    - XML is a markup language.
    - Was industry standard.
    - Not so common now (2022).

- **YAML**
    - YAML is a human-readable data format.
    - Used in configuration files.
    - Used in data science and data mining.
    - Becoming common.

### Strings

- **Concatenation**: Combining strings using `+`.
    ```javascript
    let str1 = "Hello";
    let str2 = "World";
    let result = str1 + " " + str2; // "Hello World"
    ```

- **Escape Characters**: Using backslashes to escape characters.
    ```javascript
    let text = "He said, \"Hello World!\"";
    ```

- **Template Literals**: Using backticks for string interpolation.
    ```javascript
    let name = "John";
    let greeting = `Hello, ${name}`;
    ```

- **String Methods**
    - **concat**: Joins two or more strings.
    ```javascript
    let str = "Hello".concat(" ", "World");
    ```
    - **indexOf**: Returns the position of the first occurrence of a specified value.
    ```javascript
    let position = "Hello World".indexOf("World");
    ```
    - **lastIndexOf**: Returns the position of the last occurrence of a specified value.
    ```javascript
    let position = "Hello World World".lastIndexOf("World");
    ```
    - **replace**: Replaces a specified value with another value.
    ```javascript
    let text = "Hello World".replace("World", "Universe");
    ```
    - **slice**: Extracts a part of a string and returns a new string.
    ```javascript
    let part = "Hello World".slice(0, 5);
    ```
    - **split**: Splits a string into an array of substrings.
    ```javascript
    let arr = "Hello World".split(" ");
    ```
    - **substring**: Extracts characters from a string, between two specified indices.
    ```javascript
    let part = "Hello World".substring(0, 5);
    ```
    - **toLowerCase**: Converts a string to lowercase letters.
    ```javascript
    let lower = "Hello World".toLowerCase();
    ```
    - **toUpperCase**: Converts a string to uppercase letters.
    ```javascript
    let upper = "Hello World".toUpperCase();
    ```
    - **trim**: Removes whitespace from both sides of a string.
    ```javascript
    let str = " Hello World ".trim();
    ```
    - **trimLeft**: Removes whitespace from the left side of a string.
    ```javascript
    let str = " Hello World ".trimLeft();
    ```
    - **trimRight**: Removes whitespace from the right side of a string.
    ```javascript
    let str = " Hello World ".trimRight();
    ```
    - **valueOf**: Returns the primitive value of a string object.
    ```javascript
    let str = new String("Hello World");
    let value = str.valueOf();
    ```

- **Regular Expressions**
    - **Example**
        ```javascript
        let regex = /[A-Z]+/g;
        ```
    - **Pattern**
        - Basics
            - `/ hello\?\*\\/` escape special characters with backslashes
            - `()` group with parentheses
            - `\` match the preceding character literally
            - `/` match the preceding character as a regular expression
            - `|` logical OR
        - Character Classes
            - `\w` word, `\d` digit, `\s` whitespace (tabs, line breaks)
            - `\W` NOT word, `
            - \t tabs, \n line breaks
        - Brackets
            - [xyz] match any x, y, z
            - [J-Z] match any capital letters between J & Z.
            - [^xyz] NOT x, y, z
        - Quantification
            - bob|alice match bob or alice
            - z? match zero or one of the preceding characters
            - z* match zero or more of the preceding characters
            - z+ match one or more of the preceding characters
            - z{n} match exactly n of the preceding characters
            - z{n,} match n or more of the preceding characters
            - z{n,m} match at least n and at most m of the preceding characters
        - Anchors
            - ^ match the beginning of the string
            - $ match the end of the string
            - \b word boundaries
            - \B NOT word boundaries
    - **Modifiers**
        - i (case insensitive)
        - g (global)
        - m (multiline)
    - **Methods**
        - exec
        - test
        - match
        - search
            - str.search(/test/i,text)
        - replace
    - **Playground**
        - https://regexr.com/
        - Examples: https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

### Rest vs Spread

- **Rest Parameters**: Collects all remaining elements into an array.
  ```javascript
  function test(firstName, lastName, ...otherInfo) {
      console.log(firstName); // "John"
      console.log(lastName);  // "Doe"
      console.log(otherInfo); // ["Engineer", 30, "New York"]
  }
  test("John", "Doe", "Engineer", 30, "New York");
  ```

- **Spread Syntax**: Expands an array into individual elements.
  ```javascript
  const more = ["element1", "element2"];
  const test = ["test", ...more, "test"];
  console.log(test); // ["test", "element1", "element2", "test"]
  ```

- **Spread in Strings**: Spreads characters of a string into individual elements.
  ```javascript
  const name = "Mansoor";
  console.log([...name]); // ["M", "a", "n", "s", "o", "o", "r"]
  ```

- **Spread in Function Calls**: Expands an array into individual arguments.
  ```javascript
  function add(a, b, c) {
      return a + b + c;
  }
  const numbers = [1, 2, 3];
  console.log(add(...numbers)); // 6
  ```

- **Spread in Arrays and Objects**
  - **Arrays**
    ```javascript
    const myNames = ["Test1", "Test2"];
    const test = ["Test3", ...myNames, "Test4"];
    console.log(test); // ["Test3", "Test1", "Test2", "Test4"]
    ```
  - **Objects**
    ```javascript
    const myName = { firstName: "Mansoor", lastName: "Nasir" };
    const bio = { ...myName, website: "mansoornasir.com" };
    console.log(bio); // { firstName: "Mansoor", lastName: "Nasir", website: "mansoornasir.com" }
    ```

### Number Methods

- **toExponential**: Converts a number to an exponential notation.
  ```javascript
  let num = 123456;
  console.log(num.toExponential()); // "1.23456e+5"
  ```

- **toFixed**: Formats a number to a fixed number of decimal places.
  ```javascript
  let num = 5.56789;
  console.log(num.toFixed(2)); // "5.57"
  ```

- **toPrecision**: Formats a number to a specified length.
  ```javascript
  let num = 5.56789;
  console.log(num.toPrecision(3)); // "5.57"
  ```

- **toString**: Converts a number to a string.
  ```javascript
  let num = 123;
  console.log(num.toString()); // "123"
  ```

### Date Methods

- **getDate**: Returns the day of the month.
  ```javascript
  let date = new Date();
  console.log(date.getDate()); // 24
  ```

- **getDay**: Returns the day of the week.
  ```javascript
  let date = new Date();
  console.log(date.getDay()); // 1 (Monday)
  ```

- **getFullYear**: Returns the year.
  ```javascript
  let date = new Date();
  console.log(date.getFullYear()); // 2024
  ```

- **getHours**: Returns the hour.
  ```javascript
  let date = new Date();
  console.log(date.getHours()); // 15
  ```

- **getMilliseconds**: Returns the milliseconds.
  ```javascript
  let date = new Date();
  console.log(date.getMilliseconds()); // 123
  ```

- **getMinutes**: Returns the minutes.
  ```javascript
  let date = new Date();
  console.log(date.getMinutes()); // 30
  ```

- **getMonth**: Returns the month.
  ```javascript
  let date = new Date();
  console.log(date.getMonth()); // 6 (July)
  ```

- **getSeconds**: Returns the seconds.
  ```javascript
  let date = new Date();
  console.log(date.getSeconds()); // 45
  ```

- **getTime**: Returns the number of milliseconds since January 1, 1970.
  ```javascript
  let date = new Date();
  console.log(date.getTime()); // 1627222245123
  ```

- **toDateString**: Converts the date to a readable string.
  ```javascript
  let date = new Date();
  console.log(date.toDateString()); // "Mon Jul 24 2024"
  ```

- **toJSON**: Converts the date to a JSON string.
  ```javascript
  let date = new Date();
  console.log(date.toJSON()); // "2024-07-24T15:30:45.123Z"
  ```

- **toLocaleDateString**: Converts the date to a locale-specific date string.
  ```javascript
  let date = new Date();
  console.log(date.toLocaleDateString()); // "7/24/2024"
  ```

- **toLocaleString**: Converts the date to a locale-specific date and time string.
  ```javascript
  let date = new Date();
  console.log(date.toLocaleString()); // "7/24/2024, 3:30:45 PM"
  ```

- **toLocaleTimeString**: Converts the time portion of the date to a locale-specific time string.
  ```javascript
  let date = new Date();
  console.log(date.toLocaleTimeString()); // "3:30:45 PM"
  ```

- **toTimeString**: Converts the time portion of the date to a readable string.
  ```javascript
  let date = new Date();
  console.log(date.toTimeString()); // "15:30:45 GMT+0000 (Coordinated Universal Time)"
  ```

- **toUTCString**: Converts the date to a UTC string.
  ```javascript
  let date = new Date();
  console.log(date.toUTCString()); // "Mon, 24 Jul 2024 15:30:45 GMT"
  ```

### Math Methods

- **abs**: Returns the absolute value of a number.
  ```javascript
  console.log(Math.abs(-4.7)); // 4.7
  ```

- **ceil**: Rounds a number up to the nearest integer.
  ```javascript
  console.log(Math.ceil(4.4)); // 5
  ```

- **floor**: Rounds a number down to the nearest integer.
  ```javascript
  console.log(Math.floor(4.7)); // 4
  ```

- **max**: Returns the largest of zero or more numbers.
  ```javascript
  console.log(Math.max(1, 3, 2)); // 3
  ```

- **min**: Returns the smallest of zero or more numbers.
  ```javascript
  console.log(Math.min(1, 3, 2)); // 1
  ```

- **pow**: Returns the base to the exponent power.
  ```javascript
  console.log(Math.pow(2, 3)); // 8
  ```

- **random**: Returns a pseudo-random number between 0 and 1.
  ```javascript
  console.log(Math.random()); // 0.123456789
  ```

- **round**: Rounds a number to the nearest integer.
  ```javascript
  console.log(Math.round(4.5)); // 5
  ```

- **sqrt**: Returns the square root of a number.
  ```javascript
  console.log(Math.sqrt(16)); // 4
  ```

- **trunc**: Returns the integer part of a number.
  ```javascript
  console.log(Math.trunc(4.9)); // 4
  ```

### Array Methods

- **length**: Returns the number of elements in an array.
  ```javascript
  let arr = [1, 2, 3];
  console.log(arr.length); // 3
  ```

- **forEach**: Executes a provided function once for each array element.
  ```javascript
  arr.forEach(element => console.log(element));
  ```

- **map**: Creates a new array with the results of calling a provided function on every element.
  ```javascript
  let doubled = arr.map(num => num * 2);
  ```

- **filter**: Creates a new array with all elements that pass the test.
  ```javascript
  let even = arr.filter(num => num % 2 === 0);
  ```

- **reduce**: Executes a reducer function on each element, resulting in a single output value.
  ```javascript
  let sum = arr.reduce((total, num) => total + num);
  ```

- **find**: Returns the value of the first element that passes the test.
  ```javascript
  let found = arr.find(num => num > 1);
  ```

- **findIndex**: Returns the index of the first element that passes the test.
  ```javascript
  let index = arr.findIndex(num => num > 1);
  ```

- **some**: Tests whether at least one element in the array passes the test.
  ```javascript
  let hasEven = arr.some(num => num % 2 === 0);
  ```

- **every**: Tests whether all elements in the array pass the test.
  ```javascript
  let allEven = arr.every(num => num % 2 === 0);
  ```

- **sort**: Sorts the elements of an array.
  ```javascript
  arr.sort((a, b) => a - b);
  ```

- **reverse**: Reverses the order of the elements in an array.
  ```javascript
  arr.reverse();
  ```

- **join**: Joins all elements into a string.
  ```javascript
  let str = arr.join(", ");
  ```

- **slice**: Returns a shallow copy of a portion of an array.
  ```javascript
  let sliced = arr.slice(1, 3);
  ```

- **push**
  - The push() adds elements to the end of an array and returns the new length of the array.
  ```javascript
  arr.push(4); // [1, 2, 3, 4]
  ```

- **concat**
  - The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
  ```javascript
  let arr2 = [4, 5, 6];
  let merged = arr.concat(arr2); // [1, 2, 3, 4, 5, 6]
  ```

- **pop**: Removes the last element from an array and returns it.
  ```javascript
  let last = arr.pop(); // 3
  ```

- **indexOf**: Returns the first index at which a given element can be found.
  ```javascript
  let index = arr.indexOf(2); // 1
  ```

- **lastIndexOf**: Returns the last index at which a given element can be found.
  ```javascript
  let lastIndex = arr.lastIndexOf(2); // 1
  ```

- **fill**: Fills all the elements with a static value.
  ```javascript
  arr.fill(0); // [0, 0, 0]
  ```

- **Destructuring**: Unpacks values from arrays or properties from objects into distinct variables.
  ```javascript
  let [a, b, c] = [1, 2, 3];
  let {name, age} = {name: "John", age: 30};
  ```

### Sets

- A JavaScript Set is a collection of unique values.
- A Set is iterable, meaning that it can be looped over with a for..of loop or Array.from().
  ```javascript
  const letters = new Set(["a", "b", "c"]);
  letters.forEach(function(value) {
      console.log(value);
  });
  ```

### Classes and Objects

- **Objects**
  - **Private/Public Methods**: Use symbols or underscores for private methods.
  - **Private/Public Properties**: Define properties within the constructor.
  - **Destructuring**: Extract properties from objects.
  ```javascript
  let person = {name: "John", age: 30};
  let {name, age} = person;
  ```
  - **Keys**: Retrieve object keys.
  ```javascript
  let keys = Object.keys(person);
  ```

- **Constructor**: Special method for creating and initializing objects.
  ```javascript
  class Person {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
  }
  ```

- **this Keyword**: Refers to the current instance of the class.
  ```javascript
  class Person {
      constructor(name) {
          this.name = name;
      }
      greet() {
          console.log(this.name);
      }
  }
  ```

- **Inheritance**: Mechanism to create a new class from an existing class.
  ```javascript
  class Student extends Person {
      constructor(name, age, grade) {
          super(name, age);
          this.grade = grade;
      }
  }
  ```

- **Getters and Setters**: Accessor and mutator methods.
  ```javascript
  class Person {
      constructor(name) {
          this._name = name;
      }
      get name() {
          return this._name;
      }
      set name(newName) {
          this._name = newName;
      }
  }
  ```

- **Static Methods/Variables**: Belong to the class, not instances.
  ```javascript
  class MathUtil {
      static add(a, b) {
          return a + b;
      }
  }
  console.log(MathUtil.add(5, 3));
  ```

- **Prototypes**: Mechanism by which JavaScript objects inherit features.
  ```javascript
  function Person(name) {
      this.name = name;
  }
  Person.prototype.greet = function() {
      console.log("Hello, " + this.name);
  };
  ```

- **Built-in Classes**
  - **Array**: Methods and properties for arrays.
  - **Date**: Methods and properties for dates.
  - **Error**: Methods and properties for errors.
  - **Function**: Methods and properties for functions.
  - **Map**: Methods and properties for maps.
  - **Math**: Methods and properties for mathematical operations.
  - **Object**: Methods and properties for objects.
  - **RegExp**: Methods and properties for regular expressions.
  - **Set**: Methods and properties for sets.
  - **String**: Methods and properties for strings.
  - **JSON**: Methods and properties for JSON data.
  - **Promise**: Methods and properties for promises.

### Modules

- **Line Export**: Exporting a single line of code.
  ```javascript
  export let name = "John";
  ```

- **Named Export**: Exporting multiple variables or functions.
  ```javascript
  export { name, age, greet };
  ```

- **Default Export**: Exporting a single default variable or function.
  ```javascript
  export default function() {
      console.log("Default export");
  }
  ```

- **Import/Require**: Importing modules in your code.
  ```javascript
  import { name, age } from './module.js';
  import greet from './module.js';
  ```

### DOM

- **Document Methods**
  - **getElementById**: Returns the element with the specified ID.
  ```javascript
  document.getElementById("demo");
  ```

- **getElementsByClassName**: Returns a collection of all elements with the specified class name.
  ```javascript
  document.getElementsByClassName("demo");
  ```

- **getElementsByTagName**: Returns a collection of all elements with the specified tag name.
  ```javascript
  document.getElementsByTagName("p");
  ```

- **querySelector**: Returns the first element that matches a specified CSS selector.
  ```javascript
  document.querySelector(".demo");
  ```

- **querySelectorAll**: Returns a collection of all elements that match a specified CSS selector.
  ```javascript
  document.querySelectorAll(".demo");
  ```

- **CSS**
  - [DOM Style Reference](https://www.w3schools.com/jsref/dom_obj_style.asp)

- **Events**
  - [DOM Event Reference](https://www.w3schools.com/jsref/dom_obj_event.asp)

### AJAX

- Understanding Request/Response Sequence: Basics of client-server communication.
- **XMLHttpRequest**: JavaScript object used to interact with servers.
  ```javascript
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
      }
  };
  xhttp.open("GET", "url", true);
  xhttp.send();
  ```

- **Response Status Codes/Text**: Understanding server response codes and messages.
- **Response Headers**: Metadata about the response.
- **Response Body**: Actual content returned by the server.

### Async JavaScript

- **Callback (Hell)**: Nested callbacks leading to unreadable code.
- **Promise**: Object representing eventual completion or failure of an asynchronous operation.
  ```javascript
  let promise = new Promise((resolve, reject) => {
      if (success) {
          resolve("Success!");
      } else {
          reject("Error!");
      }
  });
  promise.then(value => console.log(value)).catch(error => console.log(error));
  ```

- **Async/Await**: Syntactic sugar over promises for writing asynchronous code.
  ```javascript
  async function fetchData() {
      try {
          let response = await fetch("url");
          let data = await response.json();
          console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  ```

### API

- **Fetch**
  ```javascript
  let response = await fetch("url");
  let data = await response.json();
  ```

- **Storage**
  - **Local Storage**
    - **setItem**: Stores a key-value pair.
    ```javascript
    localStorage.setItem("name", "John");
    ```
    - **getItem**: Retrieves the value of a key.
    ```javascript
    let name = localStorage.getItem("name");
    ```
    - **removeItem**: Removes a key.
    ```javascript
    localStorage.removeItem("name");
    ```
    - **clear**: Clears all key-value pairs.
    ```javascript
    localStorage.clear();
    ```

- **Geo Location**
  ```javascript


  navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
  });
  ```

- **History**
  ```javascript
  history.back();
  history.go(-2);
  history.forward();
  ```

- **Drag/Drop**: Will not be discussed.
- **Forms**: Will not be discussed.
- **Web Worker**: Will not be discussed.
- **Canvas/Plotly/Chart.js/Google Chart/D3.js**: Will not be discussed.

### Sample Apps to Practice JavaScript

- Weather Apps with Real Weather API
- News App with Real API
- Quiz App with Real API


## NodeJS Roadmap

- **NPM vs Yarn**
    - **Local**: Install packages for use in a single project.
        ```bash
        npm install package-name
        yarn add package-name
        ```
    - **Global**: Install packages globally to use them across multiple projects.
        ```bash
        npm install -g package-name
        yarn global add package-name
        ```

- **node_modules (git ignore)**
    - The `node_modules` folder contains all the packages installed in the project. It should be ignored in version control.
        ```plaintext
        # .gitignore
        node_modules/
        ```

- **Command Line Args**
    - Process command line arguments passed to a Node.js script.
        ```javascript
        const args = process.argv.slice(2);
        console.log(args);
        ```

- **Common Libraries/Packages**
    - **Core**
        - **fs**: File system module to read and write files.
            ```javascript
            const fs = require('fs');
            fs.readFile('file.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
            ```
        - **path**: Module to handle and transform file paths.
            ```javascript
            const path = require('path');
            const dirPath = path.join(__dirname, 'folder');
            ```
        - **util**: Utility functions.
            ```javascript
            const util = require('util');
            const setTimeoutPromise = util.promisify(setTimeout);
            setTimeoutPromise(1000).then(() => console.log('1 second later'));
            ```
        - **os**: Provides operating system-related utility methods and properties.
            ```javascript
            const os = require('os');
            console.log(os.platform());
            ```
        - **url**: Utilities for URL resolution and parsing.
            ```javascript
            const url = require('url');
            const parsedUrl = url.parse('https://example.com');
            ```

    - **Important Libraries for Everyone**
        - **UUID**: Generate unique identifiers.
            ```javascript
            const { v4: uuidv4 } = require('uuid');
            console.log(uuidv4());
            ```
        - **Nodemon / Pm2 / Forever**: Tools to keep Node.js applications running.
            ```bash
            nodemon app.js
            pm2 start app.js
            forever start app.js
            ```
        - **chalk**: Terminal string styling.
            ```javascript
            const chalk = require('chalk');
            console.log(chalk.blue('Hello world!'));
            ```
        - **JSHint**: Static code analysis tool.
            ```bash
            jshint app.js
            ```
        - **Joi/Hapi**: Object schema validation.
            ```javascript
            const Joi = require('joi');
            const schema = Joi.object({
                username: Joi.string().min(3).required(),
                password: Joi.string().min(6).required()
            });
            ```
        - **mongoose**: MongoDB object modeling tool.
            ```javascript
            const mongoose = require('mongoose');
            mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
            ```
        - **Lodash**: Utility library.
            ```javascript
            const _ = require('lodash');
            console.log(_.capitalize('hello world'));
            ```
        - **FakerJS**: Generate fake data.
            ```javascript
            const faker = require('faker');
            console.log(faker.name.findName());
            ```
        - **validator**: String validation and sanitization.
            ```javascript
            const validator = require('validator');
            console.log(validator.isEmail('foo@bar.com'));
            ```
        - **MomentJS (deprecated)**: Parse, validate, manipulate, and display dates and times.
            ```javascript
            const moment = require('moment');
            console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
            ```
        - **Axios**: Promise-based HTTP client.
            ```javascript
            const axios = require('axios');
            axios.get('https://api.example.com')
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
            ```
        - **eslint**: JavaScript linter.
            ```bash
            eslint app.js
            ```
        - **prettier**: Code formatter.
            ```bash
            prettier --write app.js
            ```
        - **Dotenv**: Loads environment variables from a `.env` file.
            ```javascript
            require('dotenv').config();
            console.log(process.env.DB_HOST);
            ```

    - **Important Libraries for Frontend**
        - **React**: JavaScript library for building user interfaces.
        - **Vue**: Progressive framework for building user interfaces.
        - **Angular**: Platform for building mobile and desktop web applications.
        - **MeteorJS**: Full-stack JavaScript platform.
        - **EmberJS**: Framework for ambitious web developers.
        - **PolymerJS**: Library for building web components.

    - **Important Libraries for Backend**
        - **Express**: Web framework for Node.js.
            - **GET, POST, PUT/PATCH, DELETE**: HTTP methods.
                ```javascript
                const express = require('express');
                const app = express();
                app.get('/', (req, res) => res.send('Hello World!'));
                app.post('/', (req, res) => res.send('Got a POST request'));
                app.put('/', (req, res) => res.send('Got a PUT request'));
                app.delete('/', (req, res) => res.send('Got a DELETE request'));
                ```
            - **Body Parser**: Middleware to parse request bodies.
                ```javascript
                const bodyParser = require('body-parser');
                app.use(bodyParser.json());
                ```
            - **Cors**: Middleware for enabling CORS.
                ```javascript
                const cors = require('cors');
                app.use(cors());
                ```
            - **Multer**: Middleware for handling `multipart/form-data`.
                ```javascript
                const multer = require('multer');
                const upload = multer({ dest: 'uploads/' });
                app.post('/upload', upload.single('file'), (req, res) => {
                    res.send('File uploaded');
                });
                ```
            - **Pug**: Template engine.
                ```javascript
                app.set('view engine', 'pug');
                app.get('/', (req, res) => {
                    res.render('index', { title: 'Hey', message: 'Hello there!' });
                });
                ```
            - **EJS**: Embedded JavaScript templates.
                ```javascript
                app.set('view engine', 'ejs');
                app.get('/', (req, res) => {
                    res.render('index', { title: 'Hey', message: 'Hello there!' });
                });
                ```

        - **jsonwebtoken**: JSON Web Token implementation.
            ```javascript
            const jwt = require('jsonwebtoken');
            const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            ```
        - **bcrypt**: Library to hash passwords.
            ```javascript
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            bcrypt.hash('myPassword', saltRounds, (err, hash) => {
                console.log(hash);
            });
            ```
        - **Nodemailer**: Module for sending emails.
            ```javascript
            const nodemailer = require('nodemailer');
            const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'your-email@gmail.com', pass: 'your-password' } });
            const mailOptions = { from: 'your-email@gmail.com', to: 'receiver-email@gmail.com', subject: 'Subject', text: 'Hello World!' };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            ```
        - **NestJS**: Framework for building efficient, reliable, and scalable server-side applications.

        - **Database**
            - **Mongoose**: MongoDB object modeling tool.
                ```javascript
                const mongoose = require('mongoose');
                mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
                ```
            - **MySQL**: Node.js client for MySQL.
                ```javascript
                const mysql = require('mysql');
                const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'test' });
                connection.connect();
                connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
                    if (error) throw error;
                    console.log('The solution is: ', results[0].solution);
                });
                connection.end();
                ```

        - **Socket.io**: Real-time communication library (chat apps, may not be discussed).
        - **GraphQL**: Query language for APIs and a runtime for executing those queries (alternative to express-based RESTful APIs).

        - **Testing**
            - **Jest**: JavaScript testing framework.
                ```javascript
                test('adds 1 + 2 to equal 3', () => {
                    expect(1 + 2).toBe(3);
                });
                ```
            - **Cypress**: End-to-end testing framework.
            - **NightwatchJS**: End-to-end testing framework.
            - **Mocha**: Test framework.
            - **Chai**: Assertion library.
            - **Puppeteer**: Headless Chrome Node.js API.
            - **TestCafe**: End-to-end testing framework.

        - **Scraping**
            - **Cheerio**: jQuery for the server.
                ```javascript
                const cheerio = require('cheerio');
                const $ = cheerio.load('<h2 class="title">Hello world</h2>');
                $('h2.title').text('Hello there!');
                $('h2').addClass('welcome');
                ```
            - **Puppeteer**: Headless Chrome Node.js API.

        - **Webpack**: Module bundler.
        - **Babel**: JavaScript compiler.

        - More libraries: [JavaScript Libraries](https://kinsta.com/blog/javascript-libraries/)


## React JS Roadmap

### React JS Basics

- **JSX**
    - Syntax extension for JavaScript that looks similar to XML or HTML.
    - Allows you to write HTML directly within JavaScript.
    ```jsx
    const element = <h1>Hello, world!</h1>;
    ```

- **State**
    - Object that determines how that component renders & behaves.
    - Managed within the component (local state).
    ```jsx
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count: 0 };
        }
    }
    ```

- **Props**
    - Short for properties; read-only attributes used to pass data to components.
    - Passed from parent to child component.
    ```jsx
    const Greeting = (props) => <h1>Hello, {props.name}</h1>;
    ```

- **Lifecycle Methods**
    - Special methods in class components that get called at different stages of a component's lifecycle.
    - **componentDidMount**: Executed after the first rendering.
        ```jsx
        componentDidMount() {
            console.log('Component did mount');
        }
        ```
    - **componentDidUpdate**: Executed after updates are made to the DOM.
        ```jsx
        componentDidUpdate(prevProps, prevState) {
            console.log('Component did update');
        }
        ```
    - **componentWillUnmount**: Executed just before the component is removed from the DOM.
        ```jsx
        componentWillUnmount() {
            console.log('Component will unmount');
        }
        ```

- **Components**
    - Building blocks of a React application.
    - **Class Components**: ES6 classes that extend `React.Component`.
        ```jsx
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
        ```
    - **Functional Components**: Functions that accept props and return JSX.
        ```jsx
        const Welcome = (props) => <h1>Hello, {props.name}</h1>;
        ```

- **Event Handling**
    - Handling events such as clicks, form submissions, etc.
    - Use camelCase for event names and pass the event handler as a function.
    ```jsx
    function handleClick() {
        alert('Button clicked!');
    }
    <button onClick={handleClick}>Click me</button>
    ```

- **Forms**
    - Handling form inputs and submissions.
    - Use controlled components to manage form state.
    ```jsx
    class MyForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({ value: event.target.value });
        }

        handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
    }
    ```

- **Conditional Rendering**
    - Render different components or elements based on a condition.
    ```jsx
    const Greeting = (props) => {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <h1>Welcome back!</h1>;
        }
        return <h1>Please sign up.</h1>;
    }
    ```

- **Lists**
    - Rendering lists of elements using the `map()` function.
    - Each list item should have a unique `key` prop.
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    ```

### React JS Intermediate

- **Higher Order Components (HOCs)**
    - Functions that take a component and return a new component.
    - Used for reusing component logic.
    ```jsx
    function withLogging(WrappedComponent) {
        return class extends React.Component {
            componentDidMount() {
                console.log('Component mounted');
            }
            render() {
                return <WrappedComponent {...this.props} />;
            }
        }
    }
    ```

- **Controlled vs Uncontrolled Components**
    - **Controlled Components**: Components that manage their own state via props.
    ```jsx
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    ```
    - **Uncontrolled Components**: Components that manage their state internally via refs.
    ```jsx
    <input type="text" ref={input => this.input = input} />
    ```

- **Memo**
    - Higher order component used to optimize performance by memoizing component results.
    ```jsx
    const MemoizedComponent = React.memo(MyComponent);
    ```

- **Hooks**
    - Functions that let you use state and other React features in functional components.
    - **useState**: Hook for adding state to functional components.
        ```jsx
        const [count, setCount] = useState(0);
        ```
    - **useEffect**: Hook for performing side effects in functional components.
        ```jsx
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        }, [count]);
        ```
    - **useRef**: Hook for accessing DOM elements or keeping a mutable object.
        ```jsx
        const inputEl = useRef(null);
        ```
    - **useHistory**: Hook for navigation in React Router.
        ```jsx
        const history = useHistory();
        ```
    - **Custom Hooks**: Reusable hooks that encapsulate logic.
        ```jsx
        function useCustomHook() {
            const [value, setValue] = useState('');
            return [value, setValue];
        }
        ```

- **React Routers**
    - Library for routing in React applications.
    ```jsx
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>
    ```

### React JS Advanced

- **Redux**
    - State management library for JavaScript applications.
    ```jsx
    import { createStore } from 'redux';
    const store = createStore(reducer);
    ```

    - **Thunk**
        - Middleware for handling asynchronous actions in Redux.
        ```javascript
        function fetchData() {
            return (dispatch) => {
                fetch('https://api.example.com/data')
                    .then(response => response.json())
                    .then(data => dispatch({ type: 'DATA_LOADED', payload: data }));
            };
        }
        ```

- **Context API**
    - Provides a way to pass data through the component tree without having to pass props down manually at every level.
    ```jsx
    const MyContext = React.createContext();
    const App = () => (
        <MyContext.Provider value={/* some value */}>
            <MyComponent />
        </MyContext.Provider>
    );
    ```

- **Next JS**
    - React framework for server-rendered applications.
    ```jsx
    import Link from 'next/link';
    const Index = () => (
        <div>
            <Link href="/about">
                <a>About Page</a>
            </Link>
        </div>
    );
    ```

## React Native Roadmap
- Components
- State
- Lifecycle
- Props
- Events
- Styles
- Navigation
- Push Notifications
- Animations
- Networking
- Storage
- WebSockets
- WebRTC
- WebGL
- Geolocation
- Camera
- File System
- Media
- Permissions

## DevOps Roadmap

- **GitHub**
    - A web-based platform for version control and collaboration.
    - Provides Git repository hosting and several collaboration features.
    ```bash
    git clone https://github.com/user/repo.git
    git add .
    git commit -m "message"
    git push origin main
    ```

- **Slack**
    - A collaboration hub that connects people with the information they need.
    - Channels for communication, integration with other tools, and bots for automation.

- **GitHub Actions**
    - Automate, customize, and execute software development workflows within your repository.
    - Define workflows using YAML files.
    ```yaml
    name: CI
    on: [push]
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - name: Run a one-line script
            run: echo Hello, world!
    ```

- **CI/CD Pipeline**
    - Continuous Integration and Continuous Deployment/Delivery.
    - Automatically build, test, and deploy code changes.
    - Integrate with tools like Jenkins, CircleCI, TravisCI, etc.

- **Jenkins**
    - Open-source automation server.
    - Used to build, deploy, and automate projects.
    - Define build pipelines with Jenkinsfile.
    ```groovy
    pipeline {
        agent any
        stages {
            stage('Build') {
                steps {
                    echo 'Building...'
                }
            }
            stage('Test') {
                steps {
                    echo 'Testing...'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying...'
                }
            }
        }
    }
    ```

- **Docker**
    - Platform for developing, shipping, and running applications in containers.
    - Containers are lightweight, portable, and ensure consistency across environments.
    ```bash
    docker build -t myapp .
    docker run -p 4000:80 myapp
    ```

- **Kubernetes**
    - Open-source system for automating the deployment, scaling, and management of containerized applications.
    - Manages clusters of containers.
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
    ```

- **Heroku**
    - Cloud platform for building, running, and operating applications entirely in the cloud.
    - Simple deployment via Git.
    ```bash
    git push heroku main
    ```

- **AWS (Amazon Web Services)**
    - Comprehensive cloud computing platform by Amazon.
    - Provides services like computing power, storage, and databases.
    ```bash
    aws s3 cp myfile.txt s3://mybucket/
    ```

- **Azure**
    - Microsoft's cloud computing service.
    - Provides a range of cloud services, including analytics, storage, and networking.
    ```bash
    az storage account create --name myaccount --resource-group mygroup --location westus
    ```

- **Google Cloud**
    - Suite of cloud computing services by Google.
    - Offers hosting, computing, and machine learning capabilities.
    ```bash
    gcloud compute instances create my-instance --zone=us-central1-a
    ```

- **Firebase**
    - Google's platform for mobile and web application development.
    - Provides services like real-time databases, authentication, and hosting.
    ```javascript
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    const db = firebase.firestore();
    ```

- **Bitbucket**
    - Git repository management solution by Atlassian.
    - Integrates with Jira and Trello for project management.
    ```bash
    git remote add origin https://bitbucket.org/user/repo.git
    git push -u origin main
    ```

- **Jira**
    - Project management tool for agile teams.
    - Helps in tracking issues, bugs, and tasks.
    - Integrates with Confluence, Bitbucket, and other tools.

- **Trello**
    - Visual collaboration tool to create and manage tasks and projects.
    - Uses boards, lists, and cards for organizing work.

- **Confluence**
    - Collaboration tool for creating, sharing, and managing content and documents.
    - Integrates with Jira for project documentation and knowledge base.

- **Vercel**
    - Cloud platform for static sites and Serverless Functions.
    - Provides instant deployments, preview URLs, and custom domains.
