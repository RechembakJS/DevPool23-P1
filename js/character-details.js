var id = localStorage.getItem("id");
console.log(id);
let character

function get(url) {
    let rquest = new XMLHttpRequest()
    rquest.open("GET", url, false)
    rquest.send()
    return rquest.responseText
}

function getApiData() {
    character = JSON.parse(get("https://rickandmortyapi.com/api/character/" + id));
}

getApiData();
element = document.getElementById('character-details').innerHTML += `
    <div id="character">
        <div id="div-image">
            <img id="character-image" src="${character.image}">
        </div>
        <div id="div-details">
            <p id="ch-text">ID: ${character.id}</p>
            <p id="ch-text">Name: ${character.name}</p>
            <p id="ch-text">Status: ${character.status}</p>
            <p id="ch-text">Species: ${character.species}</p>
            <p id="ch-text">Type: ${character.type}</p>
            <p id="ch-text">Gender: ${character.gender}</p>
            <p id="ch-text">Location: ${character.location.name}</p>
        </div>
    </div>
    <div id="btn">
        <button id="bkc-btn">Voltar</button>
    </div>
    `
var bkcBtn = document.getElementById('bkc-btn');
bkcBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
});