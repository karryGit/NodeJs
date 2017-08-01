
//1.assert.断言(参数1:条件表达式,参数2'不完全相等时打印')
const assert = require('assert');
// console.assert(1 === 1 ,'1绝对不等于2');
// console.log('走到这是等于1');

//2.deepEqual.测试第一个参数是否==第二个参数,如果相等什么都不会抛出,
// 如果不相等抛出AssertionError: 2 deepEqual 3
var a = 2;
var b = 3;
 // assert.deepEqual(a,b);


//3.assert.deepStrictEqual.他和上面的一样,但是他判断用的是===
// assert.deepStrictEqual(a,b);

//4.assert.doesNotThrow (参数1:(function),第三个参数和第二个参数比较类型)
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



//8.assert.notDeepEqual测试是否不深度相等。 与 assert.deepEqual() 相反。
//如果两个值深度相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

// 9.assert.notDeepEqual(obj1, obj1);
//测试是否不深度全等。
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
//如果两个值深度全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息

//10.assert.notEqual(actual, expected[, message])
//使用 不等运算符（!=）测试是否不相等。
//如果两个值相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

// assert.notEqual(1, 2);
// 通过

// assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

// assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'

//11.assert.ok(value[, message])
//测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。
//如果 value 不为真值，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

// assert.ok(true);
// 通过
// assert.ok(1);
// 通过
// assert.ok(false);
// 抛出 "AssertionError: false == true"
// assert.ok(0);
// 抛出 "AssertionError: 0 == true"
// assert.ok(false, '不是真值');
// 抛出 "AssertionError: 不是真值"


//12.assert.strictEqual(actual, expected[, message])
//使用 全等运算符（===）测试是否全等。

//如果两个值不全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

// assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

// assert.strictEqual(1, 1);
// 通过

// assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'


//13.assert.throws(block[, error][, message])
/*
* 期望 block 函数抛出错误。

 如果指定了 error，error 可以是构造函数、正则表达式、或自定义的验证函数。

 如果指定了 message，则当 block 不抛出错误时，message 会作为 AssertionError 的错误信息。
 **/


//注意，error 不能是一个字符串。 如果第二个参数是一个字符串，则视为省略 error 参数，传入的字符串会被用于 message。 这点比较容易搞错：

// 这是错误的！不要这么做！
//assert.throws(myFunction, '错误', '没有抛出期望的信息');

// 应该这么做。
//assert.throws(myFunction, /错误/, '没有抛出期望的信息');


//14.assert.notStrictEqual(actual, expected[, message])
//使用 不全等运算符（!==）测试是否不全等。与 assert.deepStrictEqual() 相反。


// assert.notStrictEqual(1, 2);
// 通过

// assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

// assert.notStrictEqual(1, '1');
// 通过
//如果两个值全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。







