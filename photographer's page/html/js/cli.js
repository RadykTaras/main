
window.addEventListener('DOMContentLoaded', function(){

    let modal = document.querySelector('#myModal'),
        modalImg = document.querySelector("#img");
        figur = document.querySelector('figure img');

    $('figure img').on('click', function(){
        modalImg.src = this.src;
        modal.style.display = "block";
    });

    let span = document.querySelectorAll(".close")[0];
    span.onclick = function(){
        modal.style.display = "none";
    }

})