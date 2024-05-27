import users from "./user.js";

function handleDeleteUser(req, res, userId) {
  //   console.log("");
  let userIndex = users.findIndex((u) => u.id == userId);
  console.log("userindex ", userIndex);

  if (userIndex >= 0) {
    users.splice(userIndex, 1);
    res.writeHead(200);
  } else {
    res.writeHead(404);
  }
  res.end();
}

export default handleDeleteUser;
