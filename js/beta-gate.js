const BETA_ACCESS_KEY = 'betaAccessGranted';

function getExpectedGateValues() {
  const d1 = typeof betaGateDigits1 !== 'undefined' ? betaGateDigits1 : [];
  const d2 = typeof betaGateDigits2 !== 'undefined' ? betaGateDigits2 : [];
  const pairs = typeof betaGatePairs !== 'undefined' ? betaGatePairs : [];
  const i = 1;
  const j = 4;
  const k = 2;
  return {
    digit1: d1[i],
    digit2: d2[j],
    pair: pairs[k],
  };
}

function isValidGateCombination(d1, d2, pairStr) {
  const expected = getExpectedGateValues();
  const pairNum = parseInt(pairStr, 10);
  return d1 === expected.digit1 && d2 === expected.digit2 && pairNum === expected.pair;
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('beta-modal-open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.hidden = true;
  if (!document.querySelector('.beta-modal-root:not([hidden])')) {
    document.body.classList.remove('beta-modal-open');
  }
}

function showSignupPanel(signupPanel) {
  if (signupPanel) {
    signupPanel.hidden = false;
    signupPanel.classList.add('beta-signup-reveal');
    signupPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function shakeGateInputs(inputs) {
  inputs.forEach((input) => {
    input.classList.add('is-invalid');
    setTimeout(() => input.classList.remove('is-invalid'), 500);
  });
}

function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#c4a35a', '#e2c887', '#9a7b3c', '#eceae4', '#c4a35a'];
  for (let i = 0; i < 48; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.style.animationDuration = `${2.2 + Math.random() * 1.5}s`;
    container.appendChild(piece);
  }
}

function showSuccessModal() {
  spawnConfetti();
  openModal('beta-success-modal');
}

function initBetaGate() {
  const joinBtn = document.getElementById('join-beta-btn');
  const joinModal = document.getElementById('join-modal');
  const signupPanel = document.getElementById('beta-signup-panel');
  const continueBtn = document.getElementById('beta-gate-continue');
  const errorEl = document.getElementById('beta-gate-error');
  const modalCloseBtn = document.getElementById('beta-modal-close');

  const input1 = document.getElementById('beta-gate-1');
  const input2 = document.getElementById('beta-gate-2');
  const input3 = document.getElementById('beta-gate-3');
  const inputs = [input1, input2, input3];

  if (!joinBtn) return;

  const digits1 = typeof betaGateDigits1 !== 'undefined' ? betaGateDigits1 : [];
  const digits2 = typeof betaGateDigits2 !== 'undefined' ? betaGateDigits2 : [];
  const pairs = typeof betaGatePairs !== 'undefined' ? betaGatePairs : [];

  if (sessionStorage.getItem(BETA_ACCESS_KEY) === 'true') {
    showSignupPanel(signupPanel);
    joinBtn.textContent = 'Sign Up for the Beta';
    const scrollToSignup = () => {
      showSignupPanel(signupPanel);
      signupPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    joinBtn.addEventListener('click', scrollToSignup);
    if (window.location.hash === '#join') {
      scrollToSignup();
    }
    return;
  }

  function clearError() {
    if (errorEl) errorEl.hidden = true;
  }

  function showError() {
    if (errorEl) errorEl.hidden = false;
    shakeGateInputs(inputs);
  }

  function isValidSingleDigit(value, allowed) {
    if (!value) return false;
    const num = parseInt(value, 10);
    return allowed.includes(num);
  }

  function isValidPairPrefix(value) {
    if (!value) return true;
    return pairs.some((p) => String(p).startsWith(value));
  }

  function isValidPairComplete(value) {
    if (value.length !== 2) return false;
    const num = parseInt(value, 10);
    return pairs.includes(num);
  }

  function handleDigitInput(input, allowed, nextInput, prevInput, isPair) {
    input.addEventListener('input', () => {
      clearError();
      let value = input.value.replace(/\D/g, '');

      if (isPair) {
        if (value.length > 2) value = value.slice(0, 2);
        if (value && !isValidPairPrefix(value)) {
          value = value.slice(0, -1);
        }
        input.value = value;
        return;
      }

      if (value.length > 1) value = value.slice(-1);
      if (value && !isValidSingleDigit(value, allowed)) {
        input.value = '';
        return;
      }
      input.value = value;
      if (value && nextInput) nextInput.focus();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && prevInput) {
        e.preventDefault();
        prevInput.focus();
        prevInput.value = '';
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
    });
  }

  if (input1) handleDigitInput(input1, digits1, input2, null, false);
  if (input2) handleDigitInput(input2, digits2, input3, input1, false);
  if (input3) handleDigitInput(input3, pairs, null, input2, true);

  function openJoinModal() {
    openModal('join-modal');
    if (input1) {
      input1.value = '';
      input2.value = '';
      input3.value = '';
      clearError();
      setTimeout(() => input1.focus(), 200);
    }
  }

  joinBtn.addEventListener('click', openJoinModal);

  if (window.location.hash === '#join') {
    openJoinModal();
  }

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(btn.getAttribute('data-close-modal'));
    });
  });

  function grantAccess() {
    sessionStorage.setItem(BETA_ACCESS_KEY, 'true');
    closeModal('join-modal');
    showSuccessModal();
    joinBtn.textContent = 'Sign Up for the Beta';
    joinBtn.removeEventListener('click', openJoinModal);
    joinBtn.addEventListener('click', () => {
      showSignupPanel(signupPanel);
      signupPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function onContinue() {
    const d1 = input1 ? parseInt(input1.value, 10) : NaN;
    const d2 = input2 ? parseInt(input2.value, 10) : NaN;
    const pairStr = input3 ? input3.value : '';

    if (!isValidSingleDigit(String(d1), digits1) || !isValidSingleDigit(String(d2), digits2)) {
      showError();
      return;
    }
    if (!isValidPairComplete(pairStr)) {
      showError();
      return;
    }

    if (isValidGateCombination(d1, d2, pairStr)) {
      grantAccess();
    } else {
      showError();
    }
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', onContinue);
  }

  function dismissCelebrationAndRevealSignup() {
    closeModal('beta-success-modal');
    showSignupPanel(signupPanel);

    if (typeof NOTION_FORM_URL !== 'undefined' && NOTION_FORM_URL && !NOTION_FORM_URL.startsWith('PASTE_')) {
      setTimeout(() => {
        window.open(NOTION_FORM_URL, '_blank', 'noopener,noreferrer');
      }, 800);
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', dismissCelebrationAndRevealSignup);
  }
}
