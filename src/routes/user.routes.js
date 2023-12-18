import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();
router.get("/user", UserController.get)
router.get("/user/:id",UserController.getById)
router.post("/user", UserController.create)
router.put("/user/:id",UserController.update)
router.delete("/user/:id",UserController.delete)

export default router