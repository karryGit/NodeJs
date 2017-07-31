// fs.open(path, flags, callback)
// fs.utimes(path, atime, mtime, callback)
// fs.watchFile(filename, [options], listener)
// fs.unwatchFile(filename, [listener])
// fs.link(existingPath, newPath, callback)

/*
 * Flag	描述
 r	以读取模式打开文件。如果文件不存在抛出异常。
 r+	以读写模式打开文件。如果文件不存在抛出异常。
 rs	以同步的方式读取文件。
 rs+	以同步的方式读取和写入文件。
 w	以写入模式打开文件，如果文件不存在则创建。
 wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
 w+	以读写模式打开文件，如果文件不存在则创建。
 wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
 a	以追加模式打开文件，如果文件不存在则创建。
 ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
 a+	以读取追加模式打开文件，如果文件不存在则创建。
 ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
 * **/
var fs = require('fs');

//1.fs.open(参数1路径:绝对或者相对,参数2选项:flag选择读取方式)
fs.open('./1.txt', 'r+', function (err, fd) {

    if (err) {
        return console.error(err);
    }
    // console.log(fd);
});

//2.fs.utimes(参数1路径:绝对或者相对,参数2:访问时间,参数3:修改时间,错误返回函数)
fs.utimes('./1.txt',60,120,function (err) {
    if (err) {
        return console.error(err);
    }
    // console.log("修改时间戳成功");
});

//获取文件信息
fs.stat('./1.txt', function (err, stats) {
    // console.log(stats);//打印时间戳
});


//封装函数
function abc(curr,prev) {
    console.log('the current mtime is:' + curr.mtime);
    console.log('the previous mtime was:' + prev.mtime)
}
//3.监听文件 (参数1路径:绝对或者相对,参数2监听回调函数:传参值(现在的,以前的))
fs.watchFile('./1.txt',abc);


//4.停止监听(参数1路径:绝对或者相对,参数2停止监听回掉函数)
fs.unwatchFile('./1.txt',abc);

//5.异步link(参数1:(存在的地址)参数2:(新建的地址同存在的地址内容一致)参数3:回调函数(err)错误信息)
fs.link('./1.txt', './2.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("成功")
});




