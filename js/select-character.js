function clickDivs() {
    var divs = document.querySelectorAll("div");
    divs.forEach(function (clicDiv) {
        clicDiv.addEventListener("click", function () {
            var targetId = clicDiv.getAttribute("data-target");
            var pElement = document.getElementById(targetId);
            var activePage = document.getElementById('page-numbers').textContent;

            localStorage.setItem("page", activePage)
            pElement = pElement.textContent;
            
                localStorage.setItem("id", pElement);
                localStorage.setItem('option', option)
                localStorage.setItem('name', characterName);
                
            window.location.href = 'character-details.html';
            console.log(pElement);
        });
    });
}
