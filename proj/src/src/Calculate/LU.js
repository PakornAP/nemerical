const { Infinity, size, log } = require('mathjs')
const math = require('mathjs')

// var a = math.matrix([[4,-4,0],[-1,4,-2],[0,-2,4]])
// var ans = [400,400,400]
var a = math.matrix([[-2,3,1],[3,4,-5],[1,-2,1]])
var ans = [9,0,-4] 
//find L U
var L = math.zeros(3,3)
var U = math.clone(L)
var Y = [0,0,0],X = [0,0,0]
// set L & U
U.map((value,index,matrix)=>{
    if(index[0]==index[1]){
        U.subset(math.index(index[0],index[1]),1)
    }
})

L.map((value,index,matrix)=>{ //index => [,]
    var temp = Infinity
    if(index[1]== 0){
        L.subset(math.index(index[0],0),a.subset(math.index(index[0],0)))
    }
    else if(index[0]>=index[1]){ //L
        var res = math.multiply(L.subset(math.index(index[0],[0,1,2])),U.subset(math.index([0,1,2],index[1])))
        res = math.squeeze(res)
        temp = a.subset(math.index(index[0],index[1]))
        L.subset(math.index(index[0],index[1]),(temp-res)/U.subset(math.index(index[0],index[0])))
    }
    else if(index[0]<index[1]){ //U
        var res = math.multiply(L.subset(math.index(index[0],[0,1,2])),U.subset(math.index([0,1,2],index[1])))
        res = math.squeeze(res)
        temp = a.subset(math.index(index[0],index[1]))
        U.subset(math.index(index[0],index[1]),(temp-res)/L.subset(math.index(index[0],index[0])))
    }
})
// console.log(L.format())
// console.log(U.format())
var i = 1
Y[0] = ans[0]/L.subset(math.index(0,0))
while(i < ans.length){
    var res = math.multiply(L.subset(math.index(i,[0,1,2])),Y)
    Y[i] = ((ans[i]-math.squeeze(res))/L.subset(math.index(i,i)))
    i++
}
// console.log(Y)
i = ans.length-2
X[2] = Y[2]/U.subset(math.index(2,2))
while(i >= 0){
    var res = math.multiply(U.subset(math.index(i,[0,1,2])),X)
    X[i] = ((Y[i]- math.squeeze(res))/U.subset(math.index(i,i)))
    i--
}
console.log(X)