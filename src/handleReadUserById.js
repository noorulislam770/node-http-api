import users from "./user.js";
import urlParser from "url";

function handleReadUserById(req, res) {
  let { url } = req;
  let { pathname } = urlParser.parse(url);

  let segments = pathname.slice(1).split("/");
  //   console.log("segments : ", segments);
  let userId = segments[1];
  //   console.log("UserID : ", userId);

  let user = users.find((u) => u.id == userId);
  //   console.log("user : found ", user);
  if (user) {
    res.writeHead(200);
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404);
    res.end("User No Found");
  }
}

export default handleReadUserById;
