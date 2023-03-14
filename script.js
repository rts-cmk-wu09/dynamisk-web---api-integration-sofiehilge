
const destinationsContainer = document.querySelector("#card-list");
const destinationsWrapper = document.createElement("div");
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
fetch("https://swapi.dev/api/people/1/").then((response) => {
    return response.json();
}).then((data)=> {
    console.log(data)
})