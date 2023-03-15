/* const querystring = window.location.search;

const urlParams = new URLSearchParams(querystring);

const idUrlParam = urlParams.get("id")

const pokeList = document.getElementById("#details-list")

fetch(`https://pokeapi.co/api/v2/pokemon/${idUrlParam}`)
.then((response)=> {
    return response.json();
})
.then(function(data){
    const result = data.destination.find(item => item.idUrlParam==idUrlParam)
const details = result.details.map(item => `<li>${item}`)

pokeDetails = `
<h1>${result.title}</h1>
<p>${result.subtitle}</p>
<p>${result.text}</p>
<img src="${result.image}" alt="${result.text}">
<ul>
${details.join()}
</ul>
`

document.getElementById("#details-list").innerHTML = pokeDetails
}) */