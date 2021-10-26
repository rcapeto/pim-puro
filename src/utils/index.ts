import { locale, priceConfig } from '../config/render';
import { Field } from '../@types/hotel';

export const formatPrice = (price: number) => {
   return price.toLocaleString(locale, priceConfig);
};

export const translateField = (field: Field) => {
   switch(field) {
      case 'address':
         return 'endereço';
      case 'adult_number':
         return 'número de adultos';
      case 'birth_date':
         return 'data de nascimento';
      case 'cellphone':
         return 'celular';
      case 'children_number':
         return 'número de crianças';
      case 'enter_date':
         return 'data de entrada';
      case 'exit_date':
         return 'data de saída';
      case 'name':
         return 'nome';
      default:
         return field;
   };
};

export const upperFirstLetter = (word: string) => {
   return word.replace(word[0], word[0].toUpperCase());
};

export const titleAllString = (content: string) => {
   const words = content.split(' ');
   const titleString: string[] = [];

   for(const word of words) {
      titleString.push(upperFirstLetter(word));
   }

   return titleString.join(' ');
};