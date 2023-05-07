$(onReady)

function onReady() {
    console.log('hello');

    $('#submitButton').on('click', addEmployeeData)
      
    $('.employeeSubmit').on('click', '.deleteButton', deleteButton);

}
let totalMonthly = 0;


    


function addEmployeeData() {
    let firstName = $('#employeeFirstName').val();
    let lastName = $('#employeeLastName').val();
    let employeeID = $('#employeeIDNumber').val();
    let jobTitle = $('#employeeJobTitle').val();
    let annualSalary = $('#employeeAnnualSalary').val();

    if (firstName === '' || lastName === '' || employeeID === '' || jobTitle === '' || annualSalary === '') {
        alert('Please fill out all forms!');
        return false;
        }
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

totalMonthly += Math.round(Number($('#employeeAnnualSalary').val()) / 12);

    $('#totalMonthly').text(`Total Monthly: $${totalMonthly}`);

    if (totalMonthly > 20000) {
        $('#totalMonthly').css('color', 'red');
    }

    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIDNumber').val('');
    $('#employeeJobTitle').val('');
    $('#employeeAnnualSalary').val('');

}


function deleteButton(event) {
$(event.target).closest('tr').remove();
}


