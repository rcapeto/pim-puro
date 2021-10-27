import { locale, priceConfig } from '../config/render';
import { Field, FrontEndData, Reservation } from '../@types/hotel';

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

export const createReservationObject = (frontendData: FrontEndData): { 
   register_id: number, 
   reservation: Reservation 
} => {
   const register_id = Date.now();
   const reservation = {
      adult_number: frontendData['adult_number'],
      children_number: frontendData['children_number'],
      enter_date: frontendData['enter_date'],
      exit_date: frontendData['exit_date'],
      room_id: frontendData['room_id'],
      id: String(register_id),
      client: {
         name: frontendData.name,
         cellphone: frontendData.cellphone,
         address: frontendData.cellphone,
         birth_date: frontendData['birth_date'],
         cep: frontendData.cep,
         cpf: frontendData.cpf,
         uf: frontendData.uf
      }
   }

   return { register_id, reservation };
};