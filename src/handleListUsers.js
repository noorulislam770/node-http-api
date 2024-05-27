import users from "./user.js";

function handleListUsers(req, res) {
  res.writeHead(200);
  res.end(JSON.stringify(users));
}

export default handleListUsers;
