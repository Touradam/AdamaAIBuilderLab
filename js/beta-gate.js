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

function showSignupPanel(gateEl, signupPanel) {
  if (gateEl) gateEl.hidden = true;
  if (signupPanel) {
    signupPanel.hidden = false;
    signupPanel.classList.add('beta-signup-reveal');
  }
}

function showSuccessModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('beta-modal-open');
}

function hideSuccessModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('beta-modal-open');
}

function shakeGateInputs(inputs) {
  inputs.forEach((input) => {
    input.classList.add('is-invalid');
    setTimeout(() => input.classList.remove('is-invalid'), 500);
  });
}

function initBetaGate() {
  const gateEl = document.getElementById('beta-gate');
  const signupPanel = document.getElementById('beta-signup-panel');
  const modal = document.getElementById('beta-success-modal');
  const continueBtn = document.getElementById('beta-gate-continue');
  const errorEl = document.getElementById('beta-gate-error');
  const modalCloseBtn = document.getElementById('beta-modal-close');

  if (!gateEl) return;

  const input1 = document.getElementById('beta-gate-1');
  const input2 = document.getElementById('beta-gate-2');
  const input3 = document.getElementById('beta-gate-3');
  const inputs = [input1, input2, input3];

  if (sessionStorage.getItem(BETA_ACCESS_KEY) === 'true') {
    showSignupPanel(gateEl, signupPanel);
    return;
  }

  const digits1 = typeof betaGateDigits1 !== 'undefined' ? betaGateDigits1 : [];
  const digits2 = typeof betaGateDigits2 !== 'undefined' ? betaGateDigits2 : [];
  const pairs = typeof betaGatePairs !== 'undefined' ? betaGatePairs : [];

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

  function grantAccess() {
    sessionStorage.setItem(BETA_ACCESS_KEY, 'true');
    showSuccessModal(modal);
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

  function dismissModalAndRevealSignup() {
    hideSuccessModal(modal);
    showSignupPanel(gateEl, signupPanel);

    if (typeof NOTION_FORM_URL !== 'undefined' && NOTION_FORM_URL && !NOTION_FORM_URL.startsWith('PASTE_')) {
      setTimeout(() => {
        window.open(NOTION_FORM_URL, '_blank', 'noopener,noreferrer');
      }, 4000);
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', dismissModalAndRevealSignup);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal.querySelector('.beta-modal-overlay')) {
        dismissModalAndRevealSignup();
      }
    });
  }
}
