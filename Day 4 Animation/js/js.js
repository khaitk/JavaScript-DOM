document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementById('n1');
    var khoi = document.getElementsByClassName('card');
    // console.log(khoi[0]); 
    console.log(nut);
    nut.onclick = function(){
        console.log("Ban da click");
        // khoi[0].classList.add('diphai');
        khoi[0].classList.toggle('diphai');
    }
},false);