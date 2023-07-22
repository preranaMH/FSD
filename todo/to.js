function showform(){
    document.getElementById("tform").style.display="block";
}

function closeform(){
    document.getElementById("tform").style.display="none";}

let form = document.getElementById("form");
let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");
let msg = document.getElementById("msg");
let list = document.getElementById("list");
let add = document.getElementById("add");

form.addEventListener("submit", function(e){
  e.preventDefault();
  formValidation();
});

function formValidation(){
  if (title.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
    closeform();
    }
};

let data = [];

function acceptData() {
  data.push({
    text: title.value,
    date: date.value,
    time: time.value,
    description: description.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  createlist();
  console.log(data);
};

function createlist(){
  list.innerHTML = "";
  data.map((x, y) => {
   return (list.innerHTML += `
    <div id=${y}>
          <span class="titlestyle">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <span class="small text-secondary">${x.time}</span>
          <p>${x.description}</p>
  
          <span class="options">
          <i onClick="completed(this)" class="fas fa-check"></i>           
           <i onClick= "editTask(this); showform()" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createlist()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });
  resetForm();
};

function resetForm(){
  title.value = "";
  date.value = "";
  time.value="";
  description.value = "";
};

function deleteTask(e){
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

function editTask(e){
  let selectedTask = e.parentElement.parentElement;
  title.value = selectedTask.children[0].innerHTML;
  date.value = selectedTask.children[1].innerHTML;
  time.value=selectedTask.children[2].innerHTML;
  description.value = selectedTask.children[3].innerHTML;
  deleteTask(e);
};

function completed(e){
    let com=e.parentElement.parentElement;
    completedTasks.appendChild(com);
    data.splice(e.parentElement.parentElement.id, 1);
    $("#completedtasks input").css("text-decoration:line-through")
    
  };

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createlist();
})();