var Department = /** @class */ (function () {
    function Department(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
    return Department;
}());
function departmentsPay(n, arr) {
    var final = [];
    for (var index = 0; index < n; index++) {
        var employee = arr[index].split(' ');
        // const department = new Department(employee)
    }
}
departmentsPay(4, ["Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com"]);
// Highest Average Salary: Development
// George 0.20 Freeloader Nowhere 18
// Sam 840.20 sam@sam.com -1
// Peter 120.00 peter@abv.bg 28
