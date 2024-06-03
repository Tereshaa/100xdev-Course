class Animal{
    constructor(name,legs,speaks){
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    static myType(){ //called by the class itself

        console.log("I am an Animal");
    
    }
    speak(){ //can only be called using an object of the class
        console.log(`${this.name} speaks ${this.speaks}`);
    
    }
}

let dog= new Animal("Dog",4,"Bark"); //object of class 
let cat= new Animal("Cat",4,"Meow");
let bird= new Animal("Bird",2,"Chirp");
cat.speak(); //Cat speaks Meow
console.log(Animal.myType()); //I am an Animal


//DATE
const currentDate = new Date();
console.log(currentDate); //2024-06-02T13:55:28.457Z
console.log(currentDate.getDate()); //2
console.log(currentDate.getFullYear()); //2024

function add(){
    let a=0;
    for (let i=0;i<1000000;i++){
        a=a+i;
    }
    return a;
}

const start=new Date();
const startTime=start.getTime();
add();
const end=new Date();
const endTime=end.getTime();
console.log(endTime-startTime);  // time taken for the function "add" to run


//JSON - javascript object notation
const userObject={"name":"Teresha","age":0}; //object
const userString="{'name':'Teresha','age':0}"; // to send data somewhere, we need to convert the object to string

//JSON.parse => string to object
//JSON.stringify => object to string

Math.floor(2.3) //2
Math.ceil(2.3) //3

//OBJECTS
const sampleObject={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

//Object.keys => returns the keys of the object
console.log(Object.keys(sampleObject)); //['key1','key2','key3']

//Object.values => returns the values of the object
console.log(Object.values(sampleObject)); //['value1','value2','value3']

//Object.entries => returns the key value pairs of the object
console.log(Object.entries(sampleObject)); //[['key1','value1'],['key2','value2'],['key3','value3']]

//Object.assign =>merge 2 objects
let newObj=Object.assign({},sampleObject,{key4:"value4"});
console.log(newObj); //{key1:"value1",key2:"value2",key3:"value3",key4:"value4"}
