const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge() {
    let pos = `< ${this.position} : ${this.name}`;
    return pos;
  }
}
class Manager extends Employee {
  // this.emp = [];
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  } // constructor

  salaryIncrease(increaseAmount) {
    this.salary = this.salary + increaseAmount;
  }
  logManagerInfo() {
    //   <name>
    //  since <workingYears>
    //  Bonus % <bonusPercentage></bonusPercentage>
    console.log(this.name);
    console.log(`since ${this.getWorkingYears}`);
    console.log(`Bonus % ${this.bonusPercentage} / ${this.bonusPercentage}`);
  }
  getWorkingYears() {
    let year_worked = 2023 - this.yearJoined;
    return year_worked;
  }
} // Manager

// const employees = new Employee(employeesJSON.map(emp));
// const managers = new Manager(managersJSON.map());
const employees[];
const managers[];
employeesJSON.map((emp)=> employees.push(emp));
managersJSON.map((manage)=> managers.push(manage));


