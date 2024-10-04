// console.log("Hello")
const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".openModalButton")
const closeButton = document.querySelector(".close_button")

const openModal = () => {
    modal.classList.remove("close");
}

const closeModal = () => {
    modal.classList.add("close");
}
openModalButton.addEventListener("click", () => {
    openModal();
})

closeButton.addEventListener("click", () => {
    closeModal();
})