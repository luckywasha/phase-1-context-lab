/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Define a function that creates a new employee record
 function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}
createEmployeeRecord(["Gray", "Worm", "Security", 1])

function createEmployeeRecords(arrays) {
  return arrays.map(array => createEmployeeRecord(array));
}


function createTimeInEvent(employee, dateTimeString) {
  const [date, hour] = dateTimeString.split(' ');

  employee.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });

  return employee;
}

function createTimeOutEvent(employee, dateTimeString) {
  const [date, hour] = dateTimeString.split(' ');

  employee.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });

  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(event => event.date === date);
  const timeOut = employee.timeOutEvents.find(event => event.date === date);

  if (timeIn && timeOut) {
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
  } else {
    return 0;
  }
}


function wagesEarnedOnDate(employeeRecord, date) {
  const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  const payRate = employeeRecord.payPerHour;
  return hoursWorked * payRate;
}

// function allWagesFor(employeeRecord) {
//     const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
//     const totalWages = datesWorked.reduce((acc, date) => {
//       return acc + wagesEarnedOnDate(employeeRecord, date);
//     }, 0);
//     return totalWages;
//   }
//

function calculatePayroll(employeeRecords) {
  const totalWages = employeeRecords.reduce((acc, employee) => {
    return acc + allWagesFor(employee);
  }, 0);
  return totalWages;
}

/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!
As a result, the lessons for this function will pass and it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}





