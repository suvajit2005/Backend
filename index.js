// const hello = require('http');

// //  How to create a http server
// //we import the node js predefined module 'http' that mainly used to acctept reqest, give responce, as well as connnect to other server and create server

// console.log("I am first");

// const server = hello.createServer((req,res)=>{
//     // the above line we use to create the htttp server using node js
   
//     if(req.url==="/"){
//         console.log(req.url)
//         res.end("Hello BHAI");
//     }
//     else if(req.url==="/about"){
//         console.log(req.url)
//         res.end("This is about Page");
//     }
//     else if(req.url==="/contact")
        
//     {    console.log(req.url)
//         res.end("Contact info of user")
//     }
//     else{
//         res.end("Page not Found");
//     }
// });

// server.listen(2000, ()=>{
//     console.log("Server running");
//     // console.log(http)
//     //console.log(server)
// });

// console.log("I am last");


//////////////////////////////////////////////////////////////////////////////////

const server=require('http');
//const { request } = require('undici-types');
const main=server.createServer((req, res)=>{
    if(req.url=="/")
        res.end("hello bhai")
})
main.listen(2000,()=>{
    console.log("helllo hi")
})
//er diagram, entity, relation, key , er diagram to table , types of relation ship, entity types, function depenedency types, reflex, amstrong, normalizaion, minimization, 