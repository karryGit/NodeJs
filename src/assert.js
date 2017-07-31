
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

//4.doesNotThrow (参数1:(function),第三个参数和第二个参数比较类型)
//如果错误类型不相同,打印错误,相同打印类型加拼接参数
// assert.doesNotThrow(function () {
//
//     throw new SyntaxError('错误');
//
//     // TypeError,
//     SyntaxError
//
// },SyntaxError,'正确');

//5.assert.equal(参数1和参数2是否相等 判断用的是==,不相等抛出AssertionError: 2 == 3)
// assert.equal(a,b);


//6.assert.fail(参数1:(比较的第一个值)参数2:(比较的第二个值)参数3:返回信息,参数四:运算符 不写(默认: '!='))
// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

// assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

// assert.fail('错误信息');
// 抛出 AssertionError: 错误信息

// assert.fail(a, b);
// 抛出 AssertionError: 'a' != 'b'


//7.assert.ifError(参数1:(如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。)

// assert.ifError(0);
// 通过
// assert.ifError(1);
// 抛出 1
// assert.ifError('error');
// 抛出 'error'
// assert.ifError(new Error());
// 抛出 Error



//8.assert.notDeepEqual





