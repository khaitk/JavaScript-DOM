document.addEventListener("DOMContentLoaded", function(){
    
    var menu = document.querySelector('.menu');
    var trangthai = 'menutop';
    var khoangcach = menu.offsetTop;

    //xu ly phan load
    var card = document.querySelectorAll('.card');

    window.addEventListener('scroll', function(){
        if(window.pageYOffset > khoangcach){
            if(trangthai == 'menutop'){
                trangthai = 'menubottom';
                menu.classList.add('menudoimau');
            }
        }else if(window.pageYOffset < khoangcach){
            if(trangthai == 'menubottom'){
                trangthai = 'menutop';
                menu.classList.remove('menudoimau');
            }
        }
        for (let index = 0; index < card.length; index++) {
            if(window.pageYOffset > card[index].offsetTop-200){
                card[index].classList.add('chuyendong');
            }
        }
    })
}, false)