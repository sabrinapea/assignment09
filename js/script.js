// CREATE AN ARRAY OF EMPLOYEES
let employees = [[98765412,'Sueky Su', 3568, 'suekys@gmail.com', 'marketing'],
                [56453252,'Peter Snowkowski', 5648, 'psnowkowski@sbcglobal.net', 'sales'],
                [12385621,'Gertrude Wayne', 8895, 'gwayne@yahoo.com', 'engineering'],
                [98551023,'Nidhi Paneer', 2301, 'npaneer@gmail.com', 'QA'],
                [12389990,'Mary Smith', 7041, 'msmith@gmail.com', 'executive']];

let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.length > 0) {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    employees = localStorage.getItem('employees').split(',');
}

function buildGrid() {
    // GET DOM ELEMENTS
    let tableBody = document.querySelector('#employees tbody');

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    tableBody.innerHTML = '';
    for (let emp of employees) {
        let rowNode = document.createElement('tr');
        let rowContents = '';
        for (let infoEmp of emp) {
            rowContents += `<td>${infoEmp}</td>`;
        }

        // ADD DELETE BUTTON
        rowContents += `<td><button class='btn btn-danger btn-sm float-right delete'>X</button></td>`;
        rowNode.innerHTML = rowContents;
        tableBody.appendChild(rowNode);
    }
}

// RUN BUILD GRID ON DOCUMENT LOAD
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExt = document.querySelector('#extension').value;
    let newEmail = document.querySelector('#email').value;
    let newDepart = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let empArray = [newId, newName, newExt, newEmail, newDepart];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY   
    employees.push(empArray); 

    // BUILD THE GRID
    buildGrid();
    
    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        if (confirm('Are you sure you want to delete this employee?')) {   
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            employees.splice(e.target.parentNode.parentNode.rowIndex, 1);
        }
    }
    // REBUILD TABLE
    buildGrid();
});
        

    // REMOVE EMPLOYEE FROM ARRAY

    // BUILD THE GRID

    // BUILD THE EMPLOYEES GRID

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
  
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE


