const form = document.querySelector('.registration-popup-form');
const nameInput = document.querySelector('#name');
const errorNameInput = form.querySelector('.error-name');
const emailInput = form.querySelector('#email');
const errorEmailInput = form.querySelector('.error-email');
const linkInput = form.querySelector('#media-link');
const errorLinkInput = form.querySelector('.error-link');
const statuses = form.querySelectorAll('[name="status"]');
const errorStatuses = form.querySelector('.error-status');
const telephoneInput = form.querySelector('#phone');
const errorTelephoneInput = form.querySelector('.error-tel');
const platformInput = form.querySelector('#platform');
const errorPlatformInput = form.querySelector('.error-platform');
const checkboxInput = form.querySelector('#agreement');
const regContent = document.querySelector('.registration-popup-content');

try {
  const { MaskInput } = Maska;
  const mask = new MaskInput("[data-maska]");
} catch (error) {
  document.reload();
}

form.addEventListener('submit', form => {
  form.preventDefault();
});

const validationForm = () => {
  form.querySelector('#registration').addEventListener('click', registrationButton => {

    try {

      validateName();

      validateEmail();

      validateLink()

      validateTelephone();

      validatePlatform();

      validateStatus();

      validateCheckbox();

    } catch (error) {
      console.error(error.message);
    }

  })
}

const preventDefaultAllButtonsInFormRegistration = (selector) => {
  document.querySelector(selector).addEventListener('click', e => {
    e.preventDefault();
  })
}

const validateName = () => {
  clearValidation();

  if (nameInput.value.length <= 3 && nameInput.value.length > 0) {
    nameInput.classList.add('error-input');
    errorNameInput.textContent = 'Поле должно содержать более 3 символов';
    errorNameInput.hidden = false;
    throw new Error('Валидация ФИО не пройдена');
  } else if (nameInput.value.length === 0) {
    nameInput.classList.add('error-input');
    errorNameInput.textContent = 'Обязательно для заполнения';
    errorNameInput.hidden = false;
    throw new Error('Валидация ФИО не пройдена');
  }

}

const validateEmail = () => {
  clearValidation();

  if (emailInput.value.length > 0) {
    if (!(emailInput.value.endsWith('.com') || emailInput.value.endsWith('.ru') || emailInput.value.endsWith('.info') || emailInput.value.endsWith('.biz') || emailInput.value.endsWith('.uk') || emailInput.value.endsWith('.uk') || emailInput.value.endsWith('.ua') || emailInput.value.endsWith('.kz') || emailInput.value.endsWith('.uz') || emailInput.value.endsWith('.by')) || !(emailInput.value.includes('@')) ) {
      emailInput.classList.add('error-input');
      errorEmailInput.textContent = 'Неверный формат e-mail';
      errorEmailInput.hidden = false;
      throw new Error('Валидация E-mail не пройдена');
    }
  } else {
    emailInput.classList.add('error-input');
    errorEmailInput.textContent = 'Поле обязательно для заполнения';
    errorEmailInput.hidden = false;
    throw new Error('Валидация E-mail не пройдена');
  }

}

const isURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

const validateLink = () => {
  clearValidation();

  if (linkInput.value.length > 0) {
    if (!isURL(linkInput.value)) {
      linkInput.classList.add('error-input');
      errorLinkInput.textContent = 'Неверный формат ссылки. Пример - https://t.me/somebody';
      errorLinkInput.hidden = false;
      throw new Error('Валидация медиа-ссылки не пройдена')
    }
  } else {
    linkInput.classList.add('error-input');
    errorLinkInput.textContent = 'Поле обязательно для заполнения';
    errorLinkInput.hidden = false;
    throw new Error('Валидация медиа-ссылки не пройдена')
  }

}

const validateTelephone = () => {
  clearValidation();

  if (telephoneInput.value.length > 0) {
    if (telephoneInput.value.length < 16) {
      telephoneInput.classList.add('error-input');
      errorTelephoneInput.textContent = 'Неверный формат номера телефона - недостаточно символов';
      errorTelephoneInput.hidden = false;
      throw new Error('Валидация номера телефона не пройдена')
    }
  } else {
    telephoneInput.classList.add('error-input');
    errorTelephoneInput.textContent = 'Поле обязательно для заполнения';
    errorTelephoneInput.hidden = false;
    throw new Error('Валидация номера телефона не пройдена')
  }
}

const validatePlatform = () => {
  clearValidation();

  if (platformInput.value.length > 0) {
    if (!isURL(platformInput.value)) {
      platformInput.classList.add('error-input');
      errorPlatformInput.textContent = 'Неверный формат ссылки. Пример - https://dzen.ru/';
      errorPlatformInput.hidden = false;
      throw new Error('Валидация площадки не пройдена');
    }
  } else {
    platformInput.classList.add('error-input');
    errorPlatformInput.textContent = 'Поле обязательно для заполнения';
    errorPlatformInput.hidden = false;
    throw new Error('Валидация площадки не пройдена');
  }

}

const validateStatus = () => {
  clearValidation();

  let statusIsChecked = false;

  for (let status of statuses) {
    if (status.checked) {
      statusIsChecked = true;
      break
    }
  }

  if (!statusIsChecked) {
    errorStatuses.textContent = 'Необходимо выбрать один из вариантов статуса';
    errorStatuses.hidden = false;
    throw new Error('Валидация статуса не пройдена')
  }

}

const validateCheckbox = () => {
  if (!checkboxInput.checked) {
    throw new Error('Валидация чекбокса не пройдена');
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
