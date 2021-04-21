document.addEventListener("DOMContentLoaded", function(){
    var trangthai = 'duoi200';
    //lay ve menu 
    var doituongmenu = document.querySelector('.menu');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 200){
            if(trangthai == 'duoi200'){
                // console.log('tren 200');
                trangthai = 'tren200';
                doituongmenu.classList.add('nholai');
            }
        }else{
            doituongmenu.classList.remove('nholai');
            trangthai = 'duoi200';
        }
    })
}, false);
//62