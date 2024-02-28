let inputTag = document.getElementById("input");
let addBtn = document.getElementById("button");
let listContainer = document.getElementById("todolist");
let resetButton = document.getElementById("Resetbutton");
let bucketlist = [];

addBtn.addEventListener("click", addToBucketList);

function addToBucketList() {
    let value = inputTag.value;
    if (value.trim() !== "") {
        bucketlist.push(value);
        let li = document.createElement("li");
        let div = document.createElement("div");

        let textSpan = document.createElement("span");
        textSpan.innerText = value;

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute('id','btn')
        removeBtn.setAttribute('class','remove-btn')
        removeBtn.innerText = "×";
        removeBtn.addEventListener("click", function () {
            bucketlist.splice(bucketlist.indexOf(value), 1);
            listContainer.removeChild(li);
        });

        let editBtn = document.createElement("button");
        editBtn.setAttribute('id','btn')
        editBtn.setAttribute('class','remove-btn')
        editBtn.innerText = "| Edit";
        editBtn.addEventListener("click", function () {
            let newText = prompt("Edit the to-do item:");
            if (newText !== null && newText.trim() !== "") {
                textSpan.innerText = newText;
                bucketlist[bucketlist.indexOf(value)] = newText;
            }
        });

        div.appendChild(textSpan);
        div.appendChild(removeBtn); 
        div.appendChild(editBtn);
        li.appendChild(div);
        listContainer.appendChild(li);
        inputTag.value = "";
    }
}

resetButton.addEventListener("click", function () {
    listContainer.innerHTML = "";
    bucketlist = [];
});
