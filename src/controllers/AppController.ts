import { Request, Response } from 'express';

import { images, homeRooms, comments, installations } from '../config/hotel';
import { Error } from '../@types/hotel';
import { formatPrice, translateField, titleAllString } from  '../utils';

export default { 
   async index(request: Request, response: Response) {
      const image = images.harHotel;
      return response.render('index', { image, rooms: homeRooms, comments });
   },
   async installations(request: Request, response: Response) {
      const image = images.harHotel;
      return response.render('installations', { installations, image, comments });
   },
   async rooms(request: Request, response: Response) {
      const image = images.room;
      const formatRooms = homeRooms.map(room => ({
         ...room,
         price: formatPrice(room.price)
      }));
      return response.render('rooms', { image, comments, rooms: formatRooms });
   },
   async room(request: Request, response: Response) {
      const { params: { id } } = request;
      const room = homeRooms.find(room => room.id === +id);

      if(!room) 
         return response.render('not-found', { 
            message: `Quarto com o id: ${id} não encontrado, por favor digite um id válido!`
         });

      const formatedRoom = Object.assign(room, { price: formatPrice(room.price) });

      return response.render('room', { 
         room: formatedRoom, 
         infos: formatedRoom.infos,
         images: formatedRoom.images
      });
   },
   async registerReservation(request: Request, response: Response) {
      const data = request.body;
      const roomId = data['room_id'];
      const errors: Error[] = [];

      let hasEmptyField = false;

      Object.keys(data).forEach(key => {
         if(!data[key]) {
            hasEmptyField = true;
            const field_pt = titleAllString(translateField(key));

            errors.push({ 
               field: key, 
               message: `Please fill the field: ${key}`,
               messageTranslated: `Por favor preencha o campo: ${field_pt}`,
               filedTranslated: field_pt
            });
         }
      });

      if(!hasEmptyField) {
         const removeSymbols = ['cep', 'cpf', 'cellphone'];
         const dates = ['birth_date', 'enter_date', 'exit_date'];

         Object.keys(data).forEach(key => {
            removeSymbols.includes(key) && (
               data[key] = data[key].replace(/\D/g, '')
            );

            dates.includes(key) && (
               data[key] = new Date(data[key])
            );
         });

         const register_id = Date.now();

         return response.render('success', { roomId, registerId: register_id });
      }
      return response.render('error', { errors, roomId });
   },
   async contact(request: Request, response: Response) {
      return response.render('contact');
   }
}