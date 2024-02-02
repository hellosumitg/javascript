const task3Element = document.getElementById('task-3');

function first(){
    alert("Alert!");
}

function second(name){
    alert("Hi " + name);
}

first()
second("Sumit")

task3Element.addEventListener('click', first);

function third(string1, string2, string3){
    const result = `${string1} ${string2} ${string3}`;
    return result;
}

const combinedString = third("Sumit", "Kumar", "Gupta");
alert(combinedString);