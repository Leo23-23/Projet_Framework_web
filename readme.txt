rapport : 


Notre projet est de creer un pokedex.Nous utilisons l' API POKEDEX fourni pour réaliser ce projet.
Nous commençons par installer sass/sass-loader avec les commande suivant dans un terminal, à la racine de notre projet.
npm install -g sass
npm install sass-loader
npm uninstall less-loader
npm i sass-loader@10.1.1 --save-dev

Cette 2 e version du projet permet de trier les pokemons depuis la barre de recherche. C' est à dire que l' utilisateur n' est pas forcé de connaitre le nom exacte du pokemon pour pouvoir le rechercher. C' est à dire que si l' utilisateur tape " pi " , la liste de pokemon va chancher et lui affiche tout les pokemon repertorié qui ont " pi" dans leur nom. Apes, k' utilisateur pourra choisir et afficher son pokemon
. 
Cela est possible car on filtre notre affichage de pokemeon selon la valeur que contien notre searchvalue , avant d' afficher la liste avec notre v for dns POkemonList.vue. Ainsi, on n' affiche plus la liste brute des pokemon, mais on affiche à partir d' une liste filtré qui depends de la valeur de searchvalue 

Amelioration envisagé : pouvoir filtrer les donné selon le pokemon.name de A-Z / de Z-A




























