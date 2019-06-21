package com.isaac.employeecalculator.data;

import com.isaac.employeecalculator.model.Employee;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeRepository {

    private List<Employee> employeeList = new ArrayList<>();

    public List<Employee> getAllEmployees() {
        return employeeList;
    }

    public Employee addEmployee(Employee employee) {
        employeeList.add(employee);
        return employee;
    }

    public List<Employee> searchByPosition(String position) {
        List<Employee> foundEmployees = new ArrayList<>();

        for (Employee employee : employeeList) {
            if(employee.getPosition().equalsIgnoreCase(position)) {
                foundEmployees.add(employee);
            }
        }
        return foundEmployees;
    }

    public List<Employee> searchById(String id) {
        List<Employee> foundEmployees = new ArrayList<>();

        for (Employee employee : employeeList) {
            if(employee.getId().equalsIgnoreCase(id)) {
                foundEmployees.add(employee);
            }
        }
        System.out.println(foundEmployees);
        return foundEmployees;
    }

    public Employee deleteEmployeeById(String id) {
        for (Employee employee : employeeList) {
            if(employee.getId().equalsIgnoreCase(id)) {
                employeeList.remove(employee);
                return employee;
            }
        }
        return null;
    }
}
