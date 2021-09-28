var express = require('express');
var router = express.Router();

const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById,createOrder,getAllOrders} = require("../controllers/order");

const {} = require("../controllers/order")

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Actual routes
router.post("/order/create/:userId",isSignedIn, isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder);
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders)


module.exports = router;