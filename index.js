'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHeader(302, {
    Location: "https://nicovideo.jp/"
  })
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
