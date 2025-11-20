
fetch('https://oskarimyllys.github.io/oppimisteht-v-3a/cafe.json')
    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        naytaCafe(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = 
            "<p>Tietoa ei pystytä hakemaan. Virhe: " + error + "</p>";
    });

function naytaCafe(data) {
    var teksti = "";
    
    // Yrityksen nimi
    teksti = "<h2>" + data.yritys + "</h2>";
    
    // Yhteystiedot
    teksti = teksti + "<h3>Yhteystiedot:</h3>";
    teksti = teksti + "<p><strong>Osoite:</strong> " + data.yhteystiedot.osoite + "</p>";
    teksti = teksti + "<p><strong>Puhelin:</strong> " + data.yhteystiedot.puhelin + "</p>";
    teksti = teksti + "<p><strong>Email:</strong> " + data.yhteystiedot.email + "</p>";
    
    // Tuotteet
    teksti = teksti + "<h3>Tuotteet:</h3>";
    teksti = teksti + "<ul>";
    for(var i = 0; i < data.tuotteet.length; i++) {
        teksti = teksti + "<li>" + data.tuotteet[i] + "</li>";
    }
    teksti = teksti + "</ul>";
    
    // Henkilökunta
    teksti = teksti + "<h3>Henkilökunta:</h3>";
    teksti = teksti + "<ul>";
    for(var i = 0; i < data.henkilokunta.length; i++) {
        teksti = teksti + "<li><strong>" + data.henkilokunta[i].nimi + "</strong> - " 
               + data.henkilokunta[i].titteli + "</li>";
    }
    teksti = teksti + "</ul>";
    
    // Tulostus
    document.getElementById("vastaus").innerHTML = teksti;
}