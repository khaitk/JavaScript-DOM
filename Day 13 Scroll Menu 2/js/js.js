document.addEventListener("DOMContentLoaded", function(){
    var menudo = document.querySelector('.menu');
    var trangthaimenudo = "duoi300";
    var chungtoi = document.querySelector('.chungtoi');
    var vtkhoivang = chungtoi.offsetTop;
    var trangthaikhoivang = "benduoi";
    var chancuoi = vtkhoivang + 400;
    // console.log(chungtoi.offsetTop); tinh vi tri cua doi tuong
    window.addEventListener('scroll', function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 300){
            if(trangthaimenudo == 'duoi300'){
                trangthaimenudo = 'tren300';
                menudo.classList.add('menuden');
            }
        }else{
            trangthaimenudo = 'duoi300';
            menudo.classList.remove('menuden');
        }

        if((window.pageYOffset > vtkhoivang) && (window.pageYOffset < chancuoi)) {
            if(trangthaikhoivang == "benduoi"){
                trangthaikhoivang = "danghienthi";
                chungtoi.classList.add('vangdunglai');
            }
        }else if((window.pageYOffset < vtkhoivang) || (window.pageYOffset > chancuoi)){
            if(trangthaikhoivang == "danghienthi"){
                trangthaikhoivang = "benduoi";
                chungtoi.classList.remove('vangdunglai')
            }
        }
    }); 
}, false);