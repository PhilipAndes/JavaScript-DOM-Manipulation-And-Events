// you can do the command 'window' in the browser and there you can see the localStorage with some methods, as getItem, removeItem etc
// You can set key - value pairs
// it is important to know, that what you set as a value, has to be a string
// You can still save arrays and objects and stuff, you just have to turn them into a string first, using a method called; JSON.Stringify()
// And when you pull it out to use it, you want to parse it back using a method called: JSON.parse

// Set local storage item:
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// You can check in your deftools on chrome, and go to 'Application'
// Down to were it says 'storage'
// click local storage -> localhost and see the data


// Set Session storage item:
//sessionStorage.setItem('name', 'Beth');

// you can remove it in the browser or do it here:
//localStorage.removeItem('name');

// Get from storage:
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage:
// localStorage.clear();

// console.log(name, age);


//////////////////////////////////////////////////////////////////////////

// So lets say we want to something to the task list UI:

// We first need to add a click event to the submit button:


// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value; // task which is the id, and we want to get the value

//     // so to set to local storage:
//     localStorage.setItem('task', task);
//     alert('Task Saved');
    
//     e.preventDefault();
// });


// The problem now is, if we add another task, the old one will be replaced in local storage
// So to fix this, we can create an array of tasks, and store that as strings:

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;
    
    // So first we need to check if there is anything in localstorage and if there is, pull it out and add on to it
    // If not, set task to an empty array:
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        // The problem here is, this is going to be a string, so we have to parse this into an object we can use with JSON
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Now we need to push the task, that is comming through the form into the array:
    tasks.push(task);

    // this didnt changed anything yet, we first need to reset local storage with this added value above!
    // So we set it below to our var, but remember we have to store it as a string! so we use JSON.Stringify:

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');
    
    e.preventDefault();
});

// lets pull the tasks out of local storage:
// Remember its saved as string in local storage, so the getItem('string')
// We need to parse it with JSOn else we get an error!
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});


