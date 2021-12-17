import { Person } from './Person';
export class Address
{
    constructor(
        public Id:number,
        public Person_Id:number,
        public DetailsOfAddress:string,
        public Person?:Person
    )
    {}
}