const fs = require('fs')
let rs = fs.createReadStream('./text.txt')
let ws = fs.createWriteStream('./text1.txt')
rs.pipe(ws)