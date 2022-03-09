const http = require("http");
const data = require("./data");

// http.createServer((req, res) => {
//     res.write("hi , I am Satayjit Biswas");
//     res.end();
// }).listen(4500);

// ------------------------------
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application-json" });
    res.write(JSON.stringify(data));
    res.end();
}).listen(5001);
