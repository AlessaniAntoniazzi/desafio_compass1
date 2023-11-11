import { Pet } from "../models/petModel";
import { PetsAll } from "../repository/petsRepository";

export const petCreate = async(props: Pet, tutorIdPet: number) =>{
    const petCreated = new PetsAll();
    const data = await petCreated.create(props, tutorIdPet);
    return data;
}

// export const petCreate = async (props: Pet, tutorId: number) => {
//     const petRepository = new PetsAll();
//     const data = await petRepository.create(props, tutorId);
//     return data;
// }