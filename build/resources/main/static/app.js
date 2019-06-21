$(document).ready(onReady);

console.log('Yerp');

function onReady() {
    console.log('Hi');
    $('#btnSearchId').on('click', function(event) {
        const id = $("#searchId").val();

        $.ajax({
            type: "GET",
            url: "/search/" + id,
            success: function(response) {
                console.log("Found employee: ", response);
            }
         })
    })

    $('#employeeForm').on('submit', employeeFormSubmit);
}

let employeeArray = [];

function employeeFormSubmit(event) {
    event.preventDefault();

    const id = $('.id').val();
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const position = $('.position').val();
    const salary = $('.salary').val();

    const employeeObject = {
    id,
    firstName,
    lastName,
    position,
    salary
    }

    postEmployee(employeeObject);

}

function postEmployee(enteredEmployee) {
    $.ajax({
        type: "POST",
        url: "/add/employee",
        data: JSON.stringify(enteredEmployee),
        contentType: "application/json; charset=utf-8",
        beforeSend: function() {
            console.log('hi')
        },
        success: function(response) {
            console.log(response);
            getEmployees();
        }
    })
}

function getEmployees() {
    $.ajax({
        type: "GET",
        url: "/get/employees",
        success: function(response) {
            console.log(response);
        }
    })
}

function redrawEmployeeInfo() {
    $('#container').empty();
    for (let i = 0; i < employeeArray.length; i++) {
        $('#container').append('<div></div>');
        let divJustCreated = $('#container').children().last();
        let employee = employeeArray[i];
        divJustCreated.append('<p>' + employee.id + '</p>');
        divJustCreated.append('<p>' + employee.firstName + '</p>');
        divJustCreated.append('<p>' + employee.lastName + '</p>');
        divJustCreated.append('<p>' + employee.position + '</p>');
        divJustCreated.append('<p>' + employee.salary + '</p>');
    }
}
