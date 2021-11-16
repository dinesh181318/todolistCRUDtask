var list = [];

// getting the container elements by its ID

var container = document.getElementById("table-container");

//creating the table,table head, heading row with the headings

var table = document.createElement("table");
var thead = document.createElement("thead");
var thr = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");


//Assign the heading to be displayed

th1.innerHTML = "ID";
th2.innerHTML = "NAME";
th3.innerHTML = "DESCRIPTION";
th4.innerHTML = "ACTION";


// append the heading to the heading row

thr.appendChild(th1);
thr.appendChild(th2);
thr.appendChild(th3);
thr.appendChild(th4);

//add the heading row to the table head, then add table head to the table and add the table to the comtainer 

thead.appendChild(thr);
table.appendChild(thead);

//create the table body

var tbody = document.createElement("tbody");

//creating a table dynamically

function displayTaskTable(inputTasks){

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());
   
    for (var i = 0; i < inputTasks.length; i++) {

        //Create the table row with table data

       var tr = document.createElement("tr");
       var td1 = document.createElement("td");
       var td2 = document.createElement("td");
       var td3 = document.createElement("td");
       var td4 = document.createElement("td");
     

       // Input the value in the table 

       td1.innerHTML = inputTasks[i]["ID"];
       td2.innerHTML = inputTasks[i]["NAME"];
       td3.innerHTML = inputTasks[i]["DESCRIPTION"];
       td4.innerHTML =  `<td><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></i></a></td>
        <td><a onclick="deleteRow(${i})"><i class="fa fa-trash-o "></i></a></td> `;
       


       //append the data to the table row

       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
      

       //Append the row to the table body

       tbody.appendChild(tr);

    }

}

function addNewTask(){
    var newTask = {};
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    
    newTask['ID'] = id;
    newTask['NAME'] = name;
    newTask['DESCRIPTION'] = description;

    list.push(newTask);
    displayTaskTable(list);
    clearFields();

}

//Append the table body to the table and table to the container

table.appendChild(tbody);
container.appendChild(table);

function deleteRow(index) {
    list.splice(index, 1);
    displayTaskTable(list);
}

// edit the row
function editRow(index) {
    var updatedObj = list[index];
    document.getElementById("id").value =updatedObj.ID;
    document.getElementById("name").value = updatedObj.NAME;
    document.getElementById("description").value = updatedObj.DESCRIPTION;
    document.getElementById("updateBtn").style.display='block';
    document.getElementById("addBtn").style.display='none';
    document.getElementById("id").disabled = true;
    
}

function update() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    
    var foundTask = list.find(function(task){
        return task.ID==id;
    });
    foundTask.NAME = name;
    foundTask.DESCRIPTION = description;
   
    displayTaskTable(list);
    clearFields();
    document.getElementById("id").disabled = false;
    document.getElementById("updateBtn").style.display='none';
    document.getElementById("addBtn").style.display='block';

}

function clearFields() {
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    
}


