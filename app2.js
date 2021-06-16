const search = document.getElementById('search');
const matchList = document.getElementById('autokomplitusa');
var id;

const searchPredmeti = async searchText => {
    const res = await fetch('http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
    const predmeti = await res.json();

    $("#search").autocomplete({
        source: predmeti,
        minLength: 2,
        select: function (event, ui) {
            event.preventDefault();
            $("#search").val(ui.item.label);
            id = ui.item.value;

            $.getJSON(`http://www.fulek.com/VUA/supit/GetKolegij/${id}`, function (data) {
                var kolegij = data.kolegij;
                var ects = data.ects;
                sumaEcts += parseInt(ects);
                console.log("suma", sumaEcts);
                var sati = data.sati;
                var predavanja = data.predavanja;
                var vjezbe = data.vjezbe;
                var tip = data.tip
                $('.table-striped').append('<tr><td>' + kolegij + '</td><td>' + ects + '</td><td>' + sati + '</td><td>' + predavanja + '</td><td>' + vjezbe + '</td><td>' + tip + '</td>><td>' + "<button class=gumbic2>Obriši</button>" + '</td></tr>');
                $("#ects-suma").text(sumaEcts);
            });
        }
    });

};
console.log(id);
var sumaEcts = 0;

$('.table-striped tbody').on('click', 'button', function () {
    $(this).closest('tr').remove()
});

search.addEventListener('input', () => searchPredmeti(search.value));