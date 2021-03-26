//y = 7^1/2 => x^2 - 7 = 0
var ECL = 0.000001
var x = 2.0
var fx = (x) => {
    return Math.pow(x,2)-7
}
var fpx = (x) =>{
    return 2*x
}
var delx = (x) =>{
    return fx(x)/fpx(x)
}
var err = Infinity,r = 0
console.log("round : "+ r + " delx : " + delx(x) + " error : " + err )
console.log("x : "+x)
r++
while (err > ECL){
    var xnew = x - delx(x)
    err = Math.abs((xnew-x)/xnew)
    console.log("round : "+ r + " delx : " + delx(xnew) + " error : " + err )
    x = xnew
    console.log("x : "+x)
    r++
}