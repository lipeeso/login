function logar(){
    
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login =="admin" && senha =="admin"){ // login e senha 
        alert("Login bem sucedido");
        location.href="home.html"; // após efetuar o login entra na próxima página 
    }

    else{
        alert("usuário ou senha incorreta") // se não usuário incorreto
    }

}



