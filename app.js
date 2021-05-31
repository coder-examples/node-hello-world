const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

const views = {};

app.use(
    express.urlencoded({
      extended: true
    })
)

app.get('/', (req, res) => {
  console.log(views)
  res.send(views);
})

app.post('/view', (req, res) => {
  try {
    if(views[req.body.id]) {
      views[req.body.id]++;
    } else {
      views[req.body.id] = 1;
    }
  } catch(error) {
    res.json(error)
    console.log(error)
  }

  console.log(200)
})

module.exports = app;
