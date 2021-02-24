'use strict';

var dbConn = require('./../../config/config');

// employee object create
var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Employee.create = function (tempEmployee, result) {
    dbConn.query('INSERT INTO employees set ?', tempEmployee, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null)
        } else {
            console.log(res.inserId);
            result.null, res.inserId;
        }
    });
};

// find by id
Employee.findById = function (id, result) {
    dbConn.query('SELECT * from employees where id = ? ', id, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

// find all employee
Employee.findAll = function (result) {
    dbConn.query('SELECT * FROM employees', function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log('employees: ', res);
            result(null, res);
        }
    });
};

// employees update
Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// delete employees
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Employee;