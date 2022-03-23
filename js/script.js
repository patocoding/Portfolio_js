let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    document.querySelector('.container').classList.toggle('show-menu');

});

function changeAllColors() {
    const pCounter = document.querySelectorAll("p");
    for (let i = 0; i < pCounter.length; i++) {
        pCounter[i].style.color = "red";
    }
}
