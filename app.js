const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser') // 非get请求传过去的参数， 放到req.body
const cors = require('cors') // 跨域用

const app = express()

app.use(cors())
// 解析urlencoded 请求体 extendture->使用queryString库（默认） false->使用qs库。
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json()) // 解析JSON
app.use('/', router)

// const privateKey = fs.readFileSync('./https/book_youbaobao_xyz.key') // 公钥
// const pem = fs.readFileSync('./https/book_youbaobao_xyz.pem') // 证书
// const credentials = {
//   key: privateKey,
//   cert: pem
// }
// const httpsServer = https.createServer(credentials, app)

const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('HTTP服务启动成功：http://%s:%s', address, port)
})
// httpsServer.listen(18082, function() {
//   console.log('HTTPS Server is running on: https://localhost:%s', 18082)
// })
