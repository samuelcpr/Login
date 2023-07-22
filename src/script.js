const dadosLogin = []; // Array para armazenar os dados do formulário de login

// Função para adicionar os dados do formulário de login no array
function adicionarDadosLogin(email, senha) {
  dadosLogin.push({ email, senha });
}

// Função para enviar os dados do formulário de login e evitar o redirecionamento
function fazerLogin(event) {
  event.preventDefault(); // Evita o redirecionamento após o envio do formulário
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  adicionarDadosLogin(email, senha);
  document.getElementById("formulario").reset(); // Limpa o formulário após o envio
}

// Evento de envio do formulário de login
document.getElementById("formulario").addEventListener("submit", fazerLogin);

console.log(dadosLogin)