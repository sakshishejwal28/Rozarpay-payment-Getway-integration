import { instance } from "../server.js";
import crypto from "crypto";

export const processPayment = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({ success: true, order });
};

export const getkey = async (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`);
  } else {
    res.status(400).json({ success: false });
  }
};

export const webhook = async (req, res) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers["x-razorpay-signature"];

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (signature !== expectedSignature) {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }

  const event = req.body.event;
  const payment = req.body.payload.payment.entity;

  if (event === "payment.captured") {
    console.log("Payment captured:", payment.id);
  } else if (event === "payment.failed") {
    console.log("Payment failed:", payment.id);
  }

  res.status(200).json({ success: true });
};
