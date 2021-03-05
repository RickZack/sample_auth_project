const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const helmet = require("helmet");
const authConfig = require("./../client/src/auth/auth_config.json");	// TODO: riposizionare file di configurazione?
const appOrigin = authConfig.appOrigin || `http://localhost:4000`;	// TODO: hardcoded the port

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet());
app.use(cors({ origin: appOrigin }));	// TODO: try to disable it to intercept with proxy


app.use('/public', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
