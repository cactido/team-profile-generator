const Employee = require('./Employee');

class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school = data.school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;