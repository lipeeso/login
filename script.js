function logar(){
    
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login =="admin" && senha =="admin"){
        alert("Login bem sucedido");
        location.href="home.html";
    }

    else{
        alert("usuário ou senha incorreta")
    }

}
