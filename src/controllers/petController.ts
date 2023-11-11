import {Request, Response} from "express";
import { Pet } from "../models/petModel";
import { petCreate } from "../services/petServices";

export const postPets = async (request: Request, response: Response) => {
     try {
        const props: Pet = request.body;
        const tutorId = Number(request.params.tutorId);
        const petFinished = await petCreate(props, tutorId);
        response.status(200).json(petFinished);
    } catch (error: any) {
        response.status(400).json((error as Error).message);
    }
};