function showTask(){
    var task = document.getElementById("tasks-input").value
    var result = document.getElementById("result")

    if (task == ''){
        return false
    }else{
        var listItem = document.createElement("li")
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        listItem.style.alignItems = "center"; 
        listItem.style.textAlign = "right"; 

        var checkBox = document.createElement("input")
        checkBox.type = ("checkbox")
        checkBox.className = ("ml-2")
        checkBox.onclick =function(){
            if (this.checked){
                listItem.style.textDecoration = "line-through"
            }
            else{
                listItem.style.textDecoration = "none"
            }
        }

        var deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm rounded-pill mr-auto px-3";
        deleteButton.innerHTML = "حذف";
        deleteButton.onclick = function() {
            
            result.removeChild(listItem);
        };
        listItem.appendChild(checkBox)
        listItem.append(task)
        listItem.appendChild(deleteButton)
        result.append(listItem)
        document.getElementById("tasks-input").value = ""
    }   
    return false
}