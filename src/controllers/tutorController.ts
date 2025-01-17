import { Request, Response } from "express";
import { tutorCreate, tutorDelete, tutorUpdateServices, tutorsPull } from "../services/tutorServices";
import { Tutors } from "../models/tutorModel";



export const getAllTutors = async (req: Request, res: Response) => {
    try {
        const tutors = await tutorsPull()
        res.status(200).json(tutors)
    } catch(error: any){
        res.status(400).json((error as Error).message)
    }
};

export const postTutors = async(req: Request, res: Response) => {
    try {
        const tutorNew: Tutors = req.body
        const tutorCreated = await tutorCreate(tutorNew)
        res.status(201).json(tutorCreated)
    } catch (error: any){
        res.status(400).json((error as Error).message)
    }
}

export const putTutors = async(req: Request, res: Response) => {
    try {
        const tutorId = Number(req.params.id)
        const tutorIdUpdated: Partial<Tutors> = req.body
        const tutorIdUpdatedFinal = await tutorUpdateServices(tutorId, tutorIdUpdated)
        res.status(201).json(tutorIdUpdatedFinal)
    } catch (error: any){
        res.status(400).json((error as Error).message)
    }
}

export const deleteTutors = async(req: Request, res: Response) => {
    try{
        const tutorToDelete = Number(req.params.id)
        const babana: Partial<Tutors> = req.body
        const tutorDeletedFinal = await tutorDelete(tutorToDelete, babana)
        res.status(201).json(tutorDeletedFinal)
    } catch (error: any) {
        res.status(400).json((error as Error).message)
    }

};
