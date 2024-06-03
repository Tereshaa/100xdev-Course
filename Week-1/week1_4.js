//LOOPS,FUNCTIONS AND CALLBACK

//callback - calling one function inside another function

function square(n) {
  return n * n;
}

function sumofsquares(a, b) {
  const x = square(a);
  const y = square(b);
  return x + y;
}

console.log(sumofsquares(2, 3));

// callback function example2
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofsquares(a, b) {
  const x = square(a);
  const y = square(b);
  return x + y;
}

function sumofcubes(a, b) {
  const x = cube(a);
  const y = cube(b);
  return x + y;
}

//here the code inside sumofsquares and sumofcubes is being repeated.
//To resolve this repetition, we use callback functions again

//solution

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofsomething(a, b, fn) {
  const x = fn(a);
  const y = fn(b);
  return x + y;
}

console.log(sumofsomething(2, 3, square));
console.log(sumofsomething(2, 3, cube));

// anonymous function
console.log(
  sumofsomething(2, 3, function (n) {
    return n * n; //square function
  })
);
