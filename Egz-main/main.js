window.onload = function() {
    let mygtukas = document.getElementById("skaiciavimai");
    let melynas = document.getElementById("Pavadinimas");
    let Ingredientai = document.getElementById("Ingredientai");
    let Nurodymai = document.getElementById("Nurodymai");
    let zalias = document.getElementById("input.Pavadinimas");
    console.log(melynas);
    console.log(Ingredientai);
    console.log(Nurodymai);
    console.log(mygtukas);
    
    mygtukas.onclick = function() {
        alert("mygtukas buvo paspaustas");
        console.log(Nurodymai.value);
        let lettersCount = Nurodymai.value.indexOf("a")
        alert("yra isviso a raidziu: " + (lettersCount + 1));
        tuscias(melynas, Ingredientai, Nurodymai);
        pakeiskSpalva(zalias);
    }

}
function tuscias(melynas, Ingredientai, Nurodymai){
    tekstas1 = melynas.value;
    tekstas2 = Ingredientai.value;
    tekstas3 = Nurodymai.value;
    if (tekstas1  === 0 || tekstas1.length === 0 || tekstas2  === 0 || tekstas2.length === 0 || tekstas3  === 0 || tekstas3.length === 0){
        alert("tuscia");
    } else{
    alert("yra");
    }
}
function pakeiskSpalva(zalias){
    document.body.style.color = 'green';
}