

import express from 'express'
import { uuid } from 'uuidv4'
import { createClient } from 'redis';

const client = createClient()
const app = express()

app.use(express.json())


await client.connect()

// 扔一个漂流瓶
app.post('/', async (req, res, next) => {
  try {


    const bottle = req.body

    console.log(bottle)

    // 为每个漂流瓶随机生成一个不重复的 id
    const bottleId = uuid()

    console.log(bottleId)

    const type = {
      male: 0,
      female: 1
    }
    
    // 根据漂流瓶类型的不同将漂流瓶保存到不同的数据库
    // 主要目的是为了方便使用 Redis 中的 RANDOMKEY 命令：该命令返回当前数据库中的一个随机键，不能加任何条件
    await client.SELECT(type[bottle.type])
 
    // 将数据存为哈希

    await client.hSet(bottleId,bottle)



    // 设置漂流瓶生存期为 1 天
    await client.EXPIRE(bottleId, 60 * 60 * 24)

    res.status(201).json({
      bottle: {
        id: bottleId,
        ...bottle
      }
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// 捡一个漂流瓶
app.get('/', async (req, res, next) => {
  res.send('get /')
})

// 统一处理异常
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(3000, () => {
  console.log('running...')
})

3 zhogn    4zhong 

1  1

2  2

3  4

4  






1   1


1 + 1
2 + 0   2


1 + 1 + 1
1 + 2
2 + 1  4 
3 + 0


1 + 1 + 1 + 1
1 + 2 + 1
1 + 3 

2 + 1 + 1    7
2 + 2 

3 + 1
