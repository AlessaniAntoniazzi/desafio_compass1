import { Router } from "express";
import { deleteTutors, getAllTutors, postTutors, putTutors } from "../controllers/tutorController";

export const routersTutors = Router();
routersTutors.get("/tutors", getAllTutors);
routersTutors.post("/tutor", postTutors);
routersTutors.put("/tutor/:id", putTutors);
routersTutors.delete("/tutor/:id", deleteTutors);


