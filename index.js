const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const testLogs = () => {
  setInterval(()=> console.log(`Log 10 sec before listening LOG`),20000);
  setInterval(()=> console.log(`Listening on: ${ PORT }`),30000);
  setInterval(()=> console.log(`Log 10 sec after listening LOG`),40000);
  setInterval(()=> console.log("just synced WITH GIT SYNC"),40000 );
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT,  testLogs())
