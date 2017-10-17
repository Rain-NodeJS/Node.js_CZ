
var express = require('express');

var app = express();

// var router = require('./controller/router');
var router = require('./controller');

// 设置模板引擎
app.set('view engine', 'ejs');

// 设置中间件

// app.use(express.static('./public')); // 提供静态服务
app.use('/static',express.static('./public')); // 提供静态服务


app.get('/', router.showIndex);

// app.get('/admin', function (req, res) {
//   // 为了讲解知识点, 对项目没有用处
//   res.send('admin'); // 无法发送'admin', 因为路径已经匹配到./public/admin了.
//   // TODO: 要特别注意是否和静态文件路径冲突
//   // 解决方法, 添加一个路径(例如 /static)
// });

app.get('/:albumName', router.showAlbum);


app.listen(3000, function () {
  console.log('监听端口号: 3000');
});











