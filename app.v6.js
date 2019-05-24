// Select the clear tasks button from the DOM:
// Add the event we want to listen for: click
// add an anonymous function , a callback function
// Whatever we put in here, is going to happen when we run the click event:
// Because in the link we set href="#" it will log
// If we would add a link into it, it would redirect us to the given link and the log will popup real fast
// To stop this default behavior we can add to our function a callback parameter (e) = event object
// Then we can say e.preventDefault();
// Or just use a # in the href and it does the same


// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     e.preventDefault();
// });


//////////////////////////////////////////////////////////////////////////

// In addition to putting in a seconds parameter as function, you can also put a named function like onClick:

// document.querySelector('.clear-tasks').addEventListener('click', onClick);


// So what happends, its going to look for a function called onClick:

// function onClick(e){
//     console.log('Hello World');

//     e.preventDefault();
// }


// Having a named function is a lot neither


//////////////////////////////////////////////////////////////////////////

// Lets take a closer look at the event object (e):

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('Hello World');

    // lets use the val var
    // Set the var to
    let val;

    val = e;

    console.log(val);
    // As you can see this will give you a lot of information
    // Most important is the target, here you can see on what element the event actualy happend on, in this case its the a tag


    // Lets take a look at the target element:
    val = e.target;
    
    // We can get whatever we want from the target:
    val = e.target.className;

    // if we want the classes as an collection:
    val = e.target.classList;

    // We can even change the text:
    val = e.target.innerText = 'Hello';

    // All the stuff we learned in the previous lessons we can use if we fire of an event

    // Event type:
    val = e.type; // click event

    // Time Stamp:
    val = e.timeStamp;

    // Coords event relative to the window:
    val = e.clientY; // nr of pixels from the top / vertical
    val = e.clientX; // nr of pixels from the side / horizontal

    // Coords event relative to the element itself:
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

