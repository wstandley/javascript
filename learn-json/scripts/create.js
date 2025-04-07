function addme() {
  // First, let function get all the values for users input and add to object array
  const user_info = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  const newJSON = JSON.stringify(user_info);
  document.getElementById("json-value").innerHTML = newJSON;
}
