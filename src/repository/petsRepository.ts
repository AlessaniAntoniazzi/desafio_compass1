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

    async update(tutorIdUpdate: number, petIdUpdate: number, props: Partial<Pet>){
    const tutorIndex = Tutor.findIndex((tutor: Tutors) => tutor.id === tutorIdUpdate);
    if (tutorIndex !== -1){
        const tutor = Tutor[tutorIndex];
        const petIndex = tutor.pets?.findIndex((pet) => pet.id === petIdUpdate);
        if(petIndex !== undefined && petIndex !== -1 && tutor.pets){
            tutor.pets[petIndex] = {...tutor.pets[petIndex], ...props};
            return "Pet updated successfully"
            } else {
                return "Pet not found"
            }
        } else {
            return "Tutor not found"
        }
    }
    async delete(tutorIdUpdate: number, petIdUpdate: number, props: Partial<Pet>){
        const tutorIndex = Tutor.findIndex((tutor: Tutors) => tutor.id === tutorIdUpdate);
        if (tutorIndex !== -1){
            const tutor = Tutor[tutorIndex];
            const petIndex = tutor.pets?.findIndex((pet) => pet.id === petIdUpdate);
            if (petIndex !== undefined && petIndex !== -1 && tutor.pets){
                tutor.pets[petIndex] = {...tutor.pets[petIndex], ...props};
                tutor.pets.splice(tutorIndex, 1);
                return "Pet was deleted successfully"
            }
            return "Pet wasn't found"
        }
    }
}



