import http from "http";
import urlParser from "url";
import qs from "querystring";
import handleListUsers from "./handleListUsers.js";
import handleReadUserById from "./handleReadUserById.js";
import handleSearchUsers from "./handleSearchUsers.js";
import handleCreateUser from "./handleCreateUser.js";
import handleUpdateUser from "./handleUpdateUser.js";
import handleDeleteUser from "./handleDeleteUser.js";

let server = http.createServer((req, res) => {
  let { method, url } = req;
  let { pathname, query } = urlParser.parse(url);

  if (method === "GET" && pathname === "/users") {
    if (query) {
      let queryParams = qs.parse(query);
      handleSearchUsers(req, res, queryParams);
    } else {
      handleListUsers(req, res);
    }
  } else if (
    pathname.startsWith("/users/") &&
    pathname.slice(1).split("/").length === 2
  ) {
    let segments = pathname.slice(1).split("/");
    //   console.log("segments : ", segments);
    let userId = segments[1];

    if (method === "GET") {
      handleReadUserById(req, res, userId);
    } else if (method === "PUT") {
      handleUpdateUser(req, res, userId);
    } else if (method === "DELETE") {
      console.log("reached the delet method");
      handleDeleteUser(req, res, userId);
    }
  } else if (method === "POST" && pathname === "/users") {
    console.log("checking wether it is the reaching the create user endpoint");
    handleCreateUser(req, res);
  }
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
