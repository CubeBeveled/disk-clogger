const fs = require("fs");
const folderName = ""; // Leave empty for just numbered folders
let index = 0;

// Creates folders as fast as it can
while (true) {
  try {
    fs.mkdirSync(folderName + index);
    index++;
  } catch (e) { } // Just incase the folder alr exists and fs throws an error
}