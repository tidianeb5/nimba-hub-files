Voici un exercice qui combine le rest pattern, l'opérateur spread et la déstructuration en JavaScript :

**Exercice : Gestion d'une bibliothèque**

Vous devez créer une fonction `processLibrary` qui gère une bibliothèque de livres. Cette fonction prendra un nombre variable d'objets représentant des livres en utilisant le rest pattern. Chaque objet livre aura les propriétés suivantes : `title` (chaîne de caractères), `author` (chaîne de caractères), `pages` (nombre), `isAvailable` (booléen).

La fonction `processLibrary` doit effectuer les tâches suivantes :

1. Utiliser la déstructuration pour extraire les propriétés `title` et `author` de chaque objet livre dans des variables séparées.

2. Créer un nouvel objet `processedBook` en utilisant l'opérateur spread pour copier les propriétés de l'objet livre d'origine, et ajouter une nouvelle propriété `id` qui est un nombre unique pour chaque livre (vous pouvez utiliser une variable externe pour générer ces identifiants uniques).

3. Ajouter chaque `processedBook` à un nouveau tableau `library`.

4. Retourner le tableau `library` final.

Vous pouvez tester votre fonction avec des exemples de livres comme ceci :

```javascript
const book1 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180,
  isAvailable: true,
};
const book2 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  isAvailable: false,
};
const book3 = {
  title: '1984',
  author: 'George Orwell',
  pages: 328,
  isAvailable: true,
};

const library = processLibrary(book1, book2, book3);
console.log(library);
```

Ce qui devrait afficher un tableau d'objets `processedBook` avec des identifiants uniques ajoutés.

Cet exercice vous permettra de pratiquer l'utilisation du rest pattern pour accepter un nombre variable d'arguments, l'opérateur spread pour créer de nouveaux objets à partir d'objets existants, et la déstructuration pour extraire des propriétés d'objets dans des variables séparées.
