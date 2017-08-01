/**
 * Created by dllo on 17/8/1.
 */


//setImmediate 参数1:函数() 参数2:没啥用 可以重新赋值每创建一次加1
var i = 0;
var timer = setImmediate(function () {
    i ++ ;
    console.log(i);//只执行一次打印纸是1
},500);

var timer1 = setImmediate(function () {
    i ++ ;
    console.log(i);//只执行一次打印纸是2
},500);


var o = 0;
//setInterval 参数1:函数() 参数2:执行时间 执行参数里面的内容 每0.5秒执行一次
var timer2 = setInterval(function () {
    o++;
    if (o==10){
        clearInterval(timer2);//清除定时器
    }
    console.log(o)
},500);

var p = 0;
//setTimeout 参数1:函数() 参数2:执行时间 延迟2秒执行函数内容
//
var timer3 =setTimeout(function () {
    p++;
    console.log(p)//1
},2000);
//清除延迟定时器
clearTimeout(timer3);



