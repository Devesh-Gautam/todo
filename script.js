// $("li").click(function()
// {

// })
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = $(".add-button");

addButton.click(function () {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    var li = document.createElement("li");
    var inputValue = inputBox.value;
    li.innerHTML = inputValue;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

document.addEventListener("keydown", function (event) {
  var code = event.keyCode ? event.keyCode : event.which;
  if (code == 13) {
    if (inputBox.value === "") {
      alert("You must write something");
    } else {
      var li = document.createElement("li");
      var inputValue = inputBox.value;
      li.innerHTML = inputValue;
      listContainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }
});

listContainer.addEventListener("click",function(e)
{
  if(e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
    saveData();
  }
},false);


function saveData()
{
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
  listContainer.innerHTML=localStorage.getItem("data");
}

showTask();