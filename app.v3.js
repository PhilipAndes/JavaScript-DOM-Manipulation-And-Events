let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem; // the first li
val = list; // the full ul


// Get child nodes:
val = list.childNodes; 

// console.log(val);

// As you can see it also gives 'text', this are actually the linebreaks we use in the HTML


// Get the first one:

val = list.childNodes[0]; // gives us the text node

// Get the node name:

val = list.childNodes[0].nodeName; // #text

// Get the node type:

val = list.childNodes[0].nodeType; // 3

// Or for the node type of the second one:

val = list.childNodes[1].nodeType; // 1

// Numbers for nodetypes:
// 1 - Element
// 2 -Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// console.log(val);

// Notice that childnodes give us all different types of nodes, children will just give the elements, see below:

//////////////////////////////////////////////////////////////////////////

// In most cases you dont want to worry about the text nodes, as you only want the child elements
// So for that we have a property 'children':

// Get children element nodes:

val = list.children; // will give an html collection!

// select specific ones:

val = list.children[0];  // will give the first one

// We can edit them like:

list.children[0].style.color = 'red'; // makes first one red

list.children[1].textContent = 'Hello World';

// Get children of children:

val = list.children[3].children; // will give us a collection of the link but it has only one, so has a index of 0, so if we wanted to access that specific link we could do:

val = list.children[3].children[0]; // gives us the link

// if we want to add an id, we could do:
list.children[3].children[0].id = 'test-link'; // added test-link id

// console.log(val);

//////////////////////////////////////////////////////////////////////////

// Firts and last Child:

val = list.firstChild; // #text

// And again you might not want to deal with text nodes, so what you can do:

val = list.firstElementChild; // Will give the first list element

val = list.lastElementChild; // Last list element

// Or we can count child elements:

val = list.childElementCount; // 5 as we have 5 list items

//console.log(val);

//////////////////////////////////////////////////////////////////////////

// get parent node:

val = listItem.parentNode; // ul, because its the parent of the li
val = listItem.parentElement; // in most cases the same thing

// parents of parents:
val = listItem.parentElement.parentElement; // div with class card-action, because thats the parent of the ul (which is the parent of the li)

// console.log(val);

//////////////////////////////////////////////////////////////////////////

// Get next Sibling:
val = listItem.nextSibling; // #text node
val = listItem.nextElementSibling; // will give the next element
// and so on:
val = listItem.nextElementSibling.nextElementSibling;

// get the previous sibling
val = listItem.previousSibling; // #text node
val = listItem.previousElementSibling; // will give NULL because we are dealing with the first list item here and it has no previous sibling

console.log(val);