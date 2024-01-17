
var bntAcessar = document.querySelector("#acessar");
var bntInscrever = document.querySelector("#inscrever");

var body = document.querySelector("body");


bntAcessar.addEventListener("click", function () {
   body.className = "acessar-js"; 
});

bntInscrever.addEventListener("click", function () {
    body.className = "inscrever-js";
})