function calcularMedia() {
    imedia.innerHTML = (Number(in1.value) + Number(in2.value) + Number(in3.value)) / 3
}

// Função para determinar se o aluno foi aprovado
function verificarAprovacao() {
    if (imedia.innerHTML >= 6 ) { 
        isitu.value = "Aprovado";
    } else {
        isitu.value = "Reprovado";
}

}