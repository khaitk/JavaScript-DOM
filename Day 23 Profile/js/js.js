var myname = document.getElementById('name');
var birthday = document.getElementById('birthday');
var email = document.getElementById('email');
var address = document.getElementById('address');
var phone = document.getElementById('phone');

myname.onmouseover = function(){
    var name = document.createElement('div');
    name.setAttribute('id', 'ten');
    var text = document.createTextNode('Khai TK');
    name.appendChild(text);
    document.getElementById('name1').appendChild(name);
}

myname.onmouseout = function(){
    document.getElementById('ten').remove();
}


birthday.onmouseover = function(){
    var name = document.createElement('div');
    name.setAttribute('id', 'sinhnhat');
    var text = document.createTextNode('12.11.1999');
    name.appendChild(text);
    document.getElementById('birthday1').appendChild(name);
}

birthday.onmouseout = function(){
    document.getElementById('sinhnhat').remove();
}


email.onmouseover = function(){
    var name = document.createElement('div');
    name.setAttribute('id', 'gmail');
    var text = document.createTextNode('khaitkdev@gmail.com');
    name.appendChild(text);
    document.getElementById('email1').appendChild(name);
}

email.onmouseout = function(){
    document.getElementById('gmail').remove();
}

//da xog

address.onmouseover = function(){
    var name = document.createElement('div');
    name.setAttribute('id', 'diachi');
    var text = document.createTextNode('Hai Lang - Quang Tri');
    name.appendChild(text);
    document.getElementById('address1').appendChild(name);
}

address.onmouseout = function(){
    document.getElementById('diachi').remove();
}

phone.onmouseover = function(){
    var name = document.createElement('div');
    name.setAttribute('id', 'sdt');
    var text = document.createTextNode('034 7184 502');
    name.appendChild(text);
    document.getElementById('phone1').appendChild(name);
}

phone.onmouseout = function(){
    document.getElementById('sdt').remove();
}