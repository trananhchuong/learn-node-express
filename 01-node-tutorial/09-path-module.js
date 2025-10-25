const path = require("path");

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log("🚀 ~ filePath:", filePath);

const base = path.basename(filePath);
console.log("🚀 ~ base:", base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log("🚀 ~ __dirname:", __dirname)
console.log("🚀 ~ absolute:", absolute);