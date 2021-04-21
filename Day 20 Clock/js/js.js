function time(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    var t = setTimeout(time, 500);

}
