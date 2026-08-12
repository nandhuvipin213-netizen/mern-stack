const path= require(`path`)

console.log("file name:",path.basename(__filename));
console.log("directory name",path.dirname(__filename));
console.log("Extension",path.extname(__filename));
console.log("parsed path",path.parse(__filename));



