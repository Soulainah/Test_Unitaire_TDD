describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
  //exercice 1
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        let result = tailleString('Ce texte à une certaine taille');
        // on donne le reésultat attendu
        expect(result).toEqual(30);
    });

     //exercice 2
    it('Remplacer le premier e d\'une chaine par un espace', function () {
      // on crée un exemple
      let result = replaceString('Ce texte à une certaine taille');
      // on donne le reésultat attendu
      expect(result).toEqual('C  texte à une certaine taille');
    });

     //exercice 3
    it('Concatener deux chaines de caractères', function () {
      let result = concatString('Bonjour', 'DesCodeuses');
      expect(result).toContain('Bonjour DesCodeuses');
    });

     //exercice 4
    it('Afficher le cinquième caractère d\'une chaine', function () {
      let result = show('Soulainah');
      expect(result).toMatch('a');
    });
    
     //exercice 5
    it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function () {
      let result = showCharNine('Hello World !!');
      expect(result).toMatch('Hello Wor');
    });
    
     //exercice 6
    it('Mettre en majuscule la chaine', function () {
      let result = majString('hello world !!');
      expect(result).toEqual('HELLO WORLD !!');
    });
    
     //exercice 7
    it('Mettre en minuscule la chaine', function () {
      let result = minString('HELLO WORLD !!');
      expect(result).toEqual('hello world !!');
    });

     //exercice 8
    it('Supprimer les espaces avant et après la chaine', function () {
      let result = deleteSpace(' Bonjour le monde');
      expect(result).toEqual('Bonjour le monde');
    });

     //exercice 9
    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
      let result = getBoolean('Suis-je une chaîne de caractére')
      expect(result).toBeTrue();
    });

     //exercice 10
    it('Afficher l\'extension du fichier', function () {
      let result = typeOfExtension('tdd.zip');
      expect(result).toEqual('zip');
    });

     //exercice 11
    it('Compter le nombre d\'espace dans la chaine', function () {
      let result = numberSpace(' Bonjour le monde ');
      expect(result).toEqual(4);
    });

     //exercice 12
    it('Inverser une chaine de caractères', function () {
      let result = reverseString('monde le Hello');
      expect(result).toEqual('olleH el ednom');
    });
})
