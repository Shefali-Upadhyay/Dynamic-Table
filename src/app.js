let addRow = () => {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("number").value;

  if(name === ""){
    alert("Please Fill Your Full Name");
    document.getElementById("name").focus();
    return false;
  }
  if(age === ""){
    alert("Please Fill Your Age");
    document.getElementById("age").focus();
    return false;
  }
  if(email === ""){
    alert("Please Fill Your Email");
    document.getElementById("email").focus();
    return false;
  }
  if(contact === ""){
    alert("Please Fill Your Mobile Number");
    document.getElementById("number").focus();
    return false;
  }

  let tr=document.createElement("tr");
  tr.innerHTML=`
  <td>${name}</td>
  <td>${age}</td>
  <td>${email}</td>
  <td>${contact}</td>
  <td>
    <button type="button" class="btn btn-warning" id="editBtn"> Edit </button>
    <button type="button" class="btn btn-danger" id="deleteBtn"> Delete </button>
  </td>`

  document.getElementById("tableDisplay").appendChild(tr);
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("tableDisplay").value = "";
};

document.getElementById("tableDisplay").addEventListener("click", (event) => {
  if (event.target.matches("#deleteBtn")) {
    let row = event.target.closest("tr");
    row.remove();
  }
});

document.getElementById("tableDisplay").addEventListener("click", (event) => {
  if (event.target.matches("#editBtn")) {
    let row = event.target.closest("tr");
    for(let i = 0; i <= 3 ; i++)
    {
      row.cells[i].setAttribute("contenteditable", "true");
      row.cells[i].style.backgroundColor = "#D0D3D4";
    }
    alert("Click on the text you want to edit!");
    row.cells[4].innerHTML = `<button type="button" class="btn btn-primary" id="saveBtn"> Save </button>`;
  }
});

document.getElementById("tableDisplay").addEventListener("click", (event) => {
  if (event.target.matches("#saveBtn")) {
    let row = event.target.closest("tr");
    for(let i = 0; i <= 3 ; i++)
    {
      row.cells[i].setAttribute("contenteditable", "false");
      row.cells[i].style.backgroundColor = "";
    }
    alert("Row data changed!");
    row.cells[4].innerHTML = `
      <button type="button" class="btn btn-warning" id="editBtn"> Edit </button>
      <button type="button" class="btn btn-danger" id="deleteBtn"> Delete </button>`;
  }
});

document.getElementById("done").addEventListener("click", addRow);