'use strict'

require('./index.css');

var _mm = require('util/mm.js');

// 侧边导航
var navSide = {
	option: {
		name: '',
		// 待动态渲染的项
		navList: [
			{
				name: 'user-center',
				desc: '个人中心',
				href: './user-center.html'
			},
			{
				name: 'order-list',
				desc: '我的订单',
				href: './order-list.html'
			},
			{
				name: 'user-pass-update',
				desc: '修改密码',
				href: './user-pass-update.html'
			},
			{
				name: 'about',
				desc: '关于TMALL',
				href: './about.html'
			}
		]
	}
}

module.exports = navSide;