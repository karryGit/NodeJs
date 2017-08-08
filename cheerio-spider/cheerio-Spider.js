var cheerio = require('cheerio');//引入cheerio
var request= require('request');//引入request
var download=require('./download');//引入download

var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}

request.get(options, function (error, response, body) {
    var $ = cheerio.load(body);
    var items = [];//热门图片下面的描述
    var title = [];//热门里面的title
    $('.albums .num').each(function (index,element) {
        var numUrl = $(element).text()
        items.push(numUrl);
    })
    //热门图片
    $('.albums .pic a img').each(function (index,element) {
        var imgUrl = $(element).attr('data-origin')
        download(imgUrl,'albums',index+'.jpg');
    })
    //文字部分
    $('.notes li a').each(function (index,element) {
        title[index] = $(element).text();
    })

    //豆瓣时间
    var timeArr = [];//豆瓣时间title
    $('#anony-time .main .time-list li').each(function (index,element) {
        //图片部分
         var timeImgArr = $(element).children('a').children('img').attr('src');

        var title = {
            title :$(element).children('.title').text(),
            type :$(element).children('.title').text()
        }
        timeArr.push(title);
        download(timeImgArr,'time',index+'.jpg');
    })
    //视频部分 有坑
    // $('#anony-video .wrapper .main ul li').each(function (index,element) {
    //     // var bgUrl = $(element).children('.video-cover').children('a').attr('href')
    //     var title = $(element).children('.video-cover').children('a')
    //
    //     console.log(bgUrl);
    //
    // })

    //电影部分
    var movieArr = [];//电影部分title
    $('#anony-movie .wrapper .movie-list ul li').each(function (index,element) {
        var movieImgUrl = $(element).children('.pic').children('a').children('img').attr('data-origin')
            var title = {
                title:$(element).children('.title').children('a').text(),
                rating:$(element).children('.rating').children('i').text()
            }
            movieArr.push(title);
        download(movieImgUrl,'movie',index+'.jpg');
    })


    //小组部分
    var groupArr = [];//小组部分title
    $('#anony-group .wrapper .main .group-list ul li').each(function (index,element) {
        var groupUrl = $(element).children('.pic').children('a').children('img').attr('data-origin')

        var title = {
            title:$(element).children('.info').children('.title').children('a').text(),
            member:$(element).children('.info').text()
        }
        groupArr.push(title);
        download(groupUrl,'movie',index+'.jpg');
    })

    //读书部分
    var bookArr = [];
    $('#anony-book .wrapper .main div ul li').each(function (index,element) {
        var bookUrl = $(element).children('.pic').children('a').children('img').attr('data-origin')

        var title = {
            title:$(element).children('.title').children('a').text(),
            member:$(element).children('.author').text()
        }
        bookArr.push(title);
        download(bookUrl,'book',index+'.jpg');
    })
    console.log(title);



















})


