import {Pet} from "../models/petModel"
import {Tutor} from "../db/data";
import {Tutors} from "../models/tutorModel"

export class PetsAll {
    async create(props: Pet, tutorIdUpdate: number){
        const tutorIndex = Tutor.findIndex((tutor) => tutor.id === tutorIdUpdate);
        if (tutorIndex !== -1){
            const existingIndex = (Tutor[tutorIndex].pets as Pet[])?.findIndex((pet) => pet.id === props.id);
            if(existingIndex === -1){
                Tutor[tutorIndex].pets?.push(props);
                return "Pet was created successfully";
            }
            else {
                return "This ID already exists for a pet";
            }
        }
        return "Tutor not found"
    
    }

    async update(tutorIdUpdate: number, petIdUpdate: number, props: Partial<Pet>){
    const tutorIndex = Tutor.findIndex((tutor: Tutors) => tutor.id === tutorIdUpdate);
    if (tutorIndex !== -1){
        const tutor = Tutor[tutorIndex];
        const petIndex = tutor.pets?.findIndex((pet) => pet.id === petIdUpdate);
        if(petIndex !== undefined && petIndex !== -1 && tutor.pets){
            const isPetIdAlreadyExists = tutor.pets.some((pet) => pet.id === props.id);
            if (isPetIdAlreadyExists) {
                return "This pet ID already exists for the tutor";
            } else {
            tutor.pets[petIndex] = {...tutor.pets[petIndex], ...props};
            return "Pet updated successfully"
            }
        }
        return "Pet not found";
    } 
    return "Tutor not found";
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
            return "Pet not found"
        }
        return "Tutor not found"
    }
}



