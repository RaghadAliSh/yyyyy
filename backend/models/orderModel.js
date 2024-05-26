const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    

    customerId: { type: Schema.Types.ObjectId, ref: 'User', 
    required: true },


    createdAt: { type: Date,
         default: Date.now },
    status: { type: String, required: true ,default:"Not Done" ,trim: true},
    note: { type: String ,
        required: false ,
        trim: true},

    address: { type: String, 
        required: true },

    totalPrice: { type: Number, required: true },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, min: 1, required: true  }
        }
    ]

});


const Order = mongoose.model("Order", orderSchema);
export default Order;

