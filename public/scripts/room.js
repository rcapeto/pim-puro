const images = document.querySelectorAll('.image');
const totalImages = Array.from(images).length;
const button = {
   next: document.querySelector('[data-button-next]'),
   prev: document.querySelector('[data-button-prev]'),
};

let slideCurrentIndex = 0;

const formatImages = () => {
   images.forEach((image, index) => {
      image.style.transform = `translateX(${100 * (index - slideCurrentIndex)}%)`;
   });
};

const controller = {
   prev() {
      slideCurrentIndex--;
      slideCurrentIndex = slideCurrentIndex < 0 ? totalImages - 1 : slideCurrentIndex;
      formatImages();
   },
   next() {
      slideCurrentIndex++;
      slideCurrentIndex = slideCurrentIndex >= totalImages ? 0 : slideCurrentIndex;
      formatImages();
   },
};

Object.keys(button).forEach(key => {
   button[key].addEventListener('click', controller[key]);
});

formatImages();

const inputs = document.querySelectorAll('.form input');
const [inputRoomId] = Array.from(inputs).filter(input => input.type === 'hidden');
const textInputs = Array.from(inputs).filter(
   input => input.type === 'text' && input.name !== 'name'
);

window.addEventListener('load', () => {
   const { pathname } = window.location;
   const roomId = pathname.replace(/\D/g, '');
   inputRoomId && (
      inputRoomId.value = roomId
   );
});

const Mask = {
   cpf(value) {
      value = value.replace(/\D/g, '');

      const regex = /(\d{3})(\d)/;
      const regexString = '$1.$2';

      value = value.replace(regex, regexString);
      value = value.replace(regex, regexString);
      value = value.replace(regex, '$1-$2');

      if(value.length > 14) value = value.slice(0, -1);

      return value;
   },
   cellphone(value) {
      value = value.replace(/\D/g, '');

      value = value.replace(/(\d{2})(\d)/, '($1)$2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');

      if(value.length > 14) value = value.slice(0, -1);

      return value;
   },
   cep(value) {
      value = value.replace(/\D/g, '');
      if(value.length > 8) value = value.slice(0, -1);
      const regex = /(\d{5})(\d)/;

      value = value.replace(regex, '$1-$2');

      return value;
   },
   uf(value) {
      value = value.replace(/\d/g, '');
      if(value.length > 2) value = value.slice(0, -1);
      return value;
   }
}

for(const input of textInputs) {
   const inputName = input.name;
   const fnc = Mask[inputName];

   fnc && input.addEventListener('input', event => {
      const target = event.target;
      setTimeout(() => {
         target.value = fnc(target.value);
      }, 10);
   });
};