const NAV_ITEMS = [
  { name: 'Home', href: 'index.html' },
  { name: 'About', href: 'about.html' },
  { name: 'Program', href: 'program.html' },
  { name: 'Schedule', href: 'schedule.html' },
  { name: 'Contact', href: 'contact.html' },
];

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file === '' ? 'index.html' : file;
}

function renderHeader() {
  const current = getCurrentPage();
  const navLinks = NAV_ITEMS.map(
    (item) =>
      `<a href="${item.href}" class="${item.href === current ? 'active' : ''}">${item.name}</a>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <nav class="container" aria-label="Main navigation">
      <div class="nav-row">
        <a href="index.html" class="logo">AI Builder Bootcamp</a>
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
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>AI Builder Bootcamp</h3>
          <p>Build, deploy, and manage real websites, Chrome extensions, and AI-powered web apps — even without prior coding experience.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="program.html">Program</a></li>
            <li><a href="schedule.html">Schedule</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:touradam3@gmail.com">touradam3@gmail.com</a></p>
          <p>Learn how to use AI tools like Cursor to build real projects that empower you.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} AI Builder Bootcamp. All rights reserved.</p>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
