import users from "./user.js";
function handleUpdateUser(req, res, userId) {
  let userIndex = users.findIndex((user) => user.id == userId);
  if (userIndex >= 0) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      let updates = JSON.parse(body);
      let updatedUser = { ...users[userIndex], ...updates };
      users.splice(userIndex, 1, updatedUser);
      res.writeHead(200);
      res.end(JSON.stringify(updatedUser));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}

export default handleUpdateUser;
