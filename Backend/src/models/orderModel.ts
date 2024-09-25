import mongoose, { Schema, Document, Types } from "mongoose"; // Use `Types.ObjectId` instead of `ObjectId`

// Order item interface
export interface IOrderItem {
  productTitle: string;
  productImage: string;
  unitPrice: number;
  quantity: number;
}

// Order interface
export interface IOrder extends Document {
  orderItems: IOrderItem[];
  total: number;
  address: string;
  userId: Types.ObjectId;  // Use `Types.ObjectId` for strict typing
}

// Order Item Schema
const OrderItemSchema = new Schema<IOrderItem>({
  productTitle: { type: String, required: true },
  productImage: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Order Schema
const OrderSchema = new Schema<IOrder>({
  orderItems: { type: [OrderItemSchema], required: true },
  total: { type: Number, required: true },
  address: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Mongoose ObjectId reference
});

// Create and export the order model
export const orderModel = mongoose.model<IOrder>("Order", OrderSchema);
