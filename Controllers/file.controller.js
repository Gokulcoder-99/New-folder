const FilesRouter = require("express").Router();
const filesystem = require("fs");
const path = require("path");
/**
 * GET, POST, PUT, DELETE, PATCH
 */

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
FilesRouter.get("/create", (req,res) =>{
  var date = new Date();
  var currentTime = date.getTime();
  var timestamp = currentTime.toString();
  var dateAndTime = `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
  var finalTime = (`${dateAndTime} ${".txt"}`);
    filesystem.writeFile(`./filesystem/${finalTime}`, timestamp, function (err){
      if(err) throw err;
      console.log("file created succesfully")
  })
  })

module.exports = FilesRouter;