# 第三阶段：通用footer和header以及侧边栏和操作提示页开发

#### 1、通用footer开发

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75vo9b5wdj31mc0n6jsv.jpg)

在common/index.js中引入，如下：

require('./footer/index.css');

在common下创建footer目录和index.css文件，样式如下：

.footer{
  padding-bottom: 10px;
}
.footer .links{
  text-align: center;
  color: #666666;
  line-height: 30px;
}
.footer .links .link{
  padding: 0 10px;
}
.footer .copyright{
  text-align: center;
  color: #666666;
  line-height: 30px;
}

#### 2、通用header开发

在layout中创建header.html文件，如下：

<div class="header">
  <div class="w">
    <a class="logo" href="./index.html">TMALL</a>
    <div class="search-con">
      <input class="search-input" id="search-input" placeholder="请输入商品名称"/>
      <button class="btn search-btn" id="search-btn">搜索</button>
    </div>
  </div>
</div>

测试：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75vxdomvpj30po07675c.jpg)

在common下创建header目录，并创建index.js和index.css文件

在index.js文件中搭建如下结构：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75w2npoa2j30p408gdgm.jpg)

在index/index.js文件中引入，如下：

require('@/common/header/index.js');

在common/header/index.css文件中写样式：

/*通用头部导航*/
.header .logo{
  position: absolute;
  left: 60px;
  top: 34px;
  display: block;
  font-size: 36px;
  color: #C60023;
  font-weight: bold;
  text-decoration: none;
}
.header .search-con{
  padding: 40px 0 30px 250px;
}
.header .search-con .search-input{
  width: 550px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #C60023;
  outline: none;
}
.header .search-con .search-btn{
  position: absolute;
  height: 44px;
  width: 80px;
}

#### 3、关键字回填功能

在common/header/index.js文件中的header对象中定义如下的方法：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75wge0zajj310c0csdge.jpg)

并在init方法中调用。如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75whgucyej30pk05cwef.jpg)

#### 4、事件绑定和搜索提交功能

在common/header/index.js文件中，定义bindEvent方法，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75wl07f6sj317i0hsmxy.jpg)

提交搜索：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75wsoxb6yj31900ec3z7.jpg)

此时view目录下面的index.html文件如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75x8u6wyej31ho0g6aaw.jpg)

在index/index.js文件中导入nav，如下：

require('@/common/nav/index.js');

=========================================

#### 5、通用侧边导航开发

在layout中创建nav-side.html文件，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g75xmeqrv7j317g0hk758.jpg)

在common目录下创建nav-side目录，内创建index.js和index.css文件。

index.js文件的基本结构如下：

'use strict';
require('./index.css');
var _mm = require('util/mm.js');

//侧边导航
var navSide = {

}
module.exports = navSide;   

======================================

在index.css文件中，定义样式如下：

/*导航主体*/
.nav-side{
  float: left;
  width: 130px;
  /*同时有宽度和高度才会占一个位置，否则位置会闪*/
  min-height: 100px;
}
.nav-side .nav-item{
  line-height: 25px;
  font-size: 13px;
}
.nav-side .nav-item .link{
  color: #888;
}
.nav-side .nav-item.active .link{
  color: #C60023;
}
/*右侧内容区*/
.content.with-nav{
  float: left;
  width: 950px;
}

====================================

在index/index.js文件中导入nav-side，如下：

var navSide = require('@/common/nav-side/index.js');

====================================

继续在common/nav-side/index.js文件中实现逻辑，如下：

先建立一个待动态渲染的项的模板，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79ckehyc4j311l0u0ab5.jpg)

====================================

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

再完成初始化的逻辑，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79cfwl4ytj31660bowf8.jpg)

继续写renderNav函数，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79chhof36j31cg0rk40t.jpg)

在common/nav-side目录下新建一个index.string的模板文件

把下面的这个结构【剪切】到index.string中，如下：

<!--下面是静态渲染，当动态渲染的时候会将渲染的内容放到ul容器中-->
  <li class="nav-item">
    <a class="link" href="">个人中心</a>
  </li>
  <li class="nav-item active">
    <a class="link" href="">我的订单</a>
  </li>
  <li class="nav-item">
    <a class="link" href="">关于TMALL</a>
  </li>

同时我们要用循环来实现渲染多条数据，所以我们只保留一条数据即可，如下：

<li class="nav-item">
    <a class="link" href="">个人中心</a>
</li>

接着将它改成如下的形式：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79csv2vtbj316y0dqdg9.jpg)

如果这个时候去编译的话是会报错的，因为我们没有让webpack支持string类型的文件的打包。我们需要在webpack.config.js文件中添加loader，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79cz9nj46j31go0nmmy1.jpg)

然后在index/index.js文件中调用init函数，如下：

//测试个人中心页

navSide.init({
  name: 'user-center'
});

//测试我的订单页

navSide.init({
  name: 'order-list'
});

//测试修改密码页

navSide.init({
  name: 'user-pass-update'
});

重新启动服务，执行：sudo cnpm run dev + 回车

================================================

#### 6、通用操作提示页开发

首先在webpack.config.js文件中添加：

'user-result': './src/page/user-result/index.js',

添加页面：

new HtmlWebpackPlugin(getHtmlConfig('user-result', '操作结果')),

重启服务，再去src/page目录下创建user-result目录，并创建index.css和index.js文件，再在view目录下创建

user-index.html文件。可以去index.html文件中拷贝基础模板

<!DOCTYPE html>
<html lang="en">
  <head>
     <%= require('html-loader!./layout/head-common.html') %>
     <title><%= htmlWebpackPlugin.options.title%> - storeTMall电商平台</title>
  </head>

================================

<%= require('html-loader!./layout/footer.html') %>
  </body>
</html>

================================

其中的<title><%= htmlWebpackPlugin.options.title%> - storeTMall电商平台</title>

这一句中的title需要在webpack.config.js中配置，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79e6a62jyj317g0hi751.jpg)

同样，在创建页面对象的时候也需要传参数，如下：

new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),

new HtmlWebpackPlugin(getHtmlConfig('user-result', '操作结果')),

new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),

只要动了webpack的配置文件，那么就需要重启服务。

sudo cnpm run  dev + 回车

然后直接在浏览器中访问：

localhost:8088/dist/view/user-result.html + 回车

================================================

user-result.html文件初始内容如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79eiqcg52j31e80iajs8.jpg)

注册成功提示页：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79ekyt510j311a0923yy.jpg)

================================================

然后在user-result/index.js文件中写脚本，如下：

'use strict';
require('./index.css');
require('@/common/nav-simple/index.js');
var _mm = require('util/mm.js');

在user-result/index.css文件中写样式，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79eqjk34cj313m0q2t9n.jpg)

=============================================

然后实现页面的逻辑，如下：

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g79euj55ppj31960fyt9f.jpg)

=============================================

然后去浏览器中模拟一个type，如下

























































