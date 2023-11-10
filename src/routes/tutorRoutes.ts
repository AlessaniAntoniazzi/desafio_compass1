import { Router } from "express";
import { getAllTutors, postTutors } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
routers.post("/tutor", postTutors);


