function submitForm() {
    var name = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var phone = document.getElementById('exampleInputPhone').value;
    var password = document.getElementById('exampleInputPassword1').value;

    var user = {
        name:name,
        email:email,
        phone:phone,
        password:password
    };
    var userdata = JSON.stringify(user);
    localStorage.setItem(name,userdata);
}
