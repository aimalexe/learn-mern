# Cascading Style Sheet Lectures

## Content
- [Cascading Style Sheet Lectures](#cascading-style-sheet-lectures)
  - [Content](#content)
- [Lecture 1:](#lecture-1)
  - [What is CSS?](#what-is-css)
  - [Basic Syntax and Selectors](#basic-syntax-and-selectors)
  - [Applying CSS](#applying-css)
    - [Colors](#colors)
    - [Font Related Properties](#font-related-properties)
    - [Text Related Properties](#text-related-properties)
    - [Widths and Heights](#widths-and-heights)
    - [Backgrounds](#backgrounds)
    - [Margins](#margins)
    - [Paddings](#paddings)
    - [Borders](#borders)
- [Lecture 2: CSS Position, Flexbox, and Layouts](#lecture-2-css-position-flexbox-and-layouts)
  - [CSS Positioning: Understanding the Basics](#css-positioning-understanding-the-basics)
    - [Types of CSS Positioning and Their Usage](#types-of-css-positioning-and-their-usage)
    - [Hands-On Exercise](#hands-on-exercise)
  - [Flexbox: Understanding the Basics](#flexbox-understanding-the-basics)
    - [Where to Use Flexbox?](#where-to-use-flexbox)
    - [Syntax and Structure](#syntax-and-structure)
    - [Container(Parent) Properties](#containerparent-properties)
    - [Item (Child) Properties](#item-child-properties)
    - [Practical Example](#practical-example)
      - [Example 1: Flexbox with Wrapping Items and different Directions](#example-1-flexbox-with-wrapping-items-and-different-directions)
    - [Recap](#recap)
  - [CSS Float: Understanding the Basics](#css-float-understanding-the-basics)
    - [Where to Use Float](#where-to-use-float)
    - [Syntax and Structure](#syntax-and-structure-1)
    - [Clearing Floats](#clearing-floats)
    - [Practical Examples](#practical-examples)
      - [Example 1: Wrapping Text Around an Image](#example-1-wrapping-text-around-an-image)
      - [Example 2: Creating a Two-Column Layout](#example-2-creating-a-two-column-layout)
      - [Example 3: Clearing Floats](#example-3-clearing-floats)
    - [Recap](#recap-1)
    - [Resources for Further Learning](#resources-for-further-learning)
- [Lecture 3: CSS Grids, Pseudo Classes and Elements, Intermediate Selectors](#lecture-3-css-grids-pseudo-classes-and-elements-intermediate-selectors)
  - [CSS Grid Layout: Basics](#css-grid-layout-basics)
    - [Where to Use Grid?](#where-to-use-grid)
    - [Syntax and Structure](#syntax-and-structure-2)
    - [Container (Parent) Properties](#container-parent-properties)
    - [Item (Child) Properties](#item-child-properties-1)
    - [Practical Example](#practical-example-1)
      - [Example 1: Basic Grid Layout](#example-1-basic-grid-layout)
    - [Recap](#recap-2)
  - [CSS Pseudo-Classes and Pseudo-Elements: Understanding the Basics](#css-pseudo-classes-and-pseudo-elements-understanding-the-basics)
    - [Pseudo-Classes and Their Usage](#pseudo-classes-and-their-usage)
    - [Pseudo-Elements and Their Usage](#pseudo-elements-and-their-usage)
    - [Hands-On Exercise](#hands-on-exercise-1)
  - [CSS Selectors: Intermediate](#css-selectors-intermediate)
    - [Types of CSS Selectors and Their Usage](#types-of-css-selectors-and-their-usage)
    - [Hands-On Exercise](#hands-on-exercise-2)
  - [Resources (Lec 3) for Further Learning](#resources-lec-3-for-further-learning)
- [Lecture 4: CSS Media Queries, Animations, Transitions, and Transforms](#lecture-4-css-media-queries-animations-transitions-and-transforms)
  - [CSS Media Queries: Basics](#css-media-queries-basics)
    - [What Are Media Queries?](#what-are-media-queries)
    - [Syntax of Media Queries](#syntax-of-media-queries)
    - [Types of Media Queries and Their Usage](#types-of-media-queries-and-their-usage)
    - [Hands-On Exercise](#hands-on-exercise-3)
  - [CSS Animations, Transitions, and Transforms: Comprehensive Guide](#css-animations-transitions-and-transforms-comprehensive-guide)
    - [CSS Transitions](#css-transitions)
      - [Syntax](#syntax)
      - [Properties](#properties)
      - [Example](#example)
    - [CSS Transforms](#css-transforms)
      - [Syntax](#syntax-1)
      - [Transformation Functions](#transformation-functions)
      - [Example](#example-1)
    - [CSS Animations](#css-animations)
      - [Syntax](#syntax-2)
      - [Properties](#properties-1)
      - [Example](#example-2)
    - [Hands-On Exercise](#hands-on-exercise-4)
  - [Resources (Lec 4) for Further Learning](#resources-lec-4-for-further-learning)

# Lecture 1:
## What is CSS?

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS separates content from presentation, allowing you to change the look and feel of a website without altering the underlying HTML.

## Basic Syntax and Selectors
CSS syntax consists of selectors and declaration blocks. A selector points to the HTML element you want to style. A declaration block contains one or more declarations separated by semicolons.

```css
selector {
    property: value; /* a declaration or rule*/
}
```
selectors:
- element selector
- class selector
- id selector
- universal selector
- grouping selector



## Applying CSS
CSS can be applied in three ways: inline, internal, and external.

1. Inline CSS: Used to apply a unique style to a single HTML element. Uses the style attribute within the HTML tag. `<p style="color: red;">This is an inline CSS example.</p>`

2. Internal CSS: Defined within a `<style>` tag in the `<head>` section of an HTML document. Useful for styling a single document.

3. External CSS: Defined in an external file with a `.css` extension. Linked to the HTML document using the `<link>` tag. Allows for styling multiple pages. `<link rel="stylesheet" href="path/to/styles.css">`

### Colors 
```css 
body {
    background-color: #f0f0f0; /* Sets the background color of the page */
    color: #333; /* Sets the text color */
}
h1 {
    color: #4CAF50; /* Sets the text color of h1 elements */
}
```

### Font Related Properties 
```css
p {
    font-family: Arial, sans-serif; /* Sets the font family */
    font-size: 16px; /* Sets the font size */
    font-weight: bold; /* Sets the font weight */
    font-style: italic; /* Sets the font style */
    font-variant: small-caps; /* Sets the font variant */
}
```
### Text Related Properties 
```css
p {
    text-align: center; /* Aligns the text to the center */
    text-decoration: underline; /* Adds underline to the text */
    text-transform: uppercase; /* Transforms text to uppercase */
    line-height: 1.5; /* Sets the line height */
    letter-spacing: 2px; /* Sets the space between letters */
    word-spacing: 5px; /* Sets the space between words */
}
```
### Widths and Heights
```css
div {
    width: 50%; /* Sets the width of the div */
    height: 200px; /* Sets the height of the div */
    max-width: 100%; /* Sets the maximum width of the div */
    min-width: 200px; /* Sets the minimum width of the div */
    max-height: 500px; /* Sets the maximum height of the div */
    min-height: 100px; /* Sets the minimum height of the div */
}
```
### Backgrounds
```css
div {
    background-color: #f0f0f0; /* Sets the background color of the div */
    background-image: url('background.jpg'); /* Sets the background image of the div */
    background-repeat: no-repeat; /* Sets the background to not repeat */
    background-size: cover; /* Sets the background size to cover the div */
    background-position: center; /* Centers the background image */
}
```
### Margins
```css
div {
    margin: 20px; /* Sets the margin of the div */
    margin-top: 10px; /* Sets the top margin */
    margin-right: 15px; /* Sets the right margin */
    margin-bottom: 20px; /* Sets the bottom margin */
    margin-left: 25px; /* Sets the left margin */
}
```

### Paddings
```css
div {
    padding: 20px; /* Sets the padding of the div */
    padding-top: 10px; /* Sets the top padding */
    padding-right: 15px; /* Sets the right padding */
    padding-bottom: 20px; /* Sets the bottom padding */
    padding-left: 25px; /* Sets the left padding */
}
```

### Borders 
```css 
div {
    border: 1px solid #000; /* Sets the border of the div */
    border-width: 2px; /* Sets the width of the border */
    border-style: dashed; /* Sets the style of the border */
    border-color: red; /* Sets the color of the border */
    border-radius: 5px; /* Sets the radius of the border corners */
}
```

# Lecture 2: CSS Position, Flexbox, and Layouts

## CSS Positioning: Understanding the Basics

CSS positioning is used to control the layout and positioning of elements on a webpage. It allows you to move elements to specific locations within the document or relative to other elements. Understanding positioning is crucial for creating complex layouts and ensuring elements are placed exactly where you want them.

### Types of CSS Positioning and Their Usage

1. **Static Positioning**
   - **Default Value**: Every element is positioned according to the normal flow of the document.
   - **When to Use**: Most basic and common positioning method, used when no specific positioning is required.
   - **CSS Declaration**: Not necessary to explicitly declare as it is the default value.
     ```css
     .static {
       position: static;
     }
     ```

2. **Relative Positioning**
   - **Definition**: Elements are positioned relative to their normal position.
   - **When to Use**: Useful when you want to move an element slightly from its original position without affecting the layout of other elements.
   - **CSS Declaration**:
     ```css
     .relative {
       position: relative;
       top: 10px;   /* Moves element 10px down */
       left: 20px;  /* Moves element 20px right */
     }
     ```
   - **Example**: A box moved 10px down and 20px to the right from its original position.

3. **Absolute Positioning**
   - **Definition**: Elements are positioned relative to the nearest positioned ancestor (an ancestor with a position other than `static`). If no such ancestor exists, it is positioned relative to the initial containing block (usually the viewport).
   - **When to Use**: When you need to place an element at a specific location regardless of other elements.
   - **CSS Declaration**:
     ```css
     .absolute {
       position: absolute;
       top: 50px;   /* 50px from the top of the nearest positioned ancestor */
       right: 30px; /* 30px from the right of the nearest positioned ancestor */
     }
     ```
   - **Example**: A box positioned 50px from the top and 30px from the right of its container.

4. **Fixed Positioning**
   - **Definition**: Elements are positioned relative to the viewport and do not move when the page is scrolled.
   - **When to Use**: For elements that should remain visible even when the user scrolls the page, like headers or footers.
   - **CSS Declaration**:
     ```css
     .fixed {
       position: fixed;
       bottom: 0;  /* 0px from the bottom of the viewport */
       right: 0;   /* 0px from the right of the viewport */
     }
     ```
   - **Example**: A footer that sticks to the bottom-right corner of the screen even when scrolling.

5. **Sticky Positioning**
   - **Definition**: Elements switch between relative and fixed positioning depending on the scroll position. They are treated as relative until they reach a specific scroll position, then they become fixed.
   - **When to Use**: For elements that should remain within the viewport while scrolling through a section, such as a sticky header that only sticks within a specific container.
   - **CSS Declaration**:
     ```css
     .sticky {
       position: sticky;
       top: 0;  /* Sticks to the top of its container */
     }
     ```
   - **Example**: A header that sticks to the top of the page while scrolling within its section.

### Hands-On Exercise

Create a simple HTML page with various elements using different positioning properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .static {
      position: static;
      background-color: lightgray;
      padding: 10px;
      margin: 10px;
    }
    .relative {
      position: relative;
      top: 10px;
      left: 20px;
      background-color: lightblue;
      padding: 10px;
      margin: 10px;
    }
    .absolute {
      position: absolute;
      top: 50px;
      right: 30px;
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
    }
    .fixed {
      position: fixed;
      bottom: 0;
      right: 0;
      background-color: lightcoral;
      padding: 10px;
      margin: 10px;
    }
    .sticky {
      position: sticky;
      top: 0;
      background-color: lightyellow;
      padding: 10px;
      margin: 10px;
    }
  </style>
  <title>CSS Positioning</title>
</head>
<body>
  <div class="static">Static Position</div>
  <div class="relative">Relative Position</div>
  <div class="absolute">Absolute Position</div>
  <div class="fixed">Fixed Position</div>
  <div class="sticky">Sticky Position</div>
</body>
</html>
```

## Flexbox: Understanding the Basics

Flexbox, short for Flexible Box Layout, is a CSS layout module designed to distribute space along a container’s main axis and align items within the container. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown and/or dynamic.

### Where to Use Flexbox?

Flexbox is ideal for creating flexible and responsive layouts without the need for float or positioning hacks. It's particularly useful for:
- Aligning items vertically and horizontally within a container.
- Distributing space within items in a container.
- Reordering items within a container.

### Syntax and Structure

A flexbox layout consists of a flex container and flex items. The container uses `display: flex` or `display: inline-flex` to define a flex context for its items.

```css
.container {
  display: flex; /* or display: inline-flex; */
}
```

### Container(Parent) Properties

1. **`flex-direction`**
   - Defines the main axis and the direction of flex items.
   - Values: 
     - `row` (default): left to right in a horizontal direction.
     - `row-reverse`: right to left in a horizontal direction.
     - `column`: top to bottom in a vertical direction.
     - `column-reverse`: bottom to top in a vertical direction.
   ```css
   .container {
     flex-direction: row;
   }
   ```

2. **`flex-wrap`**
   - Specifies whether the flex items should wrap or not.
   - Values:
     - `nowrap` (default): single-line, no wrapping.
     - `wrap`: multi-line, wraps items if necessary.
     - `wrap-reverse`: multi-line, wraps items in reverse order.
   ```css
   .container {
     flex-wrap: wrap;
   }
   ```

3. **`flex-flow`**
   - A shorthand for `flex-direction` and `flex-wrap`.
   ```css
   .container {
     flex-flow: row wrap;
   }
   ```

4. **`justify-content`**
   - Aligns flex items along the main axis.
   - Values:
     - `flex-start` (default): items are packed at the start of the container.
     - `flex-end`: items are packed at the end of the container.
     - `center`: items are centered along the main axis.
     - `space-between`: items are evenly distributed with the first item at the start and the last item at the end.
     - `space-around`: items are evenly distributed with equal space around them.
     - `space-evenly`: items are distributed with equal space between them.
   ```css
   .container {
     justify-content: center;
   }
   ```

5. **`align-items`**
   - Aligns flex items along the cross axis.
   - Values:
     - `stretch` (default): items stretch to fill the container.
     - `flex-start`: items are aligned at the start of the cross axis.
     - `flex-end`: items are aligned at the end of the cross axis.
     - `center`: items are centered along the cross axis.
     - `baseline`: items are aligned along their baseline.
   ```css
   .container {
     align-items: center;
   }
   ```

6. **`align-content`**
   - Aligns flex lines within a flex container with multiple lines.
   - Values:
     - `stretch` (default): lines stretch to fill the container.
     - `flex-start`: lines are packed at the start of the container.
     - `flex-end`: lines are packed at the end of the container.
     - `center`: lines are centered in the container.
     - `space-between`: lines are evenly distributed with the first line at the start and the last line at the end.
     - `space-around`: lines are evenly distributed with equal space around them.
     - `space-evenly`: lines are evenly distributed with equal space between them.
   ```css
   .container {
     align-content: space-between;
   }
   ```

### Item (Child) Properties

1. **`order`**
   - Defines the order of the flex items. Items with lower order values appear first.
   ```css
   .item {
     order: 1;
   }
   ```

2. **`flex-grow`**
   - Defines the ability of a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.
   - Default value: 0 (do not grow).
   ```css
   .item {
     flex-grow: 2; /* This item will grow twice as much as others with flex-grow: 1 */
   }
   ```

3. **`flex-shrink`**
   - Defines the ability of a flex item to shrink if necessary. It accepts a unitless value that serves as a proportion.
   - Default value: 1 (shrink).
   ```css
   .item {
     flex-shrink: 1; /* This item will shrink equally as others */
   }
   ```

4. **`flex-basis`**
   - Defines the initial size of the flex item before space is distributed according to flex factors.
   - Accepts values like auto, px, %, etc.
   ```css
   .item {
     flex-basis: 100px; /* This item will start with 100px width/height before growing or shrinking */
   }
   ```

5. **`flex`**
   - A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   ```css
   .item {
     flex: 1 1 100px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 100px */
   }
   ```

6. **`align-self`**
   - Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
   - Values:
     - `auto` (default): inherits from `align-items` of the container.
     - `flex-start`: aligns at the start of the cross axis.
     - `flex-end`: aligns at the end of the cross axis.
     - `center`: centers along the cross axis.
     - `baseline`: aligns along the baseline.
     - `stretch`: stretches to fill the container.
   ```css
   .item {
     align-self: flex-end;
   }
   ```

### Practical Example

#### Example 1: Flexbox with Wrapping Items and different Directions

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      flex-direction: column; /* Try changing this to row, row-reverse, column-reverse */
      flex-wrap: wrap;
      justify-content: center;
      background-color: #f0f0f0;
    }
    .item {
      background-color: lightcoral;
      padding: 20px;
      margin: 10px;
      width: 150px;
      height: 100px;
    }
  </style>
  <title>Flexbox Wrap</title>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```

### Recap

- **Flexbox Container Properties**: `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, `align-content`.
- **Flexbox Item Properties**: `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex`, `align-self`.

## CSS Float: Understanding the Basics

The float property in CSS is used to position an element to the left or right of its container, allowing text and inline elements to wrap around it. Initially, float was intended for use with images but is now also used for creating layouts.

### Where to Use Float

Float is often used to:
- Wrap text around images.
- Create multi-column layouts (though this usage is now largely replaced by Flexbox and Grid).
- Position elements side by side.

### Syntax and Structure

The float property accepts the following values:

1. **`left`**
   - The element floats to the left of its container, allowing inline content to wrap around its right side.
   ```css
   .float-left {
     float: left;
   }
   ```

2. **`right`**
   - The element floats to the right of its container, allowing inline content to wrap around its left side.
   ```css
   .float-right {
     float: right;
   }
   ```

3. **`none`**
   - The element does not float. It remains in its normal position in the flow of the document.
   ```css
   .no-float {
     float: none;
   }
   ```

4. **`inherit`**
   - The element inherits the float value of its parent.
   ```css
   .inherit-float {
     float: inherit;
   }
   ```
### Clearing Floats

When an element is floated, it is taken out of the normal document flow, which can cause parent elements to collapse. To handle this, you need to clear the float.

1. **`clear`**
   - The clear property specifies whether an element can be positioned next to or below floating elements.
   - Values:
     - `left`: No floating elements allowed on the left side.
     - `right`: No floating elements allowed on the right side.
     - `both`: No floating elements allowed on either the left or right side.
     - `none` (default): Allows floating elements on both sides.
   ```css
   .clear-left {
     clear: left;
   }
   .clear-right {
     clear: right;
   }
   .clear-both {
     clear: both;
   }
   ```

2. **Clearing Floats with a Clearfix**
   - A common method to clear floats is using a clearfix. This involves adding a pseudo-element to clear the floats.
   ```css
   .clearfix::after {
     content: "";
     clear: both;
     display: table;
   }
   ```

### Practical Examples

#### Example 1: Wrapping Text Around an Image

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .float-left {
      float: left;
      margin: 10px;
    }
  </style>
  <title>Float Example</title>
</head>
<body>
  <img src="https://via.placeholder.com/150" class="float-left" alt="Placeholder Image">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</body>
</html>
```

#### Example 2: Creating a Two-Column Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .column {
      width: 45%;
      margin: 2.5%;
      float: left;
      background-color: lightblue;
      padding: 20px;
    }
    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
  </style>
  <title>Two-Column Layout</title>
</head>
<body>
  <div class="clearfix">
    <div class="column">Column 1 content...</div>
    <div class="column">Column 2 content...</div>
  </div>
</body>
</html>
```

#### Example 3: Clearing Floats

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .float-left {
      float: left;
      width: 50%;
      background-color: lightgreen;
      padding: 20px;
      margin: 10px 0;
    }
    .clear-both {
      clear: both;
    }
  </style>
  <title>Clear Float</title>
</head>
<body>
  <div class="float-left">Left Floated Element</div>
  <div class="clear-both"></div>
  <p>Text after the cleared float element.</p>
</body>
</html>
```

### Recap

- **Float Property Values**: `left`, `right`, `none`, `inherit`.
- **Clear Property Values**: `left`, `right`, `both`, `none`.
- **Common Issues**: Parent elements collapsing when their children are floated, which can be resolved using the clear property or clearfix hack.

### Resources for Further Learning
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs: Position](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [Internetting Is Hard: Float tutorial](https://internetingishard.netlify.app/html-and-css/floats/)


# Lecture 3: CSS Grids, Pseudo Classes and Elements, Intermediate Selectors
## CSS Grid Layout: Basics

CSS Grid Layout, commonly known as Grid, is a two-dimensional layout system in CSS that offers control over both rows and columns. This system enables developers to create complex designs that are both visually compelling and dynamically responsive.

### Where to Use Grid?

Grid is perfect for designing layouts that require a more structured approach than Flexbox can offer. It excels in scenarios such as:
- Creating multi-dimensional layouts with both rows and columns.
- Aligning content perfectly in both dimensions.
- Building more complex web designs that involve overlapping content.

### Syntax and Structure

A Grid layout involves a container (the grid container) and the items within it (the grid items). To establish a grid context, the container must be set to `display: grid` or `display: inline-grid`.

```css
.container {
  display: grid;
}
```

### Container (Parent) Properties

1. **`grid-template-columns`** and **`grid-template-rows`**
   - Define the size of the columns and rows in a grid layout.
   - Values can be specific sizes (like `px`, `%`, `fr`) or a repeat function.
   ```css
   .container {
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: 100px auto 200px;
   }
   ```

2. **`grid-column-gap`** and **`grid-row-gap`** (Shorthand: **`grid-gap`**)
   - Specifies the spacing between columns and rows.
   - Accepts size values like `px`, `em`, `%`, etc.
   ```css
   .container {
     grid-gap: 10px 15px;
   }
   ```

3. **`grid-template-areas`**
   - Defines a grid template by referencing the names of the areas which are specified on grid items.
   - Values are the names given to grid items.
   ```css
   .container {
     grid-template-areas:
       "header header header"
       "main main sidebar"
       "footer footer footer";
   }
   ```

4. **`justify-items`** and **`align-items`**
   - Aligns grid items along the row (justify) and column (align) axes respectively.
   - Common values include `start`, `end`, `center`, `stretch` (default).
   ```css
   .container {
     justify-items: start;
     align-items: end;
   }
   ```

5. **`justify-content`** and **`align-content`**
   - Aligns the entire grid within the grid container.
   - Options include `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, `space-evenly`.
   ```css
   .container {
     justify-content: space-between;
     align-content: center;
   }
   ```

### Item (Child) Properties

1. **`grid-column`** and **`grid-row`**
   - Defines where a grid item is placed in the grid layout.
   - Values specify start and end lines.
   ```css
   .item {
     grid-column: 1 / 3; /* Spans from line 1 to line 3 */
     grid-row: 2 / 4;
   }
   ```

2. **`grid-area`**
   - Specifies a grid item’s location and size within the grid by referring to the naming template defined by `grid-template-areas`.
   ```css
   .item {
     grid-area: header;
   }
   ```

3. **`justify-self`** and **`align-self`**
   - Aligns a grid item inside its cell along the row (justify) or column (align) axis.
   - Options include `auto`, `start`, `end`, `center`, `stretch`.
   ```css
   .item {
     justify-self: center;
     align-self: stretch;
   }
   ```

### Practical Example

#### Example 1: Basic Grid Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      background-color: #f0f0f0;
    }
    .item {
      background-color: lightblue;
      padding: 20px;
      border: 1px solid black;
    }
  </style>
  <title>Basic Grid Layout</title>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

### Recap

- **Grid Container Properties**: `grid-template-columns`, `grid-template-rows`, `grid-gap`, `grid-template-areas`, `justify-items`, `align-items`, `justify-content`, `align-content`.
- **Grid Item Properties**: `grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`.

## CSS Pseudo-Classes and Pseudo-Elements: Understanding the Basics

CSS pseudo-classes and pseudo-elements are used to style elements based on their state or position in the DOM. These tools allow for more refined and dynamic styling, making your webpages more interactive and visually appealing.

### Pseudo-Classes and Their Usage

1. **`:hover` Pseudo-Class**
   - **Definition**: Applies styles when the user hovers over an element.
   - **When to Use**: To change the appearance of elements when hovered over, such as links or buttons.
   - **CSS Declaration**:
     ```css
     a:hover {
       color: red;  /* Changes text color to red on hover */
     }
     ```
   - **Example**: A link that changes color when hovered over.

2. **`:active` Pseudo-Class**
   - **Definition**: Applies styles when an element is activated (e.g., clicked).
   - **When to Use**: To provide visual feedback when an element is clicked.
   - **CSS Declaration**:
     ```css
     button:active {
       background-color: blue;  /* Changes background color to blue on click */
     }
     ```
   - **Example**: A button that changes color when clicked.

3. **`:focus` Pseudo-Class**
   - **Definition**: Applies styles when an element gains focus.
   - **When to Use**: To highlight input fields or links when they are focused.
   - **CSS Declaration**:
     ```css
     input:focus {
       border: 2px solid green;  /* Adds a green border on focus */
     }
     ```
   - **Example**: An input field that highlights when focused.

4. **`:nth-child()` Pseudo-Class**
   - **Definition**: Applies styles to elements based on their position among siblings.
   - **When to Use**: To style specific elements in a list or collection.
   - **CSS Declaration**:
     ```css
     li:nth-child(odd) {
       background-color: lightgray;  /* Styles odd list items */
     }
     ```
   - **Example**: Alternating background colors for list items.

5. **`:not()` Pseudo-Class**
   - **Definition**: Applies styles to elements that do not match a certain selector.
   - **When to Use**: To exclude specific elements from a style rule.
   - **CSS Declaration**:
     ```css
     p:not(.highlight) {
       color: gray;  /* Styles paragraphs that do not have the class "highlight" */
     }
     ```
   - **Example**: Changing text color for paragraphs that do not have a specific class.

6. **`:visited` Pseudo-Class**
   - **Definition**: Applies styles to visited links.
   - **When to Use**: To distinguish between visited and unvisited links.
   - **CSS Declaration**:
     ```css
     a:visited {
       color: purple;  /* Changes color of visited links to purple */
     }
     ```
   - **Example**: A link that changes color after being clicked.

7. **`:checked` Pseudo-Class**
   - **Definition**: Applies styles to checked form elements (e.g., checkboxes, radio buttons).
   - **When to Use**: To style elements based on their checked state.
   - **CSS Declaration**:
     ```css
     input:checked {
       background-color: yellow;  /* Changes background color of checked elements */
     }
     ```
   - **Example**: A checkbox or radio button that changes color when checked.

8. **`:disabled` Pseudo-Class**
   - **Definition**: Applies styles to disabled form elements.
   - **When to Use**: To visually indicate that an element is disabled and not interactive.
   - **CSS Declaration**:
     ```css
     input:disabled {
       background-color: lightgray;  /* Changes background color of disabled elements */
     }
     ```
   - **Example**: A disabled input field that changes color.

9. **`:first-child` Pseudo-Class**
   - **Definition**: Applies styles to the first child of a parent element.
   - **When to Use**: To style the first item in a list or the first child of a container.
   - **CSS Declaration**:
     ```css
     li:first-child {
       font-weight: bold;  /* Makes the first list item bold */
     }
     ```
   - **Example**: The first item in a list with bold text.

10. **`:last-child` Pseudo-Class**
   - **Definition**: Applies styles to the last child of a parent element.
   - **When to Use**: To style the last item in a list or the last child of a container.
   - **CSS Declaration**:
     ```css
     li:last-child {
       font-style: italic;  /* Makes the last list item italic */
     }
     ```
   - **Example**: The last item in a list with italic text.

11. **`:nth-of-type()` Pseudo-Class**
   - **Definition**: Applies styles to elements based on their position among siblings of the same type.
   - **When to Use**: To style specific elements of the same type within a container.
   - **CSS Declaration**:
     ```css
     p:nth-of-type(2) {
       color: orange;  /* Styles the second paragraph orange */
     }
     ```
   - **Example**: The second paragraph within a container styled differently.

### Pseudo-Elements and Their Usage

1. **`::before` Pseudo-Element**
   - **Definition**: Inserts content before the content of an element.
   - **When to Use**: To add decorative content or icons.
   - **CSS Declaration**:
     ```css
     .example::before {
       content: "►";
       color: blue;  /* Adds a blue arrow before the element */
     }
     ```
   - **Example**: Adding an icon before list items.

2. **`::after` Pseudo-Element**
   - **Definition**: Inserts content after the content of an element.
   - **When to Use**: To add decorative content or clear floats.
   - **CSS Declaration**:
     ```css
     .example::after {
       content: "✔";
       color: green;  /* Adds a green checkmark after the element */
     }
     ```
   - **Example**: Adding a checkmark after list items.

3. **`::first-letter` Pseudo-Element**
   - **Definition**: Applies styles to the first letter of the text in an element.
   - **When to Use**: To create decorative drop caps in paragraphs.
   - **CSS Declaration**:
     ```css
     p::first-letter {
       font-size: 2em;  /* Enlarges the first letter */
       color: red;  /* Changes the color of the first letter to red */
     }
     ```
   - **Example**: Enlarging the first letter of a paragraph for a drop cap effect.

4. **`::first-line` Pseudo-Element**
   - **Definition**: Applies styles to the first line of text in an element.
   - **When to Use**: To style the first line of paragraphs distinctly.
   - **CSS Declaration**:
     ```css
     p::first-line {
       font-weight: bold;  /* Makes the first line bold */
       color: blue;  /* Changes the color of the first line to blue */
     }
     ```
   - **Example**: Making the first line of a paragraph bold and blue.
5. **`::selection` Pseudo-Element**
   - **Definition**: Applies styles to the portion of an element that is selected by the user.
   - **When to Use**: To customize the appearance of selected text.
   - **CSS Declaration**:
     ```css
     ::selection {
       background-color: yellow;  /* Changes background color of selected text */
       color: black;  /* Changes text color of selected text */
     }
     ```
   - **Example**: Selected text with a yellow background and black text color.

6. **`::placeholder` Pseudo-Element**
   - **Definition**: Applies styles to the placeholder text of input elements.
   - **When to Use**: To customize the appearance of placeholder text in form inputs.
   - **CSS Declaration**:
     ```css
     input::placeholder {
       color: gray;  /* Changes color of placeholder text */
       font-style: italic;  /* Makes placeholder text italic */
     }
     ```
   - **Example**: Placeholder text in an input field styled with a gray color and italic font.

7. **`::marker` Pseudo-Element**
   - **Definition**: Applies styles to the marker of list items.
   - **When to Use**: To customize the appearance of list markers (e.g., bullets or numbers).
   - **CSS Declaration**:
     ```css
     li::marker {
       color: red;  /* Changes color of list markers to red */
       font-size: 1.5em;  /* Enlarges list markers */
     }
     ```
   - **Example**: List items with red, enlarged markers.

### Hands-On Exercise

Create a simple HTML page with various elements using pseudo-classes and pseudo-elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    a:hover {
      color: red;
    }
    button:active {
      background-color: blue;
    }
    input:focus {
      border: 2px solid green;
    }
    li:nth-child(odd) {
      background-color: lightgray;
    }
    p:not(.highlight) {
      color: gray;
    }
    .example::before {
      content: "►";
      color: blue;
    }
    .example::after {
      content: "✔";
      color: green;
    }
    p::first-letter {
      font-size: 2em;
      color: red;
    }
    p::first-line {
      font-weight: bold;
      color: blue;
    }
    a:visited {
      color: purple;
    }
    input:checked {
      background-color: yellow;
    }
    input:disabled {
      background-color: lightgray;
    }
    li:first-child {
      font-weight: bold;
    }
    li:last-child {
      font-style: italic;
    }
    p:nth-of-type(2) {
      color: orange;
    }
    ::selection {
      background-color: yellow;
      color: black;
    }
    input::placeholder {
      color: gray;
      font-style: italic;
    }
    li::marker {
      color: red;
      font-size: 1.5em;
    }
  </style>
  <title>CSS Pseudo-Classes and Pseudo-Elements</title>
</head>
<body>
  <a href="#">Hover over this link</a>
  <button>Click this button</button>
  <input type="text" placeholder="Focus on this input">
  <ul>
    <li class="example">List item 1</li>
    <li class="example">List item 2</li>
    <li class="example">List item 3</li>
    <li class="example">List item 4</li>
  </ul>
  <p>This is a paragraph. <span class="highlight">Highlighted text.</span></p>
  <p>This is another paragraph without the highlight class.</p>

  <a href="#">Visited link example</a>
  <input type="checkbox" checked> Checked checkbox<br>
  <input type="text" disabled placeholder="Disabled input"><br>
  <ul>
    <li>First item (bold)</li>
    <li>Middle item</li>
    <li>Last item (italic)</li>
  </ul>
  <p>First paragraph.</p>
  <p>Second paragraph (orange).</p>
  <input type="text" placeholder="Styled placeholder">
  <p>Select some text in this paragraph to see the selection styles.</p>
</body>
</html>
```

## CSS Selectors: Intermediate

CSS selectors are used to target HTML elements for styling. They are a powerful tool for applying styles to specific elements based on their attributes, relationships, and positions within the DOM.

### Types of CSS Selectors and Their Usage

1. **Universal Selector (`*`)**
   - **Definition**: Selects all elements in the document.
   - **When to Use**: To apply a style to every element on the page.
   - **CSS Declaration**:
     ```css
     * {
       margin: 0;
       padding: 0;
     }
     ```
   - **Example**: Removing default margin and padding from all elements.

2. **Type Selector**
   - **Definition**: Selects all elements of a given type.
   - **When to Use**: To style all instances of a specific HTML tag.
   - **CSS Declaration**:
     ```css
     p {
       color: blue;
     }
     ```
   - **Example**: Changing the text color of all paragraphs to blue.

3. **Class Selector (`.`)**
   - **Definition**: Selects all elements with a specific class attribute.
   - **When to Use**: To apply styles to multiple elements with the same class.
   - **CSS Declaration**:
     ```css
     .highlight {
       background-color: yellow;
     }
     ```
   - **Example**: Highlighting elements with the class "highlight".

4. **ID Selector (`#`)**
   - **Definition**: Selects a single element with a specific ID attribute.
   - **When to Use**: To apply styles to a unique element on the page.
   - **CSS Declaration**:
     ```css
     #header {
       font-size: 24px;
     }
     ```
   - **Example**: Changing the font size of an element with the ID "header".

5. **Attribute Selector**
   - **Definition**: Selects elements based on their attributes.
   - **When to Use**: To apply styles to elements with specific attributes or attribute values.
   - **CSS Declaration**:
     ```css
     [type="text"] {
       border: 1px solid black;
     }
     ```
   - **Example**: Styling all input elements of type "text" with a border.

6. **Descendant Selector (space)**
   - **Definition**: Selects elements that are descendants of a specified element.
   - **When to Use**: To apply styles to elements within a specific container.
   - **CSS Declaration**:
     ```css
     div p {
       color: red;
     }
     ```
   - **Example**: Changing the text color of all paragraphs inside a div.

7. **Child Selector (`>`)**
   - **Definition**: Selects elements that are direct children of a specified element.
   - **When to Use**: To apply styles to direct children only.
   - **CSS Declaration**:
     ```css
     ul > li {
       list-style-type: none;
     }
     ```
   - **Example**: Removing the list bullets from direct list items in an unordered list.

8. **Adjacent Sibling Selector (`+`)**
   - **Definition**: Selects an element that is immediately preceded by a specified element.
   - **When to Use**: To apply styles to elements that are adjacent siblings.
   - **CSS Declaration**:
     ```css
     h1 + p {
       margin-top: 0;
     }
     ```
   - **Example**: Removing the top margin of a paragraph that follows an h1.

9. **General Sibling Selector (`~`)**
   - **Definition**: Selects all elements that are siblings of a specified element.
   - **When to Use**: To apply styles to all sibling elements.
   - **CSS Declaration**:
     ```css
     h1 ~ p {
       color: green;
     }
     ```
   - **Example**: Changing the text color of all paragraphs that are siblings of an h1.

10. **Grouped Selector (`,`)**
    - **Definition**: Selects all elements matched by multiple selectors.
    - **When to Use**: To apply the same style to multiple types of elements.
    - **CSS Declaration**:
      ```css
      h1, h2, h3 {
        font-family: Arial, sans-serif;
      }
      ```
    - **Example**: Applying the same font to all heading elements (h1, h2, h3).

### Hands-On Exercise

Create a simple HTML page with various elements using different selectors:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    p {
      color: blue;
    }
    .highlight {
      background-color: yellow;
    }
    #header {
      font-size: 24px;
    }
    [type="text"] {
      border: 1px solid black;
    }
    div p {
      color: red;
    }
    ul > li {
      list-style-type: none;
    }
    h1 + p {
      margin-top: 0;
    }
    h1 ~ p {
      color: green;
    }
    h1, h2, h3 {
      font-family: Arial, sans-serif;
    }
  </style>
  <title>CSS Selectors</title>
</head>
<body>
  <div id="header">Header</div>
  <p>First paragraph.</p>
  <p class="highlight">Highlighted paragraph.</p>
  <input type="text" placeholder="Text input">
  <div>
    <p>Paragraph inside div.</p>
  </div>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  <h1>Heading 1</h1>
  <p>Paragraph after h1.</p>
  <p>Another paragraph after h1.</p>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
</body>
</html>
```

## Resources (Lec 3) for Further Learning
1. [MDN Web Docs: CSS Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
2. [MDN Web Docs: CSS Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
3. [W3Schools: CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
4. [W3Schools: CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
5. [CSS-Tricks: A Complete Guide to Grids](https://css-tricks.com/snippets/css/complete-guide-grid/)
7. [MDN Web Docs: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
8. [CSS Tricks: Complete Guide to CSS Selectors](https://css-tricks.com/almanac/selectors/)


# Lecture 4: CSS Media Queries, Animations, Transitions, and Transforms
## CSS Media Queries: Basics

CSS media queries allow you to apply styles based on the characteristics of the device or browser viewport. This enables responsive design, making your website adaptable to various screen sizes and orientations.

### What Are Media Queries?

Media queries consist of a media type and one or more expressions that check the conditions of particular media features. The results of these expressions are used to apply the specified styles only if the conditions are true.

### Syntax of Media Queries

A typical media query syntax looks like this:

```css
@media media-type (media-feature: value) {
  /* CSS rules */
}
```

### Types of Media Queries and Their Usage

1. **Media Type**
   - **Definition**: Specifies the type of device.
   - **Types**:
     - `all`: Suitable for all devices.
     - `print`: Intended for printed material and for documents viewed in Print Preview mode.
     - `screen`: Intended primarily for screens.
     - `speech`: Intended for speech synthesizers.

   - **CSS Declaration**:
     ```css
     @media screen {
       body {
         font-size: 16px;
       }
     }
     ```

   - **Example**: Apply styles only for screen devices.

2. **Width and Height**
   - **Definition**: Applies styles based on the width and height of the viewport or the device.
   - **Values**:
     - `width`: Width of the viewport.
     - `min-width`: Minimum width of the viewport.
     - `max-width`: Maximum width of the viewport.
     - `height`: Height of the viewport.
     - `min-height`: Minimum height of the viewport.
     - `max-height`: Maximum height of the viewport.

   - **CSS Declarations**:
     ```css
     @media (min-width: 600px) {
       body {
         background-color: lightblue;
       }
     }

     @media (max-width: 600px) {
       body {
         background-color: lightcoral;
       }
     }
     ```
    - A table for Bootstrap breakpoints with the device types and corresponding media queries using both `min-width` and `max-width`:

    | Breakpoint | Class Infix | Dimensions         | Device Type        | Min-Width Media Query        | Max-Width Media Query          |
    |------------|-------------|--------------------|--------------------|------------------------------|---------------------------------|
    | X-Small    | -           | `<576px`           | Phone (portrait)   | -                            | `@media (max-width: 575.98px)` |
    | Small      | `sm`        | `≥576px`           | Phone (landscape)  | `@media (min-width: 576px)`  | `@media (max-width: 767.98px)` |
    | Medium     | `md`        | `≥768px`           | Tablet             | `@media (min-width: 768px)`  | `@media (max-width: 991.98px)` |
    | Large      | `lg`        | `≥992px`           | Desktop            | `@media (min-width: 992px)`  | `@media (max-width: 1199.98px)`|
    | X-Large    | `xl`        | `≥1200px`          | Large Desktop      | `@media (min-width: 1200px)` | `@media (max-width: 1399.98px)`|
    | XX-Large   | `xxl`       | `≥1400px`          | Extra Large Screen | `@media (min-width: 1400px)` | -                               |
   - **Example**: Change the background color based on the viewport width.

3. **Orientation**
   - **Definition**: Checks if the device is in portrait or landscape mode.
   - **Values**:
     - `orientation: portrait`
     - `orientation: landscape`

   - **CSS Declaration**:
     ```css
     @media (orientation: landscape) {
       body {
         font-size: 18px;
       }
     }

     @media (orientation: portrait) {
       body {
         font-size: 14px;
       }
     }
     ```

   - **Example**: Adjust the font size based on the device orientation.

4. **Resolution**
   - **Definition**: Applies styles based on the resolution of the device screen.
   - **Values**:
     - `resolution`
     - `min-resolution`
     - `max-resolution`
   - **Units**: dpi (dots per inch) and dppx (dots per pixel).

   - **CSS Declaration**:
     ```css
     @media (min-resolution: 192dpi) {
       body {
         background-image: url('high-res-bg.png');
       }
     }

     @media (max-resolution: 191dpi) {
       body {
         background-image: url('low-res-bg.png');
       }
     }
     ```

   - **Example**: Use different background images based on the screen resolution.

5. **Aspect Ratio**
   - **Definition**: Checks the ratio between the width and the height of the viewport.
   - **Values**:
     - `aspect-ratio`
     - `min-aspect-ratio`
     - `max-aspect-ratio`

   - **CSS Declaration**:
     ```css
     @media (min-aspect-ratio: 4/3) {
       body {
         padding: 20px;
       }
     }

     @media (max-aspect-ratio: 4/3) {
       body {
         padding: 10px;
       }
     }
     ```

   - **Example**: Change padding based on the aspect ratio.

6. **Device Width and Height**
   - **Definition**: Applies styles based on the width and height of the device itself.
   - **Values**:
     - `device-width`
     - `min-device-width`
     - `max-device-width`
     - `device-height`
     - `min-device-height`
     - `max-device-height`

   - **CSS Declaration**:
     ```css
     @media (min-device-width: 800px) {
       body {
         margin: 20px;
       }
     }

     @media (max-device-width: 800px) {
       body {
         margin: 10px;
       }
     }
     ```

   - **Example**: Adjust margins based on the device width.

7. **Hover and Pointer**
   - **Definition**: Checks the availability and accuracy of the pointing device.
   - **Values**:
     - `hover: hover` / `hover: none`
     - `pointer: fine` / `pointer: coarse` / `pointer: none`

   - **CSS Declaration**:
     ```css
     @media (hover: hover) {
       button {
         background-color: blue;
       }
     }

     @media (hover: none) {
       button {
         background-color: gray;
       }
     }
     ```

   - **Example**: Change button color based on hover capability.

8. **Light-Level**
   - **Definition**: Detects the ambient light level around the device.
   - **Values**:
     - `light-level: dim`
     - `light-level: normal`
     - `light-level: washed`

   - **CSS Declaration**:
     ```css
     @media (light-level: dim) {
       body {
         background-color: darkgray;
       }
     }

     @media (light-level: normal) {
       body {
         background-color: white;
       }
     }
     ```

   - **Example**: Change background color based on the ambient light level.

9. **Prefers-Color-Scheme**
   - **Definition**: Checks if the user prefers a light or dark color scheme.
   - **Values**:
     - `prefers-color-scheme: dark`
     - `prefers-color-scheme: light`

   - **CSS Declaration**:
     ```css
     @media (prefers-color-scheme: dark) {
       body {
         background-color: black;
         color: white;
       }
     }

     @media (prefers-color-scheme: light) {
       body {
         background-color: white;
         color: black;
       }
     }
     ```

   - **Example**: Apply different styles based on the user's color scheme preference.

10. **Prefers-Reduced-Motion**
    - **Definition**: Checks if the user prefers reduced motion.
    - **Values**:
      - `prefers-reduced-motion: reduce`
      - `prefers-reduced-motion: no-preference`

    - **CSS Declaration**:
      ```css
      @media (prefers-reduced-motion: reduce) {
        * {
          animation: none;
          transition: none;
        }
      }
      ```

    - **Example**: Disable animations and transitions for users who prefer reduced motion.

### Hands-On Exercise

Create a simple HTML page and apply different media queries:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Default styles */
    body {
      background-color: white;
      color: black;
    }

    /* Media query for screen devices */
    @media screen {
      body {
        font-size: 16px;
      }
    }

    /* Media query for viewport width */
    @media (min-width: 600px) {
      body {
        background-color: lightblue;
      }
    }

    @media (max-width: 600px) {
      body {
        background-color: lightcoral;
      }
    }

    /* Media query for orientation */
    @media (orientation: landscape) {
      body {
        font-size: 18px;
      }
    }

    @media (orientation: portrait) {
      body {
        font-size: 14px;
      }
    }

    /* Media query for resolution */
    @media (min-resolution: 192dpi) {
      body {
        background-image: url('high-res-bg.png');
      }
    }

    @media (max-resolution: 191dpi) {
      body {
        background-image: url('low-res-bg.png');
      }
    }

    /* Media query for prefers-color-scheme */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: black;
        color: white;
      }
    }

    @media (prefers-color-scheme: light) {
      body {
        background-color: white;
        color: black;
      }
    }

    /* Media query for prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none;
        transition: none;
      }
    }
  </style>
  <title>CSS Media Queries</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple example of CSS media queries.</p>
</body>
</html>
```

## CSS Animations, Transitions, and Transforms: Comprehensive Guide

CSS animations, transitions, and transforms are powerful tools for creating interactive and engaging web pages. They allow you to animate elements, smoothly transition between styles, and transform elements in various ways.

### CSS Transitions

Transitions enable you to change property values smoothly (over a given duration).

#### Syntax

The `transition` property is used to define the transition effects.

```css
element {
  transition: property duration timing-function delay;
}
```

#### Properties

1. **`transition-property`**
   - **Definition**: Specifies the CSS property that should transition.
   - **Values**: `all`, `none`, or specific property names (e.g., `width`, `height`).

2. **`transition-duration`**
   - **Definition**: Specifies the duration of the transition.
   - **Values**: Time in seconds (s) or milliseconds (ms).

3. **`transition-timing-function`**
   - **Definition**: Specifies the speed curve of the transition.
   - **Values**: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`.

4. **`transition-delay`**
   - **Definition**: Specifies the delay before the transition starts.
   - **Values**: Time in seconds (s) or milliseconds (ms).

#### Example

```css
button {
  background-color: blue;
  transition: background-color 0.5s ease-in-out;
}

button:hover {
  background-color: green;
}
```

### CSS Transforms

Transforms allow you to modify the coordinate space of the CSS visual formatting model. This includes rotating, scaling, translating, and skewing elements.

#### Syntax

The `transform` property is used to apply transformations.

```css
element {
  transform: transformation-function;
}
```

#### Transformation Functions

1. **`translate(x, y)`**
   - **Definition**: Moves an element from its current position.
   - **Values**: Length values for x and y.

2. **`rotate(angle)`**
   - **Definition**: Rotates an element.
   - **Values**: Angle in degrees (`deg`).

3. **`scale(x, y)`**
   - **Definition**: Scales an element.
   - **Values**: Scaling factors for x and y.

4. **`skew(x-angle, y-angle)`**
   - **Definition**: Skews an element.
   - **Values**: Angles in degrees (`deg`).

5. **`matrix(a, b, c, d, e, f)`**
   - **Definition**: Defines a 2D transformation using a matrix.
   - **Values**: Six values representing the matrix.

#### Example

```css
div {
  transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}
```

### CSS Animations

Animations allow you to change CSS properties over time, using keyframes.

#### Syntax

The `animation` property is used to define animations.

```css
element {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}
```

#### Properties

1. **`animation-name`**
   - **Definition**: Specifies the name of the `@keyframes` animation.
   - **Values**: Name of the `@keyframes` block.

2. **`animation-duration`**
   - **Definition**: Specifies the duration of the animation.
   - **Values**: Time in seconds (s) or milliseconds (ms).

3. **`animation-timing-function`**
   - **Definition**: Specifies the speed curve of the animation.
   - **Values**: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`.

4. **`animation-delay`**
   - **Definition**: Specifies the delay before the animation starts.
   - **Values**: Time in seconds (s) or milliseconds (ms).

5. **`animation-iteration-count`**
   - **Definition**: Specifies the number of times the animation should run.
   - **Values**: A number or `infinite`.

6. **`animation-direction`**
   - **Definition**: Specifies whether the animation should play in reverse on alternate cycles.
   - **Values**: `normal`, `reverse`, `alternate`, `alternate-reverse`.

7. **`animation-fill-mode`**
   - **Definition**: Specifies how a CSS animation should apply styles to its target before and after it is executing.
   - **Values**: `none`, `forwards`, `backwards`, `both`.

#### Example

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

div {
  animation: slidein 3s ease-in-out 1s infinite alternate;
}
```

### Hands-On Exercise

Create a simple HTML page to demonstrate transitions, transforms, and animations:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Transition Example */
    button {
      background-color: blue;
      transition: background-color 0.5s ease-in-out;
    }

    button:hover {
      background-color: green;
    }

    /* Transform Example */
    div {
      width: 100px;
      height: 100px;
      background-color: red;
      transform: translate(50px, 50px) rotate(45deg) scale(1.5);
    }

    /* Animation Example */
    @keyframes slidein {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(100%);
      }
    }

    .animated-div {
      width: 100px;
      height: 100px;
      background-color: blue;
      animation: slidein 3s ease-in-out 1s infinite alternate;
    }
  </style>
  <title>CSS Animations, Transitions, and Transforms</title>
</head>
<body>
  <button>Hover over me!</button>
  <div>Transformed Div</div>
  <div class="animated-div"></div>
</body>
</html>
```

## Resources (Lec 4) for Further Learning

1. [MDN Web Docs: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
2. [W3C: Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
3. [CSS Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
4. [Smashing Magazine: How To Use CSS Media Queries](https://www.smashingmagazine.com/2024/05/beyond-css-media-queries/)

5. [MDN Web Docs: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
6. [MDN Web Docs: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms)
7. [MDN Web Docs: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
8. [CSS Tricks: A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)
9. [CSS Tricks: A Complete Guide to CSS Transforms](https://css-tricks.com/almanac/properties/t/transform/)
10. [CSS Tricks: A Complete Guide to CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)

