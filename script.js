const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

document.getElementById("dato").textContent = day + "." + month + "." + year;


const getHour = today.getHours();

let status;
if (getHour >= 13) {
	status = "Kantinene er stengt";
} else if (getHour <= 11) {
	status = "Kantinen er åpen";
} else {
	status = "Kantinen åpner 11";
}

document.getElementById("status").textContent = status;
