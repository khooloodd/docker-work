const express = require('express')
const app = express()
const port = 3000

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

var domain = process.env.DOMAIN || '';


app.get('/', function(req, res){
  res.render('index', {
    domain: domain
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

