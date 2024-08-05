const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };

  //objects modification
  // Function to non-destructively update the employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, sex, male) {
    return {
      ...employee,
      [sex]: male
    };
  }
  
  // Function to destructively update the employee object with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, title, Manager) {
    employee[title] = Manager;
    return employee;
  }
  
  // Function to non-destructively delete a key from the employee object
  function deleteFromEmployeeByKey(employee, age) {
    const newEmployee = { ...employee };
    delete newEmployee[age];
    return newEmployee;
  }
  
  // Function to destructively delete a key from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, title) {
    delete employee[title];
    return employee;
  }
  