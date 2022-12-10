let id = 0;

let table = document.getElementById("list");
let tbody = table.createTBody();

// Date
function getDate() {
  let createdDate = new Date();
  let year = createdDate.getFullYear();
  let month = createdDate.getMonth() + 1;
  let day = createdDate.getDate();
  let date = `${year}-${month}-${day}`;
  return date;
}

// Adding a new row to the table
function createRow(id, task, created, started, due) {
  let row = tbody.insertRow();
  row.innerHTML = `
  <tr class="task" id="item-${id}">
    <td>${task}</td>
    <td>${created}</td>
    <td>${started}</td>
    <td>${due}</td>
    <td><button class="btn btn-dark" id="btn-${id}">Delete</button></td>
  </tr>`;
  row.setAttribute("id", `item-${id}`);
}

// Delete Button
function deleteButton(itemId) {
  document.getElementById(`btn-${itemId}`).addEventListener("click", () => {
    let elementToDelete = document.getElementById(`item-${itemId}`);
    console.log(`item-${itemId}`);

    tbody.removeChild(elementToDelete);
  });
}

// Create New Task Button
document.getElementById("add").addEventListener("click", () => {
  let task = document.getElementById("new-task").value;
  let created = getDate();
  let started = document.getElementById("new-start-date").value;
  let due = document.getElementById("new-end-date").value;

  createRow(id, task, created, started, due);

  deleteButton(id);

  id++;
});


// Clear All TAsk Button
document.getElementById("clear").addEventListener("click", () => {
  tbody.innerHTML = "";
  id = 0;
});
