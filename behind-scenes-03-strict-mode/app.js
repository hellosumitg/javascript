// Strict Mode in Javascript:
'use strict';

const personName = 'Candy'; // without declaring also browser understand that it will be a variable as there is no strict mode
// but if implemented it will give error
/*
    Uncaught ReferenceError: personName is not defined
        at app.js:50:12
    (anonymous) @ app.js:50
*/

var undefined = 5; // now this will throw error but if there is no `strict mode` `var` will not throw error
// if we use predefined keywords as variable name


console.log(personName);

