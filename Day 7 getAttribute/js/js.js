document.addEventListener("DOMContentLoaded", function(){
    // var nut = document.getElementById('n1');
    var nut = document.getElementsByClassName('nuttongquat');
    // console.log(nut);
    // cach lam tong quat
    for (var index = 0; index < nut.length; index++) {
        nut[index].onclick = function(){
            var name = this.getAttribute('data-name');
            console.log(name);
        }
    }
    // nut.onclick = function(){
    //     // console.log('ban da click');
    //     var name = nut.getAttribute('data-name');
    //     console.log(name);
    // }
}, false);