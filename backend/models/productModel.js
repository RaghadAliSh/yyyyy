const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: { type: String,
         required: true ,
         default:'',
         trim: true},


    price: { type: Number,
         required: true ,
        default:0},
    image: { type: String ,
        required: true,
        default:"",
        trim: true},

    quantity: { type: Number,default:0,require:false },

    description: { type: String ,default:"",require:true ,trim: true},
    avgRating: { type: Number,
         default: 0,require:false },
    numUserRating: { type: Number, 
        default: 0 
        ,require:false},
   /* ratings:{type: [
        {
            userId: { type: Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number,min:1,max:5 }
        }
    ] , required: false,default:[]},*/
category: { type: String ,/*default:none ,*/},
    productType: { type: String, enum: ['custom product', 'normal product'],
     required: true ,
    }
}

);
module.exports = mongoose.model('Product', productSchema);

