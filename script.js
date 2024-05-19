function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha =="admin"){
        alert('Login efetuado com sucesso');
        location.href ="home.html" //vai para página após o acesso liberado 
}
    else{
        alert('login ou senha incorreto');
}

}

