import {Tutor} from "../db/data";
import {Tutors} from "../models/tutorModel"

export class TutorAll {
    async all(){
        return Tutor;
    }
    async create(props: Tutors){
        const tutorCreate = await this.all();
        const tutorExist = tutorCreate?.findIndex((tutor) =>  (tutor.id === props.id));
        if (tutorExist === -1){
            Tutor.push(props);
            return "Tutor was created successfully"
        } else if (tutorExist !== -1) {
            return "This tutor already exists"
        }
    }
    // Aqui vai dar update nos tutores, criei o idIndex que vai receber o input, o props ...,
    // o tutorsDb vai procurar o index do tutor, e vai procurar dentro dele o id pra comparar com o input
    async update(idIndex: number, props: Partial<Tutors>){
        const tutorsDb = Tutor.findIndex((tutor: Tutors) => tutor.id === idIndex);
        if (Tutor [tutorsDb]) {
            Tutor [tutorsDb] = {...Tutor[tutorsDb], ...props};
            return "Tutor was updated sucessfully"
        } else {
            return "Tutor wasn't found"
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


