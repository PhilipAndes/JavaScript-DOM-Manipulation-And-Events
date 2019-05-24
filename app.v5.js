// Replace Element:

// Lets replace the H5 with a H2 with different text:

// Create Element:
const newHeading = document.createElement('h2');

// Add id:
newHeading.id = 'task-title';

// Add new text node:
newHeading.appendChild(document.createTextNode('Task List'));

// Get the h5 we want to replace:
const oldHeading = document.getElementById('task-title');

// Now we are going to need a parent, because we are going to use something called replace child, and we have to call that on the parent.
// The parent of the h5 is inside the div with the class card-action

// Parent:
const cardAction = document.querySelector('.card-action');

//Replace:
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);


//////////////////////////////////////////////////////////////////////////

// Now lets REMOVE Element:

// Lets first create a var for the li's
// And create a var for the ul
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove a list item:
lis[0].remove(); // removed the first list item

// Remove child element:
list.removeChild(lis[3]); // removed the 4th one


//////////////////////////////////////////////////////////////////////////

// Remove Classes and Attributes
const firstLi = document.querySelector('li:first-child');

// The element we want to work with here, is the <a> tag that is around the icon in the UI
// We want the a tag inside the li, which is the first child
// So we can do: .children[0]

console.log(firstLi.children[0]);

// So lets put this in a var:
const link = firstLi.children[0];

console.log(link);

// Lets use the val var to console.log some things:
let val;

val = link.className; // this will give us a list of all the classes

// We also have classList:
val = link.classList; // Will give us a DOMTokenlist setup as an array, where we have 0 for the first one, and 1 for the second one and so on

// We can access these individualy:
val = link.classList[0]; // will give the first class

// We can also add a class:
link.classList.add('test');

val = link;

console.log(val);

// Or remove a class:
link.classList.remove('test');

val = link;

console.log(val);

//////////////////////////////////////////////////////////////////////////

// Attributes:

// Get attribute:
val = link.getAttribute('href'); // #

// Set attribute:
val = link.setAttribute('href', 'http://google.com'); 

// Check if there is a attribute:
val = link.hasAttribute('href'); // true


// Remove attribute:
link.removeAttribute('href');
val = link;

console.log(val);


