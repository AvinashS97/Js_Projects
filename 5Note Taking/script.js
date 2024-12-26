const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


// To save the Notes
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })
    // console.log(data);
    if (data.length == 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }

     // Show the popup
     const popup = document.getElementById("popup");
     popup.style.display = "block";
 
     // Hide the popup after 2 seconds
     setTimeout(() => {
         popup.style.display = "none";
     }, 2000);


}

// addNote function

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div> 
    <textarea>${text}</textarea> 
    `
    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        saveNotes()
    })

    note.querySelector(".save").addEventListener("click", function () {
        saveNotes();
    })
    note.querySelector("textarea").addEventListener("focusout", function () {
        saveNotes()
    })

    main.appendChild(note);
    saveNotes();
}

// Adding new Notes


/*
<div class="tool">
<i class="fas fa-save"></i>
<i class="fas fa-trash"></i>
</div> 
<textarea></textarea> 
*/

//! Self- calling fns

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsNotes);
        if (lsNotes == null) {
            addNote()
        } else {
            lsNotes.forEach((lsNote) => {
                addNote(lsNote)
            })
        }
    }
)()


//Add Note by clicking "Add Note"
addBtn.addEventListener("click", function () {
    addNote();
})
