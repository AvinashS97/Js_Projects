const endDate = "17 Sep 2024 10:39 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//Use date object
const clock = () => {
    const end = new Date(endDate) // It gives end date 
    const now = new Date() // Current date
    const diff = (end - now) / 1000; // In Seconds

    if (diff < 0)
        return;

    inputs[0].value = (Math.floor(diff / 3600 / 24)); // convert into days
    inputs[1].value = (Math.floor((diff / 3600) % 24)); // calculate hours
    inputs[2].value = (Math.floor((diff / 60) % 60)); // calculate Minutes
    inputs[3].value = (Math.floor(diff % 60)); // calculates Seconds
}
clock(); //initial call

setInterval(() => {
    clock()
}, 1000);