import {Tutor} from "../db/data";
import {Tutors} from "../models/tutorModel"

export class TutorAll {
    async all(){
        return Tutor;
    }
    async create(props: Tutors){
        const tutorCreate = await this.all();
        const tutorExist = tutorCreate?.findIndex((tutor) => (tutor.id === props.id));
        if (tutorExist === -1){
            Tutor.push(props);
            return "Tutor was created successfully"
        } else if (tutorExist !== -1) {
            return "This tutor already exists"
        }
    }
    
    async update(idIndex: number, props: Partial<Tutors>){
        const tutorsDb = Tutor.findIndex((tutor) => tutor.id === idIndex);
        if (tutorsDb !== -1) {
            const idAlreadyExists = Tutor.some((tutor) => tutor.id !== idIndex && tutor.id == props.id);
            if (idAlreadyExists){
                return "This id already exists";
            }
            else {
                Tutor [tutorsDb] = {...Tutor[tutorsDb], ...props};
                return "Tutor was updated sucessfully";
            }  
        } else if (tutorsDb === -1){
            return "Tutor wasn't found";
        }  
    }
    async delete(tutorIdDelete: number, props: Partial <Tutors>){
        const tutorDeleted = Tutor.findIndex((tutor: Tutors) => tutor.id === tutorIdDelete);
        if (Tutor [tutorDeleted]){
            Tutor[tutorDeleted] = {...Tutor[tutorDeleted], ...props}
            Tutor.splice(tutorDeleted)
            return "Tutor was deleted sucessfully!"

        }else {
            return "Tutor wasn't found"
        }
    }
}


