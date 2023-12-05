// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const sayHello = name => console.log('Hi ' + name);

sayHello("Sumit");

const sayHello1 = (name, phrase) => console.log(phrase +" "+ name);
sayHello1('Hi', "Sumit");

const sayHello2 = () => console.log('Hi Sumit');
sayHello2();

const sayHello3 = name => 'Hi ' + name;

console.log(sayHello3("Sumit"));

const sayHello4 = (name, phrase = 'Hello') => console.log(phrase +" "+ name);
sayHello4("Sumit");

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text){
      hasEmptyText = true;
      console.log(text)
      break;
    }
  }
  if (!hasEmptyText){ // here hasEmptyText has true that'why we are using `!hasEmptyText`
    cb();
  }
}

checkInput(
  ()=>{
    console.log('All not empty!');
  }, 
  'Hello',
  '12',
  'adasad', 
  'Not empty string'
);