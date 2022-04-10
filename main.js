/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

const ovoce = document.querySelectorAll('.obrazek-ovoce');
let celkemKalorii = 0;

ovoce.forEach((jednoOvoce) => {
    jednoOvoce.addEventListener('click', zobrazKalorie);
})

function zobrazKalorie(event) {
    let jednoOvoce = event.target;
    document.getElementById('odpoved').innerHTML ="Snědla jsi " + jednoOvoce.dataset.kalorie + "kcal/100g.";
    celkemKalorii = celkemKalorii + parseInt(jednoOvoce.dataset.kalorie);
    document.getElementById('vysledek').innerHTML ="Tohle je snědeno ( celkem " + celkemKalorii + "kalorii.)";
    let snedeneOvoce = document.getElementById('snedeno');
    snedeneOvoce.appendChild(jednoOvoce);
    jednoOvoce.removeEventListener('click',zobrazKalorie);
}
