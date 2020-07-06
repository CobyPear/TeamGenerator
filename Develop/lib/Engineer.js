// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
// has gitHub account & getGithub() method that returns Github username

module.exports = class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    };

    getRole() {
        return "Engineer";
    };

    getGithub(){

        return this.github
    };
};