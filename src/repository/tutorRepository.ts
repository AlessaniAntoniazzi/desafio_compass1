import {Tutor} from "../db/data";
import {Tutors} from "../models/tutorModel"

export class TutorAll {
    async all(){
        return Tutor;
    }
    async create(props: Tutors){
        const tutorCreate = await this.all();
        const tutorExist = tutorCreate?.find((tutor) => {
            tutor.id === props.id;
        })
        if (tutorExist){
            return "This tutor already exists"
        }
        return Tutor.push(props);
    }
    // Aqui vai dar update nos tutores, criei o idIndex que vai receber o input, o props ...,
    // o tutorsDb vai procurar o index do tutor, e vai procurar dentro dele o id pra comparar com o input
    async update(idIndex: number, props: Partial<Tutors>){
        const tutorsDb = Tutor.findIndex((tutor: Tutors) => tutor.id === idIndex);
        if (Tutor [tutorsDb]) {
            Tutor [tutorsDb] = {...Tutor[tutorsDb], ...props};
            return "Tutor updated sucessfully"
        } else {
            return "Tutor wasn't found"
        }
        
    }
}