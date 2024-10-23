const fs = require("fs");
const folderName = "teehee";

while(true) {
  fs.mkdirSync(folderName);
  fs.unlink(folderName);
}