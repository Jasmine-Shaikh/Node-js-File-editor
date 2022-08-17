// Node js => Process => argv
const fs = require("fs");
const input = process.argv.slice(2);

let operation = input[0];
let a = input[1];
let b = input[2];

// read, append, delete, create, rename, list

if(a == "index.js" || b == "index.js"){
    console.log("Changes in index.js is forbidden!")
}
else{

    switch (operation) {
        case "read":
      
          if (fs.existsSync(`./${a}`)) {
      
              const file_content = fs.readFileSync(`./${a}`, { encoding: "utf8" });
              console.log(file_content);
          } else {
              console.log("Cannot find", a);
          }
          break;
      
        case "append":
          const path = `./${b}`;
          if (fs.existsSync(path)) {
      
               fs.appendFileSync(`./${b}`, a);
              console.log("Changes completed!");
          } else {
              console.log("Cannot find", b);
          }
          break;
      
        case "delete":
          
          if (fs.existsSync(`./${a}`)) {
      
             fs.unlinkSync(`./${a}`)
              console.log(`./${a}`, "deleted successfully.");
          } else {
              console.log("Cannot find", a);
          }
          break;
      
        case "create":
            if (!fs.existsSync(`./${a}`)) {
                fs.writeFileSync(`./${a}`,b);
                console.log(a,"created successfully.");
            } else {
                console.log(a ,"already exists.");
            }
          break;
      
        case "rename":
            if (fs.existsSync(`./${a}`)) {  
                fs.renameSync(`./${a}`,`./${b}`)
                 console.log(`./${a}`, "sucessfully renamed as", `./${b}`);
             } else {
                 console.log("Cannot find", a);
             }
          break;
      
        case "list":
            console.log(fs.readdirSync("./"));
          break;
        default:
          break;
      }
}
