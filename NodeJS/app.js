const readline = require('readline');
const fs = require('fs');
const http = require('http');

const path = require('path');
// Create a server
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.css': 'text/css',
        '.js' : 'application/javascript',
        '.svg': 'image/svg+xml',
    };
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    fs.readFile(filePath, (error, data) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            }
            else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
        console.log('A new request received');
    });
});

    // Start the server
    server.listen(8080, '127.0.0.1', () => {
        console.log('Server started on port 8080');
    });