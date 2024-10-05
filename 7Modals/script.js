// console.log("Hello")
const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".openModalButton")
const closeButton = document.querySelector(".close_button")

const openModal = () => {
    modal.classList.remove("close");
    document.body.classList.add("overflowHidden");
}

const closeModal = () => {
    modal.classList.add("close");
    document.body.classList.remove("overflowHidden");
}
openModalButton.addEventListener("click", () => {
    openModal();
})

closeButton.addEventListener("click", () => {
    closeModal();
})