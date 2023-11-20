//reads input from terminal, store in variables
let args = process.argv.slice(2);
let webpage = args[0];
let whereTo = args[1];
// requiring stuff
const fs = require("fs");
const request = require("request");


// callback for request function. Writes file after connecting to website
const writeFile = function (whereTo, webpage) {
  fs.writeFile(whereTo, webpage, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
// runs when calling fetcher.js in terminal. stores webpage data in body
request(webpage, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  writeFile(whereTo, body);
  console.log(`Downloaded and saved ${body.length} bytes to ${whereTo}`);
});
