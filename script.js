document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginContainer = document.getElementById('login-container');

    if (username === 'overdrive' && password === 'overdrive') { // Substitua pelos valores desejados
        window.location.href = './pagina-secreta/index.html'; // Substitua pela URL desejada
    } else {
        loginContainer.classList.remove('shake'); // Remova a classe antes de adicioná-la novamente
        void loginContainer.offsetWidth; // Forçar reflow para reiniciar a animação
        loginContainer.classList.add('shake');
    }
});