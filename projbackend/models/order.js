const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
},
{ timestamps: true}
);

const ProductCart = mongoose.model("ProductCart",ProductCartSchema);

const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {

    },
    amount: {
        type: Number
    },
    address: String,
    status : {type: String,
    default: "",
    enum: ["Cancelled", "Delivered", "shipped", "Processing", "Recieved"]
    },
    updated: Date,
    User: {
        type: ObjectId,
        ref: "User"
    }
},
{timestamps: true}
);

const Order = mongoose.model("Order",OrderSchema);

module.exports = {Order,ProductCart};