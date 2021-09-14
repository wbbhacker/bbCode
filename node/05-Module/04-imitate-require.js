const fs = require('fs')
const path = require('path')
const vm = require('vm')


function Module(id) {
  this.id = id
  this.exports = {}
}

Module._extenstions = {
  '.js'(module) {
    // 读取
    let content = fs.readFileSync(module.id, 'utf-8')

    // 包装
    content = Module.wrapper[0] + content + Module.wrapper[1]


    // vm
    let compileFn = vm.runInThisContext(content)


    // 准备参数值

    let exports = module.exports

    let dirname = path.dirname(module.id)
    let filename = module.id

    compileFn.call(exports, exports, myRequire, module, filename, dirname)

  },
  '.json'(module) {
    let content = JSON.parse(fs.readFileSync(module.id, 'utf-8'))
    module.exports = content
  }
}

Module.wrapper = [
  '(function(exports, requrie, module, __filename, __dirname){',
  '})'
]

Module._cache = {}

Module._resolveFilename = function (filename) {
  // 利用 path 将 filename 转化为 绝对路径
  const absPath = path.resolve(__dirname, filename)
  // 判断路径是否存在

  if (fs.existsSync(absPath)) {
    return absPath
  } else {
    // 文件定位
    const suffix = Object.keys(Module._extenstions)
    for (let i = 0; i < suffix.length; i++) {
      const newPath = filename + suffix[i]
      if (fs.existsSync(newPath)) {
        return newPath
      }
    }
  }

  throw new Error(`${filename} is not exists!`)

}

Module.prototype.load = function () {
  let extname = path.extname(this.id)
  Module._extenstions[extname](this)


}

function myRequire(filename) {
  // 1.绝对路径
  const mPath = Module._resolveFilename(filename)
  // 2.优先缓存
  const cacheModule = Module._cache[mPath]
  if (cacheModule) return cacheModule.exports

  // 3.创建空对象加载目标模块

  let module = new Module(mPath)

  // 4.缓存已加载过的模块
  Module._cache[mPath] = module

  // 5.执行加载(编译执行)

  module.load()


  // 6. 返回数据
  return module.exports

}


let obj = myRequire('./v')
console.log(obj)