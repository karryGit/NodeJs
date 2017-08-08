var express = require('express');
var router = express.Router();
//引入mysql依赖
var mysql = require('mysql');
var password = 0;
var oldpassword = 0;
//封装函数
function handleError(message, error) {
    if (error) {
        console.log(message + '失败')
        console.error(error)
        return false
    } else {
        console.log(message + '成功')
        return true
    }
}

/* GET home page. */
router.post('/', function (req, res) {

    password = req.body.affirm;
    oldpassword = req.body.PassWord;

    console.log(password + '确认密码');

    sql(res)

});


function sql(res) {
    //连接数据库需要的参数
    var options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: ''
    }
    //创建连接
    var connect = mysql.createConnection(options);
    //建立连接
    connect.connect(function (error) {
        handleError('连接', error)
    })
    //使用数据库
    var useDBSQL = 'use login';
    //执行使用数据库
    connect.query(useDBSQL, function (error) {
        handleError('使用数据库', error)
    });

    //修改数据库
    var updataSQL = 'update login set password=' + password + ' where password= ' + oldpassword;
    //执行修改数据
    connect.query(updataSQL, function (error) {

        var  isSuccess = handleError('修改数据',error);
        if (!isSuccess){
            return;
        }
        res.send('修改成功');
    });

    //关闭数据库
    connect.end(function (error) {
        handleError('关闭', error)
    });

}
module.exports = router;
