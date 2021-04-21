function add(){
    var khung = document.createElement('div');
    var title = document.createElement('div');

    var text = document.createTextNode('Khai TK');

    khung.setAttribute('class', 'khung');
    title.setAttribute('class', 'title');

    khung.appendChild(title);
    title.appendChild(text);

    document.getElementById('main').appendChild(khung);
}
setTimeout(add, 3000)
function remove(){
    console.log('click');
}


