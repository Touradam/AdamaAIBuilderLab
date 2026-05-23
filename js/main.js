function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  const iconMenu = toggle.querySelector('.icon-menu');
  const iconClose = toggle.querySelector('.icon-close');

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (iconMenu) iconMenu.hidden = isOpen;
    if (iconClose) iconClose.hidden = !isOpen;
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (iconMenu) iconMenu.hidden = false;
      if (iconClose) iconClose.hidden = true;
    });
  });
}

function initDayCards() {
  document.querySelectorAll('.day-card-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.day-card');
      if (card) card.classList.toggle('expanded');
    });
  });
}

function renderProgramCurriculum() {
  const container = document.getElementById('program-curriculum');
  if (!container || typeof programData === 'undefined') return;

  container.innerHTML = programData
    .map(
      (week) => `
    <section class="week-section">
      <div class="week-header">
        <h2>${week.title}</h2>
        <p>${week.subtitle}</p>
      </div>
      <div class="day-cards">
        ${week.days
          .map(
            (day) => `
          <article class="day-card">
            <button type="button" class="day-card-toggle" aria-expanded="false">
              <div>
                <h3>${day.title}</h3>
                <p>${day.subtitle}</p>
              </div>
              <svg class="day-card-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="day-card-topics">
              <h4>Topics Covered:</h4>
              <ul>
                ${day.topics.map((topic) => `<li><span class="topic-dot"></span><span>${topic}</span></li>`).join('')}
              </ul>
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    </section>
  `
    )
    .join('');

  initDayCards();
}

function getSessionNumber(weekIndex, dayIndex) {
  if (typeof programData === 'undefined') return dayIndex + 1;
  let session = dayIndex + 1;
  for (let i = 0; i < weekIndex; i += 1) {
    session += programData[i].days.length;
  }
  return session;
}

function renderScheduleTimeline() {
  const container = document.getElementById('schedule-timeline');
  if (!container || typeof programData === 'undefined') return;

  container.innerHTML = programData
    .map(
      (week, weekIndex) => `
    <div class="timeline-week">
      <div class="timeline-week-header">
        <h3>${week.title}</h3>
        <p>${week.subtitle}</p>
      </div>
      <div class="timeline-days">
        ${week.days
          .map(
            (day, dayIndex) => `
          <div class="timeline-day">
            <div class="timeline-day-inner">
              <div class="day-badge">Session ${getSessionNumber(weekIndex, dayIndex)}</div>
              <div>
                <h4>${day.title}</h4>
                <p>${day.subtitle}</p>
                <div class="timeline-meta">
                  <span>2–3 Hours</span>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');
}

function renderFaqs() {
  const container = document.getElementById('faq-list');
  if (!container || typeof faqs === 'undefined') return;

  container.innerHTML = faqs
    .map(
      (faq) => `
    <article class="faq-item">
      <h3>${faq.question}</h3>
      <p>${faq.answer}</p>
    </article>
  `
    )
    .join('');
}

function renderHomeAudience() {
  const container = document.getElementById('home-audience');
  if (!container || typeof targetAudience === 'undefined') return;

  container.innerHTML = targetAudience
    .map(
      (item) => `
    <div class="card-bordered">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `
    )
    .join('');
}

function renderHomePhilosophy() {
  const container = document.getElementById('home-philosophy');
  if (!container || typeof corePhilosophy === 'undefined') return;

  container.innerHTML = corePhilosophy
    .map(
      (principle) => `
    <div class="philosophy-item">
      <span class="check-circle" aria-hidden="true">&#10003;</span>
      <p>${principle}</p>
    </div>
  `
    )
    .join('');
}

function renderAboutSections() {
  const philosophy = document.getElementById('about-philosophy');
  const audience = document.getElementById('about-audience');

  if (philosophy && typeof corePhilosophy !== 'undefined') {
    philosophy.innerHTML = corePhilosophy
      .map(
        (principle, index) => `
      <div class="card">
        <div class="philosophy-item">
          <span class="number-circle">${index + 1}</span>
          <p>${principle}</p>
        </div>
      </div>
    `
      )
      .join('');
  }

  if (audience && typeof targetAudience !== 'undefined') {
    audience.innerHTML = targetAudience
      .map(
        (item) => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `
      )
      .join('');
  }
}

function initIntakeForm() {
  if (typeof INTAKE_FORM_URL === 'undefined') return;

  document.querySelectorAll('#intake-form-link, #intake-form-link-secondary').forEach((link) => {
    link.href = INTAKE_FORM_URL;
  });

  const titleEl = document.getElementById('intake-form-title');
  if (titleEl && typeof INTAKE_FORM_TITLE !== 'undefined') {
    titleEl.textContent = INTAKE_FORM_TITLE;
  }

  const subtitleEl = document.getElementById('intake-form-subtitle');
  if (subtitleEl && typeof INTAKE_FORM_SUBTITLE !== 'undefined') {
    subtitleEl.textContent = INTAKE_FORM_SUBTITLE;
  }

  const primaryLink = document.getElementById('intake-form-link');
  if (primaryLink && typeof INTAKE_FORM_TITLE !== 'undefined') {
    primaryLink.textContent = INTAKE_FORM_TITLE;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initMobileNav();
  renderProgramCurriculum();
  renderScheduleTimeline();
  renderFaqs();
  renderHomeAudience();
  renderHomePhilosophy();
  renderAboutSections();
  initIntakeForm();
});
