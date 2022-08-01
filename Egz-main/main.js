let melynas = document.getElementById("Pavadinimas");
let Ingredientai = document.getElementById("Ingredientai");
let Nurodymai = document.getElementById("Nurodymai");
console.log(melynas);
console.log(Ingredientai);
console.log(Nurodymai);


function mygtukoPaspaudimas() {
    alert("mygtukas buvo paspaustas");
    console.log(Nurodymai.value);
    let lettersCount = Nurodymai.value.indexOf("a")
    console.log(lettersCount);
}