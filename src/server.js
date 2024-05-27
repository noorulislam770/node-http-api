import http from "http";
import urlParser from "url";
import qs from "querystring";
import handleListUsers from "./handleListUsers.js";

let server = http.createServer((req, res) => {
  let { method, url } = req;
  let { pathname } = urlParser.parse(url);

  if (method === "GET" && pathname === "/users") {
    handleListUsers(req, res);
  }
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
