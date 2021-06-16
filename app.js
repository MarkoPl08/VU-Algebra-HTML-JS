document.getElementById("buttonnav").addEventListener("click",
    function () {
        document.querySelector(".bg-modal").style.display = "flex";
    });

document.querySelector(".odustani").addEventListener("click",
    function () {
        document.querySelector(".bg-modal").style.display = "none";
    });




new TypeIt('.firstAnim')
    .options([lifeLike = true])
    .type('Budi izvrstan u onom što vidiš!')
    .pause(900)
    .delete(6)
    .type('voliš.')
    .pause(900)
    .break()
    .type('<p id="zaiskri">Zaiskri.</p>')
    .options([cursor = false])
    .go();



