const popup = document.querySelector('.registration-popup');
const form = popup.querySelector('.registration-popup-form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const contactsInput = form.querySelector('#media-link');
const telephoneInput = form.querySelector('#phone');
const aboutInput = form.querySelector('#platform');
const statusSelect = form.querySelector('.registration-drop-down-holder');
const checkboxInput = form.querySelector('#agreement');
const sendButton = form.querySelector('.registration-popup-submit-button');

const warningText = document.querySelector('.login-popup-warning');
const successRegBlock = document.querySelector('.registration-popup-success');
const successButton = document.querySelector('.registration-popup-success__button');

const params = new URLSearchParams();

try {
  const { MaskInput } = Maska;
  const mask = new MaskInput("[data-maska]");
} catch (error) {
  console.error(error.message)
}

const validator = new window.JustValidate(form, {
  validateBeforeSubmitting: true,
  errorLabelStyle: {
    color: '#FF002E',
  },
});

validator
  .addField(nameInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    }
  ])
  .addField(emailInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат E-mail',
    }
  ])
  .addField(contactsInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    }
  ])
  .addField(telephoneInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
    {
      rule: 'minLength',
      value: 16,
      errorMessage: 'Недостаточно символов',
    }
  ])
  .addField(aboutInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    }
  ])
  .addRequiredGroup(statusSelect, 'Необходимо выбрать 1 из вариантов')
  .addField(checkboxInput, [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    }
  ])
  .onSuccess(event => {
    const getMetaData = () => {

      const data = {}

      for (let [key, value] of params.entries()) {
        data[key] = value;
      }

      return data
    }

    sendButton.disabled = true;
    sendButton.querySelector('.registration-popup-submit-button__text').hidden = true;
    sendButton.querySelector('.loader').classList.add('loader--active');

    const userData = {
      name: nameInput.value,
      email: emailInput.value,
      contact_details: contactsInput.value,
      phone_number: telephoneInput.value,
      about: aboutInput.value,
      type: function checkSelect() {
        let dataOfSelect = null;

        statusSelect.querySelectorAll('input[name="status"]').forEach(item => {
          if (item.checked) {
            dataOfSelect = item.value;
          }
        })

        return dataOfSelect;

      },
      meta: getMetaData()
    };

    fetch('https://www.lbstrs.ru/api/requests', {
      method: 'POST',
      body: JSON.stringify(userData),
      /* mode: 'no-cors', */
      redirect: 'manual',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        console.log('Запрос отправлен');
        console.log(userData)
        console.log(res)
        warningText.hidden = true;
        form.classList.add('registration-popup-form--inactive');
        successRegBlock.classList.add('registration-popup-success--active');
        successButton.addEventListener('click', () => {
          popup.classList.remove('shown');
          popup.classList.add('hidden');
          document.body.classList.remove('body-active-pop-up');
          document.querySelector('.header').classList.remove('header-popup-active');
          document.querySelector('.hero').classList.remove('hero-pop-up-displayed');
        })
      })
      .catch(error => console.log(error))

  })
