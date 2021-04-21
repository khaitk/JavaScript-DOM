document.addEventListener("DOMContentLoaded", function(){
    // bat su kien khi nguoi dung scroll
    var trangthai = 'duoi300';
    window.addEventListener('scroll', function(){
        // console.log('scroll');
        //vi tri khi nguoi dung cuon chuot
        // console.log(window.pageYOffset);
        // if(window.pageYOffset > 300){
        //     console.log('dang o menu');
        // }
        if(window.pageYOffset > 300){
            if(trangthai =='duoi300'){
                console.log('dang o menu');
                trangthai = 'tren300';
            }
            
        }

    })
}, false);