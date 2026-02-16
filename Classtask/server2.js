const http = require("http");
const url = require("urlx");

const myServer = http.createServer((req, res) => {
    const myurl= url.parse(req.url,true);
    console.log(myurl);

    

    switch (myurl.pathname) {
        case "/":
            res.end("homepage");
            break;
        case "/about":
            const username=myurl.query.myname;
            res.end("about page");
            break;
        case "/contact":
            res.end("contact page");
            break;
        default:
            res.end("error 404");
            break;
    }
});

myServer.listen(8000, () => console.log("server started on port 8000"));