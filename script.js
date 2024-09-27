window.onscroll = function() {
    const popup = document.getElementById('popup');
    
    // Verifica a posição do scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        popup.classList.add('show'); // Adiciona a classe para mostrar o pop-up
    } else {
        popup.classList.remove('show'); // Remove a classe para ocultar
    }
};