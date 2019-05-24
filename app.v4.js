// Create element we want to insert:
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute:
li.setAttribute('title', 'New Item');

//console.log(li);

//////////////////////////////////////////////////////////////////////////

// Now lets say we want to add a text node, something inside the li:

// Create textNode and append:

//li.appendChild(document.createTextNode('Hello World'));


// You can also create a var and put the text node in there like:

const liText = 'Bye World';

li.appendChild(document.createTextNode(liText));

// console.log(li);

//////////////////////////////////////////////////////////////////////////


// Append li as child to ul:

// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// As you can see there is no link (icon) in there so we have to create that and append that to the list item also:

// Create new link (icon) element:
const link = document.createElement('a');
// Add classes:
link.className = 'delete-item secondary-content';
// If you lookat the HTML we want to add the <i> without text in it, so we just use a innerHTML:
link.innerHTML = '<i class="fa fa-remove"></i>';

// Now all we have to do, is append this link into li:
li.appendChild(link);

document.querySelector('ul.collection').appendChild(li);

console.log(li);

