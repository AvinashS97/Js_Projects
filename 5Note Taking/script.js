const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

//Add Note by clicking "Add Note"
addBtn.addEventListener("click", function(){
    addNote();
})

//! Self- calling fns
(
    function(){
        const notes = localStorage.getItem("notes");
    }
)()

// 22:56

// To save the Notes
const saveNote = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    const data =[];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    // console.log(data)
    localStorage.setItem("notes",JSON.stringify(data));
}

// Adding new Notes
const addNote = ()=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div> 
    <textarea></textarea> 
    `
    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
    })
    
    note.querySelector(".save").addEventListener("click", function(){
        saveNote();
    })

    main.appendChild(note);
    saveNote();
}

/*
<div class="tool">
<i class="fas fa-save"></i>
<i class="fas fa-trash"></i>
</div> 
<textarea></textarea> 
*/

