function pass(){
    var password=document.getElementById('password');
    var icon=document.getElementById('icon-password');
    if (password.type==='password') {
        password.type='text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        password.type='password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}