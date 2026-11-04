
const today = new Date(); /* Lager en variabel for å skaffe dagens dato */ 
const day = today.getDate(); /* dette er en innebydt variabel som gjør at vi kan skaffen dato til hvilken dag det er i denne uken */ 
const month = today.getMonth() + 1; /* dette er en innebydt variabel som gjør at vi kan få skaffer hvilken måned i året vi er på, men den starter fra 0 så da må vi legge til en med +1 på slutten*/ 
const year = today.getFullYear(); /* dette er en innebydt variabel som gjør at vi kan få hvilket år det er */ 

document.getElementById("dato").textContent = day + "." + month + "." + year; /* Denne bytter det som er inni ID dato, til å stå datoen for i dag istedet, som vi har laget variabel om*/ 

const getHour = today.getHours(); /* variabel for å finne hvilken time i døgnet det er nå */ 

let hilsen; /* gjør at vi kan få byttet id hilsen til noe annet senere variert på hvilken tid på døgnet det er */
if (getHour >= 11) { /* Dette viser at hvis klokken er 11 eller mer så skal hilsen byttes med  */
	hilsen = "Pantografen er åpen!"; /* Hilsen blir byttet med Pantografen er åpen*/
} else if (getHour <= 13) { /* Hvis klokken er 13 eller mere så skal man skrive pantografen er stengt */
	hilsen = "Pantografen er stengt" /* altså bytte hilsen med akkuratt dette */
} else { /* hvis ingen av de over er riktig skrives denne. nemlig når det åpner */
	hilsen = "Pantografen åpner 11 og stenger 13" /* fordi hvis klokken er 2 på morningen skal ikke det stå velkommen til pantografen, eller ingenting, det er bedre å si når det åpner  */
}

document.getElementById("hilsen").textContent = hilsen; /* Slik at den bytter teksten inni hilsen med variabelen vi nettopp har laget. */ 

