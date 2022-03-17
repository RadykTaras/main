const express = require("express");
const multer  = require("multer");
  
const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, 'das.jpg');
    }
});

app.use(express.static(__dirname));
app.use(multer({storage:storageConfig}).single("filedata"));
 
app.post("/upload", function (req, res, next) {
});
app.listen(3000);