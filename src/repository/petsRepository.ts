import {Pet} from "../models/petModel"
import {Tutor} from "../db/data";
import {Tutors} from "../models/tutorModel"

export class PetsAll {
    async create(props: Pet, tutorIdPet: number){
    const tutorIndex = await Tutor.findIndex((tutor) => tutor.id === tutorIdPet);
    if (tutorIndex !== -1){
        Tutor[tutorIndex].pets?.push(props);     
        return "Pet was successfully created";        
    }
        return "Pet wasn't created";
    }
}

