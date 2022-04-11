import express from "express";

import { addUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/adduser", addUser);
router.get("/users", getUser);

module.exports(router);
// export default router;
