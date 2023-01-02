const http = require("http");
const fs = require("fs");
const { contentType } = require("mime-types");
// var requests = require("requests");
const port = process.env.PORT || 4000;

const indexFile = fs.readFileSync("index.html", "utf-8");

let realData = "";
let quotesData = "";
const server = http.createServer((req, res) => {
  res.setHeader("Contant-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(indexFile.toString());
    // requests(
    //   " https://type.fit/api/quotes?appid=cc89f59b558cbf0dbc0e1550779a65b30"
    // )
    //   .on("data", (chunk) => {
    //       const
    //   })
    //   .on("end", (err) => {
    //     if (err) return console.log("connection closed due to error", err);
    //     res.end();
    //   });
  } else {
    // req.samedf()
    res.statusCode = 404;
    res.end("<h1> Not Found </h1> <p> This page was not found!<p>");
  }
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
