const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data, officeNumber) {
        super(data);
        this.officeNumber = data.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;