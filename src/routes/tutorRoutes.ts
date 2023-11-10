import { Router } from "express";
import { getAllTutors, postTutors, putTutors } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
routers.post("/tutor", postTutors);
routers.put("/tutor/:id", putTutors);


