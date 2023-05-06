$(onReady)

function onReady() {
    console.log('hello');

    $('#submitButton').on('click', addEmployeeData);
    $('.employeeSubmit').on('click', '.deleteButton', deleteButton);
}




function addEmployeeData() {
    $('.employeeSubmit').append(`
    <tr>
    <td>${$("#employeeFirstName").val()}</td>
    <td>${$("#employeeLastName").val()}</td>
    <td>${$("#employeeIDNumber").val()}</td>
    <td>${$("#employeeJobTitle").val()}</td>
    <td>${$("#employeeAnnualSalary").val()}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>
    `)
}


function deleteButton(event) {
$(event.target).closest('tr').remove();
}
