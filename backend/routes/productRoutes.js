const express = require("express");
const router = express.Router();
const app = express();
const path = require('path');
const multer  = require('multer')
//const f=require('../../frontend/src/proimage')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../frontend/src/proimage') );
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });
  const upload = multer({ storage: storage })


const {createNewProduct,getProuduct,editProduct,}=require('../controllers/productController')
router.post("/addProduct", upload.single("image"), async (req, res) => {
    createNewProduct(req, res);
  });
  router.patch("/Product/:id", async (req, res) => {
    editProduct(req, res);
  });
  router.get("/getProduct", async (req, res) => {
    getProuduct(req, res);
  });
  module.exports = router;