import http from "http";
import urlParser from "url";
import qs from "querystring";
import handleListUsers from "./handleListUsers.js";
import handleReadUserById from "./handleReadUserById.js";

let server = http.createServer((req, res) => {
  let { method, url } = req;
  let { pathname } = urlParser.parse(url);

  if (method === "GET" && pathname === "/users") {
    handleListUsers(req, res);
  } else if (
    method === "GET" &&
    pathname.startsWith("/users/") &&
    pathname.slice(1).split("/").length === 2
  ) {
    handleReadUserById(req, res);
  }
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
