const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/userapi/userapi.json`,"utf-8");
    const objData=JSON.parse(data);
    // fs.readFile(`${__dirname}/userapi/userapi.json`,"utf-8",(err,data)=>{
    //     console.log(data);
    //     const objData=JSON.parse(data);
    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello from others side Ehtesham");
    }
    else if(req.url=="/about"){
        res.end("Hello from about");
    }
    else if(req.url=="/contact"){
        res.end("Hello from contact");
    }
    else if(req.url=="/userapi"){
        res.writeHead(200,{'Content-type':"application/json"});
            res.end(data);
        // res.end("Hello from User Api");
    }
    else{
        res.writeHead(404,{'Content-type':"text/html"});
        res.end("404 page.Page does not exist ");
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no 8000");
})