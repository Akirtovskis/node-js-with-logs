const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const testLogs = () => {
  setInterval(()=> console.log(`redeployed with 🌪🌪🌪 approach`),20000);
  setInterval(()=> console.log(`Listening on: ${ PORT }`),30000);
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT,  testLogs())
