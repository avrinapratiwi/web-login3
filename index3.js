function pass(){
    var password=document.getElementById('password');
    var icon_password=document.getElementById('icon_password');
    if (password.type==='password') {
        password.type='text';
        icon_password.classList.remove('fa-eye-slash');
        icon_password.classList.add('fa-eye');
    } else {
        password.type='password';
        icon_password.classList.remove('fa-eye');
        icon_password.classList.add('fa-eye-slash');
    }
}