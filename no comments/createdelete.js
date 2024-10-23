const fs = require("fs");
const folderName = "teehee";

while (true) {
  try {
    fs.mkdirSync(folderName);
    fs.unlink(folderName, () => { });
  } catch (e) { }
}