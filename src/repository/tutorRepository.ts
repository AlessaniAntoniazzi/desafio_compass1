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
}