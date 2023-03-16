const params = new URLSearchParams(document.location.search);

const namePoke = params.get("name")

console.log(namePoke)

fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
.then((response) => response.json())
.then((pokemonData) => {
    document.querySelector("body").innerHTML += `
    <figure class="cards card details">
    <div class="details-data">
        <h2 class="card-title">${pokemonData.forms[0].name}
        <img class="card-img details-img" src ="${pokemonData.sprites.front_default}"/>
        </div>
    </figure>
    `
    ;
});