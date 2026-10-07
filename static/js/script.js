/**
 * DevPulse - Main Client JavaScript
 * Interactive Theme Switching, Mobile Drawer, Dynamic Category Filtering, and Toast System
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initCategoryFilter();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Dark / Light Mode Switcher
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('site-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('site-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(newTheme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated');
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (iconSpan) {
    iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close on navigation click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Dynamic Category Filtering for Blog Cards
   -------------------------------------------------------------------------- */
function initCategoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');

  if (!filterBtns.length || !postCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-category')?.trim().toLowerCase();

      postCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category')?.trim().toLowerCase();
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? '✓' : type === 'warning' ? '⚠' : '✨';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger smooth enter animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove toast after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

/**
 * Enhanced showAlert function to preserve compatibility with existing template
 */
function showAlert() {
  showToast('Welcome to the Blog! Interactive action triggered successfully. 🚀', 'success');
}

/* --------------------------------------------------------------------------
   5. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.style.opacity = '1';
      backBtn.style.pointerEvents = 'auto';
    } else {
      backBtn.style.opacity = '0';
      backBtn.style.pointerEvents = 'none';
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
