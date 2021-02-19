const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

// 1.读取md 和 css 内容
// 2.将上述读取出来的内容替换占位符，生成一个最终需要展示的html字符串
// 3.将上述html 字符写入到指定的html 文件中
// 4.监听md 文件内容的变化，然后更新html 内容
// 5.使用browser-sync 来实时显示html 内容

console.log('ss')
let mdPath = path.join(__dirname, process.argv[2])
let cssPath = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath),'.html')

console.log(mdPath)
console.log(cssPath)
console.log(htmlPath)

fs.watchFile(mdPath,(curr, prev)=>{
    if(curr.mtime !== prev.mtime ){
        fs.readFile(mdPath,'utf-8',(err,data)=>{
            // 将md --》 html 
            let htmlStr = marked(data)
            console.log(marked)
            console.log(htmlStr)
            fs.readFile(cssPath,'utf-8',(err,data)=>{
                let retHtml = temp.replace('{{content}}',htmlStr).replace('{{style}}',data)
                // 将上述的内容写入到指定的html 文件中，用于浏览器里进行展示
        
                fs.writeFile(htmlPath,retHtml,()=>{
                    console.log('生成成功了')
                })
            })
        })
        
    }
})

browserSync.init({
    broswer:'',
    server:__dirname,
    watch:true,
    index:path.basename(htmlPath)
})

const temp = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        {{style}}
    </style>
</head>
<body>
    {{content}}
</body>
</html>
`

