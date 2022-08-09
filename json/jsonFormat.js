import fs from 'fs'
import path from 'path'

const data = fs.readFileSync('./text.txt', {
  encoding:'utf-8'
})
const dataArr = data.split(/\n/);
const len = dataArr.length

const cn = {}
const us = {}


for (let i = 0; i < len; i++) { 
  const item = dataArr[i].split('：')
  console.log(item)
  cn[item[1].trim()] = item[0].trim()
  us[item[1].trim()] = item[1].trim()
}

console.log(cn)
console.log(us)