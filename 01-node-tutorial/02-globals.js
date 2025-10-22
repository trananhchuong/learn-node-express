// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


console.log(__dirname);
global.myVariable = "Hello";
console.log("🚀 ~ global:", global);

// const test = setInterval(() => {
//   console.log("hello world");
// }, 1000);

console.log(module);
