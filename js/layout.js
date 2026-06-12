const NAV_ITEMS = [
  { name: 'Home', href: 'index.html' },
  { name: 'Get Ready', href: 'success.html' },
];

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file === '' ? 'index.html' : file;
}

function renderHeader() {
  const current = getCurrentPage();
  const siteName = typeof SITE_NAME !== 'undefined' ? SITE_NAME : 'AI Education Program';
  const logoSrc = typeof LOGO_SRC !== 'undefined' ? LOGO_SRC : 'assets/logo.svg';
  const navLinks = NAV_ITEMS.map(
    (item) =>
      `<a href="${item.href}" class="${item.href === current ? 'active' : ''}">${item.name}</a>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <nav class="container" aria-label="Main navigation">
      <div class="nav-row">
        <a href="index.html" class="logo" aria-label="${siteName} home">
          <img src="${logoSrc}" alt="${siteName}" class="logo-img" width="160" height="48" />
        </a>
        <div class="nav-desktop">${navLinks}</div>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav">
          <span class="sr-only">Open menu</span>
          <svg class="icon-menu" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="icon-close" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" hidden>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div id="mobile-nav" class="nav-mobile">${navLinks}</div>
    </nav>
  `;
  document.body.insertBefore(header, document.body.firstChild);
}

function renderFooter() {
  const year = new Date().getFullYear();
  const siteName = typeof SITE_NAME !== 'undefined' ? SITE_NAME : 'AI Education Program';
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid footer-grid-simple">
        <div>
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:touradam3@gmail.com">touradam3@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} ${siteName}. All rights reserved.</p>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
