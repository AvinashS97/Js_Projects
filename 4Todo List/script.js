const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup", // whenever user start typing
    function (event) {
        if (event.key == "Enter") { // and press Enter
            addToDo(this.value) // add to aDDToDo
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click", 
        function () {
            this.classList.toggle("done"); //this will add or mark done
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove() // Remove the ToDo
        }
    )
    toDoBox.appendChild(listItem)
}