window.onload = function() {
    var imagem = document.getElementById('imagem');
    // Define a posição final da imagem
    var posicaoFinal = window.innerWidth - imagem.width;
    // Move a imagem para a posição final após um pequeno atraso
    setTimeout(function() {
        imagem.style.left = posicaoFinal + 'px';
    }, 100);
};