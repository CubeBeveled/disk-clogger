const fs = require("fs");
const folderName = "teehee";

// Creates and deletes folders as fast as it can
while (true) {
  try {
    fs.mkdirSync(folderName);
    fs.unlink(folderName, () => { });
  } catch (e) { }
}