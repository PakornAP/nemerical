const math = require('mathjs')
var xall = [0,20000,40000,60000,80000];
var yall = [9.81,9.7487,9.6879,9.6879,9.5682];
var input = [] //input index
var x = [],fx = [] // use
var push = () => {
    x=[],fx=[]
    input = input.map((value)=>value-1)
    input.map((value)=>{
        x.push(xall[value])
        fx.push(yall[value])
    })
}

var calc = (i,j)=>{
    if(i==j)return fx[i]
    else if(math.abs(j-i) == 1)return (fx[j]-fx[i])/(x[j]-x[i])
    else return ((calc(i+1,j))-calc(i,j-1))/(x[j]-x[i])
}

var ans = (find)=>{
    var sum = 0
    for(let i=0;i<x.length;i++){
        let temp = calc(0,i);
        for(let j=0;j<i;j++){
            temp *= (find-x[j]);
        }
        sum +=  temp;
    }
    return sum;
}

input = [1,5]
push()
console.log("Linear :");
console.log(ans(42000));
console.log("<--------------------------------------------------------------->");

input = []
input = [1,3,5]
push()
console.log("Quadratic :");
console.log(ans(42000));
console.log("<--------------------------------------------------------------->");

console.log("Polynomial :");
input = []
input = [1,2,3,4,5]
push()
console.log(ans(42000));
console.log("<--------------------------------------------------------------->");
