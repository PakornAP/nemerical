//y = 7^1/2 => x^2 - 7 = 0
var ECL = 0.000001
var x1 = 2.0,x2 = 4.0
// x1 < x2 && fx1 = -3, fx2 = 2 *< 0 !!!!!
var fx = (x) => {
    return Math.pow(x,2)-7
}
var delx = (x1,x2) =>{
    return (fx(x2)*(x1-x2))/(fx(x1)-fx(x2))
}
var err = Infinity,r = 0
console.log("x : "+x1)
r++
while (err > ECL){
    var xnew = x2 - delx(x1,x2)
    err = Math.abs(((xnew-x2)/xnew))
    console.log("round : "+ r+" fx : "+fx(x2)+ " delx : " + delx(x1,x2) + " error : " + err )
    x1 = x2 
    x2 = xnew // !!!!!                                  
    console.log("x : "+x2)                              
    r++
}
//kuay tuayP