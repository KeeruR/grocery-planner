let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];

function saveList() {
  localStorage.setItem("groceryList", JSON.stringify(groceryList));
}

function renderList() {
  const listElement = document.getElementById("grocery-list");
  listElement.innerHTML = "";
  groceryList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.text;
    if (item.done) li.classList.add("checked");
    li.onclick = () => toggleItem(index);
    listElement.appendChild(li);
  });
}

function addItem() {
  const input = document.getElementById("item-input");
  const itemText = input.value.trim();
  if (itemText !== "") {
    groceryList.push({ text: itemText, done: false });
    input.value = "";
    saveList();
    renderList();
  }
}

function toggleItem(index) {
  groceryList[index].done = !groceryList[index].done;
  saveList();
  renderList();
}

document.getElementById("refreshList").addEventListener("click", function () {
  if (confirm("Are you sure you want to clear your grocery list?")) {
    localStorage.removeItem("groceryList"); 
    document.getElementById("grocery-list").innerHTML = ""; 
    alert("Grocery list cleared!");
  }
});

    renderList();




