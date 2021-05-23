const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Set Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => { //destination is used to determine within which folder the uploaded files should be stored.
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });
var uploadFile = upload.fields([{ name: 'files', maxCount: 5 }])
    //Requests
router.post('/upload', uploadFile, (req, res) => {
        if (req.files) {
            console.log("Files uploaded successfully");
            console.log(req.files);
        }
    })
    // router.post('/upload', upload.array('files', 5), (req, res, next) => {
    //     //Validate request
    //     console.log(req.body);
    //     console.log(req.files);
    //     res.send("req.body");
    // })



module.exports = router;