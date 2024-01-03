const router = require("express").Router(); // Get the router instance of Express
const {
  addProduct,
  editProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/product");
const { authVerify } = require("../moddlewares/auth/verifyUser");

router.get("/", getAllProducts);
router.post("/add", authVerify, addProduct);
router.post("/edit/:_id", authVerify, editProduct);
router.delete("/remove/:id", authVerify, deleteProduct);

module.exports = router;
