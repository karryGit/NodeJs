//1.forEach是Array新方法中最基本的一个，就是遍历，循环。例如下面这个例子：
//(参数1:数组内容,参数2:数组索引,参数3:数组本身)
// [1, 2, 3, 4].forEach(console.log);打印数组本身 和数组索引 还有数组内容
/*
 * 1 0 [ 1, 2, 3, 4 ]
 2 1 [ 1, 2, 3, 4 ]
 3 2 [ 1, 2, 3, 4 ]
 4 3 [ 1, 2, 3, 4 ]
 * */
//等同于下面这个for循环：

var arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
    // console.log(arr);打印数组本身
    // console.log(i)//打印数组索引
    // console.log(arr[i])//打印数组内容
}
/*
 * /*
 * 1 0[ 1, 2, 3, 4 ]
   2 1[ 1, 2, 3, 4 ]
   3 2[ 1, 2, 3, 4 ]
   4 3[ 1, 2, 3, 4 ]
 * */
//2.这里的map指处理数组中的每个元素
//高阶函数 函数的参数是函数
//(参数1:回调函数(返回值去处理拼接或者运算))
// var array =  arr.map(function (item) {
//     return item + '元'
// });
 // console.log(array);[ '1元', '2元', '3元', '4元' ]

//3.filter过滤数组(参数1:回调函数(利用返回值去过滤判断))
//高阶函数 函数的参数是函数
// var array = arr.filter(function (item) {
//     return item > 3;
// });
// console.log(array);[4]

//4.some 满足某个条件(参数为函数(返回值去判断条件,返回值为布尔值))
// var array = arr.some(function (item) {
//     return item > 3;
// });
// console.log(array);//true;

//5.every 数组中的每一个(参数为函数(返回值去判断条件,返回为布尔值))
var array = arr.every(function (item) {
    return item > 0;
});
 // console.log(array);true

//6.indexOf 判断数组中是否存在5这个数字(参数1:判断值,参数2从下标几开始)
  if (arr.indexOf(5,2) == -1){
      // console.log(arr);[1,2,3,4]
  }

//7.lastIndexOf 是从字符串的末尾开始查找(参数1:判断之,参数2:下标几开始 默认从下标1开始而不是0)
var data = [2, 5, 7, 3, 5];
// console.log(data.lastIndexOf(5)); // 4
// console.log(data.lastIndexOf(5, 3)); // 1 (从后往前，索引值小于3的开始搜索)
// console.log(data.lastIndexOf(4)); // -1 (未找到)



//8.reduce 参数1:回调函数(返回值1:过去式,返回值2:现在值,返回值3:索引返回值4:数组本身)参数2:默认值

var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
    return previous + current;
},1);
// console.log(sum); //  1+1+2+3+4=11

//有了reduce，我们可以轻松实现二维数组转换成一维数组：
var matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
// 二维数组扁平化
var flatten = matrix.reduce(function (previous, current) {
    return previous.concat(current);
});
// console.log(flatten); // [1, 2, 3, 4, 5, 6]


//9.reduceRight   和reduce类似  实现上差异在于reduceRight是从数组的末尾开始实现
var data = [1, 2, 3, 4];
var specialDiff = data.reduceRight(function (previous, current, index) {
    return previous - current;
});

console.log(specialDiff); // 4-3-2-1 = -2








