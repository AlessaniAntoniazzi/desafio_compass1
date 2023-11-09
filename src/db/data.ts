import {Tutors} from "../models/tutorModel"

export const Tutor: Tutors[] = [
{
    id: 1,
    name: "Alessani",
    email: "alessani@email.com",
    phone: 9456231565,
    date_of_birth: new Date ("07-12-1995"),
    zipCode: 486531231,
    pets: [
        {
            id: 1,
            name: "Fonfon",   
            species: "dog",
            carry: "P",
            weight: 1,
            date_of_birth: new Date ("01-06-1998")
        }]
}]