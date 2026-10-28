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
