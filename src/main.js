npmimport './styles/global.css';
import './styles/components.css';
import { games } from './data.js';
import gsap from 'gsap';

// Initialize HTML Structure
document.querySelector('#app').innerHTML = `
  <header class="app-header glass-panel">
    <div class="logo">EPILOGUE</div>
    <nav class="nav-container" id="navBar">
      <button class="nav-btn active" data-filter="all">전체 보기</button>
      <button class="nav-btn" data-filter="liked">내가 찜한 게임 💖</button>
      ${games.map(game => `<button class="nav-btn" data-filter="${game.id}">${game.title}</button>`).join('')}
      <input type="text" id="searchInput" class="search-input" placeholder="게임 검색..." />
      <button class="nav-btn" id="aboutBtn">About</button>
    </nav>
  </header>

  <main class="app-container" style="padding-top: 5rem;">
    <section class="hero-section">
      <h1>EPILOGUE</h1>
      <h4>단순한 플레이를 넘어, 깊은 여운과 여정을 선사한 이야기들</h4>
    </section>
    
    <section class="gallery-grid" id="gallery">
      <!-- Cards will be injected here -->
    </section>
    
    <!-- Game Modal -->
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-content glass-panel" id="modalContent">
        <!-- Content will be injected here -->
      </div>
    </div>

    <!-- About Modal -->
    <div class="modal-overlay" id="aboutOverlay">
      <div class="modal-content glass-panel" style="max-width: 600px;">
        <button class="modal-close" id="aboutClose" aria-label="닫기">&times;</button>
        <h2 style="margin-bottom: 1rem;">About EPILOGUE</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">
          이 프로젝트는 게임 엔딩 후 플레이어에게 남은 짙은 여운과 기억을 
          아름답게 아카이빙하는 디지털 전시 공간입니다.
        </p>
        <ul style="list-style: inside; color: var(--color-text-secondary); line-height: 1.8;">
          <li><strong>Tech Stack:</strong> HTML, CSS, JS, Vite, GSAP</li>
          <li><strong>Design System:</strong> Ethereal Memory (Glassmorphism)</li>
          <li><strong>Assets:</strong> 생성형 AI 이미지 활용</li>
        </ul>
      </div>
    </div>
  </main>
`;

// Local Storage Logic for Likes
let likedGames = JSON.parse(localStorage.getItem('epilogue_likes')) || [];

const toggleLike = (gameId) => {
  if (likedGames.includes(gameId)) {
    likedGames = likedGames.filter(id => id !== gameId);
  } else {
    likedGames.push(gameId);
  }
  localStorage.setItem('epilogue_likes', JSON.stringify(likedGames));
};

// Render Game Cards
const gallery = document.getElementById('gallery');
gallery.innerHTML = games.map(game => {
  const isLiked = likedGames.includes(game.id) ? 'liked' : '';
  return `
  <article class="game-card glass-panel" data-id="${game.id}" data-title="${game.title.toLowerCase()}" style="--hover-color: ${game.color};" aria-label="${game.title} 카드">
    <button class="like-btn ${isLiked}" aria-label="좋아요" data-game="${game.id}">♥</button>
    <div class="card-bg lazy-bg" data-bg="${game.image}"></div>
    <div class="card-content">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
    </div>
  </article>
  `;
}).join('');

// Like Button Event Binding
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // 모달 팝업 방지
    const gameId = e.target.dataset.game;
    toggleLike(gameId);
    e.target.classList.toggle('liked');
  });
});

// Lazy Loading with Intersection Observer
const lazyBgs = document.querySelectorAll('.lazy-bg');
const bgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target;
      bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
      observer.unobserve(bg);
    }
  });
}, { rootMargin: "100px 0px" });

lazyBgs.forEach(bg => bgObserver.observe(bg));

// Navigation Filter Logic & Search
const filterCards = () => {
  const activeFilter = document.querySelector('.nav-btn.active').dataset.filter;
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
  document.querySelectorAll('.game-card').forEach(card => {
    const gameId = card.dataset.id;
    const title = card.dataset.title;
    
    let matchFilter = false;
    if (activeFilter === 'all') matchFilter = true;
    else if (activeFilter === 'liked') matchFilter = likedGames.includes(gameId);
    else matchFilter = (gameId === activeFilter);
    
    let matchSearch = title.includes(searchQuery);
    
    if (matchFilter && matchSearch) {
      gsap.to(card, { display: 'flex', opacity: 1, scale: 1, duration: 0.4 });
    } else {
      gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => { card.style.display = 'none'; } });
    }
  });
};

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    filterCards();
  });
});

document.getElementById('searchInput').addEventListener('keyup', filterCards);

// Intro Animations
window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.from('.app-header', { y: -50, opacity: 0, duration: 0.6, ease: 'power2.out' })
    .to('.hero-section', { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.3')
    .to('.game-card', { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.1, 
      ease: 'back.out(1.7)' 
    }, '-=0.5');
});

// Modal Logic
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const aboutOverlay = document.getElementById('aboutOverlay');

document.getElementById('aboutBtn').addEventListener('click', () => {
  aboutOverlay.classList.add('active');
});
document.getElementById('aboutClose').addEventListener('click', () => {
  aboutOverlay.classList.remove('active');
});
aboutOverlay.addEventListener('click', (e) => {
  if (e.target === aboutOverlay) aboutOverlay.classList.remove('active');
});

document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    const gameId = card.dataset.id;
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    // Inject Data with Tabs
    modalContent.innerHTML = `
      <button class="modal-close" id="modalClose" aria-label="닫기">&times;</button>
      <div class="modal-header">
        <h2 style="color: ${game.color}; text-shadow: 0 0 20px ${game.color}80;">${game.title}</h2>
        <div class="modal-tabs">
          <button class="modal-tab-btn active" data-target="tab-story">Story</button>
          <button class="modal-tab-btn" data-target="tab-chars">Characters</button>
          <button class="modal-tab-btn" data-target="tab-gallery">Gallery</button>
          <button class="modal-tab-btn" data-target="tab-quote">Quote</button>
        </div>
      </div>
      <div class="modal-body-tabs" style="--hover-color: ${game.color};">
        <div class="modal-tab-content active" id="tab-story">
          <img src="${game.image}" alt="${game.title} 메인" class="modal-image" loading="lazy" />
          <p style="line-height:1.8; font-size:1.1rem;">${game.story}</p>
        </div>
        <div class="modal-tab-content" id="tab-chars">
          <ul>${game.characters.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
        <div class="modal-tab-content" id="tab-gallery">
          <div class="gallery-slide">
            ${game.gallery.map(img => `<img src="${img}" class="modal-image" loading="lazy" />`).join('')}
          </div>
        </div>
        <div class="modal-tab-content" id="tab-quote">
          <div class="quote">"${game.quote}"</div>
        </div>
      </div>
    `;
    
    modalOverlay.classList.add('active');
    
    // Tab Switching Logic
    const tabBtns = modalContent.querySelectorAll('.modal-tab-btn');
    const tabContents = modalContent.querySelectorAll('.modal-tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        modalContent.querySelector('#' + btn.dataset.target).classList.add('active');
      });
    });
    
    // Close Event
    document.getElementById('modalClose').addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});
