const form = document.querySelector('.registration-popup-form');
const emailInput = form.querySelector('#email');
const errorEmailInput = form.querySelector('.error-email');
const linkInput = form.querySelector('#media-link');
const errorLinkInput = form.querySelector('.error-link');
const statuses = form.querySelectorAll('[name="status"]');
const errorStatuses = form.querySelector('.error-status');
const telephoneInput = form.querySelector('#phone');
const errorTelephoneInput = form.querySelector('.error-tel');
const { MaskInput } = Maska;

form.addEventListener('submit', form => {
  form.preventDefault();
});

const validationForm = () => {
  form.querySelector('#registration').addEventListener('click', registrationButton => {

    clearValidation();

    validateEmail();

    validateLink()

    validateStatus();

    validateTelephone();

  })
}

const preventDefaultAllButtonsInFormRegistration = (selector) => {
  document.querySelector(selector).addEventListener('click', e => {
    e.preventDefault();
  })
}

const validateEmail = () => {

  if (emailInput.value.length > 0) {
    if (!(emailInput.value.endsWith('.com') || emailInput.value.endsWith('.ru') || emailInput.value.endsWith('.info') || emailInput.value.endsWith('.biz') || emailInput.value.endsWith('.uk') || emailInput.value.endsWith('.uk') || emailInput.value.endsWith('.ua') || emailInput.value.endsWith('.kz') || emailInput.value.endsWith('.uz') || emailInput.value.endsWith('.by')) || !(emailInput.value.includes('@')) ) {
      emailInput.classList.add('error-input');
      errorEmailInput.hidden = false;
    }
  }

}

const validateLink = () => {
  function isURL(str) {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }

  if (linkInput.value.length > 0) {
    if (!isURL(linkInput.value)) {
      linkInput.classList.add('error-input');
      errorLinkInput.hidden = false;
    }
  }

}

const validateTelephone = () => {
  if (telephoneInput.value.length > 0) {
    if (telephoneInput.value.length < 16) {
      telephoneInput.classList.add('error-input');
      errorTelephoneInput.hidden = false;
    }
  }
}

const validateStatus = () => {
  let statusIsChecked = false;

  for (let status of statuses) {
    if (status.checked) {
      statusIsChecked = true;
      break
    }
  }

  if (!statusIsChecked) {
    errorStatuses.hidden = false;
  }

}

const clearValidation = () => {
  document.querySelectorAll('[data-validate=regInput]').forEach((e) => {
    e.classList.remove('error-input');
  });
  document.querySelectorAll('[data-validate=regError]').forEach((e) => {
    e.hidden = true;
  })
}

preventDefaultAllButtonsInFormRegistration('.registration-popup-dropdown-button');
preventDefaultAllButtonsInFormRegistration('#status-list-close-button');
preventDefaultAllButtonsInFormRegistration('#registration-popup-close');
validationForm();

const mask = new MaskInput("[data-maska]");
