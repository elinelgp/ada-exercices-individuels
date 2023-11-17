
//ETAPE 1 :
//Conçu pour diminuer la barrière d’entrée
//Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace

function decoupeChaine(str){
  //on transforme la chaîne de caractères en tableau pour manipuler plus facilement les caractères : 
  let array = str.split("");
  //on fait une boucle pour accèder individuellement à chaque caractère et le comparer au suivant, si le caractère contenu dans l'index i est identique à celui contenu dans l'index i+1 et qu'il ne s'agit pas du dernier index, alors on rassemble les deux caractères dans l'index suivis d'un espace  
    for (let i=0; i<array.length; i++){
      if (array[i]!=array[i+1] && array[i]!=array[array.length-1]){
      array[i] = array[i]+" ";
      }
    } 
  console.log(array);
  //on passe le tableau sous forme de chaîne de caractères :
  str = array.join("");
  return str;
}


//ETAPE 2 :
//Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

function decritChaine(string){
  //on applique la fonction decoupeChaine que l'on vient d'écrire à la chaîne de caractère :
  string = decoupeChaine(string);
  //on en fait un tableau (pour la même raison que dans l'étape 1)
  newArray = string.split(" ");
  console.log(newArray);
  //on fait une boucle qui remplace chaque caractère ou ensemble de caractères par la longueur de l'index (donc le nombre de caractères) en concatenant avec le dernier caractère de cet index :
    for (let i=0; i<newArray.length; i++){
    newArray[i] = (newArray[i].length)+(newArray[i].charAt(newArray[i].length-1));
    }
  //on passe le tableau en chaîne de caractères :
  string = newArray.join("");
  return string;
}


//ETAPE 3 :
//Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.

//On initialise une variable qui va nous servir pour la condition d'arrêt de la récursivité :
let counter = 0;

function suiteConway(carac, n){
  //on incrémente la variable dès le début de la fonction afin que le code ne s'exécute plus dès que la variable a atteint sa valeur limite :
  counter ++;
  console.log(counter);
  //on appelle la fonction decritChaine à laquelle on attribue le paramètre carac qui nous intéresse ici :
  carac = decritChaine(carac);
  //Si la variable que l'on incrémente à chaque appel de la fonction est supérieure ou égale au paramètre n, on retourne la valeur de carac et la fonction cesse d'être appelée :
    if (counter>=n){
    return carac;
    }
  console.log(carac);
  //implicitement, si la variable incrémentée est inférieure à la valeur du paramètre n, on retourne une concaténation de carac avec la fonction appliquée à carac appelée en récursivité
  return (carac+" "+suiteConway(carac, n));
}
//test avec les paramètres carac = "a" et n = 3
console.log(suiteConway("a", 3))