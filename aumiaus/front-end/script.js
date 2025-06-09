// Seleciona o formulário pelo ID 'formContato' e adiciona um evento para o envio
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário

    // Pega os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Usa Fetch API para enviar os dados para a URL fictícia com método POST
    fetch('http://localhost:3000/api/contato', {
        method: 'POST', // Define o método HTTP como POST
        headers: {
            'Content-Type': 'application/json' // Define que o corpo da requisição é JSON
        },
        body: JSON.stringify({ // Transforma o objeto com os dados em uma string JSON
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        })
    })
    .then(response => {
        // Verifica se a resposta foi bem sucedida
        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }
        return response.json(); // Retorna o corpo da resposta como JSON (simulado)
    })
    .then(data => {
        // Mostra alerta de sucesso e limpa o formulário
        alert('Mensagem enviada com sucesso!');
        document.getElementById('formContato').reset();
        console.log('Resposta da API simulada:', data);
    })
    .catch(error => {
        // Caso ocorra erro na requisição, exibe mensagem de erro
        console.error('Erro:', error);
        alert('Falha ao enviar a mensagem. Tente novamente.');
    });
});