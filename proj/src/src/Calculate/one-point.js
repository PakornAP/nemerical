var x1 = 0.00,r = 0
var ECL = 0.000001,err = Infinity
// x = 1/2 => x^2 = 1/2*x = > x = 2*x^2   *x bothside
// x = 1/2 => 2x = 1/2 + x => x = 1/4 + x/2    +x and -x
// x = 1/2 = >2x = 1 = x =1/x
// step 1 ** x = 2*x^2
var fx1
// console.log("**Pre-iteration** " + " x1 : "+ x1 + " error : " + err)

while(err > ECL){
    fx1 = 1/4 + x1/2
    err = Math.abs(fx1-x1)
    x1 = fx1
    console.log("iteration :"+ r + " x1 :"+ x1 + " error : " + err.toFixed(6))
    r++;
}