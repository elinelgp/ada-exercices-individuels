# Cet exercice traite de la compression. C’est un procédé permettant de représenter une certaine quantité d'information en utilisant et en occupant un espace plus petit qu'originellement.
# Il existe plusieurs type de compression, dans cet exercice nous nous intéresserons à la compression :
# sans perte, c'est à dire que le résultat final ne sera pas dégradé par rapport à l'information originelle ;
# par dictionnaire, c'est à dire que nous gagnerons de la place en remplaçant certaines bribes d'information par une référence plus courte. Nous stockerons cette référence et la bribe associée dans un dictionnaire, afin de nous permettre de reconstruire l'information originelle lors d'une étape de décompression.

# ETAPE 1 : Découpage
# Nous allons tout d'abord transformer le texte pour le rendre plus facilement manipulable.
# Créez une fonction A (donnez-lui le nom que vous voulez, c'est simplement pour y faire référence dans cet exercice) prenant en paramètre ce texte (ou tout autre chaîne de caractères) et retourne une liste de mots.
# Nous définissons un mot comme un ensemble de caractères, quels qu'ils soient, à l'exception des espaces, qui séparent les mots entre eux.

# Reconstruction
# Créez également une fonction B prenant en paramètre une liste de mots, et retournant une chaîne de caractère composée de l'ensemble des mots dans l'ordre, séparés par un espace.
# Cette fonction est "l'inverse" de la fonction A créée à l'étape Découpage : actuellement, sans aucune modification des mots, elle vous permet de reformer le texte originel à partir du résultat de la fonction A.

def strToList(str) : 
  newArray1 = str.split()
  return newArray1
  
def listToString(list) :
  separator = " "
  newString = separator.join(list)
  return newString
  
# ETAPE 2 : Nous allons maintenant remplacer certains mots du texte par des références.
#Créez une fonction C prenant en paramètre une liste de mots et un dictionnaire.
#Pour chaque mot dans la liste, si le mot existe dans le dictionnaire en tant que clef, remplacez-le par la valeur associée.

def replace(list, dict) :
  newArray2 = []
  for word in list :
    if word in dict :
      newWord = dict.get(word)
      newArray2.append(newWord)
    else :
      newArray2.append(word)
  return newArray2
  
dict1 = {'texte': '1',
 'lorem': '2',
 'qui': '3',
 'donc': '4',
 'est': '5',
 'que': '6',
 'pour': '7',
 'ceci': '8',
 'faux-texte': '9',
 'dans': '10',
 'plus': '11',
 'avec': '12'}

list1 = ['mais', 'ceci', 'est', 'un', 'long', 'faux-texte']

#Vous pouvez maintenant enchaîner vos fonctions A, C et B pour produire un nouveau texte :
#A divise le texte originel en liste de mots,
#C remplace certains de ces mots par les références du dictionnaire,
#B récupère la liste de mots et reconstruit un texte complet.

def compression (str, dict):
  array = strToList(str)
  newArray3 = replace(array, dict)
  restored = listToString(newArray3)
  return restored

print compression ("Bonjour ceci est le plus beau code", dict1)
  
