// //async functions
const fs = require("fs");
fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("hello world");
//output : hello world and then the content of a.txt
//coz fs.readFile is async function and it will be executed after the console.log statement

//creating my own async function
function myasyncfunction(cb) {
  fs.readFile("a.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data);
  });
}

function ondone(data) {
  // callback function to call
  console.log(data);
}
myasyncfunction(ondone);

//rewriting the above function using promises
function myasyncfuncPromise() {
    console.log("inside the function")
  return new Promise(function (resolve) {
    console.log("inside promise")
    fs.readFile("a.txt", "utf-8", function (err, data) {
        console.log("before resolve")
      resolve(data);
    });
  });
}

function ondonepromise(data) {
  console.log(data);
}
myasyncfuncPromise().then(ondonepromise);

//output inside the function
// inside the function
// inside promise
// before resolve
// HELLO, THIS TXT FILE IS FOR WEEK 1.5 

function myasyncfuncPromise() {
let p = new Promise(function(resolve){
   setTimeout(function(){
       resolve("hello")
   }, 1000)
})
return p;
}

function main(){
    myasyncfuncPromise().then(function(data){
        console.log(data)
    })
}

main();

//modifying the above function using async and await

//no callbacks, no .then syntax
async function main(){
    let value =await myasyncfuncPromise();
    console.log(value);
}    
main();
console.log("after main")

//output : after main and then hello(coz of await)