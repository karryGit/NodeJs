
//1.assert.断言(参数1:条件表达式,参数2'不完全相等时打印')
const assert = require('assert');
// console.assert(1 === 1 ,'1绝对不等于2');
// console.log('走到这是等于1');

//2.deepEqual.测试第一个参数是否==第二个参数,如果相等什么都不会抛出,
// 如果不相等抛出AssertionError: 2 deepEqual 3
var a = 2;
var b = 3;
 // assert.deepEqual(a,b);


//3.deepStrictEqual.他和上面的一样,但是他判断用的是===
// assert.deepStrictEqual(a,b);

//4.doesNotThrow
assert.doesNotThrow(function () {
    console.log(a);
},TypeError,'aaaa');
