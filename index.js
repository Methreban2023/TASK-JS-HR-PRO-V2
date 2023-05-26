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

  getWorkingYears() {
    let year_worked = 2023 - this.yearJoined;
    return year_worked;
  }
  logManagerInfo() {
    console.log(
      `${this.name} \n since ${this.getWorkingYears()} \n Bonus % ${
        this.bonusPercentage
      } `
    );
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

const managersRaise = managers.map((manage) => {
  if (manage.getWorkingYears() > 11) manage.salaryIncrease(1000);
});
console.log(managersRaise);

managers.forEach((manage) => manage.logManagerInfo());

const seniorExecutives = managers.map((manage) => {
  if (manage.yearJoined < 2012) return manage.name;
});
console.log(seniorExecutives);

const lowestBonus = managers.find((manage) => manage.bonusPercentage === 0.1);
console.log(lowestBonus);

const promotionCandidate = employees.filter((emp) => {
  emp.salary > 8000;
});
console.log(`the promotionCandidate : ${promotionCandidate}`);

// let highest = employees[0].salary;

// const mostPaidEmployee = employees.forEach((emp) => {
//   if (emp.salary > highest) highest = emp.salary;
//   return emp;
// });
// console.log(mostPaidEmployee);
const mostPaidEmployee = employees.find(
  (empWithHighSalary) =>
    empWithHighSalary.salary === Math.max(...employees.map((emp) => emp.salary))
);
console.log(`the most paid employee is: ${mostPaidEmployee}`);

const totalSalaries = employees.reduce(
  (total, salary1) => total + salary1.salary,
  0
);
console.log(`the total salaries is ${totalSalaries}`);

function compareNumbers(a, b) {
  return a - b;
}
const employeesSorted = employees.map((emp) => emp.salary);
employeesSorted.sort(compareNumbers);
console.log(employeesSorted);
