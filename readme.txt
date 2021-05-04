rapport : 


Notre projet est de creer un pokedex.Nous utilisons l' API POKEDEX fourni pour réaliser ce projet.
Nous commençons par installer sass/sass-loader avec les commande suivant dans un terminal, à la racine de notre projet.
npm install -g sass
npm install sass-loader
npm uninstall less-loader
npm i sass-loader@10.1.1 --save-dev

Nous commençons avec le composant "PremierePage" : 
	_afficher une image
	_afficher un lien qui amene vers un autre composant (Pokemon.vue) à l' aide d' un router-link
	_ne pas oublier de mettre le router-view
	partie css, scoped, traitement des classes



Ensuite le composant : Pokemon.vue
	_un router-link qui nous permet de revenir a la page d' acceuil.
	_Impoter des composants : PokemonList / PokemonDetail
	_Creation de proprieté dans la data().
	_declarer des components, juste apres l' importation
	_creer des fonctions dans methodes : 	setPokemonUrl (url)=> place dans la proprieté pokemonUrl, l' url en parametre de la fonction  + showDetail = true
						closeDetail () => vide le contenu de la proprieté pokemonUrl + showDetail = false
	_Appel de plusieurs composants dans la templates, en leur passant des parametres au fonctions. A recuperer, en props dans les composant enfants.
1°	appel du composant PokemonList , en transmettant les proprieté : imageUrl + apiUrl + reference à une fonction également appelé dans le composant enfant.
2°	appel du composant PokemonDetail : en specifiant si la show detail == true, alors, on transmet : pokemonUrl + imageUrl




Ensuite le composant : PokemonList.vue
	_ mis en place d' un barre de recherche ( dans lequel on pourra effectuer des recherches en utilisant la directive v-on pour surveiller l' entree clavier.
	_declanche une methode lié a un v-on + v_click
	_utilisation de la directive v-model pour lié l' input à une proprieté 'searchvalue' qui est initialement une chaine de char vide
	_mis en place d' un boutton => + @click
	_recuperer les data avec une boucle v-for , donner la clé + declenchement d' une methode à la realisation de chaque boucle
	_directive v-bind pour lier une image, et inserer du code js
	_Retrouver et afficher les valeur depuis une API
	_import {mapState, mapActions , mapGetters } from 'vuex'
	_Recupereation des parametre des parents par un props
	_declaration d' une computed,
	_declaration de mounted => appeler les  actions depuis le store avec dispatch()
	Dans methods : 
	edit_lien_image (chaine) => 	retourne une chaine dans laquelle on utilise split pour decouper la chaine en specifaint '/' comme separateur, => dans un tableau le resultat
					pop()=>le but ici est de retourner le dernier element de notre tableau, celui ci correspond à l' id de noptre pokemon
					filter() => le but est de ne retenir que les element du tableau qui nous interesse.
	_setPokemonUrl1 (url) => passe le parametre url au composant parent, pour etre traiter, => ici cette fonction a pour but d' afficher les details d' un pokemon lorsqu' on clique dessus
	_setPokemonUrl => en cliquant sur entrée clavier, ou en cliquant sur la recherche, apres avoir ecris dans la barre de recherche,  cette fonction affiche egalement le details d' un pokemon.
	utilisation de this.$emit.



Ensuite le composant : PokemonDetail.vue
							dans data : 
	_show = false et un objet pokemon dans lequel on va recuperer des donnée depuis l' api
	_recuperation des props
	_dans methods : 
	_fetchData => recuperation des donnée d' une api : => utilisation du lien de base de l' api.
							=>	fetch( ces donnée ) => lister toutes les donné en 1 seul fichier json : aller jusqu au bout des donnée de l' api, et retourner un nouveau fichier.json
							=>	si reponse : mettre dans l' objet pokemon , la data + show = true
							=>	en cas d' erreur : console loguer et afficher error
	

	creation d' un created pour avancer l' exution d' une instrruction a la creation du composant. => appel de la fonction qui liste les données
							dans template : 
	
	afficher l' image du pokemon
	afficher le nom du pokemon 
	afficher l experience de base du pokemon
	afficher la Hauteur du pokemon
	afficher le Poids du pokemon
boucler sur pokemon.types :
	afficher le type de pokemon
boucler sur pokemon.abilities :
	 afficher les capacité de pokemon

Si pokemon n' est pas dans pokemon {} dans data, alors, afficher pokemon introuvable
	_afficher le boutton close et lié la methode closedetail, qui fait show = false
Si show != true, on afficher le cercle de recherche, avec class="fas fa-spinner fa-spin"



ROUTER : 
		
	importer des composants dans router / index.js
	declarer le tableau d' obket routes 
	definir : path ,  name , component
	ne pas oublier d' export default le router
	declarer history + routes dans const router = createRouter

	
STORE :
	
	import { createStore } from 'vuex'
	IMPORTER AXIOS
	declarer des proprieté dans states
	definir un getter => retourne toujour un resultat
	definir une mutation prend tjr state => mettre dans pokemons le parametre en payload
	definir une action : tjr commit en parametre => 
	axios.get => recuperer les donnés => traiter les succes, / erreur 
	appeler une mutation dans une actions
	act_next => recupere les nouvelles donné d' une url differente => pokemons.next
	act_prev => recupere les donnés d' une url differente => pokemons.previous


Amelioration envisagé : pouvoir filtrer les donné selon le pokemon.name de A-Z / de Z-A




























