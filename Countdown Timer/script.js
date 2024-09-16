const endDate = "17 Sep 2024 00:00 AM";

document.getElementById("end-date").innerText = endDate;

//Use date object
const clock = ()=>{
    const end = new Date(endDate) // It gives end date 
    const now = new Date() // Current date
    const diff = (end-now) / 1000;
    // console.log(diff); // In Seconds

    // convert into days

    console.log (Math.floor(diff/ 3600 /24));
    
}
clock()