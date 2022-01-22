const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log("Hello, I am %s thing", 'some');
//use %s or can also use backticks for this

// Styled
console.log("%cHello, my name is ", 'color: red;');
// use %c

// warning!
console.warn("Display Warning");

// Error :|
console.error('Display Error');

// Info
console.info('This displays information with icon');
// little i doesnt show up in my console

// Testing
console.assert(1 === 1, 'Wont run if true');
console.assert(1 === 2, 'Will show an error');
// used for testing, dubugging, no if statement needed.

// clearing
// console.clear(); <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// will clear console (kind of annoying)

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p); //before dir, this was giving properties already
console.dir(p); // gives me all properties living inside element

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
//make sure to pass the same string (start === end)

// counting
console.count('dog');
console.count('dog');
//counts how many times you've used something at that time.

// timing
console.time('fetching data');
fetch('https://api.github.com/users/netsujr')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});
//how long something takes
//make sure to pass the same string (start === end)

console.table('array of objects, must have same properties');
