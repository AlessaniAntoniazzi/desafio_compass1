import {Request, Response} from "express";
import { Pet } from "../models/petModel";
import { petCreate, petUpdate } from "../services/petServices";

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


export const putPets = async (request: Request, response: Response) => {
    try {
      const tutorId = Number(request.params.tutorId);
      const petId = Number(request.params.petId);
      const updatePetProps: Partial<Pet> = request.body;
      const update = await petUpdate(tutorId, petId, updatePetProps);
      response.status(200).json(update);
    } catch (error: any) {
      response.status(400).json((error as Error).message)
    }
}