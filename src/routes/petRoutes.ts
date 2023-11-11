import { postPets } from "../controllers/petController";
import { Router} from "express";

export const routersPets = Router();
routersPets.post("/pet/:tutorId", postPets);
