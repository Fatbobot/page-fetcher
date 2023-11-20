let args = process.argv.slice(2);
// requiring stuff
const fs = require("fs");
const request = require("request");
// const net = require("net");

let webpage = args[0];
let whereTo = args[1];

// writing file function
const writeFile = function (whereTo, webpage) {
  fs.writeFile(whereTo, webpage, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

request(webpage, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  writeFile(whereTo, body);
  console.log('Downloaded and saved ${'body.length}, to ${'whereTo'})
});
