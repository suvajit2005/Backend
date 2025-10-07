// const http = require('http');


// const server = http.createServer((req,res)=>{
    
//     // res.end("Hello Coder Army");

//     if(req.url==="/"){
//         res.end("Hello Coder Army");
//     }
//     else if(req.url==="/contact"){
//         res.end("This is our Contact Page")
//     }
//     else if(req.url==="/about"){
//         res.end("This is our About Page")
//     }
//     else
//     {
//         res.end("Error: Page Not Found");
//     }
// });


// server.listen(4000, ()=>{
//     console.log("I am Listening at port number 4000");
// })
///////////////////////////HOW TO BUILD SERVER//////////////////////////////////

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //res.writeHead(200, { "Content-Type": "application/json" }); 
        res.end({"name":"Rohit", "age":20, "money":70, "Mon":20});
    }
});

server.listen(4000, () => {
    console.log("hello brother i am listining you don't worry");
});
