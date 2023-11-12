import { postPets, putPets } from "../controllers/petController";
import { Router} from "express";

export const routersPets = Router();
routersPets.post("/pet/:tutorId", postPets);
routersPets.put("/pet/:petId/tutor/:tutorId", putPets);