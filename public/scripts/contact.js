//form-contato
const form = document.querySelector('.form form');
const activeClass = 'active';
const eventTarget = new EventTarget();
const eventToggleModal = 'toggle_state_modal';

form &&
form.addEventListener('submit', async event => {
   event.preventDefault();

   emit(true);

   const modal = {
      content: document.querySelector('.modal-overlay'),
      title: document.querySelector('[data-modal-title]'),
      icon: document.querySelector('[data-modal-icon]'),
      message: document.querySelector('[data-modal-message]'),
   };

   const errorMessage = 'Mensagem não enviada, por favor preecha todos os dados!';

   const formData = new FormData(event.target);
   const json = {};
   let hasEmpty = false;

   [...formData.entries()].forEach(([field, value]) => {
      json[field] = value;

      !value && (hasEmpty = true);
   });

   const response = await fetch('/mensagem', {
      method: 'POST',
      body: JSON.stringify(json)
   });
   const { errors } = await response.json();

   const hasError = Array.isArray(errors) && errors.length > 0 || hasEmpty;

   modal['title'].innerHTML = hasError ? 'Erro' : 'Sucesso';
   modal['icon'].innerHTML = hasError ? '❌' : '✅';
   modal['message'].innerHTML = hasError ? errorMessage : 'Mensagem enviada com sucesso!';

   modal['content'].classList.add(activeClass);
   modal['content'].addEventListener('click', closeModal);
});

const closeModal = event => {
   const { target, currentTarget } = event;
   const modal = target.closest('.modal');

   if(!modal || target.tagName === 'BUTTON') {
      currentTarget.classList.remove(activeClass);
   }

   emit(false);
};

eventTarget.addEventListener(eventToggleModal, event => {
   const { detail } = event;
   const overlay = document.querySelector('.modal-overlay');
   overlay && overlay.setAttribute('aria-expanded', String(detail));
});

function emit(detail) {
   const customEvent = new CustomEvent(eventToggleModal, { detail });
   eventTarget.dispatchEvent(customEvent);
}