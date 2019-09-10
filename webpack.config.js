//请求Nodejs提供的path模块
// path有一个方法：resolve(参数1，参数2)
// 参数1：__dirname表示当前目录的路径
// 参数2：需要追加的目录名，不需要写/，resolve方法会帮我们自动追加/
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: {
		'index': './src/page/index/index.js',
		'login': './src/page/login/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	externals: {
		'jquery'  : 'window.jQuery'
	},
	//webpack4的新写法
	/*optimization: {
		// 抽取公共模块的对象
		splitChunks: {
			// 缓存组
			cacheGroups:{
				//commons表示公共的模块
				commons: {
					//即会生成独立通用模块base.js文件(位置以output为准)
					name: 'base',
					chunks: 'initial',
					//最小2个文件有公共内容才提取
					minChunks: 2,
					//SplitChunksPlugin默认地只会分离大于30Kb的文件
            		//我们的公共文件并没有大于30Kb，所以改为0之后就完美了
					minSize: 0
				}
			}
		}
	},*/
	module: {
		rules: [
			{
				test:/\.css$/, 
				// loader: "style-loader!css-loader",
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/[name].css")
	]
}
module.exports = config;
