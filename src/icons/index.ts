import '../assets/iconfont.js';

/**
 * TODO
 *
 * 抽取公共方法 加载当前目录指定文件
 */

// TODO 探索多种方式加载图标 包括iconfont.js 远程图片 字体库等

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext);
};
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
