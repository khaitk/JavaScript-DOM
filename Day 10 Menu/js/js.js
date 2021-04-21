document.addEventListener("DOMContentLoaded", function(){
    var nut = document.querySelector('.nut'),
        menutrai = document.querySelector('.menutrai'),
        den = document.querySelector('.den'),
        noidungto = document.querySelector('.noidungto');

    // console.log(den);
     nut.onclick = function(){
         den.classList.add('len');
         noidungto.classList.add('dichphai');
     }
     den.onclick = function(){
        den.classList.remove('len');
        noidungto.classList.remove('dichphai');
     }
}, false);