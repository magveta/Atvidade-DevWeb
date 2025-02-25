let contas = [];

function criarconta(event) {
    event.preventDefault();
    var nomerecebido = document.getElementById("inputNome").value;
    var loginrecebido = document.getElementById("inputLogin").value;
    var emailrecebido = document.getElementById("inputEmail").value;
    var senharecebida = document.getElementById("inputSenha").value;

    let contas = JSON.parse(localStorage.getItem('contas')) || [];
    contas.push({nome: nomerecebido, login: loginrecebido, email: emailrecebido, senha: senharecebida});
    localStorage.setItem('contas', JSON.stringify(contas));
    
    console.log("Conta criada:", { nomerecebido, loginrecebido, emailrecebido, senharecebida });
    alert("Sua conta foi criada!");
}

function logar(event) {
    event.preventDefault();
    let loginexiste = false;
    var nomerecebido = document.getElementById("inputNome").value;
    var loginrecebido = document.getElementById("inputLogin").value;
    var emailrecebido = document.getElementById("inputEmail").value;
    var senharecebida = document.getElementById("inputSenha").value;

    contasstring = localStorage.getItem("contas");
    const contasarray = JSON.parse(contasstring);

    for (let i = 0; i < contasarray.length; i++) {
        if (contasarray[i].login === loginrecebido && contasarray[i].senha === senharecebida && nomerecebido === contasarray[i].nome && emailrecebido === contasarray[i].email) {
            loginexiste = true;
            break; 
        }
    }

    if (loginexiste) {
        alert("Você logou com sucesso!");
    } else {
        alert("Algum dos campos está incorreto ou essa conta é inexistente. Tente novamente.");
    }
}

function registrar_teste() {
    let contas = JSON.parse(localStorage.getItem('contas')) || [];
    contas.push({nome: "Teste", login: "teste", email: "teste@email.com", senha: "senhateste"});
    localStorage.setItem('contas', JSON.stringify(contas));
}