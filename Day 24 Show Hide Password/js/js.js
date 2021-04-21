var trangthai = true
function display(){
    if(trangthai == true){
        document.getElementById('password').setAttribute('type', 'text')
        trangthai = false
    }else{
        document.getElementById('password').setAttribute('type', 'password')
        trangthai = true
    }
}