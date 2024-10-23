

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





const preston = new Employee("Preston", "Engineer", 100000);
preston.getSalary(); // 100000
preston.setSalary(105000);
preston.getSalary(); // 105000
preston.getStatus(); // true;
preston.setStatus("fire");
preston.getStatus(); // false;
```