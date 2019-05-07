import Characteristics from "./Characteristics"

export default class Character {

    constructor(props: Character) {
        this.id = props.id;
        this.firstName = props.firstName;
        this.middleName = props.middleName;
        this.lastName = props.lastName;
        this.characteristics = props.characteristics;
        this.createdAt = props.createdAt;
    }

    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    characteristics: Characteristics;
    createdAt: Date;

    fullName?() {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    } 
}