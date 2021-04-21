document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementById('nuthieuung');
    var chuyendong = document.getElementById('chuyendong');
    var trangthai = "lan1";
    nut.onclick = function(){
        if(trangthai == "lan1"){
            // console.log('click lan 1');
            chuyendong.classList.remove('hieuung');
            chuyendong.classList.add('chieuso1');
            trangthai = "lan2";
        }else{
            console.log('click lan 2');
            chuyendong.classList.remove('chieuso1');
            trangthai = "lan1";
        }
        
    }
}, false);