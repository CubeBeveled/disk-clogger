const fs = require("fs");
const folderName = "";
let index = 0;

while (true) {
  try {
    fs.mkdirSync(folderName + index);
  } catch (e) { }
}