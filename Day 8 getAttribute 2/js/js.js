document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName('dehienthi');
    for (let index = 0; index < nut.length; index++) {
        nut[index].onclick = function(){
            for (let index = 0; index < nut.length; index++) {
                nut[index].classList.remove('trang');
            }
            this.classList.toggle('trang');

            var ndhienra = this.getAttribute('data-hienlen');
            var phantuhienra = document.getElementById(ndhienra);
            for (let index = 0; index < nd.length; index++) {
                nd[index].classList.remove('hienthi');
            }
            phantuhienra.classList.toggle('hienthi');
        }
    }
}, false);