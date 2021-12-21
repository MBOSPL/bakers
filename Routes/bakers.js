import express from "express";
import { createBakers } from "../Controllers/bakers.js";
const router = express.Router();

// router.route("/user").post(createUser);
router.post("/baker/register", createBakers);

export default router;
