const params = new URLSearchParams(document.location.search);

const namePoke = params.get("name")

console.log(namePoke)

fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
.then((response) => response.json())
.then((pokemonData) => {
    document.querySelector("body").innerHTML += `
    <figure>
        ${pokemonData.forms[0].name}
    </figure>
    `
    ;
});