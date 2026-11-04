
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

document.getElementById("dato").textContent = day + "." + month + "." + year;

const getHour = today.getHours();

let hilsen; 
if (getHour >= 11) {
	hilsen = "Pantografen er åpen!";
} else if (getHour <= 13) {
	hilsen = "Pantografen er stengt"
} else {
	hilsen = "Pantografen åpner 11 og stenger 13"
}

document.getElementById("hilsen").textContent = hilsen;

