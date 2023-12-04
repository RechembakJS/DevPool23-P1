let btnFilter = document.getElementById('apl-filter');
let filterOption = document.getElementById('character-status');
let maxpage = document.getElementById('max-page');
let maxPgNumber;
let searche = document.getElementById('name-searche');
let characterName = "";
let option;
var pageSelected = "1";
let characterTotalList;

try {
    maxPgNumber = localStorage.getItem("max-page");
    option = localStorage.getItem("option");
    characterName = localStorage.getItem("name");
    searche.value = characterName;

    document.getElementById('page-numbers').textContent = pageSelected;
    filterCharacter(characterName, option)
}catch{
    localStorage.setItem("page", "1")
    localStorage.setItem("name", "")
    localStorage.setItem("option", "")
}

switch (option) {
    case "":
        option = filterOption.value;
        break;
    case "":
        filterOption.options[0].selected = "true";
        break;
    case "Alive":
        filterOption.options[1].selected = "true";
        break;
    case "Dead":
        filterOption.options[2].selected = "true";
        break;
    case "unknown":
        filterOption.options[3].selected = "true";
        break;
}

clickDivs();


btnFilter.addEventListener('click', function () {
    characterName = searche.value;
    option = filterOption.value;
    filterCharacter(characterName, option)
})