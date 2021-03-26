var x = 4
var x0 = 2
var fx = Math.log(x) //lnx 
var fx0 = Math.log(x0) // lnx0
var fpx0 = 1/x0 //dlnx0 = 1/x0 => x0^-1
var fppx0 = -Math.pow(x0,-2) // -x0^-2
var fpppx0 = 2*Math.pow(x0,-3) //2x^-3
var fppppx0 = -6*Math.pow(x0,-4) //-6x^-4

var fac = (x) => {
    if(x == 0 || x== 1) return 1
    else return x *  fac(x-1)
} 
console.log(fx)

var ans = fx0
var round = 0
console.log("round : " + round + " ans :  " +ans + " error : " + Math.abs(ans - fx) )
round++
ans = ans + ((Math.pow((x-x0),round))/fac(round))*fpx0
console.log("round : " + round + " ans :  " +ans + " error : " + Math.abs(ans - fx) )
round++
ans = ans + ((Math.pow((x-x0),round))/fac(round))*fppx0
console.log("round : " + round + " ans :  " +ans + " error : " + Math.abs(ans - fx) )
round++
ans = ans + ((Math.pow((x-x0),round))/fac(round))*fpppx0
console.log("round : " + round + " ans :  " +ans + " error : " + Math.abs(ans - fx) )
round++
ans = ans + ((Math.pow((x-x0),round))/fac(round))*fppppx0
console.log("round : " + round + " ans :  " +ans + " error : " + Math.abs(ans - fx) )

    


