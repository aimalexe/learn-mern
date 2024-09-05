# Bootstrap Lectures
The world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.


## Content
- [Bootstrap Lectures](#bootstrap-lectures)
  - [Content](#content)
- [Lecture 1: Introduction to CSS Frameworks and Preprocessor](#lecture-1-introduction-to-css-frameworks-and-preprocessor)
  - [Overview of CSS Frameworks](#overview-of-css-frameworks)
    - [1. Foundation by ZURB](#1-foundation-by-zurb)
      - [Pros:](#pros)
      - [Cons:](#cons)
    - [2. Bulma](#2-bulma)
      - [Pros:](#pros-1)
      - [Cons:](#cons-1)
    - [3. Tailwind CSS](#3-tailwind-css)
      - [Pros:](#pros-2)
      - [Cons:](#cons-2)
    - [4. Semantic UI](#4-semantic-ui)
      - [Pros:](#pros-3)
      - [Cons:](#cons-3)
    - [5. Materialize](#5-materialize)
      - [Pros:](#pros-4)
      - [Cons:](#cons-4)
  - [What is Bootstrap?](#what-is-bootstrap)
    - [Why Use Bootstrap?](#why-use-bootstrap)
    - [History of Bootstrap](#history-of-bootstrap)
    - [Versions of Bootstrap](#versions-of-bootstrap)
    - [Documentation and Resources](#documentation-and-resources)
    - [Example: Including Bootstrap](#example-including-bootstrap)
  - [Introduction to SCSS (Sassy CSS)](#introduction-to-scss-sassy-css)
    - [What is SCSS?](#what-is-scss)
    - [Features of SCSS](#features-of-scss)
    - [How SCSS Works](#how-scss-works)
    - [Understanding SCSS Syntax and Comparing it with SASS](#understanding-scss-syntax-and-comparing-it-with-sass)
    - [SCSS Syntax](#scss-syntax)
      - [Basic SCSS Example:](#basic-scss-example)
    - [SASS Syntax](#sass-syntax)
      - [Basic SASS Example:](#basic-sass-example)
    - [Comparison Between SCSS and SASS](#comparison-between-scss-and-sass)
    - [SCSS Compilation](#scss-compilation)
      - [Step 1: Install Node.js](#step-1-install-nodejs)
      - [Step 2: Install Node-sass](#step-2-install-node-sass)
      - [Step 3: Compile SCSS to CSS](#step-3-compile-scss-to-css)
      - [Step 4: Watching Files for Changes](#step-4-watching-files-for-changes)
    - [Using SCSS in Projects](#using-scss-in-projects)
- [Lecture 2: Margin and Padding in Bootstrap](#lecture-2-margin-and-padding-in-bootstrap)
  - [Margins and Paddings](#margins-and-paddings)
    - [Class Naming Convention](#class-naming-convention)
    - [Example Classes](#example-classes)
    - [Special Classes](#special-classes)
    - [Example Usage](#example-usage)
- [Lecture 3: Width, Heights, Containers and Grids](#lecture-3-width-heights-containers-and-grids)
  - [Width and Height Utilities in Bootstrap](#width-and-height-utilities-in-bootstrap)
    - [Class Naming Convention](#class-naming-convention-1)
    - [Width Classes](#width-classes)
    - [Height Classes](#height-classes)
    - [Responsive Width and Height](#responsive-width-and-height)
    - [Example Usage](#example-usage-1)
    - [Explanation of the Example](#explanation-of-the-example)
    - [Tips for Using Width and Height Utilities](#tips-for-using-width-and-height-utilities)
  - [Containers in Bootstrap](#containers-in-bootstrap)
    - [What is a Container?](#what-is-a-container)
    - [Types of Containers](#types-of-containers)
    - [Generalized Syntax for Containers](#generalized-syntax-for-containers)
    - [Explanation of Container Classes](#explanation-of-container-classes)
    - [Breakpoint Widths](#breakpoint-widths)
  - [Grid System in Bootstrap](#grid-system-in-bootstrap)
    - [What is the Grid System?](#what-is-the-grid-system)
    - [Generalized Syntax for Grids](#generalized-syntax-for-grids)
    - [Breakpoints](#breakpoints)
    - [Example of Grid System](#example-of-grid-system)
    - [Explanation of the Example](#explanation-of-the-example-1)
- [Lecture 4: Typography and Colors](#lecture-4-typography-and-colors)
  - [Bootstrap 5 Typography](#bootstrap-5-typography)
      - [1. **Headings**](#1-headings)
      - [2. **Display Headings**](#2-display-headings)
      - [3. **Lead Paragraph**](#3-lead-paragraph)
      - [4. **Inline Text Elements**](#4-inline-text-elements)
      - [5. **Text Alignment**](#5-text-alignment)
      - [6. **Text Transform**](#6-text-transform)
      - [7. **Text Wrapping and Overflow**](#7-text-wrapping-and-overflow)
      - [8. **Text Decoration**](#8-text-decoration)
      - [9. **Font Weight and Italics**](#9-font-weight-and-italics)
      - [10. **Font Size**](#10-font-size)
      - [11. **Marking Text**](#11-marking-text)
      - [12. **Blockquote**](#12-blockquote)
      - [13. **Lists**](#13-lists)
  - [Bootstrap 5 Colors](#bootstrap-5-colors)
      - [1. **Color Palette**](#1-color-palette)
      - [2. **Text Colors**](#2-text-colors)
      - [3. **Background Colors**](#3-background-colors)
      - [4. **Border Colors**](#4-border-colors)
      - [5. **Custom Colors**](#5-custom-colors)
      - [6. **Color Opacity**](#6-color-opacity)
      - [7. **Color Combinations**](#7-color-combinations)
- [Lecture 5: Images, Figures and Tables](#lecture-5-images-figures-and-tables)
  - [Bootstrap 5: Images and Figures](#bootstrap-5-images-and-figures)
      - [1. **Responsive Images**](#1-responsive-images)
      - [2. **Image Shapes**](#2-image-shapes)
      - [3. **Alignment**](#3-alignment)
      - [4. **Figures**](#4-figures)
      - [5. **Lazy Loading**](#5-lazy-loading)
      - [6. **Responsive Breakpoints**](#6-responsive-breakpoints)
  - [Bootstrap 5: Tables](#bootstrap-5-tables)
      - [1. **Basic Table Structure**](#1-basic-table-structure)
      - [2. **Table Classes**](#2-table-classes)
      - [3. **Table Variants**](#3-table-variants)
      - [4. **Table Colors**](#4-table-colors)
      - [5. **Responsive Tables**](#5-responsive-tables)
      - [6. **Captions**](#6-captions)
      - [7. **Additional Table Features**](#7-additional-table-features)
- [Lecture 6:Forms](#lecture-6forms)
  - [Forms Overview](#forms-overview)
    - [1. **Introduction to Bootstrap 5 Forms**](#1-introduction-to-bootstrap-5-forms)
    - [2. **Fieldsets in Bootstrap 5**](#2-fieldsets-in-bootstrap-5)
    - [3. **Form Classes**](#3-form-classes)
    - [4. **Disabled States**](#4-disabled-states)
  - [Form Controls](#form-controls)
    - [1. **Form Control Sizing**](#1-form-control-sizing)
    - [2. **Disabled Form Controls**](#2-disabled-form-controls)
    - [3. **Read-Only Form Controls**](#3-read-only-form-controls)
    - [4. **File Inputs**](#4-file-inputs)
    - [5. **Color Inputs**](#5-color-inputs)
    - [6. **Data Lists**](#6-data-lists)
    - [7. **Select Dropdowns**](#7-select-dropdowns)
    - [8. **Checkboxes and Radios**](#8-checkboxes-and-radios)
    - [9. **Switches**](#9-switches)
    - [10. **Range Inputs**](#10-range-inputs)
    - [11. **Input Groups**](#11-input-groups)
    - [12. **Floating Labels**](#12-floating-labels)
    - [13. **Form Layouts**](#13-form-layouts)
    - [14. **Form Validation**](#14-form-validation)
    - [Summary:](#summary)
- [Lecture 7: Bootstrap's Components](#lecture-7-bootstraps-components)
  - [1. **Accordion**](#1-accordion)
  - [2. **Alerts**](#2-alerts)
  - [3. **Badge**](#3-badge)
  - [4. **Breadcrumb**](#4-breadcrumb)
  - [5. **Buttons**](#5-buttons)
  - [6. **Button Group**](#6-button-group)
- [Lecture 8: Bootstrap's Components (Cont.)](#lecture-8-bootstraps-components-cont)
  - [7. **Card**](#7-card)
  - [8. **Carousel**](#8-carousel)
  - [9. **Close Button**](#9-close-button)
  - [10. **Collapse**](#10-collapse)
  - [11. **Dropdowns**](#11-dropdowns)
  - [12. **List Group**](#12-list-group)
  - [13. **Modal**](#13-modal)
  - [14. **Navbar**](#14-navbar)
  - [15. **Navs \& Tabs**](#15-navs--tabs)
- [Lecture 9: Bootstrap's Components (Cont.)](#lecture-9-bootstraps-components-cont)
  - [16. **Offcanvas**](#16-offcanvas)
  - [17. **Pagination**](#17-pagination)
  - [18. **Placeholders**](#18-placeholders)
  - [19. **Popovers**](#19-popovers)
  - [20. **Progress**](#20-progress)
  - [21. **Scrollspy**](#21-scrollspy)
  - [22. **Spinners**](#22-spinners)
  - [23. **Toasts**](#23-toasts)
  - [24. **Tooltips**](#24-tooltips)
- [Next steps](#next-steps)
  - [1. **Engage with the Community**](#1-engage-with-the-community)
  - [2. **Learn Version Control (Git)**\*](#2-learn-version-control-git)
  - [3. **Practice Responsive Design**](#3-practice-responsive-design)
  - [4. **Start Building Projects**](#4-start-building-projects)
  - [5. **Learn about Web Performance Optimization**](#5-learn-about-web-performance-optimization)
  - [6. **Learn JavaScript (JS)**\*](#6-learn-javascript-js)
  - [7. **Explore Additional Front-End Tools**](#7-explore-additional-front-end-tools)


# Lecture 1: Introduction to CSS Frameworks and Preprocessor

## Overview of CSS Frameworks

Lets broaden our view by comparing some popular CSS frameworks, each with unique features and use-cases.

### 1. Foundation by ZURB

**Foundation** is another responsive front-end framework, similar to Bootstrap, but often favored for its flexibility and advanced interface components.

#### Pros:
- **Customizability**: Offers a more semantic approach to layouts with its XY grid system.
- **Accessibility**: Strong focus on accessibility features.
- **Mobile-first**: Like Bootstrap, it emphasizes mobile-first design.
- **Professional Use**: Widely used in enterprise solutions for its robustness.

#### Cons:
- **Complexity**: Steeper learning curve than Bootstrap.
- **Less Popular**: Smaller community compared to Bootstrap, which may affect the availability of resources and support.

### 2. Bulma

**Bulma** is a modern CSS framework based on Flexbox, known for its simplicity and ease of use.

#### Pros:
- **Flexbox-based**: Makes it easy to build flexible and modern layouts.
- **Lightweight**: Comes with no JavaScript, which means all features are purely CSS.
- **Readability**: Highly readable classes and straightforward structure.

#### Cons:
- **No JavaScript**: While being pure CSS is a pro, it lacks ready-to-use JavaScript components.
- **Limited Browser Support**: As it relies heavily on Flexbox, older browsers might not fully support all features.

### 3. Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework that is drastically different from traditional frameworks like Bootstrap.

#### Pros:
- **Highly Customizable**: Encourages custom designs without stepping out of the framework’s utility classes.
- **Efficiency**: Helps in building designs quickly once you get accustomed to the utility-first concept.
- **Performance**: Only includes the styles you use, which keeps the stylesheet size minimum.

#### Cons:
- **Steep Learning Curve**: The utility-first approach can be overwhelming for beginners.
- **Verbose**: HTML can become cluttered with many utility classes, making it less clean.

### 4. Semantic UI

**Semantic UI** is a framework that focuses on human-friendly HTML. It has a more intuitive and less technical syntax.

#### Pros:
- **Intuitive Syntax**: Uses natural language principles, making the code more readable and easy to understand.
- **Theming**: Powerful theming capabilities with extensive options for customizing the look.
- **Integration**: Integrates well with React, Angular, and Meteor.

#### Cons:
- **Size**: Generally larger file sizes which may lead to slower load times.
- **Less Active Development**: Not as actively developed as other frameworks, which could be a risk for future projects.

### 5. Materialize

**Materialize**, a framework based on Google's Material Design, offers components that adhere to the Material Design guidelines.

#### Pros:
- **Consistency**: Provides UI consistency across web and mobile apps.
- **Feature-rich**: Includes a wide range of components and animations.
- **Responsive**: Offers a grid system and responsive utilities similar to Bootstrap.

#### Cons:
- **Opinionated**: Adheres closely to Material Design, which might limit design flexibility.
- **Performance**: Can be bloated, affecting performance on mobile devices.

## What is Bootstrap?

Bootstrap is a free and open-source front-end framework for developing responsive and mobile-first websites and web applications. It is one of the most popular HTML, CSS, and JavaScript frameworks for user interface components and interactions.

### Why Use Bootstrap?

- **Responsiveness**: Bootstrap’s responsive CSS adjusts to phones, tablets, and desktops.
- **Mobile-first Approach**: Styles are designed to work best on mobile devices.
- **Pre-styled Components**: It provides a variety of ready-to-use components such as buttons, navigation bars, modals, etc., which speeds up development.
- **Customizable**: It can be customized to fit the design of any website or application.
- **Large Community and Ecosystem**: Extensive documentation and a large community make it easier for developers to learn and solve problems.

### History of Bootstrap

Bootstrap was initially developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools. Here’s how it has evolved:

- **Bootstrap 1.x (2011)**: The first version, released as an open-source project, was designed to provide consistency across Twitter’s internal tools.
- **Bootstrap 2 (2012)**: Introduced a 12-column grid system and responsive design features.
- **Bootstrap 3 (2013)**: Marked a major overhaul with a mobile-first approach and flat design aesthetics.
- **Bootstrap 4 (2018)**: Introduced improved grid system, new components, and moved from Less to Sass. It also dropped support for older browsers.
- **Bootstrap 5 (2020)**: Eliminated jQuery dependency, enhanced CSS custom properties, and included new components and utilities.

### Versions of Bootstrap

As of this lecture, Bootstrap has multiple versions available:

- **Bootstrap 5**: The latest stable release, focusing on improving the building of responsive sites with better utility classes and enhanced customizability.
- **Bootstrap 4**: Still widely used, supported by extensive resources and tutorials.
- **Older versions**: Bootstrap 3 and 2 are no longer actively maintained but are still in use in legacy projects.

### Documentation and Resources

Bootstrap has extensive documentation which is crucial for learning and using it effectively:

- **[Official Bootstrap Website](https://getbootstrap.com/)**: The primary source for all things Bootstrap. It includes documentation, examples, and a blog with updates.
- **[Bootstrap GitHub Repository](https://github.com/twbs/bootstrap)**: For those interested in contributing to the source code or reviewing the development process.
- **Community Forums and Discussions**: Platforms like Stack Overflow and Reddit offer community support.

### Example: Including Bootstrap

Here’s how you can include Bootstrap in your HTML file using the CDN:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <!-- Including Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <h1>Hello, Bootstrap!</h1>
    <button class="btn btn-primary">A Simple Button</button>
    
    
    <!-- Including Bootstrap Bundle (Bootstrap JS ) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <!-- Including Popper.js separately for additional functionality -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</body>
</html>
```


## Introduction to SCSS (Sassy CSS)

SCSS is an extension of CSS that enables you to use features that don't exist in standard CSS, such as variables, nested rules, mixins, inheritance, and more. It's a syntax of Sass (Syntactically Awesome Style Sheets), designed to simplify the maintenance and extendibility of CSS.

### What is SCSS?

SCSS (Sassy CSS) is a syntax of Sass designed to look more like traditional CSS, but with the power of Sass. It's fully compliant with CSS syntax, which means that every valid CSS stylesheet is also a valid SCSS file.

### Features of SCSS

1. **Variables**: Store colors, fonts, or any CSS value to reuse throughout your stylesheet.
2. **Nesting**: Nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
3. **Partials and Import**: Split your CSS into smaller, reusable pieces with partials and import them into a main stylesheet.
4. **Mixins**: Write reusable pieces of code that can be included in other selectors.
5. **Inheritance**: Share a set of CSS properties from one selector to another.
6. **Mathematical Functions**: Perform mathematical operations like adding, subtracting, multiplying, and dividing values.

### How SCSS Works

SCSS files are not directly readable by browsers; they must be compiled into standard CSS. Here’s how the process typically works:

1. **Writing SCSS**: Developers write more abstract and feature-rich SCSS files.
2. **Compiling**: These SCSS files are then compiled into standard CSS using tools like Node.js, Webpack, or task runners like Gulp and Grunt.
3. **Loading CSS**: The resulting CSS files are linked to HTML documents, which the browser interprets to style the webpage.

Certainly! Let’s delve deeper into the syntax of SCSS and how it compares to its older syntax counterpart, SASS (Syntactically Awesome Style Sheets).

### Understanding SCSS Syntax and Comparing it with SASS

[SCSS](https://sass-lang.com/documentation/) (Sassy CSS) is one of the two syntaxes for Sass, which is a CSS preprocessor that enhances the capabilities of regular CSS with features that make the stylesheets more dynamic and maintainable.

### SCSS Syntax

SCSS syntax is an extension of the CSS syntax. This means that every valid CSS stylesheet is also a valid SCSS file. SCSS files use the `.scss` file extension.

#### Basic SCSS Example:

Here's a simple example to demonstrate variables, nesting, and mixins in SCSS:

```scss
// Defining a variable
$primary-color: #333;

// Using the variable
body {
  font-family: Helvetica, Arial, sans-serif;
  color: $primary-color;

  // Nesting
  h1 {
    color: darken($primary-color, 20%);
  }
}

// Defining a mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Using the mixin
.header {
  @include flex-center;
  height: 60px;
}
```

In this example:
- `$primary-color` is a variable storing the color value.
- `h1` is nested inside `body`, indicating that it will only style `h1` elements that are within `body` elements.
- `@mixin` defines reusable styles that can be included in other selectors using `@include`.

### SASS Syntax

SASS, often referred to as the indented syntax for Sass, follows a different format. It uses indentation rather than braces to denote block divisions and does not require semicolons. SASS files use the `.sass` file extension.

#### Basic SASS Example:

Here's the same example rewritten in SASS syntax:

```scss
// Defining a variable
$primary-color: #333

// Using the variable
body
  font-family: Helvetica, Arial, sans-serif
  color: $primary-color

  // Nesting
  h1
    color: darken($primary-color, 20%)

// Defining a mixin
@mixin flex-center
  display: flex
  justify-content: center
  align-items: center

// Using the mixin
.header
  @include flex-center
  height: 60px
```

In this SASS example, you'll notice:
- No braces `{}` and no semicolons `;`. The structure is controlled by indentation.
- It is less verbose and might appeal to developers who prefer conciseness over visual clarity.

### Comparison Between SCSS and SASS

- **Syntax**: SCSS syntax is more similar to traditional CSS, making it easier for new users to learn. SASS syntax is more concise and might be preferred by developers who like a cleaner, indentation-based style.
- **Popularity**: SCSS is more popular due to its similarity to CSS, which reduces the learning curve for new developers.
- **Compatibility**: SCSS files can directly include standard CSS, which is not possible with SASS due to its strict syntactical requirements.
- **Tools and Support**: Both formats are well-supported by most tools that work with Sass, but examples and community code snippets are more frequently written in SCSS.

### SCSS Compilation

To convert SCSS to CSS, you need a processor. One of the most popular tools is Node-sass (or its newer implementation, Dart Sass). Here’s a basic guide on setting up and compiling SCSS using Node-sass:

#### Step 1: Install Node.js

Ensure Node.js is installed on your system, which provides npm (node package manager) used for installing Node-sass.

#### Step 2: Install Node-sass

You can install Node-sass via npm with the following command:

```bash
npm install -g node-sass
```

#### Step 3: Compile SCSS to CSS

Navigate to your project directory where your SCSS files are located and run:

```bash
node-sass input.scss output.css
```

This command will compile your `input.scss` file into a `output.css` file that you can link in your HTML.

#### Step 4: Watching Files for Changes

To make development faster, you can make Node-sass watch for changes in your SCSS files and automatically compile them:

```bash
node-sass --watch input.scss output.css
```

### Using SCSS in Projects

Integrating SCSS into a project typically involves setting up a build tool or task runner that watches for changes in SCSS files and compiles them into CSS. This setup is often integrated into more extensive build processes involving JavaScript bundling, image optimization, and more.



# Lecture 2: Margin and Padding in Bootstrap
## Margins and Paddings
- **Margin (`m`)**: The space outside an element.
- **Padding (`p`)**: The space inside an element.

### Class Naming Convention

The class naming convention for Bootstrap’s spacing utilities is as follows:

```
{property}{sides}-{size}
```

- **Property**: `m` for margin, `p` for padding.
- **Sides**:
  - `t`: top
  - `b`: bottom
  - `s`: left
  - `e`: right
  - `x`: left and right (horizontal)
  - `y`: top and bottom (vertical)
  - (blank): applies to all sides
- **Size**: 
  - A number from `0` to `5` or `auto`.
  - Bootstrap uses a scale of 0 to 5 to denote spacing sizes, each corresponding to a specific `rem` value:
    - **`0`**: `0` spacing.
    - **`1`**: `0.25rem` (4px).
    - **`2`**: `0.5rem` (8px).
    - **`3`**: `1rem` (16px).
    - **`4`**: `1.5rem` (24px).
    - **`5`**: `3rem` (48px).
    - **`auto`**: Automatic spacing for margins (used to center an element).

### Example Classes

1. **Margins**

   - `.m-0`: No margin on all sides.
   - `.mt-1`: Small margin on top.
   - `.mb-2`: Medium margin on bottom.
   - `.ms-3`: Large margin on left.
   - `.mx-4`: Extra large horizontal margins (left and right).
   - `.my-auto`: Automatic vertical margins (top and bottom).

2. **Paddings**

   - `.p-0`: No padding on all sides.
   - `.pt-1`: Small padding on top.
   - `.pb-2`: Medium padding on bottom.
   - `.ps-3`: Large padding on left.
   - `.px-4`: Extra large horizontal paddings (left and right).
   - `.py-5`: Extra extra large vertical paddings (top and bottom).

### Special Classes

- **Negative Margins**: Bootstrap does not directly provide negative margin classes, but you can achieve negative margins with custom CSS if necessary.

### Example Usage

Here's an example demonstrating how to use Bootstrap's margin and padding classes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Margin and Padding</title>
    <!-- Including Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

  <div class="container mt-5">
      <div class="row">
          <div class="col-md-4 mb-3 p-3 bg-light border">
              <p class="mb-1">Box with margins and padding</p>
              <p class="m-0 p-0 bg-secondary text-white">Inner box with no margin or padding</p>
          </div>
          <div class="col-md-4 mb-3 p-3 bg-light border">
              <p class="mb-2">Box with more margin and padding</p>
              <p class="m-3 p-3 bg-secondary text-white">Inner box with margin and padding</p>
          </div>
      </div>
  </div>

  <!-- Including Bootstrap Bundle (Bootstrap JS ) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
```

# Lecture 3: Width, Heights, Containers and Grids

## Width and Height Utilities in Bootstrap

### Class Naming Convention

Bootstrap's width and height utility classes use a straightforward naming convention:

```
w-{value}  // for width
h-{value}  // for height
```

### Width Classes

- **`.w-25`**: Sets the width to 25% of its parent element.
- **`.w-50`**: Sets the width to 50% of its parent element.
- **`.w-75`**: Sets the width to 75% of its parent element.
- **`.w-100`**: Sets the width to 100% of its parent element.
- **`.w-auto`**: Sets the width to auto, which means the element will adjust its width based on its content.

### Height Classes

- **`.h-25`**: Sets the height to 25% of its parent element.
- **`.h-50`**: Sets the height to 50% of its parent element.
- **`.h-75`**: Sets the height to 75% of its parent element.
- **`.h-100`**: Sets the height to 100% of its parent element.
- **`.h-auto`**: Sets the height to auto, which means the element will adjust its height based on its content.

### Responsive Width and Height

Bootstrap also provides classes for setting widths and heights relative to the viewport:

- **`.mw-100`**: Sets the max-width to 100% of the viewport width.
- **`.mh-100`**: Sets the max-height to 100% of the viewport height.
- **`.vw-100`**: Sets the width to 100% of the viewport width.
- **`.vh-100`**: Sets the height to 100% of the viewport height.
- **`.min-vw-100`**: Sets the minimum width to 100% of the viewport width.
- **`.min-vh-100`**: Sets the minimum height to 100% of the viewport height.

### Example Usage

Here's an example that demonstrates the use of Bootstrap's width and height utility classes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Width and Height</title>
    <<!-- Including Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        .box {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            text-align: center;
            padding: 10px;
        }
    </style>
</head>
<body>

<div class="container mt-5">
    <h2>Width and Height Utilities</h2>
    <div class="row">
        <div class="col-12 mb-3">
            <div class="box w-25">Width 25%</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box w-50">Width 50%</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box w-75">Width 75%</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box w-100">Width 100%</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box h-25" style="height: 200px;">Height 25% of 200px</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box h-50" style="height: 200px;">Height 50% of 200px</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box h-75" style="height: 200px;">Height 75% of 200px</div>
        </div>
        <div class="col-12 mb-3">
            <div class="box h-100" style="height: 200px;">Height 100% of 200px</div>
        </div>
    </div>
</div>

<!-- Including Bootstrap Bundle (Bootstrap JS ) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
```

### Explanation of the Example

- **Width Classes**: The example demonstrates how to use `.w-25`, `.w-50`, `.w-75`, and `.w-100` to control the width of elements.
- **Height Classes**: The example shows how to use `.h-25`, `.h-50`, `.h-75`, and `.h-100` to control the height of elements relative to a fixed height of `200px`.
- **Responsive Design**: Using these utilities ensures that elements resize dynamically across different screen sizes.

### Tips for Using Width and Height Utilities

- Use width and height classes to quickly adjust the size of elements without writing custom CSS.
- Combine width and height classes with other Bootstrap utilities like margins and paddings to create responsive layouts.
- Remember that width and height classes apply relative to the element’s parent container or the viewport (for viewport-specific classes).


## Containers in Bootstrap

### What is a Container?

A container is a fundamental building block for Bootstrap layouts. It is used to wrap content and align it properly within the page. Containers provide a responsive fixed-width or fluid-width layout and are used to contain the grid system and other page elements.

### Types of Containers

Bootstrap offers three types of containers:

1. **`.container`**: A responsive fixed-width container. It adapts to the screen size but has a maximum width.

2. **`.container-fluid`**: A full-width container, spanning the entire width of the viewport.

3. **`.container-{breakpoint}`**: A responsive fixed-width container that applies a specific width at a given breakpoint (e.g., `.container-sm`, `.container-md`, `.container-lg`, `.container-xl`, `.container-xxl`).

### Generalized Syntax for Containers

```html
<div class="container">
    <!-- Content here -->
</div>

<div class="container-fluid">
    <!-- Full-width content here -->
</div>

<div class="container-md">
    <!-- Content with medium breakpoint container -->
</div>
```

### Explanation of Container Classes

- **`.container`**: Provides a responsive fixed-width layout with maximum widths that vary depending on the screen size.
- **`.container-fluid`**: Always spans the entire width of the viewport.
- **`.container-{breakpoint}`**: Allows you to create fixed-width containers for specific breakpoints. This is useful for creating different layouts based on screen sizes.

### Breakpoint Widths

- **`.container`**: Fixed-width with adaptive maximum width.
- **`.container-sm`**: Applies from `576px` and up.
- **`.container-md`**: Applies from `768px` and up.
- **`.container-lg`**: Applies from `992px` and up.
- **`.container-xl`**: Applies from `1200px` and up.
- **`.container-xxl`**: Applies from `1400px` and up.

## Grid System in Bootstrap

### What is the Grid System?

Bootstrap's grid system is a powerful layout mechanism that allows you to create responsive, flexible layouts using a series of rows and columns. It is based on a 12-column system, making it easy to divide the page into different sections.

### Generalized Syntax for Grids

1. **Grid Basics**

```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

- **`.row`**: A row is used to wrap columns and is required to contain columns.
- **`.col`**: A column automatically spans equal width across the container. 

2. **Column Sizing**

```html
<div class="container">
    <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-8">Column 2</div>
    </div>
</div>
```

- **`.col-{n}`**: Defines a column's width based on the 12-column grid system, where `n` is a number between 1 and 12.

3. **Responsive Columns**

```html
<div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4">Responsive Column 1</div>
        <div class="col-md-6 col-lg-4">Responsive Column 2</div>
        <div class="col-md-12 col-lg-4">Responsive Column 3</div>
    </div>
</div>
```

- **`.col-{breakpoint}-{n}`**: Specifies a column's width for a specific breakpoint.

4. **No Gutters**

```html
<div class="container">
    <div class="row no-gutters">
        <div class="col">No gutter column 1</div>
        <div class="col">No gutter column 2</div>
    </div>
</div>
```

- **`.no-gutters`**: Removes the gutter (spacing) between columns within a row.

### Breakpoints

Bootstrap's grid system uses a series of breakpoints to determine how columns should stack or align horizontally based on the screen size:

- **Extra small (xs)**: `<576px`, columns are stacked vertically by default.
- **Small (sm)**: `≥576px`, columns can align horizontally.
- **Medium (md)**: `≥768px`, columns can align horizontally.
- **Large (lg)**: `≥992px`, columns can align horizontally.
- **Extra large (xl)**: `≥1200px`, columns can align horizontally.
- **Extra extra large (xxl)**: `≥1400px`, columns can align horizontally.

### Example of Grid System

Here’s a complete example of a grid system using Bootstrap:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid Example</title>
    <!-- Including Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

<div class="container mt-5">
    <h2>Basic Grid Example</h2>
    <div class="row">
        <div class="col-4 bg-light border">Column 1 (col-4)</div>
        <div class="col-4 bg-secondary border">Column 2 (col-4)</div>
        <div class="col-4 bg-light border">Column 3 (col-4)</div>
    </div>
    
    <h2 class="mt-5">Responsive Grid Example</h2>
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 bg-light border">Responsive Column 1</div>
        <div class="col-sm-12 col-md-6 col-lg-4 bg-secondary border">Responsive Column 2</div>
        <div class="col-sm-12 col-md-12 col-lg-4 bg-light border">Responsive Column 3</div>
    </div>
</div>

<!-- Including Bootstrap Bundle (Bootstrap JS ) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

### Explanation of the Example

- **Basic Grid**: Demonstrates a simple three-column layout using `.col-4` classes. Each column takes up 4 out of 12 parts of the row, resulting in three equal columns.
- **Responsive Grid**: Uses responsive classes like `.col-sm-12`, `.col-md-6`, and `.col-lg-4` to adjust the column layout at different breakpoints.
  - On small screens (`<576px`), each column takes up the full width.
  - On medium screens (`≥768px`), each column takes up half the width.
  - On large screens (`≥992px`), each column takes up a third of the width.


# Lecture 4: Typography and Colors
## Bootstrap 5 Typography

Bootstrap 5 comes with a powerful set of typography utilities that make it easy to style text content on your web pages. These utilities help create visually appealing and consistent designs by providing classes for headings, body text, alignment, and more.

#### 1. **Headings**

Bootstrap provides classes to style headings, which correspond to HTML heading tags (`<h1>` to `<h6>`). You can use these classes to apply heading styles without using actual heading tags.

- **Bootstrap Classes:**
  ```html
  <p class="h1">Heading 1</p>
  <p class="h2">Heading 2</p>
  <p class="h3">Heading 3</p>
  <p class="h4">Heading 4</p>
  <p class="h5">Heading 5</p>
  <p class="h6">Heading 6</p>
  ```

#### 2. **Display Headings**

Display headings are used for larger text elements, such as page titles or section headers.

- **Classes:**
  ```html
  <h1 class="display-1">Display 1</h1>
  <h2 class="display-2">Display 2</h2>
  <h3 class="display-3">Display 3</h3>
  <h4 class="display-4">Display 4</h4>
  <h5 class="display-5">Display 5</h5>
  <h6 class="display-6">Display 6</h6>
  ```

#### 3. **Lead Paragraph**

A lead paragraph is used to highlight introductory text. It is slightly larger and lighter in color.

- **Class:**
  ```html
  <p class="lead">This is a lead paragraph. It stands out more than regular text.</p>
  ```

#### 4. **Inline Text Elements**

Bootstrap provides classes for various inline text styles:

- **Bold and Italic:**
  ```html
  <p>This is <strong>bold</strong> text.</p>
  <p>This is <em>italic</em> text.</p>
  ```

- **Classes for Bold and Italic:**
  ```html
  <p>This is <span class="fw-bold">bold</span> text.</p>
  <p>This is <span class="fst-italic">italic</span> text.</p>
  ```

- **Underlined Text:**
  ```html
  <p>This is <u>underlined</u> text.</p>
  ```

- **Small Text:**
  ```html
  <p>This is <small>small</small> text.</p>
  ```

- **Text Color:**
  ```html
  <p class="text-primary">This is primary text.</p>
  <p class="text-secondary">This is secondary text.</p>
  <p class="text-success">This is success text.</p>
  <p class="text-danger">This is danger text.</p>
  <p class="text-warning">This is warning text.</p>
  <p class="text-info">This is info text.</p>
  <p class="text-light bg-dark">This is light text on dark background.</p>
  <p class="text-dark">This is dark text.</p>
  <p class="text-muted">This is muted text.</p>
  <p class="text-white bg-dark">This is white text on dark background.</p>
  ```

#### 5. **Text Alignment**

Align text using the text alignment classes:

- **Classes:**
  ```html
  <p class="text-start">Left-aligned text.</p>
  <p class="text-center">Center-aligned text.</p>
  <p class="text-end">Right-aligned text.</p>
  ```

#### 6. **Text Transform**

Transform text to uppercase, lowercase, or capitalize it:

- **Classes:**
  ```html
  <p class="text-lowercase">Lowercased text.</p>
  <p class="text-uppercase">Uppercased text.</p>
  <p class="text-capitalize">apitalized text.</p>
  ```

#### 7. **Text Wrapping and Overflow**

Control text wrapping and overflow with these classes:

- **No Wrap:**
  ```html
  <p class="text-nowrap">This text will not wrap to the next line.</p>
  ```

- **Text Truncate:**
  ```html
  <div class="text-truncate" style="width: 150px;">
    This is a long text that will be truncated.
  </div>
  ```

#### 8. **Text Decoration**

Control text decoration with the following classes:

- **Classes:**
  ```html
  <p class="text-decoration-underline">Underlined text.</p>
  <p class="text-decoration-line-through">Strikethrough text.</p>
  <p class="text-decoration-none">No decoration text.</p>
  ```

#### 9. **Font Weight and Italics**

Change the weight and style of the font using these classes:

- **Classes:**
  ```html
  <p class="fw-bold">Bold text.</p>
  <p class="fw-bolder">Bolder text.</p>
  <p class="fw-normal">Normal weight text.</p>
  <p class="fw-light">Light text.</p>
  <p class="fw-lighter">Lighter text.</p>
  <p class="fst-italic">Italic text.</p>
  <p class="fst-normal">Normal style text.</p>
  ```

#### 10. **Font Size**

Bootstrap 5 allows changing the font size using utility classes:

- **Classes:**
  ```html
  <p class="fs-1">Font size 1</p>
  <p class="fs-2">Font size 2</p>
  <p class="fs-3">Font size 3</p>
  <p class="fs-4">Font size 4</p>
  <p class="fs-5">Font size 5</p>
  <p class="fs-6">Font size 6</p>
  ```

#### 11. **Marking Text**

Highlight text using the `<mark>` tag or `.mark` class:

- **HTML Tag:**
  ```html
  <p>This is <mark>highlighted</mark> text.</p>
  ```

- **Bootstrap Class:**
  ```html
  <p>This is <span class="mark">highlighted</span> text.</p>
  ```

#### 12. **Blockquote**

Bootstrap provides styling for blockquotes, often used to quote text.

- **Blockquote with Footer:**
  ```html
  <blockquote class="blockquote">
    <p>"This is a blockquote."</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
  ```

#### 13. **Lists**

Bootstrap offers classes for styling lists, including unstyled and inline lists.

- **Unstyled List:**
  ```html
  <ul class="list-unstyled">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

- **Inline List:**
  ```html
  <ul class="list-inline">
    <li class="list-inline-item">Item 1</li>
    <li class="list-inline-item">Item 2</li>
    <li class="list-inline-item">Item 3</li>
  </ul>
  ```

Here's a comprehensive lecture on Bootstrap 5 colors, covering all the relevant classes, functions, and general syntax. Bootstrap 5 provides a wide range of utility classes to apply colors consistently across your web application, making it easy to style text, backgrounds, borders, and more.

## Bootstrap 5 Colors

Bootstrap 5 offers a comprehensive set of color utility classes to style various elements such as text, backgrounds, borders, and more. These utility classes help in applying consistent color schemes across your web application.

#### 1. **Color Palette**

Bootstrap 5 provides a color palette with a set of standard colors and variants for styling text, backgrounds, and other elements. The main color options include:

- **Primary**
- **Secondary**
- **Success**
- **Danger**
- **Warning**
- **Info**
- **Light**
- **Dark**
- **White**
- **Transparent**

#### 2. **Text Colors**

To apply colors to text, use the `.text-{color}` classes. These classes can be applied to any text element.

- **Syntax:**
  ```html
  <p class="text-primary">Primary text</p>
  <p class="text-secondary">Secondary text</p>
  <p class="text-success">Success text</p>
  <p class="text-danger">Danger text</p>
  <p class="text-warning">Warning text</p>
  <p class="text-info">Info text</p>
  <p class="text-light bg-dark">Light text</p>
  <p class="text-dark">Dark text</p>
  <p class="text-muted">Muted text</p>
  <p class="text-white bg-dark">White text</p>
  ```

#### 3. **Background Colors**

To change the background color of an element, use the `.bg-{color}` classes. These classes can be used for any block-level or inline elements.

- **Syntax:**
  ```html
  <div class="bg-primary text-white p-3">Primary background</div>
  <div class="bg-secondary text-white p-3">Secondary background</div>
  <div class="bg-success text-white p-3">Success background</div>
  <div class="bg-danger text-white p-3">Danger background</div>
  <div class="bg-warning text-dark p-3">Warning background</div>
  <div class="bg-info text-white p-3">Info background</div>
  <div class="bg-light text-dark p-3">Light background</div>
  <div class="bg-dark text-white p-3">Dark background</div>
  <div class="bg-white text-dark p-3">White background</div>
  ```

#### 4. **Border Colors**

Bootstrap allows you to apply colors to borders using the `.border-{color}` classes. These classes can be used to add colored borders to elements.

- **Syntax:**
  ```html
  <div class="border border-primary p-3">Primary border</div>
  <div class="border border-secondary p-3">Secondary border</div>
  <div class="border border-success p-3">Success border</div>
  <div class="border border-danger p-3">Danger border</div>
  <div class="border border-warning p-3">Warning border</div>
  <div class="border border-info p-3">Info border</div>
  <div class="border border-light p-3">Light border</div>
  <div class="border border-dark p-3">Dark border</div>
  <div class="border border-white p-3 bg-dark">White border</div>
  ```

#### 5. **Custom Colors**

You can create custom colors by defining your own CSS classes or by extending Bootstrap's Sass variables. This allows you to add brand-specific colors or other color variations.

- **Custom CSS Class:**
  ```css
  .custom-color {
    color: #3498db; /* Custom color */
  }
  ```

- **Usage:**
  ```html
  <p class="custom-color">This is custom colored text.</p>
  ```

#### 6. **Color Opacity**

Bootstrap 5 allows you to adjust the opacity of colors using `.bg-opacity-{value}` classes. This is especially useful for creating overlays or semi-transparent backgrounds.

- **Syntax:**
  ```html
  <div class="bg-primary bg-opacity-75 text-white p-3">Primary background with 75% opacity</div>
  <div class="bg-secondary bg-opacity-50 text-white p-3">Secondary background with 50% opacity</div>
  <div class="bg-success bg-opacity-25 text-white p-3">Success background with 25% opacity</div>
  ```

**Note**: The opacity values can be set in increments of 10 from 0 to 100 (e.g., `bg-opacity-10`, `bg-opacity-20`, ..., `bg-opacity-100`).

#### 7. **Color Combinations**

Combining text and background colors can create visually appealing designs. Here are a few examples:

- **Example Combinations:**
  ```html
  <div class="bg-primary text-light p-3">Primary background with light text</div>
  <div class="bg-warning text-dark p-3">Warning background with dark text</div>
  <div class="bg-dark text-white p-3">Dark background with white text</div>
  <div class="bg-info text-dark p-3">Info background with dark text</div>
  ```

Here's a detailed lecture on handling images and figures in Bootstrap 5. Bootstrap provides various utilities to handle images efficiently, ensuring they are responsive and styled consistently across different devices and screen sizes.

# Lecture 5: Images, Figures and Tables
## Bootstrap 5: Images and Figures

Bootstrap 5 provides several utilities and components to style and handle images effectively. With responsive classes, alignment options, and figure components, Bootstrap makes it easy to create visually appealing and flexible layouts.

#### 1. **Responsive Images**

Bootstrap offers a class to make images responsive, ensuring they adapt to different screen sizes and maintain their aspect ratio.

- **Class: `.img-fluid`**
  
  The `.img-fluid` class applies `max-width: 100%` and `height: auto` to the image, making it scale with the width of its parent container.

- **Example:**
  ```html
  <img src="path/to/image.jpg" class="img-fluid" alt="Responsive image">
  ```

#### 2. **Image Shapes**

Bootstrap provides classes to style images with rounded corners, circles, or thumbnails.

- **Rounded Images:**

  - **Class: `.rounded`**

    The `.rounded` class adds border-radius to make images have rounded corners.

    ```html
    <img src="path/to/image.jpg" class="rounded" alt="Rounded image">
    ```

- **Circle Images:**

  - **Class: `.rounded-circle`**

    The `.rounded-circle` class styles images to appear as circles. The image must be square for the circle effect to display correctly.

    ```html
    <img src="path/to/square-image.jpg" class="rounded-circle" alt="Circle image">
    ```

- **Thumbnail Images:**

  - **Class: `.img-thumbnail`**

    The `.img-thumbnail` class adds a border and padding, giving the image a thumbnail appearance.

    ```html
    <img src="path/to/image.jpg" class="img-thumbnail" alt="Thumbnail image">
    ```

#### 3. **Alignment**

Bootstrap provides utility classes to align images within a container.

- **Float Classes:**
  
  - **Classes: `.float-start`, `.float-end`, `.float-none`**

    These classes float images to the left, right, or remove floating, respectively.

    ```html
    <img src="path/to/image.jpg" class="float-start" alt="Left-aligned image">
    <img src="path/to/image.jpg" class="float-end" alt="Right-aligned image">
    ```

- **Center Alignment:**

  - **Class: `.mx-auto`**

    This class centers an image horizontally within a container.

    ```html
    <div class="text-center">
      <img src="path/to/image.jpg" class="mx-auto d-block" alt="Centered image">
    </div>
    ```

#### 4. **Figures**

The figure component in Bootstrap allows you to group images with captions, providing semantic meaning and styling.

- **Basic Figure:**

  - **HTML Structure:**

    ```html
    <figure>
      <img src="path/to/image.jpg" class="img-fluid" alt="Figure image">
      <figcaption>Caption for the image</figcaption>
    </figure>
    ```

- **Styled Figures:**

  - **Classes: `.figure`, `.figure-img`, `.figure-caption`**

    Bootstrap offers specific classes for styling figures.

    ```html
    <figure class="figure">
      <img src="path/to/image.jpg" class="figure-img img-fluid rounded" alt="Figure image">
      <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
    </figure>
    ```

#### 5. **Lazy Loading**

Modern browsers support lazy loading, which can be utilized with images to improve performance. This feature defers loading off-screen images until the user scrolls near them.

- **Attribute: `loading="lazy"`**

  ```html
  <img src="path/to/image.jpg" class="img-fluid" alt="Lazy loaded image" loading="lazy">
  ```

#### 6. **Responsive Breakpoints**

To control image display at different breakpoints, use Bootstrap's responsive display utility classes.

- **Classes: `d-{breakpoint}-{value}`**

  Control the display of images based on screen size.

  ```html
  <img src="path/to/image.jpg" class="d-none d-md-block" alt="Responsive image">
  ```

  - **Explanation:**
    - `d-none`: Hides the image by default.
    - `d-md-block`: Displays the image as a block element on medium-sized screens and larger.


Here's a detailed lecture on how to work with tables in Bootstrap 5. Bootstrap provides a set of classes to create stylish, responsive, and functional tables that are easy to integrate into your web application.

## Bootstrap 5: Tables

Bootstrap 5 offers a comprehensive set of classes and components to style tables effectively. These utilities make it easy to create tables that are responsive, visually appealing, and rich in functionality.

#### 1. **Basic Table Structure**

Bootstrap tables are built using standard HTML table elements (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`). Bootstrap provides additional classes to style these elements.

- **HTML Structure:**

  ```html
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
      </tr>
    </tbody>
  </table>
  ```

#### 2. **Table Classes**

Bootstrap provides several classes to enhance the appearance and functionality of tables.

- **Basic Table Class:**

  - **Class: `.table`**

    The base class for styling tables. It adds basic styling and spacing to the table elements.

    ```html
    <table class="table">
      <!-- Table content -->
    </table>
    ```

#### 3. **Table Variants**

Bootstrap offers variants to style tables with different background colors and borders.

- **Striped Rows:**

  - **Class: `.table-striped`**

    Adds a zebra-striping effect to rows for better readability.

    ```html
    <table class="table table-striped">
      <!-- Table content -->
    </table>
    ```

- **Bordered Table:**

  - **Class: `.table-bordered`**

    Adds borders to all table cells.

    ```html
    <table class="table table-bordered">
      <!-- Table content -->
    </table>
    ```

- **Borderless Table:**

  - **Class: `.table-borderless`**

    Removes all borders from the table.

    ```html
    <table class="table table-borderless">
      <!-- Table content -->
    </table>
    ```

- **Hoverable Rows:**

  - **Class: `.table-hover`**

    Adds a hover effect to rows for improved interactivity.

    ```html
    <table class="table table-hover">
      <!-- Table content -->
    </table>
    ```

- **Small Table:**

  - **Class: `.table-sm`**

    Reduces the padding and font size of the table for a more compact appearance.

    ```html
    <table class="table table-sm">
      <!-- Table content -->
    </table>
    ```

#### 4. **Table Colors**

Bootstrap allows you to apply contextual classes to change the background color of table rows or cells based on the state of the data.

- **Contextual Classes:**

  ```html
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-primary">
        <td>Primary</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-secondary">
        <td>Secondary</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-success">
        <td>Success</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-danger">
        <td>Danger</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-warning">
        <td>Warning</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-info">
        <td>Info</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-light">
        <td>Light</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
      <tr class="table-dark">
        <td>Dark</td>
        <td>Data</td>
        <td>Info</td>
      </tr>
    </tbody>
  </table>
  ```

#### 5. **Responsive Tables**

Bootstrap provides utilities to make tables responsive, ensuring they adapt to different screen sizes and overflow correctly on smaller devices.

- **Responsive Wrapper:**

  - **Class: `.table-responsive`**

    Wrap the table in a `div` with the `.table-responsive` class to make it horizontally scrollable on smaller screens.

    ```html
    <div class="table-responsive">
      <table class="table">
        <!-- Table content -->
      </table>
    </div>
    ```

- **Breakpoint-specific Responsiveness:**

  Bootstrap allows you to apply responsiveness at specific breakpoints, ensuring tables are only scrollable at defined screen sizes.

  - **Classes: `.table-responsive-{breakpoint}`**

    ```html
    <div class="table-responsive-sm"> <!-- Responsive on small screens and up -->
      <table class="table">
        <!-- Table content -->
      </table>
    </div>
    ```

    - **Breakpoints:**
      - `.table-responsive-sm`: Responsive on small devices and up
      - `.table-responsive-md`: Responsive on medium devices and up
      - `.table-responsive-lg`: Responsive on large devices and up
      - `.table-responsive-xl`: Responsive on extra-large devices and up

#### 6. **Captions**

Bootstrap allows you to add captions to tables for better accessibility and context.

- **Class: `<caption>`**

  Add a `<caption>` element as the first child of the table to provide a title or summary.

  ```html
  <table class="table">
    <caption>Table caption</caption>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
    </tbody>
  </table>
  ```

#### 7. **Additional Table Features**

Bootstrap tables can be extended with custom features like sorting, filtering, and pagination using JavaScript libraries or frameworks like DataTables or React Table.

# Lecture 6:Forms
## Forms Overview

### 1. **Introduction to Bootstrap 5 Forms**

- Briefly recap the previous lectures on Bootstrap.
- Highlight the importance of forms in web development.
- Introduce today's topics: fieldset, form classes, and disabled states.

### 2. **Fieldsets in Bootstrap 5**

Fieldsets are used to group related elements in a form and typically include a legend to describe the group.

**Example:**
```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email">
    </div>
  </fieldset>
</form>
```

**Key Points:**
- The `<fieldset>` element groups form controls.
- The `<legend>` element provides a caption for the fieldset.

### 3. **Form Classes**

Bootstrap provides several classes to style forms easily.

**Form Layouts:**
- **Vertical Form (default)**
  ```html
  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

- **Horizontal Form**
  ```html
  <form>
    <div class="row mb-3">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email">
      </div>
    </div>
    <div class="row mb-3">
      <label for="password" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="password">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  ```

**Key Points:**
- Use `.form-control` for input elements to get Bootstrap styles.
- Use `.form-label` for labels to ensure proper spacing.
- Use `.row` and `.col-` classes for horizontal forms.

### 4. **Disabled States**

Bootstrap allows you to disable form controls easily.

**Disabling a form control:**
```html
<form>
  <fieldset disabled>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" disabled>Submit</button>
  </fieldset>
</form>
```

**Key Points:**
- The `disabled` attribute can be added to individual form controls or the entire `<fieldset>`.
- Disabled form controls are not submitted with the form.

## Form Controls

### 1. **Form Control Sizing**

Bootstrap allows you to easily adjust the size of form controls.

**Examples:**
- **Small Input:**
  ```html
  <input class="form-control form-control-sm" type="text" placeholder="Small input">
  ```

- **Large Input:**
  ```html
  <input class="form-control form-control-lg" type="text" placeholder="Large input">
  ```

**Key Points:**
- Use `.form-control-sm` for small inputs.
- Use `.form-control-lg` for large inputs.

### 2. **Disabled Form Controls**

Disabled form controls are unusable and un-clickable.

**Examples:**
- **Disabled Input:**
  ```html
  <input class="form-control" type="text" placeholder="Disabled input" disabled>
  ```

- **Disabled Select:**
  ```html
  <select class="form-select" disabled>
    <option>Disabled select</option>
  </select>
  ```

**Key Points:**
- Add the `disabled` attribute to form controls to disable them.

### 3. **Read-Only Form Controls**

Read-only form controls are not editable but can be focused and copied.

**Example:**
```html
<input class="form-control" type="text" placeholder="Readonly input" readonly>
```

**Key Points:**
- Add the `readonly` attribute to form controls to make them read-only.

### 4. **File Inputs**

Bootstrap styles file inputs to make them more visually appealing.

**Example:**
```html
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
```

**Key Points:**
- Use the `type="file"` attribute to create file input fields.
- Bootstrap's `.form-control` class can be used to style the file input.

### 5. **Color Inputs**

Bootstrap supports color inputs for selecting colors.

**Example:**
```html
<div class="mb-3">
  <label for="exampleColorInput" class="form-label">Color picker</label>
  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
</div>
```

**Key Points:**
- Use the `type="color"` attribute for color input fields.
- The `.form-control-color` class ensures the color picker is styled appropriately.

### 6. **Data Lists**

Data lists provide a list of predefined options for an input field.

**Example:**
```html
<div class="mb-3">
  <label for="exampleDataList" class="form-label">Datalist example</label>
  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
  <datalist id="datalistOptions">
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
  </datalist>
</div>
```

**Key Points:**
- Use the `<datalist>` element to define a list of options.
- Associate the `<datalist>` with an `<input>` using the `list` attribute.

### 7. **Select Dropdowns**

Select dropdowns allow users to choose from a list of options.

**Basic Select:**
```html
<div class="mb-3">
  <label for="basicSelect" class="form-label">Basic select</label>
  <select class="form-select" id="basicSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```

**Select Sizing:**
- **Small Select:**
  ```html
  <select class="form-select form-select-sm" aria-label="Small select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  ```

- **Large Select:**
  ```html
  <select class="form-select form-select-lg" aria-label="Large select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  ```

**Key Points:**
- Use `.form-select` to style select elements.
- Use `.form-select-sm` for small selects.
- Use `.form-select-lg` for large selects.

### 8. **Checkboxes and Radios**

Checkboxes and radios are used for selecting one or multiple options.

**Checkboxes:**
- **Basic Checkbox:**
  ```html
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  ```

- **Inline Checkbox:**
  ```html
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  ```

**Radios:**
- **Basic Radio:**
  ```html
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Default radio
    </label>
  </div>
  ```

- **Inline Radio:**
  ```html
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>
  ```

**Key Points:**
- Use `.form-check` for styling checkboxes and radios.
- Use `.form-check-inline` for inline checkboxes and radios.

### 9. **Switches**

Switches are styled checkboxes that function as on/off toggles.

**Basic Switch:**
```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
```

**Key Points:**
- Use `.form-switch` to create switch-style checkboxes.

### 10. **Range Inputs**

Range inputs allow users to select a value from a specified range.

**Example:**
```html
<div class="mb-3">
  <label for="customRange1" class="form-label">Example range</label>
  <input type="range" class="form-range" id="customRange1">
</div>
```

**Key Points:**
- Use the `type="range"` attribute for range inputs.
- Use the `.form-range` class to style range inputs.

### 11. **Input Groups**

Input groups extend form controls by adding text, buttons, or other elements.

**Example:**
- **Text Addon:**
  ```html
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  ```

- **Button Addon:**
  ```html
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
  ```

**Key Points:**
- Use `.input-group` to wrap input elements and their addons.
- Use `.input-group-text` for text addons and buttons within the group.

### 12. **Floating Labels**

Floating labels are a modern design pattern where the label floats above the input when it is focused or filled.

**Example:**
```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
```

**Key Points:**
- Use the `.form-floating` class to wrap input and label elements.
- Ensure the placeholder attribute is present in the input for accessibility.

### 13. **Form Layouts**

Bootstrap offers several layout options for forms to fit different use cases.

**Vertical Form (Default):**
- Example:
  ```html
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

**Horizontal Form:**
- Example:
  ```html
  <form>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  ```

**Inline Form:**
- Example:
  ```html
  <form class="row g-3">
    <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Email</label>
      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>
    <div class="col-auto">
      <label for="inputPassword2" class="visually-hidden">Password</label>
      <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
    </div>
  </form>
  ```

**Key Points:**
- Use `.row` and `.col-` classes for horizontal forms.
- Use `.form-inline` for inline forms (Note: Bootstrap 5 uses utilities for inline forms, `.form-inline` is deprecated).

### 14. **Form Validation**

Bootstrap provides custom validation styles for error, warning, and success states on form controls.

**Example:**
```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
```

**Key Points:**
- Add the `novalidate` attribute to disable default browser validation.
- Use `.was-validated` class on the form element to enable Bootstrap validation styles.
- Use `.is-valid` and `.is-invalid` on form controls to show validation feedback.

### Summary:
- **Sizing**: Use `.form-control-sm` and `.form-control-lg` for small and large inputs.
- **Disabled**: Add `disabled` attribute to make form controls unusable.
- **Read-Only**: Add `readonly` attribute to make form controls uneditable.
- **File Inputs**: Use `type="file"` for file selection.
- **Color Inputs**: Use `type="color"` for color selection.
- **Data Lists**: Use `<datalist>` to provide a predefined list of options.
- **Select Dropdowns**: Use `.form-select` for select elements. Size with `.form-select-sm` and `.form-select-lg`.
- **Checkboxes**: Style with `.form-check` and `.form-check-inline` for inline checkboxes.
- **Radios**: Style with `.form-check` and `.form-check-inline` for inline radios.
- **Switches**: Use `.form-switch` to create switch-style checkboxes.
- **Range Inputs**: Use `.form-range` for styling range inputs.
- **Input Groups**: Use `.input-group` and `.input-group-text` to extend form controls.
- **Floating Labels**: Use `.form-floating` to create modern floating labels.
- **Form Layouts**: Choose between vertical, horizontal, and inline layouts.
- **Form Validation**: Utilize Bootstrap's validation styles for custom feedback messages.

# Lecture 7: Bootstrap's Components
Here's a detailed breakdown of the UI components, including their usage, introduction, scenarios, differences from related components, and links to practical examples:

## 1. **Accordion**
   - **Introduction**: An accordion is a vertically stacked list of items, each of which can be expanded or collapsed to reveal or hide content.
   - **Usage**: Used to organize and condense large amounts of content into a small space, allowing users to choose which sections they want to view.
   - **Scenarios**: FAQs, terms and conditions, or any other structured content that can be broken into sections.
   - **Difference**: Compared to tabs, an accordion allows multiple sections to be expanded at once and is better suited for mobile interfaces.
   - **Practical Uses**:
     - [Apple's Support FAQ Section](https://support.apple.com/)
     - [Wikipedia’s Mobile View](https://en.wikipedia.org/)

## 2. **Alerts**
   - **Introduction**: Alerts are messages that capture the user's attention to provide important information, warnings, or confirmations.
   - **Usage**: Commonly used to show success messages, error warnings, or information prompts.
   - **Scenarios**: Form submissions, warning messages, or confirmations.
   - **Difference**: Unlike toasts, alerts are typically more prominent and require user acknowledgment or action.
   - **Practical Uses**:
     - [Facebook’s Account Security Alerts](https://www.facebook.com/)
     - [Google’s Gmail Error Alerts](https://mail.google.com/)

## 3. **Badge**
   - **Introduction**: Badges are small count indicators or labels that highlight a particular status, category, or count of items.
   - **Usage**: Often used to show counts, such as unread messages, notifications, or statuses.
   - **Scenarios**: Notification icons, item counts in carts, or labeling new features.
   - **Difference**: Compared to labels or tags, badges are usually more compact and often represent numbers or statuses.
   - **Practical Uses**:
     - [Facebook's Notification Badges](https://www.facebook.com/)
     - [Gmail's Unread Email Count](https://mail.google.com/)

## 4. **Breadcrumb**
   - **Introduction**: Breadcrumbs are a secondary navigation aid that helps users understand their current location within a website’s hierarchy.
   - **Usage**: They are used to improve navigation by showing the path to the current page.
   - **Scenarios**: E-commerce sites, documentation, or any multi-level website structure.
   - **Difference**: Breadcrumbs differ from navigation bars as they represent a user’s path or history rather than the primary site structure.
   - **Practical Uses**:
     - [Amazon’s Category Navigation](https://www.amazon.com/)
     - [Wikipedia's Breadcrumbs in Category Pages](https://en.wikipedia.org/wiki/Main_Page)

## 5. **Buttons**
   - **Introduction**: Buttons are interactive elements that allow users to trigger actions, such as submitting a form, starting a process, or navigating to another page.
   - **Usage**: Buttons are widely used in forms, dialogs, navigation bars, and interactive elements.
   - **Scenarios**: Form submissions, navigation links, or action triggers like "buy now" or "download."
   - **Difference**: Compared to links, buttons are generally used for actions rather than navigation, though they can overlap in some cases.
   - **Practical Uses**:
     - [Google’s Search Button](https://www.google.com/)
     - [Netflix's Play Button](https://www.netflix.com/)

## 6. **Button Group**
   - **Introduction**: Button groups are a set of buttons grouped together in a single line, often used for related actions.
   - **Usage**: Useful for creating toolbars, action sets, or segmented controls.
   - **Scenarios**: Text editors, grouped action items, or filtering options.
   - **Difference**: Unlike individual buttons, button groups are visually connected and typically relate to one another.
   - **Practical Uses**:
     - [Google Docs Toolbar Button Groups](https://docs.google.com/)
     - [Bootstrap Button Groups Example](https://getbootstrap.com/docs/5.3/components/button-group/)

These components are fundamental elements of modern web design and development, playing critical roles in creating interactive and user-friendly interfaces. Each component has its specific use cases and can be seen across a wide range of websites.

# Lecture 8: Bootstrap's Components (Cont.)
 Here's a breakdown of each component, including their usage, introduction, scenarios where they are useful, differences with related components, and links to websites where they are practically used:

## 7. **Card**
   - **Introduction**: A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
   - **Usage**: Cards are used to display information in a concise, organized manner. They can contain text, images, links, and other content.
   - **Scenarios**: Displaying user profiles, product details, blog posts, or other modular content.
   - **Difference**: Cards differ from other containers like panels in their flexibility and aesthetic customization options.
   - **Practical Use**: [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)

## 8. **Carousel**
   - **Introduction**: A carousel is a slideshow for cycling through a series of content, typically images or text.
   - **Usage**: Used to showcase a variety of content in a single space, allowing users to scroll through the items.
   - **Scenarios**: Image galleries, product showcases, featured articles on homepages.
   - **Difference**: Compared to a slider, a carousel often includes indicators, controls, and can display multiple items at once.
   - **Practical Use**: [Nike's Homepage](https://www.nike.com/) features a carousel for highlighting products.

## 9. **Close Button**
   - **Introduction**: A close button is a simple button used to dismiss content like alerts, modals, or other elements.
   - **Usage**: Provides a user-friendly way to close or dismiss a component or content area.
   - **Scenarios**: Closing modal windows, dismissing alert messages.
   - **Difference**: Unlike a generic button, a close button is specifically styled and often used within other components.
   - **Practical Use**: [Bootstrap's Modal](https://getbootstrap.com/docs/5.3/components/modal/#static-backdrop)

## 10. **Collapse**
   - **Introduction**: Collapse is a component that allows you to toggle the visibility of content.
   - **Usage**: Commonly used to show and hide content with a smooth sliding effect.
   - **Scenarios**: FAQs, collapsible menus, and accordions.
   - **Difference**: Compared to a modal, collapse is inline with the content and does not overlay the rest of the page.
   - **Practical Use**: [Bootstrap Collapse](https://getbootstrap.com/docs/5.3/components/collapse/)

## 11. **Dropdowns**
   - **Introduction**: A dropdown is a toggleable, contextual menu for displaying a list of links or actions.
   - **Usage**: Often used for navigation menus, settings, or any list of actions that can be grouped together.
   - **Scenarios**: User profile actions, navigation menus, filters on e-commerce sites.
   - **Difference**: Dropdowns differ from accordions as they are typically used for navigation or action selection rather than content display.
   - **Practical Use**: [Amazon's Account Dropdown](https://www.amazon.com/) on the top navigation bar.

## 12. **List Group**
   - **Introduction**: A list group is a flexible component for displaying a series of content, such as a simple list of items.
   - **Usage**: Can be used for anything from a simple list of links to complex content.
   - **Scenarios**: Navigation menus, list of tasks, or displaying a series of items like messages or notifications.
   - **Difference**: Compared to tables, list groups are more flexible and aesthetically versatile.
   - **Practical Use**: [Slack's Sidebar](https://slack.com/) uses list groups for channels and direct messages.

## 13. **Modal**
   - **Introduction**: A modal is a dialog box/popup window that is displayed on top of the current page.
   - **Usage**: Used for actions that require user input or confirmation, like forms or alert messages.
   - **Scenarios**: Login forms, alert dialogs, or any interactive content that needs to temporarily interrupt the user’s workflow.
   - **Difference**: Unlike a tooltip or popover, a modal requires user interaction and typically prevents interaction with the rest of the page until dismissed.
   - **Practical Use**: [Facebook's New Post Modal](https://www.facebook.com/) when creating a new post.

## 14. **Navbar**
   - **Introduction**: A navbar is a responsive, horizontal navigation bar.
   - **Usage**: Used for primary site navigation, allowing users to browse different sections of a website.
   - **Scenarios**: Main website navigation, top headers with links and dropdowns.
   - **Difference**: Compared to a sidebar, a navbar is usually horizontal and situated at the top of the page.
   - **Practical Use**: [GitHub's Top Navigation Bar](https://github.com/)

## 15. **Navs & Tabs**
   - **Introduction**: Navs and tabs are components for navigating between views or sections within a single page.
   - **Usage**: Often used to switch between different sections of content within the same page.
   - **Scenarios**: Tabbed content, multi-step forms, or navigation within a single-page application.
   - **Difference**: Tabs are a specific type of navigation that often involves switching between different content sections without reloading the page.
   - **Practical Use**: [Bootstrap Tabs Example](https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs)

These components are part of many popular front-end frameworks and are essential for building responsive, user-friendly interfaces.

# Lecture 9: Bootstrap's Components (Cont.)
Here’s a detailed breakdown of the UI components, including their usage, introduction, scenarios, differences from related components, and links to practical examples:

## 16. **Offcanvas**
   - **Introduction**: Offcanvas components are hidden sidebars or menus that slide into view when triggered.
   - **Usage**: They are used to display additional content, navigation links, or actions without occupying space on the main screen.
   - **Scenarios**: Mobile navigation menus, additional settings panels, sidebars for extra content.
   - **Difference**: Compared to modals, offcanvas components slide in from the side rather than popping up in the middle of the screen.
   - **Practical Uses**:
     - [YouTube Mobile Sidebar Menu](https://www.youtube.com/)
     - [Twitter's Offcanvas Navigation on Mobile](https://twitter.com/)

## 17. **Pagination**
   - **Introduction**: Pagination divides content into discrete pages, providing users with navigation between pages.
   - **Usage**: Commonly used in situations where displaying all content at once would be overwhelming, such as lists, tables, or search results.
   - **Scenarios**: Search results pages, blog post listings, product catalogs.
   - **Difference**: Pagination offers navigation between pages, unlike infinite scrolling, which automatically loads content as the user scrolls.
   - **Practical Uses**:
     - [Google Search Results](https://www.google.com/)
     - [Amazon's Product Listings](https://www.amazon.com/)

## 18. **Placeholders**
   - **Introduction**: Placeholders are used to indicate that content is being loaded or to reserve space for content that is not yet available.
   - **Usage**: Often used during data fetching to improve perceived performance and provide visual feedback to users.
   - **Scenarios**: Loading states in content-heavy applications, image placeholders, or text placeholders.
   - **Difference**: Placeholders differ from spinners as they visually represent the content’s structure rather than just indicating a loading state.
   - **Practical Uses**:
     - [Facebook’s Content Placeholder while Loading](https://www.facebook.com/)
     - [LinkedIn’s Profile Page Loading](https://www.linkedin.com/)

## 19. **Popovers**
   - **Introduction**: Popovers are small overlay boxes that display additional information when a user hovers over or clicks an element.
   - **Usage**: They are used to provide additional context or details without cluttering the main interface.
   - **Scenarios**: Tooltips with more complex content, additional information on icons, or contextual help.
   - **Difference**: Popovers are more detailed than tooltips and can include more complex content like headers, text, and links.
   - **Practical Uses**:
     - [GitHub's Repository Information Popovers](https://github.com/)
     - [Trello’s Card Details Popovers](https://trello.com/)

## 20. **Progress**
   - **Introduction**: The progress component visually represents the completion of a task or process.
   - **Usage**: Used to indicate the progress of operations like file uploads, downloads, or multi-step processes.
   - **Scenarios**: File uploads, multi-step forms, surveys, task completion indicators.
   - **Difference**: Progress bars differ from spinners as they indicate how much of the task is completed rather than just indicating activity.
   - **Practical Uses**:
     - [Google Drive's File Upload Progress](https://drive.google.com/)
     - [Netflix’s Viewing Progress](https://www.netflix.com/)

## 21. **Scrollspy**
   - **Introduction**: Scrollspy is a component that automatically updates the navigation or other elements based on the user's scroll position.
   - **Usage**: Used in situations where the user scrolls through long content, and the navigation should reflect the current section.
   - **Scenarios**: Table of contents in documentation, single-page applications, or blogs with sections.
   - **Difference**: Scrollspy is distinct from simple navigation links because it tracks scroll position and updates the UI dynamically.
   - **Practical Uses**:
     - [Bootstrap Scrollspy Documentation](https://getbootstrap.com/docs/5.3/components/scrollspy/)
     - [Medium’s Sidebar Table of Contents](https://medium.com/)

## 22. **Spinners**
   - **Introduction**: Spinners are loading indicators that show users that content or data is being loaded.
   - **Usage**: Used during data fetching or processing to indicate that the system is working on a task.
   - **Scenarios**: Loading pages, data fetches, or waiting states for asynchronous processes.
   - **Difference**: Spinners only indicate activity, unlike progress bars which show the extent of the completion.
   - **Practical Uses**:
     - [Spotify's Loading Spinner](https://www.spotify.com/)
     - [Twitter's Loading Spinner](https://twitter.com/)

## 23. **Toasts**
   - **Introduction**: Toasts are lightweight notifications designed to provide feedback about an operation to the user.
   - **Usage**: They are used to display brief messages in response to user actions, often with minimal disruption to the user’s workflow.
   - **Scenarios**: Notifications for successful actions like saving a document, error messages, or other brief updates.
   - **Difference**: Unlike alerts, toasts are generally non-blocking and disappear after a short duration.
   - **Practical Uses**:
     - [Google Docs’ Save Notification](https://docs.google.com/)
     - [Instagram's Like Confirmation Toast](https://www.instagram.com/)

## 24. **Tooltips**
   - **Introduction**: Tooltips are small pop-up boxes that appear when a user hovers over or focuses on an element, providing additional information.
   - **Usage**: Used to display additional information about an element, usually in the form of a short message or explanation.
   - **Scenarios**: Icon descriptions, form field hints, or additional details on interactive elements.
   - **Difference**: Tooltips are more concise than popovers and typically display simple text, whereas popovers can contain richer content.
   - **Practical Uses**:
     - [Twitter's Profile Hover Tooltips](https://twitter.com/)
     - [Amazon’s Tooltip Descriptions](https://www.amazon.com/)

These components are integral to modern web development and are frequently utilized across various websites to enhance user experience and interface interactivity.

# Next steps
After finishing Bootstrap, CSS, and HTML, here are the next steps you can take to further advance your web development skills:

## 1. **Engage with the Community**
   - **Why**: Networking, continuous learning, and staying updated with the latest trends are important.
   - **Actions**:
     - Join online communities (Reddit, Stack Overflow, GitHub, Linkedin).
     - Contribute to open-source projects.
     - Attend local meetups or online webinars/conferences.

## 2. **Learn Version Control (Git)**\*
   - **Why**: Git is essential for tracking changes in your code, collaborating with others, and managing your projects.
   - **Focus Areas**:
     - Basic Git commands: `git init`, `git clone`, `git commit`, `git push`, etc.
     - Working with branches and merging code.
     - Using GitHub or GitLab for remote repositories.

## 3. **Practice Responsive Design**
   - **Why**: Ensuring that your websites work well on all devices is critical.
   - **Focus Areas**:
     - Media queries: Create layouts that adapt to different screen sizes.
     - Flexbox and Grid: For advanced layout techniques.
     - Mobile-first design principles.

## 4. **Start Building Projects**
   - **Why**: Applying what you've learned through real-world projects helps solidify your skills and build a portfolio.
   - **Project Ideas**:
     - Personal portfolio website.
     - E-commerce site (simplified).

## 5. **Learn about Web Performance Optimization**
   - **Why**: Fast, efficient websites provide a better user experience and rank better in search engines.
   - **Focus Areas**:
     - Image optimization, lazy loading, and compression techniques.
     - Minification of CSS and JS files.
     - Caching strategies.

## 6. **Learn JavaScript (JS)**\*
   - **Why**: JavaScript is essential for adding interactivity and dynamic behavior to your websites.
   - **Focus Areas**:
     - Understanding the basics: Variables, data types, loops, conditionals.
     - DOM manipulation: Learn how to interact with and modify HTML elements using JS.
     - Events: Handling user interactions like clicks, form submissions, etc.
     - Fetch API and AJAX: For handling asynchronous requests and working with APIs.

## 7. **Explore Additional Front-End Tools**
   - **Why**: Enhance your development workflow and output with additional tools.
   - **Options**:
     - **Webpack** or **Parcel**: For bundling your assets.
     - **SASS/SCSS**: Advanced CSS preprocessor for better styles management.
     - **TypeScript**: Typed superset of JavaScript that helps prevent errors and improve code quality.

Taking these steps will help you evolve from a front-end developer into a full-stack developer, giving you a broader and deeper understanding of web development.

<center>The End of <b>Bootstrap 5 Lectures</b></center>