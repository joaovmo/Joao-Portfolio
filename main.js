AOS.init();

document.getElementById("btn-link").addEventListener("click", function() {
  var link = document.getElementById("link");
  if (link.style.display === "none") {
    link.style.display = "block";
  } else {
    link.style.display = "none";
  }
  });

  // Seleciona o botão de toggle e o body
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Verifica se o modo escuro está ativado no localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
  }

  // Função para alternar o modo
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Alterna o ícone entre lua e sol
    if (isDarkMode) {
      darkModeToggle.innerHTML = '<i id="moon" class="bi bi-moon-fill fs-2"></i>'; // Ícone de sol para indicar modo claro
    } else {
      darkModeToggle.innerHTML = '<img id="sun" src="./images/sun (1).png" alt="">'; // Ícone de lua para indicar modo escuro
    }
  });