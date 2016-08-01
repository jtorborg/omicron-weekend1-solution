$(document).ready(function() {
  $("#empFirstName").focus();
  var employees = [];
  var salaryTotal = 0;

  // Add new employee
  $("#empForm").on("submit", function(event) {
    event.preventDefault();

    var values = {};
    var formData = $(this).serializeArray();
    formData.forEach(function(employee, index) {
      values[employee.name] = employee.value;
    });

    values.empSalary = parseInt(values.empSalary);
    // calculate monthly salary from employee's annual
    salaryTotal += Math.round(values.empSalary / 12);
    employees.push(values);
    console.log(values);

    $("#empForm").find("input[type=text], input[type=number]").val("");
    $("#empFirstName").focus();

    appendDom(values);
    updateSalary();
  });

  function updateSalary() {
    $("#salaryTotal").text(salaryTotal);
  }

  function appendDom(empInfo) {
    $("#empContainer").append('<div class="employee"></div>');
    $el = $("#empContainer").children().last();
    $el.append('<h2>' + empInfo.empFirstName + ' ' + empInfo.empLastName + '</h2>');
    $el.append('<p>' + empInfo.empIDNumber + '</p>');
    $el.append('<p>' + empInfo.empTitle + '</p>');
    $el.append('<p>$' + empInfo.empSalary + '</p>');
    $el.append('<button class="removeEmployee">Remove</button>');
  }

});
