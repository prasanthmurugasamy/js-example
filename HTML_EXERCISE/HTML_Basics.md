
  

## HTML

  

  

- Hyper Text Markup Language.

  

- Standard markup language for creating webpages.

  

- Describes the structure of a web page.

  

- Consists of series of elements.

  

- Elements tells the browser how to display contents.

  

  

## DOCTYPE:

  

It is used to notify the browser about the type of html version used. Based on the doctype the html content is rendered by the browser.

  

  

## Tags

  

  

- html -> root of an html page.

  

- head -> contains meta information about the html page.

  

|tags | description |

  

|--|--|

  

|html| root of an html page.|

  

|head | contains meta information about the html page. The following elements can go inside the **head** element: title, style ,base, link, meta script, no script

  

|title| Specifies a title of a html page|

  

|body| defines the body and is a container for all visible contents such as headings ,paragraphs ,images etc.,|

  

|p| paragraph |

  

|h1 - h6|heading tags -h1 is the most used & h6 is least used|

  

|a| hyperlink tag- < a href ="source">Text< /a >

  

|img | Image tag - < img src = "source" height/width >|

  

|br| Inserts a line single line break |

  

|link| defines the relationship between the current document and an external source |

  

  

## FORM

  

| | |

  

|--|--|

  

| form | Defines a html form for user input |

  

|The `<form>` element can contain one or more of the following form elements |input, textarea, button, select, option, optgroup, fieldset, label, output|

  

  

## INPUT

  

| | |

  

|--|--|

  

|Input |tag specifies an input field where the user can enter data |

  

|The different input types are as follows|< input type = " " > ~ button , checkbox , color , date , email , file , hidden , image , month , number , password , radio , range , reset ,search , submit , tel , text , url , week , time |

  

  

## TABLES

  


|  |  |
|--|--|
| table | Defines a table |
|caption| Defines table caption |
|th | header cell in a table |
|td | cell in a table |
| thead | Groups the header content in a table|
| tbody |Groups the body content in a table |
| colspan | Allows a single table cell to span the width of more than one cell or column.|
|rowspan| Allows a single table cell to span the height of more than one cell or row.|

  

## CSS

- CSS is the language used to style the html.

- Document -CSS dose not alters the content.

- CSS Stands for **cascading style sheet**

- CSS is designed to enable the separation of presentation and content, including layout, colors, and Fonts .

- This separation can improve content accessibility web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content;

  

## WAYS TO APPLY CSS

-->THREE WAY's.

  

**`INLINE`:**

Inline styles are plonked straight into the HTML tags using the style attribute.

  

Eg: `< p style="color: red">text</p >`

  

**`INTERNAL`:**

Embedded, or internal, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.

  

```html

<head>

<style>

  

p {

color: red;

}

  

a {

color: blue;

}

  

</style>

</head>

```

**`EXTERNAL`:**

External styles are used for the whole, multiple-page website. There is a **separate CSS file**.

  

```css

p {

color: red;

}

  

a {

color: blue;

}

```

This css can be saved as style.css and can be linked with a html page using link tag.

```html

<!DOCTYPE  html>

<html>

<head>

<title>CSS Example</title>

<link  rel="stylesheet"  href="style.css">

...

```

  

"TRY TO USE EXTERNAL CSS,THAT IS THE BEST PRACTICE."

  
  

## CSS BOX MODEL

The css box model is essentially a box that wraps around every HTML element .It consists of:

-Margins, Borders, padding, actual content.
 
Explanation of the different parts:

-   **Content**  - The content of the box, where text and images appear
-   **Padding**  - Clears an area around the content. The padding is transparent
-   **Border**  - A border that goes around the padding and content
-   **Margin**  - Clears an area outside the border. The margin is transparent

The box model allows us to add a border around elements, and to define space between elements.

## CSS RULES

A CSS rule is a grouping of one or more CSS properties which are to be applied to one or more target HTML elements.
A CSS rule consists of a CSS selector and a set of CSS properties. The CSS selector determines what HTML elements to target with the CSS rule. The CSS properties specifies what to style of the targeted HTML elements.

Eg:
```
  div {
      border    : 1px solid black;
      font-size : 18px;
  }
  ```

## CSS Selector

 - CSS selectors are used to "find" (or select) the HTML elements you want to style.

***Element Selector:***

 - The element selector selects HTML elements based on the element name.
 
Eg:
`` p {  
text-align:  center;  
color:  red;  
}``

**Id Selector**

 - The id selector uses the id attribute of an HTML element to select a specific element.
 - The id of an element is unique within a page, so the id selector is used to select one unique element!.
 - To select an element with a specific id, write a hash (#) character, followed by the id of the element.
 - An id name cannot start with a number!

Eg:

``#para1 {  
text-align:  center;  
color:  red;  
}``

**Class Selector**

 - The class selector selects HTML elements with a specific class attribute.
 - To select elements with a specific class, write a period (.) character, followed by the class name.
 - A class name cannot start with a number!

Eg::
`.center  {  
text-align:  center;  
color:  red;  
}
`

**Can also specify HTML elements of particular class.**
Eg:

`p.center {  
text-align:  center;  
color:  red;  
}`

--> < p > elements with class="center" will be red and center-aligned.

**More than one class**
`<p class="center large">This paragraph refers to two classes.</p>`

--> < p > element will be styled according to class="center" and to class="large"


## DIV

 - The  < div >  tag defines a division or a section in an HTML document.
 - The  < div >  tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
 - The  < div >  tag is easily styled by using the class or id attribute. 
 - Any sort of content can be put inside the  < div > tag!

## FLOAT
The  float  property specifies whether an element should float to the left, right, or not at all.

**Note:**  Absolutely positioned elements ignore the  float  property!

**Note:**  Elements next to a floating element will flow around it. To avoid this, use the  clear  property or the clear fix hack


