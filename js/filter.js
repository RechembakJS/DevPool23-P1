function filterCharacter(characterName, option) {
    let page = localStorage.getItem("page");
    document.getElementById('page-numbers').textContent = page;
    localStorage.setItem("name", characterName)
    localStorage.setItem("option", option)
    let filteredCharcater = getApiData("https://rickandmortyapi.com/api/character/", page, characterName, option)
    createList(filteredCharcater);
}