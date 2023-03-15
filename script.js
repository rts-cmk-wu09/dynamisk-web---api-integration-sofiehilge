
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
const fetchPokemon = () => {
    const promises = [];//tom array
    for (let i = 1; i < 10; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));//for hver request skubbes den ind i listen af promises
    }
    Promise.all(promises).then(results => {//promises.all får alle de individuelle kald uploade parallelt, som trigger en .then
    
    const pokemon = results.map((data) =>({//.map iterere igennem arrayet, og skaber et nyt array for hvert item
    name: data.name,
    id: data.id,
    image: data.sprites['front_default'],
    type: data.types.map((type) => type.type.name).join(' ,')
        
    }))//denne returnere en ny array
       displayPokemon(pokemon);

    });
};

const displayPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map ( pokeman => `
    <li class="cards card">
        <img class="card-img" src ="${pokeman.image}"/>
        <a href="details.html?id=${pokeman.id}<h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class="card-type">Type: ${pokeman.type}</p></a>
       </li> 
    `
  
       
        )

        .join('')
    pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();

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