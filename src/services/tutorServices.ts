import { TutorAll } from "../repository/tutorRepository"

export const tutorsPull = async() => {
    const tutorsRep = new TutorAll();
    const date = await tutorsRep.all();
    return date;
}