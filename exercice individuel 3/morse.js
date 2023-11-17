//Cet exercice vise à créer un encodeur et décodeur de morse. Le morse est un alphabet codé qui remplace les caractères par des impulsions représentés par des points (.) ou des tirets (-) suivant si elles sont courtes ou longues.

//ETAPE 1 : Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
//Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(latinCharacterString) {

    return latinCharacterString.split('') ;
    
};

console.log(getLatinCharacterList("Hello, world"));

//ETAPE 2 : À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.
//Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
//Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..'
};

function translateLatinCharacter(latinChar) {
        return latinToMorse[latinChar]
};

console.log(translateLatinCharacter("A"));

//ETAPE 3 :
//Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(text){
    let morseArray = "";
    let characters = getLatinCharacterList(text);
    for (character of characters){
        let morse = translateLatinCharacter(character);
        morseArray += morse
    }
return morseArray
};

console.log(encode("JAVASCRIPT"));