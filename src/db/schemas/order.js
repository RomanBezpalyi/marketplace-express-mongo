const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const orderSchema = new Schema({
  "creator": String,
  "productsList": [{
    product: {
      type: String
    },
    type: {
      type: String,
      validate: {
        validator: function (text) {
          return ["M", "XL", "XXL"].includes(text)
        },
        message: 'Not valid size, must be "M" || "XL" || "XXL"'
      }
    },
    itemsCount: {
      type: Number
    }
  }],
  "deliveryType": {
    type: String,
    validate: {
      validator: function (text) {
        return text === "delivery" || text === "office";
      },
      message: 'Not valid deliveryType, must be "delivery" || "office"'
    }
  },
  "deliveryAdress": String,
  "sumToPay": Number,
  "status":{
    type: String,
    validate: {
      validator: function (text) {
        return ["inProgress", "declined", "finished", "failed"].includes(text);
      },
      message: 'Not valid status, must be "inProgress" || "declined" || "finished" || "failed"'
    }
  },
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
