const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const file = `${dirPath}/text.txt`;

// fs.writeFileSync(file, "I am Satayjit Biswas");

fs.readFile(file, "utf8", (err, data) => {
    console.log(data);
});
