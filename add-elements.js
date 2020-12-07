var elementOne = document.createElement('div');
elementOne.innerHTML = "Testing";
elementOne.id = "image";
document.body.appendChild(elementOne);
//
elementOne.innerHTML = "<img src='https://s3.amazonaws.com/learn-verified/painting-with-dog.gif'/>"
//Image displayed to view