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
const textInputs = Array.from(inputs).filter(
   input => input.type === 'text' && input.name !== 'name'
);

const Mask = {
   apply(input, inputName) {
      setTimeout(() => input.value = Mask[inputName](input.value), 1);
   },
   cpf(value) {
      value = value.replace(/\D/g, '');

      if(value.length > 14) value = value.splice(0, -1);

      if(!value.length > 11) {
         value = value.replace(/(\d{3})(\d)/, '$1.$2');
         value = value.replace(/(\d{3})(\d)/, '$1.$2');
         value = value.replace(/(\d{3})(\d)/, '$1-$2');
      } 
   },
   cep(value) {
      value = value.replace(/\D/g, '');

      if(value.length > 8) value = value.splice(0, -1);

      value = value.replace(/(\d{5})(\d)/, '$1-$2');
   },
   cellphone(value) {
      value = value.replace(/\D/g, '');
      if(value.length > 14) value = value.splice(0, -1);
      value = value.replace(/(\d{2})(\d)/, '($1)$2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
   },
   uf(value) {
      value = value.replace(/\d/g, '');
      if(value.length > 2) value = value.splice(0, -1);
   }
}

for(const input of textInputs) {
   const inputName = input.name;
   Mask[inputName] && console.log('inputName', Mask[inputName]);
   Mask[inputName] && input.addEventListener('input', () => Mask.apply(input, inputName));
};