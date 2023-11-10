import { Tutors } from "../models/tutorModel";
import { TutorAll } from "../repository/tutorRepository"

export const tutorsPull = async() => {
    const tutorsRep = new TutorAll();
    const data = await tutorsRep.all();
    return data;
}


export const tutorCreate = async(props: Tutors) => {
    const tutorsRep = new TutorAll();
    const data = await tutorsRep.create(props);
    return data;
}
