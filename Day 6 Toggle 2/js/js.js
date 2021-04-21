document.addEventListener("DOMContentLoaded", function(){
    var tamgiac = document.getElementsByClassName('tamgiac');
    // console.log(tamgiac);
    var tamgiac = tamgiac[0];
    var danhsach = document.getElementsByClassName('danhsach');
    var danhsach = danhsach[0];

    //su dung su kien onlick va toggle class cho tam giac
    tamgiac.onclick = function(){
        // console.log('ban vua click');
        // this.style.color = 'white';
        this.classList.toggle('tamgiactrang');
        danhsach.classList.toggle('ra');
    }

},false);