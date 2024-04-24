Voici la traduction en français :
Nous construisons une application de paris sur le football (soccer pour mes amis américains 😅) ! Supposons que nous obtenions des données d'un service Web concernant un certain match (ci-dessous). Dans ce défi, nous allons travailler avec les données. Voici donc vos tâches :
```js
// Données
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Exercices
/*
Nous construisons une application de paris sur le football (soccer pour mes amis américains 😅) ! Supposons que nous obtenions des données d'un service Web concernant un certain match (ci-dessous). Dans ce défi, nous allons travailler avec les données. Voici donc vos tâches :

1. Créez un tableau de joueurs pour chaque équipe (variables 'players1' et 'players2')
2. Le premier joueur de n'importe quel tableau de joueurs est le gardien de but et les autres sont des joueurs de champ. Pour le Bayern Munich (équipe 1), créez une variable ('gk') avec le nom du gardien de but, et un tableau ('fieldPlayers') avec les 10 autres joueurs de champ restants
3. Créez un tableau 'allPlayers' contenant tous les joueurs des deux équipes (22 joueurs)
4. Pendant le match, le Bayern Munich (équipe 1) a utilisé 3 joueurs remplaçants. Créez donc un nouveau tableau ('players1Final') contenant tous les joueurs d'origine de l'équipe 1 plus 'Thiago', 'Coutinho' et 'Perisic'
5. Basé sur l'objet game.odds, créez une variable pour chaque cote (appelées 'team1', 'draw' et 'team2')
6. Écrivez une fonction ('printGoals') qui reçoit un nombre arbitraire de noms de joueurs (PAS un tableau) et les imprime dans la console, ainsi que le nombre total de buts marqués (nombre de noms de joueurs passés)
7. L'équipe avec la cote la plus basse a plus de chances de gagner. Affichez dans la console quelle équipe est la plus susceptible de gagner, SANS utiliser une instruction if/else ou l'opérateur ternaire.
*/

// Vos solutions ici
```

N'hésitez pas à remplir ce code avec vos solutions pour chaque tâche de l'exercice. Je peux vous guider si vous en avez besoin.