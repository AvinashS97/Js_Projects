const endDate = "25 Sep 2024 00:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")



//Use date object
const clock = () => {
    const end = new Date(endDate) // It gives end date 
    const now = new Date() // Current date
    const diff = (end - now) / 1000; // In Seconds
    inputs[0].value = (Math.floor(diff / 3600 / 24)); // convert into days

}
clock();

// 24:15