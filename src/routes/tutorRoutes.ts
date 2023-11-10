import { Router } from "express";
import { deleteTutors, getAllTutors, postTutors, putTutors } from "../controllers/tutorController";

export const routers = Router();
routers.get("/tutors", getAllTutors);
routers.post("/tutor", postTutors);
routers.put("/tutor/:id", putTutors);
routers.delete("/tutor/:id", deleteTutors);


