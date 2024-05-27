import users from "./user.js";
function handleCreateUser(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    let newUser = JSON.parse(body);
    users.push(newUser);

    res.writeHead(200);
    res.end(JSON.stringify(newUser));
  });
}

export default handleCreateUser;
