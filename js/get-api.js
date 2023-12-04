function get(url) {
    let rquest = new XMLHttpRequest()
    rquest.open("GET", url, false)
    rquest.send()
    return rquest.responseText
}

function getApiData(url, page, name, status) {
    let characterList
    if ((name != null) && (status != null)) {
        characterList = JSON.parse(get(url + `?page=${page}&name=${name}&status=${status}`))
    } else if ((name != null) && (status == null)) {
        characterList = JSON.parse(get(url + `?page=${page}&name=${name}`))
    } else if ((name == null) && (status != null)) {
        characterList = JSON.parse(get(url + `?page=${page}&status=${status}`))
    } else {
        characterList = JSON.parse(get(url + `?page= ${page}`))
    }

    localStorage.setItem("max-page", characterList.info.pages)
    characterList = characterList.results;
    return characterList;
}
