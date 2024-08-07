const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        const index = fs.readFileSync("./public/index.html", "utf8");
        res.write(index)
        res.end()
    } else if (req.url === "/about" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        const index = fs.readFileSync("./public/about.html", "utf8");
        res.write(index)
        res.end()
    } else if (req.url === "/contact-me" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        const index = fs.readFileSync("./public/contact-me.html", "utf8");
        res.write(index)
        res.end()
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/html")
        const index = fs.readFileSync("./public/404.html", "utf8");
        res.write(index)
        res.end()
    }
})

server.listen(8080);