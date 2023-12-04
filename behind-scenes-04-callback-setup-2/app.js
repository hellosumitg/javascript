const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {name: 'Max'}; 
person = null;
// If earlier `person` object not used then it will be removed from the `heap` memory 
// by the `Garbage Collector of the Browser` in periodical checks for unused objects(i.e objects without references)

// `Memory Leaks` is also there
function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage); // this will not go into stack memory
}

addListenerBtn.addEventListener('click', addListener); // this will not go into stack memory