#!/usr/bin/env node
var fs = require("fs")
var dirName = process.argv[2] //传的参数从第二个开始
fs.access("./" + dirName, function(err) {
  if(err) {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync("css")
    fs.mkdirSync("js")
    fs.writeFileSync("./index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
    fs.writeFileSync("./css/style.css","h1{color: red;}")
    fs.writeFileSync("./js/main.js","var string = 'Hello World'\nalert(string)")

    console.log("success")
    process.exit(0)
  }else {
    console.log("文件已经存在！")
    process.exit(1)
  }
})





