var elementOne = document.createElement('div');
//Creates and element 

elementOne.innerHTML = "Testing";
//Creates text inside an exisiting element

elementOne.id = "image"; 
// Creates an id to an existing element

document.body.appendChild(elementOne);
//To get an element to appear in the DOM, we append it to an existing DOM node. We can start as high up on the tree as document.body, or we can find a more specific element using any of the techniques we've learned for traversing the DOM.

elementOne.innerHTML = "<img src='https://s3.amazonaws.com/learn-verified/painting-with-dog.gif'/>"
//Image displayed to view