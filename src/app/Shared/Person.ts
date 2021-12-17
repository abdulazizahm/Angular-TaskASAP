import { Address } from "./Address";

export class Person
{
    constructor(
        public ID:number,
        public Name:string,
        public FamilyName:string,
        public EMailAdress:string,
        public Age:number,
        public Addresses?:Address[]
       
    )
    {}
}