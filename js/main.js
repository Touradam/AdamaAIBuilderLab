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

function getSessionNumber(weekIndex, dayIndex) {
  if (typeof programData === 'undefined') return dayIndex + 1;
  let session = dayIndex + 1;
  for (let i = 0; i < weekIndex; i += 1) {
    session += programData[i].days.length;
  }
  return session;
}

function getSessionTimeForDay(dayOfWeek) {
  if (typeof cohortSchedule === 'undefined') return '';
  if (dayOfWeek === 'friday') return cohortSchedule.fridayTime;
  if (dayOfWeek === 'saturday') return cohortSchedule.saturdayTime;
  if (dayOfWeek === 'sunday') return cohortSchedule.sundayTime;
  return '';
}

function getSessionScheduleText(weekIndex, dayIndex, day) {
  if (day.schedule) return day.schedule;

  const dayOfWeek = day.dayOfWeek || ['friday', 'saturday', 'sunday'][dayIndex];
  const dayLabel = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const time = getSessionTimeForDay(dayOfWeek);

  if (weekIndex === 0 && dayIndex === 0 && cohortSchedule.firstSessionDay) {
    return `${cohortSchedule.firstSessionDay} · ${time}`;
  }

  return `${dayLabel} · ${time}`;
}

function getSessionDuration(day) {
  return day.duration || '2 hours';
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
                  <span>${getSessionScheduleText(weekIndex, dayIndex, day)}</span>
                  <span>${getSessionDuration(day)}</span>
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

function renderHomeFocusAreas() {
  const container = document.getElementById('home-focus-areas');
  if (!container || typeof programFocusAreas === 'undefined') return;

  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',
  ];

  container.innerHTML = programFocusAreas
    .map(
      (area, index) => `
    <div class="card">
      <div class="icon-box" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">${icons[index] || icons[0]}</svg>
      </div>
      <h3>${area.title}</h3>
      <p>${area.description}</p>
    </div>
  `
    )
    .join('');
}

function renderAboutSections() {
  const audience = document.getElementById('about-audience');

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

function renderCohortStart() {
  if (typeof cohortSchedule === 'undefined') return;

  const { firstSessionDay, firstSessionTime, firstSessionLabel } = cohortSchedule;
  const summary = `${firstSessionDay} · ${firstSessionTime}`;

  document.querySelectorAll('[data-cohort-start]').forEach((el) => {
    el.textContent = summary;
  });

  document.querySelectorAll('[data-cohort-label]').forEach((el) => {
    el.textContent = firstSessionLabel;
  });

  if (cohortSchedule.weeklyScheduleSummary) {
    document.querySelectorAll('[data-weekly-schedule]').forEach((el) => {
      el.textContent = cohortSchedule.weeklyScheduleSummary;
    });
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
  renderScheduleTimeline();
  renderFaqs();
  renderHomeFocusAreas();
  renderHomeAudience();
  renderAboutSections();
  renderCohortStart();
  initIntakeForm();
});
