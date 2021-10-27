import { Request, Response } from 'express';

import { images, homeRooms, comments, installations } from '../config/hotel';
import { Error } from '../@types/hotel';
import { formatPrice, translateField, titleAllString, createReservationObject } from  '../utils';
import { handleCreateQuery, execSQLQuery } from '../database/controller';

export default { 
   async index(request: Request, response: Response) {
      const image = images.harHotel;
      return response.render('index', { image, rooms: homeRooms, comments });
   },
   async contact(request: Request, response: Response) {
      return response.render('contact');
   },
   async reservation(request: Request, response: Response) {
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

         const { register_id, reservation } = createReservationObject(data);

         const query = handleCreateQuery(reservation);
         execSQLQuery(query);

         return response.render('success', { roomId, registerId: register_id });
      }
      return response.render('error', { errors, roomId });
   },
   async sendMessage(request: Request, response: Response) {
      const data = request.body;
      const errors: { field: string, message: string }[] = [];

      let hasEmptyField = false;

      Object.keys(data).forEach(key => {
         if(!data[key]) {
            hasEmptyField = true;

            errors.push({ 
               field: key,
               message: `Please fill the field: ${key}`
            });
         }
      });

      return hasEmptyField ? 
         response.status(400).json({
            message: 'Error create message',
            errors
         }) : 
         response.status(201).json({
            message: 'Success to create message',
            errors,
         })
      ;
   }
}