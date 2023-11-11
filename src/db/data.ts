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
            species: "bunny",
            carry: "P",
            weight: 1,
            date_of_birth: new Date ("01-06-1998")
        },
        {
            id: 2,
            name: "Max",   
            species: "dog",
            carry: "M",
            weight: 9,
            date_of_birth: new Date ("08-08-2023")
        }]
},
{
    id: 2,
    name: "Ash",
    email: "ashi@email.com",
    phone: 9456231565,
    date_of_birth: new Date ("10-02-1995"),
    zipCode: 486531231,
    pets: [
        {
            id: 1,
            name: "Pikachu",   
            species: "rat",
            carry: "P",
            weight: 3,
            date_of_birth: new Date ("01-09-1998")
        },
        {
            id: 2,
            name: "Charmander",   
            species: "lizard",
            carry: "M",
            weight: 8,
            date_of_birth: new Date ("11-10-1998")
        }]
}
]