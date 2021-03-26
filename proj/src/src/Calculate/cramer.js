var math = require('mathjs')
// var a = math.matrix([[-2,3,1],[3,4,-5],[1,-2,1]])
var a = math.matrix([[4,-4,0],[-1,4,-2],[0,-2,4]])
// var ans = [9,0,-4] 
var ans = [400,400,400]
var jai = math.clone(a)
// a = [ [ -2, 3, 1 ], [ 3, 4, -5 ], [ 1, -2, -1 ] ]
//data = -22
var cramer = (jai,a,ans) =>{
var i = 0
var x = math.zeros(ans.length)
var detA = math.det(a)
    while(i < x.size()){
        jai.subset(math.index([0,1,2],i),ans)
        //console.log((math.det(jai)/detA))
        x.subset(math.index(i),(math.det(jai)/detA).toFixed())
        //console.log(jai)
        jai = math.clone(a)
        i++
    }
    return x.format()
}
console.log(cramer(jai,a,ans))






