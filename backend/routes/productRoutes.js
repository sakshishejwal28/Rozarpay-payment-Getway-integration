import express from "express";
import { getkey, paymentVerification, processPayment, webhook } from "../controller/productControllers.js";

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getkey);
router.route("/paymentVerification").post(paymentVerification);
router.route("/webhook").post(webhook);

export default router;