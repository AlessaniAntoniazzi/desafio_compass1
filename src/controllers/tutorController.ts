import { Request, Response } from "express";
import { tutorsPull } from "../services/tutorServices";


export const getAllTutors = async (req: Request ,res: Response) => {
    try {
        const tutors = await tutorsPull()
        res.status(200).json(tutors)
    } catch(error: any){
        res.status(400).json((error as Error).message)
    }
};

// export const createTutors = (req,res) => {

// };

// export const uptadeTutors = (req,res) => {

// };

// export const deleTutors = (req,res) => {

// };
