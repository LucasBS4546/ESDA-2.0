var usuarioLogado; // 0-ELLIJAH  1-ARTORIAS  2-MORGANA  3-BRUNO

function login() {

    var entradaUsuario = document.getElementById('entradaUsuario');
    var entradaSenha = document.getElementById('entradaSenha');

    //CREDENCIAIS CADASTRADOS
    switch (entradaUsuario.value && entradaSenha.value) {

        //ELLIJAH
        case 'Tilápia_Adorável' && 'lebedinoyeozero':
            usuarioLogado = 0;
            window.location.href = "pag0.html";
            break;
        
        //ARTORIAS
        case 'doutorSabidoTV' && 'coxinha':
            usuarioLogado = 1;
            window.location.href = "pag0.html";
            break;
    
        //MORGANA
        case 'M&Ms' && 'senha123':
            usuarioLogado = 2;
            window.location.href = "pag0.html";
            break;

        //BRUNO
        case 'bruninhogouveia' && 'medicinaporamor':
            usuarioLogado = 3;
            window.location.href = "pag0.html";
            break;
            
        //INVALIDO
        default:
            alert("CREDENCIAIS INVÁLIDOS");
            break;

    }
    
}

function carregar() {
    setTimeout(carregarCompleto, 1000);
}

function carregarCompleto() {
    window.location.href = "pag1.html";
}