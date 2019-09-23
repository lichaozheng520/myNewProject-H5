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

在layout中创建head.html文件，如下：

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
/*面包屑导航*/
.crumb{
  margin-bottom: 15px;
  height: 50px;
  line-height: 50px;
  background: #EEE;
  color: #888;
  font-size: 14px;
  border-top: 2px solid #C60023;
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

6：00.。。。



































