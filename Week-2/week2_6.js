//map, filter, arrow fns

//given an array, give me back a new arrayin which every value if mulitiplied by2\

const input=[1,2,3,4,5]
const newarray=[]
for (let i=0;i<input.length;i++){
    newarray.push(input[i]*2)
}
console.log(newarray)

//using map-sol
const result = input.map((value)=>value*2)
console.log(result)

//give me back only even values
//using filter
const filans=[]
function filterlogic(n){
    if(n%2===0){
        return true
    }
    else{
        return false
    }   
}

const ans=input.filter(filterlogic)
console.log(ans)