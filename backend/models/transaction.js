import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  amount: Number,
  currency: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
