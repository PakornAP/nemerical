const math = require('mathjs')
// var a = math.matrix([[-2,3,1],[3,4,-5],[1,-2,1]])
var a = math.matrix([[4,-4,0],[-1,4,-2],[0,-2,4]])
// var ans = [9,0,-4] 
var ans = [400,400,400]
var copy = math.clone(a)
// 0-1 0-2 1-2
var i = ans.length - 1
while(i >=0){
    var j = 0
    while(j<ans.length){
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
    i--
}
// var newans = ans.map(e=> e = e.toFixed(6))
console.log(copy.format())
console.log(ans)
var x = []
copy.map((value,index,matrix)=>{if(index[0]==index[1])x.push(ans[index[0]]/value)})
console.log(x)