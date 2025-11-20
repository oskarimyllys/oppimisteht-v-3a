// Fetch-rakenne JSON-datan hakemiseen
fetch('https://jaakkola.github.io/json/digitekniikat.json')
    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    });

// Funktio JSON-datan käsittelyyn
function kerro(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";

    // Kuvauksen hakeminen
    teksti = teksti + "<p>" + data.kuvaus + "</p>";

    // Kuvan tuonti sivulle
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";

    // Opintojakson tiedot
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + "</h3>";
    teksti = teksti + "<p>Tunnus: " + data.opintojakso.tunnus + "</p>";
    teksti = teksti + "<p>Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

    // Sisalto-taulukon käsittely
    teksti = teksti + "<h3>Sisältö:</h3>";
    teksti = teksti + "<ul>";
    for (var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }
    teksti = teksti + "</ul>";

    // Tekniikat-objektitaulukon käsittely
    teksti = teksti + "<h3>Tekniikat:</h3>";
    for (var i = 0; i < data.tekniikat.length; i++) {
        teksti = teksti + "<p>" + data.tekniikat[i].aihe + ": ";
        teksti = teksti + "<a href='" + data.tekniikat[i].linkki + "' target='_blank'>";
        teksti = teksti + data.tekniikat[i].linkki + "</a></p>";
    }

    // Teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
}