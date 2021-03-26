const math = require('mathjs')
var a = math.matrix([[-2,3,1],[3,4,-5],[1,-2,1]])
var ans = [9,0,-4] 
var copy = math.clone(a)
// 0-1 0-2 1-2
var i = 0
while(i < copy.size()[0]-1){
    var j = 1
    while(j<copy.size()[0]){
        if(j==i);
        else{ //find jai //j selected row
            //constant operand & change to minus
            var k = (1/copy.subset(math.index(i,[i])))*copy.subset(math.index(j,[i]))*-1
            
            //jai,jaians
            var jai = math.multiply(k,copy.subset(math.index(i,[0,1,2])))
            var jaians = ans[i]*k
            jai = math.add(jai,copy.subset(math.index(j,[0,1,2])))
            
            //operate wid jai
            ans[j] = ans[j]+jaians
            copy.subset(math.index(j,[0,1,2]),jai)
        }
        j++
    }
    i++
}
console.log(copy.format())
console.log(ans)

var x = [-1,0,0]
x[2] = ans[2]/math.subset(copy,math.index(2,2))
x[1] = (ans[1]-((math.subset(copy,math.index(1,2))))*x[2])/(math.subset(copy,math.index(1,1)))
console.log(x)