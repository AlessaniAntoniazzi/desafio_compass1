import {Request, Response} from "express";
import { Pet } from "../models/petModel";
import { petCreate, petUpdate, petDelete } from "../services/petServices";

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

export const deletePet = async (request: Request, response: Response) => {
    try {
      const tutorId = Number(request.params.tutorId);
      const petId = Number(request.params.petId);
      const deletePetProps: Partial<Pet> = request.body;
      const petDeleted = await petDelete(tutorId, petId, deletePetProps);
      response.status(200).json(petDeleted);
    } catch (error: any) {
      response.status(400).json((error as Error).message)
    }
}