const fs = require("fs");

// const fname = "test.txt";

// check the file folder exist or not

// console.log(`${fname} exists: ${fs.existsSync(fname)}`);

// if(fs.existsSync(fname)){
//     console.log(`${fname} is available `);

// }

// ***************************************************************************
// to Whether a spacified path is file or drectory

// const fname = "test.txt";
// const fname = "../FileSystem";

// fs.stat(fname, (err, stat) => {
//   if (err) {
//     console.log("Invalid path provided");
//     return;
//   }
//   if (stat.isDirectory()) {
//     console.log("its directory");
//   } else if (stat.isFile()) {
//     console.log("its file");
//   }
// });

// ***********************************************

// reading file

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   // if not using utf8
//   // console.log(data.toString());
// });

// fs.watch("test.txt", (event, c) => {
//   if (c) {

//     console.log(`${c} file Changed`);
//   }
// });

// // show current prev time   when file update

// fs.watchFile("test.txt", (curr, prev) => {
//   console.log(`this current mtime is : ${curr.mtime}`);
//   console.log(`this previous mtime was: ${prev.mtime}`);
// });

// ***********************************************
// wirte file

// let data = "Hello ";

// fs.writeFile("test.txt", data, "utf8", err => {
//   if (err) console.log("could not write");
//   console.log("write to the file...");
// });

// ******************************************************

// update file without changing data

// fs.appendFile("test.txt", "data to append", function(err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// to list all the content of directory

// fs.readdir("./mydir", (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

fs.unlink("test.txt", err => {
  if (err) throw err;
  console.log("successfully deleted test.txt");
});
