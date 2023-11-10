import { Tutors } from "../models/tutorModel";
import { TutorAll} from "../repository/tutorRepository"


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

export const tutorUpdateServices = async(idIndex: number, props: Partial<Tutors>) => {
    const tutorUps = new TutorAll();
    const data = await tutorUps.update(idIndex, props);
    return data;
}

export const tutorDelete = async(tutorIdDelete: number, props: Partial<Tutors> ) => {
    const tutorToBeDeleted = new TutorAll();
    const data = await tutorToBeDeleted.delete(tutorIdDelete, props);
    return data;
}