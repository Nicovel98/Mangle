let btnText = document.getElementById("btn_more");
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");

btnText.addEventListener('click', function() {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ver más &raquo;";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ver menos &raquo;";
        moreText.style.display = "inline";
    }
});