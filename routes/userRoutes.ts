import express from "express";
const router =express.Router();

import { helloBhai } from "../controllers/userController";

router.route("/hello").get(helloBhai);

export default router;