import handler from "serve-handler";
import http from "http";

const PORT = 1234;

const server = http.createServer((request, response) => {
  return handler(request, response);
});

server.listen(PORT, () => {
  console.log(`Running web server at http://localhost:${PORT} :)`);
});
