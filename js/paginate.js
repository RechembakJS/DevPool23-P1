const pageNumbers = document.getElementById('page-numbers');
const urlApi = "https://rickandmortyapi.com/api/character/";
let page;
let maxPages = localStorage.getItem('max-page');

const nextPage = document.getElementById('next-pag').addEventListener('click', function () {
    maxPages = localStorage.getItem("max-page")
    page = localStorage.getItem("page");
    if (+page < +maxPages) {
        page++;
        characterName = searche.value;
        option = filterOption.value;
        localStorage.setItem("page", page)
        filterCharacter(characterName, option)
    }


})

const previusPage = document.getElementById('previus-page').addEventListener('click', function () {
    page = pageNumbers.textContent;

    if (+page > 1) {
        page--;
        characterName = searche.value;
        option = filterOption.value;
        localStorage.setItem("page", page)
        filterCharacter(characterName, option)
    }
})

const fistPage = document.getElementById('fisrt-page').addEventListener('click', function () {
    page = 1;
    characterName = searche.value;
    option = filterOption.value;
    localStorage.setItem("page", page)
    filterCharacter(characterName, option)
})

const lastPage = document.getElementById('last-page').addEventListener('click', function () {
    maxPages = localStorage.getItem("max-page")
    page = maxPages;
    characterName = searche.value;
    option = filterOption.value;
    localStorage.setItem("page", page)
    filterCharacter(characterName, option)
})