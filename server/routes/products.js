const express = require("express");
const { productReq } = require("../controllers/productCtrl");
const { auth, authAdmin } = require("../middlewares/auth");
const router = express.Router();

// router.get("/", async(req,res) => {
//   res.json({msg:"products homepage work"});
// })

// get all products (get)
router.get("/productsList", productReq.productsList);
// add product (post)
router.post("/addProduct", auth, authAdmin, productReq.addProduct);
// delete product (delete)
router.delete("/deleteProduct/:id", auth, authAdmin, productReq.deleteProduct);
// edit product (edit)
router.put("/editProduct/:id", auth, authAdmin, productReq.editProduct);
// change inStock (patch)
router.patch("/setInStock/:changeInStock/:id", auth, authAdmin, productReq.setInStock);

// TODO -->
// get user products (get)
// remove product from cart

module.exports = router;