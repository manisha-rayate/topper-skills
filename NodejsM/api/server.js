const http = require("http");
const PORT = 8888;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to JS");
    res.end();
  }
  if (req.url == "/about") {
    res.write("Welcome to JS");
    res.end();
  }
  if (req.url == "/products") {
    res.write(
      JSON.stringify([
        { model: "aaa", brand: "sss", price: 222 },
        { model: "aaa", brand: "sss", price: 222 }
      ])
    );

    res.end();
  }

  res.write("hello");
  res.end();
});
// server.listen(8888); //start the server

server.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});

//  http://127.0.0.1:8888/ -> Home
//  http://127.0.0.1:8888/about -> about
