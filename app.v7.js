// Event bubbling:
// Means going up to the parent element
// Event delegation does the opposite 


// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-title');
// });

// // to show you this is bubbling up, we are going to add an eventlistener on its parent, which is card-content:

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card-content');
// });

// // card-content has a parent with the class 'card' 
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// // And the parent of that has the class 'col'
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });


// So what will happend now, is that when we click on the card-title its going to trigger the event and bubble up to its parents, so everything above will be called. 


//////////////////////////////////////////////////////////////////////////

// EVENT DELEGATION:

// lets first show, what will happen without event delegation:
// Get the icon from the dom:

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem(){
//     console.log('Delete item');
// }

// As you can see, when you click the first one, you get Delete item, but when you click on the second one you wont get anything
// This is a situation you need to use event delegation
// Another situation would be if you dynamicaly insert something into the dom with javascript, for example if we insert a new list item that wasn't there when the page loaded, you also need event delegation!
// So instead of putting that event item right on the delete class we are going to put it on a parent, and this could be anything, lets for example just put it on the body:
// As you can see, if you click anywhere in the body, you get delete item
// so what we need to do, is go into our function delete item and find our target:
// So when we click on the icon we get the <i> tag , which is in the <a> tag, so we need to get the parent of that!
// So lets do some conditional stament in the function:
// A lot of the time you would see something like: if(e.target.className === 'delete-item')
// But as you just noticed, we need to target the <i> tag, so the class should be fa fa-remove: if(e.target.className === 'fa fa-remove')
// In there we put the console.log (commented the other 2 out), and now you see we only get delete item if we click on the icon <i>
// But we dont want to work with the icon, but with the <a> tag around it, which is the parent so we say: if(e.target.parentElement.className === 'delete-item')
// As you see it wont work, because if you look in the HTML you see the <a> tag also has a secondary-content class
// So we need to match the whole className: if(e.target.parentElement.className === 'delete-item secondary-content'
// This isn't always a great way to do this, for example, if we add a new li to the list with a new class, this one will not work because it doesnt match the className anymore
// So a better way to do this is use classList and see if delete-item is in that list (commented the first if loop out)
// .contains('classname')

document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     //console.log('Delete item');
//     //console.log(e.target);
//     // if(e.target.parentElement.className === 'delete-item secondary-content'){
//     //     console.log('Delete item');
//     // }
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('Delete item');
//     }
// }


// So lets make it actualy work on this list:
// We want to delete the whole li item, so we have to target the li, which is the parent of the <a> tag:
// So target the parent and just use the remove method

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Delete item');
        e.target.parentElement.parentElement.remove();
    }
}

















// Lets say we want to target the links (icons in UI)
// Because they are all the same we have to use event delegation

