import { Request, Response } from 'express';

import { images, homeRooms, comments } from '../config/hotel';
import { formatPrice } from '../utils';

export default {
   async index(request: Request, response: Response) {
      const image = images.room;
      const formatRooms = homeRooms.map(room => ({
         ...room,
         price: formatPrice(room.price)
      }));
      return response.render('rooms', { image, comments, rooms: formatRooms });
   },

   async getRoom(request: Request, response: Response) {
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
};