
const destinationsContainer = document.querySelector("#card-list");
const destinationsWrapper = document.createElement("div");
const pokedex = document.getElementById("pokedex")

/* -- Der skal være en liste visning af pokemonerne
-- vi skal kunne gå ind på en pokemon og se detaljer
-- Dette gøres ved at oprette querystrings i URL'en.
-- Tidligere har vi arbejdet med en querystring, nu skal vi arbejde på måske at lave flere
-- ekstra, søge funktion - den er nem, hvis APIet viser endpoint så bruger man matchet med hvad en har skrevet i et Input felt.
-- sider. Vi vil have et offset, hvis vi starter fra side 10 så vil vi gerne have til nr 12.
-- ?limit=60&offset=70 - dette tilføjes til querystring og vil begrænse resultat listen, men kan også bruges til side visning
--limit viser antal resultater og offset fortæller hvormange den skal springe over før en at den viser resultaterne.
-- se på API dokumentationen.*/
/* nogle data resultater returnere nye api'er, test det gennem insomnia
 */

/* Husk at sætte en limit!! Det gøres med URL'en */

const limit = 3
const offset = 10

const fetchPokemon = () => {
    const promises = [];//tom array
    for (let i = 1; i < 20; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}?offset=${offset}`;
    promises.push(fetch(url).then((res) => res.json()));//for hver request skubbes den ind i listen af promises
    }
    Promise.all(promises).then(results => {//promises.all får alle de individuelle kald uploade parallelt, som trigger en .then
    
    //forEach iterere henover en samling af data. det er en løkke, den returnere ikke noget
    //map er en metode/funktion, den returnere data. HUSK at skriver return ellers kan map ikke returner.
    //hvis vi erstarter forEach med map, benytter vi os med en array metode. Map returnere en værdi. Hvor forEach gør noget hvergang der er et element
    //Map opretter et nyt array med den data, vi har bearbejdet og manipuleret.


    const pokemon = results.map((data) =>({//.map iterere igennem arrayet, og skaber et nyt array for hvert item
    name: data.name,
    id: data.id,
    image: data.sprites['front_default'],
    type: data.types.map((type) => type.type.name).join(' ,')//her ikke return fordi når det ligger på en linje, uden scope ligger return implicit i linjen.
        
    }))//denne returnere en ny array
       displayPokemon(pokemon);

    });
};

const displayPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map ( pokeman => `
    <li class="cards card">
        <img class="card-img" src ="${pokeman.image}"/>
        <a href="details.html?name=${pokeman.name}">${pokeman.name}<h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class="card-type">Type: ${pokeman.type}</p></a>
       </li> 
    `
  
       
        )

        .join('')
    pokedex.innerHTML = pokemonHTMLString;
}


/* obs ændre til name!!! ikke brug id. */ 

fetchPokemon();

/* --------virker ikke!!------------ */
/* 
button.innerHTML += `
<button id="forward">Forward</button>
<button id="backward">Back</button>
`
forwardBtn.addEventListener('click', function(){
    window.history.go(1)
})

backwardBtn.addEventListener('click', function(){
    window.history.go(1)
})
 */
/* type: data.types.map( type => type.type.name).join
        (', ') */

        /* <article>
        <h2>${data.name}</h2>
        <p>${data.id}</p>
        <img src="${data.sprites['front-_default']}
        ` */

/* const urlPage = 'https://pokeapi.co/api/v2/pokemon?';

const obj = {
    v1: "javascript",
};

const searchParams = new URLSearchParams(obj)
console.log(searchParams) */

