const loaderUtils = require('loader-utils');

module.exports = function(source) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this) || {};
  const designWidth = options.designWidth || 750;
  const scale = 100 / designWidth;
  
  var reg = /\b(\d+(\.\d+)?)rpx\b/g;
  return source.replace(reg, (match, $1) => {
    return `${($1* scale).toFixed(6)}vw`;
  });
};