function askName (){
let nomUtilisateur = prompt ("quel est ton nom ?")
let heyThere = "👋 Bonjour " + nomUtilisateur;
document.body.innerHTML += '<h2>' + heyThere + '</h2>';
}

function askBirthYear(){
let birthYear = prompt ("quel est ton année de naissance ?");
let birthMonth = prompt ("quel est le numéro de ton mois de naissance ?");
let userAge = 2023 - birthYear;
if (birthMonth>=6){
userAge = 2023 - birthYear - 1
}
document.body.innerHTML += "<h3>" + "Vous avez " + userAge + " " + "ans " + "</h3>";
}

askName ();
askBirthYear();

