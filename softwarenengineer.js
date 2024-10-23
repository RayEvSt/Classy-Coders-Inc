import { Employee } from "./classes/Employee";

class SoftwareEngineer extends Employee {
    #programmingLanguages;
    constructor (name, position, salary) {
        super (name, position, salary);
        this.#programmingLanguages = [];
    }
    
}