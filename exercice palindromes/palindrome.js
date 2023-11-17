//Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

//ETAPE 1 : Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
//Tout au long de l’exercice, on assumera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

function isValidDate(date){
let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/]\d{4}$/;

    // On vérifie que la date correspond à l'expression régulière :      
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // On découpe la date :      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let day = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // On va créer la liste des jours en fonction des mois :      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //On vérifie que le jour existe
                console.log("Invalid date")     
                return false;
            }
         
        // Cas spécial pour le mois de février, selon les années :    
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                console.log("Invalid date")
                return false;
            }else if ((leapYear == true) && (day > 29)) {
                console.log('Invalid date format!');
                return false;
            }
        }
    } else {
        console.log("Invalid date format!");
        return false;
    }
    return true;
}
console.log(isValidDate("7/12/9988"))

//ETAPE 2 : Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.
//Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

function isPalindrome(date){
    if (isValidDate(date)===true){
    let dateArray = date.split('');
    console.log(dateArray);
    //on retire ici les "/" :
    dateArray.splice(2, 1);
    dateArray.splice(4, 1);
    console.log(dateArray);
    // !! la méthode "toReversed" conserve une version du tableau d'origine en plus d'en créer une inversée, contrairement à ".reverse()" qui réécrie le tableau :
    let reverseDate = dateArray.toReversed();
    console.log(reverseDate);
    if (JSON.stringify(reverseDate) === JSON.stringify(dateArray)){
        return true
      }else if (JSON.stringify(reverseDate) != JSON.stringify(dateArray)){
        return false
      }    
    } else {return false}
};


console.log(isPalindrome("02/05/1998"));

//ETAPE 3 : Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

function getNextPalindromes(x){
    let palindromesDatesArray = [];
    let today = new Date();
    //console.log(today);
    
  
  while(palindromesDatesArray.length<x){
    let todayAsString = today.toLocaleDateString();
    // console.log(todayAsString);
    if(isPalindrome(todayAsString)){
     palindromesDatesArray.push(todayAsString); 
    }
    let nextDay = today.getDate();
    //console.log(nextDay);
    today.setDate(nextDay+1);
    
  }
return palindromesDatesArray;
}
console.log(getNextPalindromes(12));