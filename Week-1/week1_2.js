// simple primitives

// 1. program to greet a person given their first and last name
let fname = "Y";
let lname = "Teresha";
console.log("Hello " + fname + " " + lname);

// 2 . program to greet a person based on their gender
let gender = "female";
if (gender === "female") {
  console.log("Teresha is a female");
} else {
  console.log("Teresha is a male");
}

// 3. program that counts from 0-10 and prints the sum
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//complex primitives

// 1. program to print all the even numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= arr.length; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. program to print the biggest number in an array
let bignum = arr[0];
for (i = 0; i < arr.length; i++) {
  if (bignum < arr[i]) {
    bignum = arr[i];
  }
}
console.log(bignum);

// 3 . program that prints all the male people's first name given a complex object
// approach 1
const people = ["A", "B", "C"];
const gender_people = ["male", "female", "male"];
for (i = 0; i <= people.length; i++) {
  if (gender_people[i] === "male") {
    console.log(people[i]);
  }
}

//approach 2
const people2 = [
  { fname: "A", gender: "male" },
  { fname: "B", gender: "female" },
  { fname: "C", gender: "male" },
];

for (let i = 0; i < people2.length; i++) {
  if (people2[i]["gender"] == "male") {
    console.log(people2[i]["fname"]);
  }
}

// 4 . program that reverses all the elements of an array
//brute force
let arr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arr2.push(arr[i]);
}
console.log(arr2);

//without using extra space
for (i=0;i<arr.length/2;i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr);


//Functions

function add(a,b){
    return a+b;
}
console.log(add(2,3));

//callback functions

function calcarthm(a,b,type){
    if(type=="add"){
        return a+b;
    }
    else if(type=="sub"){
        return a-b;
    }
    else if(type=="mul"){
        return a*b;
    }
    else if(type=="div"){
        return a/b;
    }
    else{
        return "Invalid operation";
    }
}
console.log(calcarthm(2,3,"add"));

//Assignments

// 1. create a counter in js that counts down from 10 to 0
let count=10;
while(count>=0){
    console.log(count);
    count--;
}

// 2. calculate the time it takes between a settimeout call and the inner function actually running
let start = new Date();
setTimeout(() => {
    let end = new Date();
    console.log(end-start);
}, 1000);

// 3. create a terminal clock (hh:mm:ss)
let time = new Date();
console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());