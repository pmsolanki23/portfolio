// import express from "express";
// import { deleteMessage, getMessages, sendMessage } from "../controllers/contact.controller.js";

// const router = express.Router();

// router.post("/", sendMessage);

// router.get("/", getMessages);
// router.delete("/:id", deleteMessage); 

// export default router;


import express from "express";
import {
  deleteMessage,
  getMessages,
  sendMessage,
  updateStatus,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/", getMessages);
router.delete("/:id", deleteMessage);


// 🔥 NEW (CLIENT STATUS UPDATE)
router.put("/:id", updateStatus);

export default router;