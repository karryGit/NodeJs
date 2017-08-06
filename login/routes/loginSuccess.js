//引入express
var express = require('express');
//引入router路由
var router = express.Router();
//引入mysql依赖
var mysql = require('mysql');

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

function sql(res) {
    //连接数据库需要的参数
    var options = {
        host:'localhost',
        port:3306,
        user:'root',
        password:''
    }
//创建连接
    var connect = mysql.createConnection(options);
//建立连接
    connect.connect(function (error) {
        handleError('连接',error)
    })
//创建数据库
    var createDBSQL = 'create database login';
//执行创建数据库
    connect.query(createDBSQL,function (error) {
        handleError('创建',error)
    });
//使用数据库
    var useDBSQL = 'use login';
//执行使用数据库
    connect.query(useDBSQL,function (error) {
        handleError('使用数据库',error)
    });
//创建一个表
    var createTableSQL = 'create table login(id int(20),username varchar(30),password varchar(30),primary key(id))'
//执行创建表
    connect.query(createTableSQL,function (error) {
        handleError('创建表',error)
    });
//查询账户密码是否相同
    var selectSQL = 'select * from login'
//执行查询
    connect.query(selectSQL,function (error,results) {
        if (!handleError('查询',error)){
            return;
        }
        console.log(results);
        if (results.length == 0){
            res.send('失败')
        }else {
            res.send('成功')
        }
    });
 //关闭数据库
    connect.end(function (error) {
        handleError('关闭', error)
    })
}

/* GET home page. */
router.post('/', function(req, res) {

    var username = req.body.userName;
    var password = req.body.password;
    console.log(username+'账号');
    console.log(password+'密码');
    sql(res);
    // res.render('loginSuccess', { title: 'Express' });

});







module.exports = router;
