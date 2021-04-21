$(document).ready(function()
{
    var trangthai = true;
    var email = $("#email").val();
    var password = $("#password").val();
    var confirm_pass = $("#confirm_password").val();
    $("#btn").click(function()
    {
        
        if(email == "")
        {
            alert("Email đang rỗng");
            return false;
        }
        else if(password == "" || confirm_pass == "")
        {
            alert("Password đang rỗng");
            return false;
        }
        else if(password != confirm_pass)
        {
            alert("Password không trùng")
            return false;
        }
        else
        {
            alert("Email : " + email + "\nPassword : " + password)
        }
    })

    $("#display").click(function()
    {
        if(trangthai == true)
        {
            $("#password").attr('type', 'text');
            $("#confirm_password").attr('type', 'text');
            trangthai = false;
        }
        else
        {
            $("#password").attr('type', 'password');
            $("#confirm_password").attr('type', 'password');
            trangthai = true;
        }
         
    })
})

// var trangthai = true;
// function display()
// {
//     if(trangthai == true)
//     {
//         document.getElementById("password").setAttribute('type', 'text');
//         document.getElementById("confirm_password").setAttribute('type', 'text');
//         trangthai = false;
//     }
//     else
//     {
//         document.getElementById("password").setAttribute('type', 'password');
//         document.getElementById("confirm_password").setAttribute('type', 'password');
//         trangthai = true;
//     }
// }