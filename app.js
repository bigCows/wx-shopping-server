var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');
var goodsOrderRouter = require('./routes/goods-order');
var categoryRouter = require('./routes/category');
var commonMethod = require('./common/return-data')
const JWT = require('./utils/jwt');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  if(req.url.includes('goods_order')) {
    // const token = req.headers.authorization?.split('.')[1]
    const token = req.headers.authorization
    if(token) {
      const payload = JWT.decrypt(token)
      if(payload) {
        const refreshToken = JWT.encrypt({username:payload.username},'2h')
        res.header('Authorization',refreshToken)
        next()
      } else {
        res.status(401).send(commonMethod.returnData(-1,'登录过期',[]))
      }
    }
  } else {
    next()
  }
})

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/list', listRouter);
app.use('/api/goods_order', goodsOrderRouter);
app.use('/api/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message; 
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
