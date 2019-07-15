let {request, httpOwn}  = require("./request.js");

request("/data").then(res=>{
    console.log(res);
 });
console.log(" httpOwn", httpOwn);