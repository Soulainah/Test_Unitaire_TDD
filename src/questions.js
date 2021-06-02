//exercice 1
let tailleString = function (texte) {
    return texte.length;
}

//exercice 2
let replaceString = function (texte) {
    let result = texte.replace('e', ' ') //on veut remplacer le 'e' par le ' ' (espace)
    return result;
}

 //exercice 3
 let concatString = function (text1, text2) {
     return text1 + ' ' + text2
 }

 //exercice 4
 show = function (texte) {
     return texte[4];
 }

 //exercice 5
 let showCharNine = function(texte) {
     let result = texte.substr(0,9);
     return result;
 }

 //exercice 6
 let majString = function(texte) {
     return texte.toUpperCase();
 }

  //exercice 7
  let minString = function(texte) {
    let result = texte.toLowerCase();
    return result;
}

  //exercice 8
let deleteSpace = function(texte) {
    return texte.trim();
}

//exercice 9
let getBoolean = function(texte) {
    if(typeof texte === 'string'){
        return true;
    }
}

//exercice 10
let typeOfExtension = function(string) {
    return string.split('.').pop();
}

//exercice 11
let numberSpace = function(string){
    let result = string.split(' ').length -1;
    return result;
}

//exercice 12
let reverseString = function(string) {
    let result = string.split('').reverse('').join('');
    return result;
}