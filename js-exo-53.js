// selection du texte et changement de couleur
let paragraphe = document.getElementById("monTexte");

paragraphe.style.color = "white";

//selection des span et changement de fond
let word01 = document.getElementById("color01");

word01.style.backgroundColor = "blue";

let word02 = document.getElementById("color02");

word02.style.backgroundColor = "blue";

let word03 = document.getElementById("color03");

word03.style.backgroundColor = "blue";

let word04 = document.getElementById("color04");

word04.style.backgroundColor = "blue";

//sélection des paragraphes et changement de taille
let largeurP01 = document.querySelector(".para01");

largeurP01.style.width = "60%";

let largeurP03 = document.querySelector(".para03");

largeurP03.style.width = "60%";

let largeurP05 = document.querySelector(".para05");

largeurP05.style.width = "60%";

//animation
let action = document.querySelector(".para02");

action.style.animation = "sizeChange";
action.style.animationDuration = "5s";

let actionTo = document.querySelector(".para04");

actionTo.style.animation = "sizeChange";
actionTo.style.animationDuration = "5s";

//ajout de texte dans les a
let texte01 = document.getElementById("lien01");

texte01.innerHTML = "vers l'infini...";

let texte03 = document.getElementById("lien03");

texte03.innerHTML = "... et au delà !"

// ajout des liens
texte01.href = "https://overclocking.com/wp-content/uploads/2019/10/buzz.jpg"

texte03.href = "https://www.pausecafein.fr/images/cafein/2018/01/disney-toy-story/d2b-un-jour-une-histoire-vers-l-infini-et-l-au-dela_section_full.png"

// direction du texte
word01.dir = "rtl";

// changement du texte
let newText = document.querySelector(".para05");
