var xanh = document.getElementById('xanh');
var den = document.getElementById('den');
var do1 = document.getElementById('do');

var main = document.getElementById('main');

xanh.onclick = function(){
    main.style.backgroundColor = 'blue';
    main.style.color = 'white';
}

den.onclick = function(){
    main.style.backgroundColor = 'black';
    main.style.color = 'white';
}

do1.onclick = function(){
    main.style.backgroundColor = 'red';
    main.style.color = 'white';
}