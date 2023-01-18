function laskePalkka() {
    let palkka = document.palkkaLaskin.palkka.value;

    let veroprosentti = document.palkkaLaskin.veroprosentti.value;
    veroprosentti = palkka * veroprosentti / 100

    palkka = palkka - veroprosentti;
    document.getElementById("veroJalkeen").innerHTML = "Verojen jälkeen " + palkka.toFixed(2) + "€";
    
    let tyottomyysvakuutus = palkka * 0.019;
    palkka -= tyottomyysvakuutus;
    document.getElementById("tyottomyysvakuutuksenJalkeen").innerHTML = "Työttömyysvakuutusmaksun jälkeen " + palkka.toFixed(2) + "€";

    let tyoelakevakuutus = palkka * 0.0635;
    palkka -= tyoelakevakuutus;
    document.getElementById("tyoelakevakuutusmaksunJalkeen").innerHTML = "Työeläkevakuutusmaksun jälkeen " + palkka.toFixed(2) + "€";

    document.getElementById("palkkaYhteensa").innerHTML = "Lopullinen palkka on " + palkka.toFixed(2) + "€";
}