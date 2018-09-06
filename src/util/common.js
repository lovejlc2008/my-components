/**
 * 路由懒加载方法，传入路径地址，@指代地址 "src"
 * webpack2及以上原生支持dynamic-import，不需要额外的babel插件
 * 使用import()直接可以异步加载组件
 * @param {String} url
 */
const load = (url) => {
  return () => {
    return import(`@/${url}`)
  }
}

export {load}
