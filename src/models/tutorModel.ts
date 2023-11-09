import {Pet} from "./petModel"; 

export interface Tutors {
    id: number;
    name: string;
    phone: number;
    email: string;
    date_of_birth: Date;
    zipCode: number;
    pets?: Pet[];
}