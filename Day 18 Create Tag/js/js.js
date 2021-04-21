function add(){
    var node = document.createElement('div');
    var textnode = document.createTextNode('Khai TK');
    node.setAttribute('id', 'name');
    node.appendChild(textnode);
    document.getElementById('khai').appendChild(node);
}
function remove(){
    document.getElementById('name').remove();
}