import mongoose from 'mongoose';
import { d as defineModel } from './db.mjs';
import { l as randomString } from './nitro.mjs';

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: String, unique: true },
    trackingNumber: { type: String, unique: true },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    deliveryMode: { type: String, enum: ["home", "pickup station"] },
    freightMode: { type: String, enum: ["air", "ocean", "road"] },
    status: {
      type: String,
      enum: ["processing", "shipped", "in transit", "delivered", "cancelled"],
      default: "processing"
    },
    items: [{
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true }
    }],
    totalPrice: { type: Number },
    trackingUpdates: [{
      status: { type: String, enum: ["processing", "shipped", "in transit", "delivered", "cancelled"], default: "processing" },
      severity: { type: String, enum: ["info", "success", "error"], default: "info" },
      comment: { type: String, required: true },
      location: {
        name: { type: String },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        countryCode: { type: String, required: true },
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
      },
      timestamp: { type: Date, default: Date.now }
    }],
    destination: {
      name: { type: String },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      countryCode: { type: String, required: true },
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      description: { type: String }
    },
    estimatedDelivery: { type: Date },
    deliveredAt: { type: Date }
  },
  {
    timestamps: true
  }
);
OrderSchema.pre("save", function(next) {
  if (!this.orderId) {
    this.orderId = randomString("#999999AA");
  }
  if (!this.trackingNumber) {
    this.trackingNumber = randomString(16, "numeric");
  }
  if (!this.totalPrice) {
    this.totalPrice = this.items.reduce((acc, item) => acc += item.quantity * item.unitPrice, 0);
  }
  if (this.isModified("status")) {
    if (this.status === "delivered") {
      this.deliveredAt = /* @__PURE__ */ new Date();
    } else {
      this.deliveredAt = void 0;
    }
  }
  next();
});
const Order = defineModel("Order", OrderSchema);

export { Order as O };
//# sourceMappingURL=order.model.mjs.map
