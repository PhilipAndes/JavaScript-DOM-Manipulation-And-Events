// document.getElementsByClassName()


// Lets make a var and select all the li items with the class name collection-item:

// const items = document.getElementsByClassName('collection-item');
// console.log(items);


// as you can see we will get all the list items with an index, just like an array
// So lets say you want to get a specific one, you can threat it as an array:

//console.log(items[0]); // will give the first list item


// Now we can do a lot of things:

// items[0].style.color = 'red';

// items[1].textContent = 'Hello World';


// Lets say we only want to select the className collection-item in the ul we can do:
// Else it would select the first element in the global scope with the classname collection-item:

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//////////////////////////////////////////////////////////////////////////

// document.getElementsByTagname:

// Works a lot like above, so lets copy it and change some things:

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[1].textContent = 'Hello World';


// Convert HTML collection into array:

//lis = Array.from(lis);


// Now we can use array functions like reverse:

//lis.reverse();


// Or loop through with a foreach:
// Which takes in li
// And we can also put in an index:

// lis.forEach(function(li, index){
//     console.log(li.className);
//     // Or lets say you want to change all the li's
//     li.textContent = 'Test';
//     // Or put an index in above and set it to a template string:
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//////////////////////////////////////////////////////////////////////////

// document.querySelectorAll()

// almost the same as above
// Except it returns a nodelist
// A nodelist doenst just count elements but things like textnodes
// Also alows us to use foreach and other array methods without having to convert it first
// We can put any css selector in here, like:
// But will result the same as just li 

// const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);

// As you can see its not a HTML collection as above, but a nodeList


// So lets do a foreach without converting it an array:

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// console.log(items);

//////////////////////////////////////////////////////////////////////////

// Change style for odd / even:

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = 'grey';
});

liEven.forEach(function(li, index){
    li.style.background = 'yellow';
});

// you dont have to use foreach for this, but you could use a for loop:

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'red';
}

// The for loop will even work with an HTML collection even if dont convert it in an array
