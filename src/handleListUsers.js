import users from "./user.js";

function handleListUsers(req, res) {
  // console.log("reached the handle list users endpoint");
  res.writeHead(200);
  res.end(JSON.stringify(users));
}

export default handleListUsers;
