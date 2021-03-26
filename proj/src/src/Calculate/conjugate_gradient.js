const { Infinity, log } = require('mathjs')
const math  = require('mathjs')
var a = math.matrix([[5,2,0,0],
                    [2,5,2,0],
                    [0,2,5,2],
                    [0,0,2,5]])
var ans = [12,17,14,7]
var i = ans.length,pos_def = false  
while(true){ //positive difinite
    if(i==0)break
    if (math.det(math.subset(a,math.index(math.range(0,i),math.range(0,i)))) > 0 )pos_def = true
    else {
        pos_def=false
        break
        }
    i--
}
if(pos_def == true)console.log("this fcking matrix is positive definite")
else console.log("this matrix is can't use in this method")

var x = math.matrix([0,0,0,0]), ECL = 0.001,err =Infinity,r = 0
var ramda = Infinity,alpha = Infinity
//pre iteration
var R = ans.map((value,index)=>{ //find R0
        return math.squeeze(math.multiply(a.subset(math.index(index,[0,1,2,3])),x))-ans[index]
    })
var D = R.map((value) => value*(-1)) //D = -R
while(true){
    // console.log("iteration : "+ r +" R_old : "+R)
    ramda = -1 * math.multiply(math.transpose(D),R)/math.multiply(math.transpose(D),a,D) //ramda
    x = x.map((value,index)=>value + (ramda)*math.subset(D,math.index(index))) //Xk+1
    R = ans.map((value,index)  =>{ //Rk+1
        return math.squeeze(math.multiply(a.subset(math.index(index,[0,1,2,3])),x))-ans[index]
    })
    err = math.sqrt(math.multiply(R,math.transpose(R))) //error
    // console.log(" R : "+ R + "  D : "+D +" ramda : "+ ramda)
    console.log("x : "+ x + " error : "+ err)
    if(err<=ECL){break}
    //for_nextiteration
    alpha = math.multiply(math.transpose(R),a,D) / math.multiply(math.transpose(D),a,D) //alpha
    D = R.map((value,index)=> (-1)*value + (alpha*math.subset(D,math.index(index)))) //Dk+1
    // console.log("Alpha : "+ alpha + " Dnew : " + D)
    r++
}