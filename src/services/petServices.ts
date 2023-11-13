import { Pet } from "../models/petModel";
import { PetsAll } from "../repository/petsRepository";

export const petCreate = async(props: Pet, tutorIdPet: number) => {
    const petCreated = new PetsAll();
    const data = await petCreated.create(props, tutorIdPet);
    return data;
}

export const petUpdate = async(tutorIdUpdate: number, petIdUpdate: number, props: Partial<Pet>) => {
    const petToBeUpdated = new PetsAll();
    const data = await petToBeUpdated.update(tutorIdUpdate, petIdUpdate, props);
    return data;
}

export const petDelete = async(tutorIdUpdate: number, petIdUpdate: number, props: Partial<Pet>) => {
    const petToBeDeleted = new PetsAll();
    const data = await petToBeDeleted.delete(tutorIdUpdate, petIdUpdate, props);
    return data;
}