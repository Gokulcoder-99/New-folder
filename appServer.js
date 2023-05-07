const express = require('express');
const APP_SERVER = express();
const FilesRouter = require('./Controllers/file.controller');


APP_SERVER.use("/filesystem",FilesRouter);

module.exports = APP_SERVER;