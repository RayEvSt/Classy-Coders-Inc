class Employee {
    #salary;
    #isHired = true
    constructor (name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
    }
    getSalary () {
        return this.#salary
    }
    setSalary (amount) {
        this.#salary = amount
    }
    getStatus () {
        return this.#isHired
    }
    setStatus (command) {
        command = command.toUpperCase()
        if (command == "FIRE") {
            this.#isHired = false;
        } else if (command = "HIRE") {
            this.#isHired = true
        }
    }
}
