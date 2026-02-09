import express from "express";
import { sendEnquiry } from "../controllers/enquiry.controller.js";

const router = express.Router();

router.post("/send", sendEnquiry);

export default router;
