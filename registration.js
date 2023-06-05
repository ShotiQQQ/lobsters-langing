const form = document.querySelector('.registration-popup-form');
const emailInput = form.querySelector('#email');
const errorEmailInput = form.querySelector('.error-email');
const errorStatuses = form.querySelector('.error-status');
const telephoneInput = form.querySelector('#phone');
const errorTelephoneInput = form.querySelector('.error-tel');

const regContent = document.querySelector('.registration-popup-content');

try {
  const { MaskInput } = Maska;
  const mask = new MaskInput("[data-maska]");
} catch (error) {
  console.error(error.message)
}

emailInput.addEventListener('input', event => {

    if (!(event.target.value.endsWith('.com') || event.target.value.endsWith('.ru') || event.target.value.endsWith('.info') || event.target.value.endsWith('.biz') || event.target.value.endsWith('.uk') || event.target.value.endsWith('.uk') || event.target.value.endsWith('.ua') || event.target.value.endsWith('.kz') || event.target.value.endsWith('.uz') || event.target.value.endsWith('.by')) || !(event.target.value.includes('@')) ) {
      event.target.classList.add('error-input');
      errorEmailInput.hidden = false;
    } else {
      event.target.classList.remove('error-input');
      errorEmailInput.hidden = true;
    }

})

telephoneInput.addEventListener('input', event => {

  if (event.target.value.length < 16) {
    event.target.classList.add('error-input');
    errorTelephoneInput.hidden = false;
  }
  else {
    event.target.classList.remove('error-input');
    errorTelephoneInput.hidden = true;
  }

})

form.addEventListener('submit', form => {
  form.preventDefault();
});

form.querySelector('#registration').addEventListener('click', registrationButton => {
  validationForm();
})

const validationForm = () => {

  form.querySelectorAll('[data-validate="regFormBlock"]').forEach((regFormBlock) => {

    if (regFormBlock.classList.contains('agreement-checkbox')) {

      if (!regFormBlock.querySelector('[data-validate="regInput"]').checked) {
        console.error('checkbox does not checked')
        return null
      }

    } else if (regFormBlock.classList.contains('registration-drop-down-holder')) {

      const errorStatus = regFormBlock.querySelector('[data-validate="regErrorRequired"]');

      errorStatus.hidden = true;

      const statuses = regFormBlock.querySelectorAll('[name="status"]');

      statuses.forEach(status => {

        status.addEventListener('input', () => {

          if (status.checked) {
            errorStatus.hidden = true;
          }

        })

      })

      let statusIsChecked = false;

      for (let status of statuses) {
        if (status.checked) {
          statusIsChecked = true;
          break
        }
      }

      if (!statusIsChecked) {
        errorStatus.hidden = false;
      }

    } else {

      const input = regFormBlock.querySelector('[data-validate="regInput"]');
      const errorRequired = regFormBlock.querySelector('[data-validate="regErrorRequired"]');

      if (input.value.length < 1) {
        errorRequired.hidden = false;
        input.classList.add('error-input');

        input.addEventListener('input', event => {
          if (input.id === 'phone') {

            if (event.target.value.length < 16) {
              event.target.classList.add('error-input');
              errorTelephoneInput.hidden = false;
              errorRequired.hidden = true;
            }
            else {
              event.target.classList.remove('error-input');
              errorTelephoneInput.hidden = true;
              errorRequired.hidden = true;
            }

          } else if (input.id === 'email') {

            if (!(event.target.value.endsWith('.com') || event.target.value.endsWith('.ru') || event.target.value.endsWith('.info') || event.target.value.endsWith('.biz') || event.target.value.endsWith('.uk') || event.target.value.endsWith('.uk') || event.target.value.endsWith('.ua') || event.target.value.endsWith('.kz') || event.target.value.endsWith('.uz') || event.target.value.endsWith('.by')) || !(event.target.value.includes('@')) ) {
              event.target.classList.add('error-input');
              errorEmailInput.hidden = false;
              errorRequired.hidden = true;
            } else {
              event.target.classList.remove('error-input');
              errorEmailInput.hidden = true;
              errorRequired.hidden = true;
            }

          } else if (event.target.value.length > 0) {
            errorRequired.hidden = true;
            input.classList.remove('error-input');
          }
        })

      } else {
        errorRequired.hidden = true;
        input.classList.remove('error-input');
      }

    }



  })

}

const preventDefaultAllButtonsInFormRegistration = (selector) => {
  document.querySelector(selector).addEventListener('click', e => {
    e.preventDefault();
  })
}

preventDefaultAllButtonsInFormRegistration('.registration-popup-dropdown-button');
preventDefaultAllButtonsInFormRegistration('#status-list-close-button');
preventDefaultAllButtonsInFormRegistration('#registration-popup-close');
