const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data, github) {
        super(data);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;