const math = require('mathjs')
// var a = math.matrix([[-2,3,1],[3,4,-5],[1,-2,1]])
// var ans = [9,0,-4] 
var a = math.matrix([[4,-4,0],[-1,4,-2],[0,-2,4]])
var ans = [400,400,400]
var ECL = 0.000001,x = [100,100,100],check = [false,false,false],r = 0
while(true){
    var i = 0,err = Infinity
    while(i<ans.length){
        var xnew = 0
        var aii = a.subset(math.index(i,i))
        var res = math.multiply((a.subset(math.index(i,[0,1,2]))),x)
        res = math.squeeze(res)
        xnew = (ans[i]+(aii*x[i])-res)/aii
        //xnew = ((ans[i]-res)+(aii*x[i]))/aii /********/
        err = Math.abs((xnew-x[i])/xnew)
        if(err <= ECL){check[i] = true}
        x[i] = xnew
        i++
    }
    console.log("round : "+r+" => "+x)
    if(check[0]&&check[1]&&check[2]==true)break
    r++
}