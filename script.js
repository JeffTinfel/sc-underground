// Navegação entre as abas/páginas do site
function showPage(pageId) {
  // Oculta todas as seções
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  // Desmarca itens do menu
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  // Exibe a seção ativa
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Marca o link do menu correspondente
  const activeNav = Array.from(navLinks).find(link => link.getAttribute('onclick')?.includes(pageId));
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // Rola para o topo suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal / Lightbox para ampliação do cartaz
function openPosterModal(imageSrc) {
  const modal = document.getElementById('posterModal');
  const imgExpanded = document.getElementById('imgExpanded');
  
  modal.style.display = 'block';
  imgExpanded.src = imageSrc;
}

function closePosterModal(event) {
  // Fecha se clicar no botão X ou fora do conteúdo da imagem
  if (event.target.id === 'posterModal' || event.target.className === 'close-modal') {
    document.getElementById('posterModal').style.display = 'none';
  }
}

// Manipulação do cadastro dinâmico de novas bandas
function handleCadastrarBanda(event) {
  event.preventDefault(); // Evita recarregar a página

  const nome = document.getElementById('nomeBanda').value;
  const estilo = document.getElementById('estilo').value;
  const cidade = document.getElementById('cidade').value;
  const bio = document.getElementById('bio').value;
  const instagram = document.getElementById('linkInstagram').value || '#';
  const spotify = document.getElementById('linkSpotify').value || '#';

  // Cria o card dinâmico da nova banda
  const newBandCard = document.createElement('article');
  newBandCard.className = 'card band-card';
  newBandCard.innerHTML = `
    <div class="band-avatar alt-avatar">
      <i class="fa-solid fa-guitar"></i>
    </div>
    <h3>${nome}</h3>
    <span class="genre-tag">${estilo}</span>
    <p class="city"><i class="fa-solid fa-location-dot"></i> ${cidade}</p>
    <p class="bio">${bio}</p>
    <div class="social-links">
      <a href="${instagram}" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="${spotify}" target="_blank" title="Spotify"><i class="fa-brands fa-spotify"></i></a>
    </div>
  `;

  // Adiciona a nova banda ao container
  document.getElementById('bandsContainer').appendChild(newBandCard);

  // Limpa o formulário
  document.getElementById('bandForm').reset();
  alert(`Banda "${nome}" cadastrada com sucesso no SC Underground!`);

  // Troca para a aba de bandas para visualizar a inserção
  showPage('bandas');
}