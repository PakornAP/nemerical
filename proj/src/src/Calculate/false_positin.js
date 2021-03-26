var xl = 0.02
var xr = 0.03
var ECL = 0.000001
//step1 x = 1/43 =>  43x = 1 => 1/x -43 => 0
var xm ,fxm,fxl,fxr // assume x1 == xm
var err = Infinity

while(err > ECL){
    fxl = (1/xl) -43
    fxr = (1/xr) -43
    xm = ((xl*fxr)- (xr*fxl))/(fxr-fxl)
    fxm = (1/xm) -43
    if(fxm*fxr > 0){
        xr = xm
    }
    else if(fxm*fxr<0){
        xl = xm
    }
    err = Math.abs(fxm)
    console.log("----------------")
    console.log("fxl :"+fxl.toFixed(6))
    console.log("fxr :"+fxr.toFixed(6))
    console.log("fxl**fxr :"+fxm*fxr.toFixed(6))
    console.log("err :"+err.toFixed(6))
    console.log("xm :"+xm.toFixed(6))
    console.log("fxm :"+fxm.toFixed(6))
}
