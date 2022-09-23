var createError = require('http-errors');
var express = require('express');

var port=3001;
var userRoute=require("./src/routes/userRoute")



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/src/views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({secret:"senha"}));


//app.use(express.static(path.join(__dirname, 'server/public')));

// app.use((req,res,next)=>{
//   console.log("entrou no middleware");
//   console.log(req.url);
//   next();
// })


app.use('/user', userRoute);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});





module.exports = app;
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port );
 
});
