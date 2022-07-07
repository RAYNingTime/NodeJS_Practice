const http = require("http");

const server = http.createServer((req, res) => {
  //req - request
  //res - response
  var completed = false;

  if (req.url === "/") {
    completed = true;
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    completed = true;
    res.end("Here is our short history");
  }

  //Without this IF statement I have an error
  if (completed == false) {
    res.end(`
		<h1>Oops!</h1>
		<p>We can't seem to find the page you are looking for</p>
		<a href="/">back home</a>
		`);
  }

  // res.write('Welcome to our home page');
  // res.end();
});

server.listen(5000);
