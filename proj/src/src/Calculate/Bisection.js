var xl = 1.5
var xr = 2.0
var ECL = 0.00001
//f(x) = y = pow(x,4)-13
//step1
var xm ,fxm,fxl,fxr
var err = Infinity

while(err > ECL){
    xm = (xl+xr)/2
    fxm = Math.pow(xm,4)-13
    fxl = Math.pow(xl,4)-13
    fxr = Math.pow(xr,4)-13
    if(fxm*fxr > 0){
        xr = xm
    }
    else if(fxm*fxr<0){
        xl = xm
    }
    err = Math.abs(fxm)
}

console.log("err :"+err.toFixed(6))
console.log("xm :"+xm.toFixed(6))
console.log("xr :"+xr.toFixed(6))