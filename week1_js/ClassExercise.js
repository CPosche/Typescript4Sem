/* exercise 1 */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function greeting(name, length) {
  console.log(`Hello, ${name} your name is ${length} characters long!`);
  readline.close();
}

function processUserInput(callback) {
  readline.question(`What's your name? `, (name) =>
    callback(name.toUpperCase(), name.length)
  );
}

/* exercise 2 */
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const operateArrayOfNumbers = (operate1, operate2, numberArr) => {
  let operatedArr = [];
  for (let i = 0; i < numberArr.length; i++) {
    let temp = operate1(numberArr[i], 2);
    operatedArr.push(operate2(temp, 10));
  }
  return operatedArr;
};

function operateOnNumbers(operator, x, y) {
  return operator(x, y);
}

const numberArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// processUserInput(greeting);
// console.log(operateOnNumbers(add, 3, 4)); // 7
// console.log(operateOnNumbers(multiply, 3, 4)); // 12
// // console.log(operateOnNumbers((x, y) => x - y, 53, -10));
// console.log(numberArr);
// console.log(
//   operateArrayOfNumbers(
//     (x, y) => x ** y,
//     (x, y) => x + y,
//     numberArr
//   )
// );

class Employee {
  constructor(name, salery, hireDate) {
    this.name = name;
    this.salery = salery;
    this.hireDate = hireDate;
  }

  toString() {
    return `Employee: ${this.name}, Salery: ${this.salery}, Hire Date: ${this.hireDate}`;
  }
}

class Manager extends Employee {
  constructor(
    name,
    salery,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged
  ) {
    super(name, salery, hireDate);
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob;
    this.employeesManaged = employeesManaged;
  }

  toString() {
    return `${super.toString()}.\nJob Title: ${
      this.jobTitle
    }, Description of Job: ${this.descriptionOfJob}, Employees Managed: ${
      this.employeesManaged
    }`;
  }
}

class Deparment extends Manager {
  constructor(
    name,
    salery,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees
  ) {
    super(name, salery, hireDate, jobTitle, descriptionOfJob, employeesManaged);
    this.departmentName = departmentName;
    this.employees = employees;
  }

  toString() {
    return `${super.toString()}.\nDepartment Name: ${
      this.departmentName
    }, Employees: ${this.employees}`;
  }
}

class Contract extends Deparment {
  constructor(
    name,
    salery,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees
  ) {
    super(
      name,
      salery,
      hireDate,
      jobTitle,
      descriptionOfJob,
      employeesManaged,
      departmentName,
      employees
    );
  }

  toString() {
    return `${super.toString()}.`;
  }
}

const emp1 = new Employee("Casper", 1000, "2020-01-01");
const emp2 = new Employee("Casper", 1000, "2020-01-01");

const contract1 = new Contract(
  "Casper",
  1000,
  "2020-01-01",
  "Developer",
  "Coding",
  0,
  "IT",
  [emp1, emp2]
);

console.log(contract1.toString());
