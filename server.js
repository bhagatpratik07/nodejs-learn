const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash

  const num = _.random(0, 10);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about-us":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to requests on port 30000");
});
