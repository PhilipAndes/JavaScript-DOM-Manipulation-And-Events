// document.getElementByID()

// Lets say we want to target the h5 with id: task-title:
//console.log(document.getElementById('task-title')); // the full h5 element

// Get things from the element
// Lets say we want to get the id only:
//console.log(document.getElementById('task-title').id); // task-title

// Get the class:
//console.log(document.getElementById('task-title').className); // test

// If you want to call this id more times in the script, you should do it on an efficient way, and call it a variable:

//const taskTitle = document.getElementById('task-title');

// Now you can just say anywhere: taskTitle:

// for example as below: taskTitle.style.color = 'red'; etc. 

//////////////////////////////////////////////////////////////////////////

// Change Styling:
// Always starts with .style first
// Then what you want to do

//document.getElementById('task-title').style.color = 'red'; // makes the h5 red
// or use: taskTitle.style.color = 'red';

// Lets say you want something to disappear:
//document.getElementById('task-title').style.display = 'none'; // removes the h5

//////////////////////////////////////////////////////////////////////////

// Change the content:
// With textContent:

//document.getElementById('task-title').textContent = 'Task List'; // Changes the h5 text to Task List

// Or innerText:

//document.getElementById('task-title').innerText = 'My Tasks'; // Changes the h5 text to My Tasks

// Sometimes you want to insert HTML, infact you will do that quite a bit
// new text from a API or ajax or something, than you want to insert a chunk of HTML
// This is were innerHTML comes in:

//document.getElementById('task-title').innerHTML = '<span style="color:blue">Task List</span>';

//////////////////////////////////////////////////////////////////////////

// document.querySelector()

// much more powerfull because we dont have to select elements by id, we can select it by anything

console.log(document.querySelector('#task-title')); // get by id
console.log(document.querySelector('.test')); // get by class
console.log(document.querySelector('h5')); // get by element

// Remember if there is more then one element with this id / class / element it will just get the first one, else use querySelectorAll for all elements!

// target the first li only even if there are more
document.querySelector('li').style.color = 'red';

// You can also target nested elements like:
document.querySelector('ul li').style.color = 'blue';

// Lets say we want to select the last li item:
// We use css pseudo classes:
document.querySelector('li:last-child').style.color = 'red';

// or lets say we want to target the second li item:
document.querySelector('li:nth-child(2)').style.color = 'yellow';

// Or lets change the text content:
document.querySelector('li:nth-child(2)').textContent = 'Hello World';

// You can also do odd or even:
document.querySelector('li:nth-child(odd)').style.background = 'black';

// You can also do odd or even:
document.querySelector('li:nth-child(even)').style.background = 'purple';

// If you use querySelectorAll it will do all odd or even





