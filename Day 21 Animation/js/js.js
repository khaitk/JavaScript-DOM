document.addEventListener("DOMContentLoaded", function(){
    var nut1 = document.getElementById('nut1');
    var card = document.querySelector('.card');

    var trangthai = 'chuyendong1';
    nut1.onclick = function(){
        if(trangthai == 'chuyendong1'){
            card.classList.add('animate');
            trangthai = 'chuyendong2';
        }else{
            card.classList.remove('animate');
            trangthai = 'chuyendong1';
        }
    }
}, false)