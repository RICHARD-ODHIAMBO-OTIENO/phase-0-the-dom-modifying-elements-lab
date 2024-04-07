// Write your code here!
document.getElementById('main').remove();

// create newHeader variable that points to an <h1> node
let newHeader = document.createElement('h1');

// newHeader variable that points to the <h1> node has an id of 'victory'
newHeader.id = 'victory';

// Set the text inside the 'newHeader' variable to "YOUR-NAME 
newHeader.textContent = 'Richard is the champion';