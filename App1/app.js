const fs = require('fs');
const readline = require('readline');
const path = require('path');
const http = require('http');
const html = fs.readFileSync('./frontend/index.html', 'utf-8');
const server = http.createServer((request, response)=>{
    response.end(html);
    console.log('A new request received');
});

server.listen(8080,'127.0.0.1',()=>{
    console.log('Server is running on port 8080');
})