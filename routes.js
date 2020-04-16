const fs = require("fs");

const homePage = require("./home");
const userPage = require("./usersPage");

module.exports = routes = (req, res) => {
  const { url, method, rawHeaders } = req;
  if (req.url === "/") {
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    res.write(homePage());

    return res.end();
  } else if (url === "/user") {
    return fs.readFile("./users.json", (err, data) => {
      res.statusCode = 200;

      res.setHeader("Content-Type", "text/html");

      res.write(userPage(data));

      res.end();
    });
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chank) => body.push(chank));
    return req.on("end", () => {
      const data = Object.fromEntries(
        Buffer.concat(body)
          .toString()
          .split("&")
          .map((keyValue) => keyValue.split("="))
      );

      fs.readFile("./users.json", (err, dataFromStore) => {
        const storedData = JSON.parse(dataFromStore);
        storedData.users.push(data);
        fs.writeFile("users.json", JSON.stringify(storedData), (err) => {
          if (!err) {
            res.statusCode = 302;
            res.setHeader("Location", "/user");
            res.end();
          }
        });
      });
    });
  } else {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};
