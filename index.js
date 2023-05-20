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
    let pos = ` ${this.position}: ${this.name}`;
    return pos;
  }
}
class Manager extends Employee {
  //this.emp[]
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
    console.log(`since ${this.getWorkingYears()}`);
    console.log(`Bonus % ${this.bonusPercentage} / ${this.bonusPercentage}`);
  }
  getWorkingYears() {
    let year_worked = 2023 - this.yearJoined;
    return year_worked;
  }
} // Manager

const employees = employeesJSON.map((emp) => {
  //console.log(emp);
  return new Employee(emp.name, emp.position, emp.yearJoined, emp.salary);
  //return emp;
});
const managers = managersJSON.map((manage) => {
  return new Manager(
    manage.name,
    manage.position,
    manage.yearJoined,
    manage.salary,
    manage.bonusPercentage
  );
});
console.log(employees);
employees.forEach((emp) => console.log(emp.idBadge()));
const superHeroes = employees.filter((emp) => emp.position === "Developer");
console.log(superHeroes);

managers.map((manage) => {
  if (manage.getWorkingYears() > 11) manage.salaryIncrease(1000);
});
console.log(managers);

managers.forEach((manage) => manage.logManagerInfo());

const seniorExecutives = managers.filter((manage) => {
  if (manage.yearJoined < 2012) return manage.name;
});
console.log(seniorExecutives);

const lowestBonus = managers.find((manage) => {
  if (manage.bonusPercentage === 0.1) return manage;
});
console.log(lowestBonus);

const promotionCandidate = employees.filter((emp) => {
  if (emp.salary > 8000) return emp;
});
console.log(promotionCandidate);
