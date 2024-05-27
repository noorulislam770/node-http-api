import users from "./user.js";

const searchableFields = ["username"];

function handleSearchUsers(req, res, queryParams) {
  let results = [];
  for (let key in queryParams) {
    if (searchableFields.includes(key)) {
      let newResults = users.filter((user) =>
        user[key].includes(queryParams[key])
      );
      results.push(...newResults);
    }
  }
  console.log("query paramaters ", queryParams);
  res.writeHead(results.length > 0 ? 200 : 404);
  res.end(JSON.stringify(results));
}

export default handleSearchUsers;
