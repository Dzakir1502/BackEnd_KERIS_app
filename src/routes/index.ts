import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import courseRoutes from "./courseRoutes";
import mentorRoutes from "./mentorRoutes";
import projectRoutes from "./projectRoutes";
import communityRoutes from "./communityRoutes";
import dashboardRoutes from "./dashboardRoutes";

const router = Router();

// API Routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/mentors", mentorRoutes);
router.use("/projects", projectRoutes);
router.use("/community", communityRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;
