"use strict";

var addRow = function addRow() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("number").value;

  if (name === "") {
    alert("Please Fill Your Full Name");
    document.getElementById("name").focus();
    return false;
  }

  if (age === "") {
    alert("Please Fill Your Age");
    document.getElementById("age").focus();
    return false;
  }

  if (email === "") {
    alert("Please Fill Your Email");
    document.getElementById("email").focus();
    return false;
  }

  if (contact === "") {
    alert("Please Fill Your Mobile Number");
    document.getElementById("number").focus();
    return false;
  }

  var tr = document.createElement("tr");
  tr.innerHTML = "\n  <td>".concat(name, "</td>\n  <td>").concat(age, "</td>\n  <td>").concat(email, "</td>\n  <td>").concat(contact, "</td>\n  <td>\n    <button type=\"button\" class=\"btn btn-warning\" id=\"editBtn\"> Edit </button>\n    <button type=\"button\" class=\"btn btn-danger\" id=\"deleteBtn\"> Delete </button>\n  </td>");
  document.getElementById("tableDisplay").appendChild(tr);
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("tableDisplay").value = "";
}; // let delRow = (x) => {
//   document.getElementById("tableDisplay").deleteRow(x.parentElement.parentElement.rowIndex);
// }


document.getElementById("tableDisplay").addEventListener("click", function (event) {
  if (event.target.matches("#deleteBtn")) {
    var row = event.target.closest("tr");
    row.remove();
  }
});
document.getElementById("tableDisplay").addEventListener("click", function (event) {
  if (event.target.matches("#editBtn")) {
    var row = event.target.closest("tr");
    row.setAttribute("contenteditable", "true");
    alert("Click on the text you want to edit!");
    row.cells[4].innerHTML = "<button type=\"button\" class=\"btn btn-primary\" id=\"saveBtn\"> Save </button>";
  }
});
document.getElementById("tableDisplay").addEventListener("click", function (event) {
  if (event.target.matches("#saveBtn")) {
    var row = event.target.closest("tr");
    row.setAttribute("contenteditable", "false");
    alert("Row data changed!");
    row.cells[4].innerHTML = "\n      <button type=\"button\" class=\"btn btn-warning\" id=\"editBtn\"> Edit </button>\n      <button type=\"button\" class=\"btn btn-danger\" id=\"deleteBtn\"> Delete </button>";
  }
});
document.getElementById("done").addEventListener("click", addRow);