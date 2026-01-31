//! What is DOM?
//* DOM stands for Document Object Model.
//* DOM is an Application programming interface (API) which will allow us to access HTML elements inside the JS to provide functionalities.

//* The heirachical representation of a html element in the form of nodes.

//~ OR

//* The tree like structure of a HTML document is called a DOM.

//! Why do we need DOM?
//? DOM is a bridge between the HTML document and JS logic.
//? Without DOM we cannot manipulate(create,modify,remove) a HTML structure.

//! How to create a DOM?
//? When a browser load HTML document.
//* It reads a HTML structure.
//* It will create HTML document in a tree like structure.
//* This tree is called as DOM.

//? That mean JavaScript cannot directly talk to HTML structure instead it will talk to DOM.

//! Types of DOM:
//? 1. Core DOM  -> All types of Documents
//? 2. HTML DOM  -> Only for HTML Documents
//? 3. XML DOM   -> Only for XML Documents
//? 4. React DOM -> Virtual DOM

//! What is a Node?
//* A node is a basic building block in JS.
//* A node is a piece of item is JS which will represent different types of items which is called node.

//? Type of Nodes:
//* 1. document-node:top most node
//* 2. element node:h1,p,div,img,ul,etc
//* 3. attribute node:id,class,src,href,etc
//* 4. comment node:Comment inside a HTML
//* 5. Leaf Node:The node which is present at the end of the heirachy is called as Leaf node.
//* 6. text-node:Text node represents the content or text inside the html elements.
//* 7. DocumentsFragment node 

//! What is document?
//? The document is global object provided by the browser.
//? Here document represents the HTML structure.


//! Documents properties : ( Direct Access Properties)
//? Syntax : document.propertyName

console.log(document)

//? 1. document.title
console.log(document.title)
document.title="My Document"
console.log(document.title)

//? 2. document.head
console.log(document.head)

//? 3. document.body
console.log(document.body)

//? 4. document.url
console.log(document.url)

//? 5. document.all
console.log(document.all) 

//! Indirect Access: 
//* Indirect access means accessing the html elements by taking reference of an another element.

let list = document.getElementById("list");
console.log(list)

//? 1. parentElement
console.log(list.parentElement)
console.log(list.parentNode)
console.log(list.parentNode.parentNode)

//? 2. nextElementSibling

console.log(list.nextElementSibling) // List 2

//? 3. Child Nodes:
//* The childNodes returns all types of nodes (elements,text,whitespace, considered as text node,etc).

//? 4. children:
//* The children returns only html nodes (HTML elements only)






