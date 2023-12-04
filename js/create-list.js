
const element = document.getElementById('character-list');
function createList(charcaterArray) {
    element.innerHTML = '';
    for (let i = 0; i < charcaterArray.length; i++) {
        element.innerHTML += `
        <div id="character" data-target="id${i + 1}">
            <p id="id${i + 1}" hidden="true">${charcaterArray[i].id}</p>
            <p id="character-name">${charcaterArray[i].name}</p>
            <img id="character-image" src="${charcaterArray[i].image}">
            <p>Status:</p>
            <p>${charcaterArray[i].status}</p>
        </div>
        `
    }

    clickDivs();
}
