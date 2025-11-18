const fs = require('fs');


//              file name ,content to write

// fs.writeFile("hey.txt","hey bhai", (err)=>{
//     if(err) colsole.error(err)
//     else console.log("File created successfully")
// });

//        old name     new name
// fs.rename("hey.txt", "hello.txt", (err) => {
//     if (err) console.error(err)
//     else console.log("File renamed successfully")   
// });

//         source file , destination file
// fs.copyFile("hello.txt", "copy_hello.txt", (err) => {
//     if (err) console.error(err)
//     else console.log("File copied successfully")
// });

//         file name -- delete
// fs.unlink("copy_hello.txt", (err) => {
//     if (err) console.error(err)
//     else console.log("File deleted successfully")
// });

fs.readFile("hello.txt","utf8" ,(err,data) => {
    if (err) console.error(err)
    else console.log(data)
})