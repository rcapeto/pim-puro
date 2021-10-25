import { Request, Response } from 'express';

import { images, homeRooms, comments, installations } from '../config/hotel';
import { formatPrice } from  '../utils';

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

      return response.render('room', { room: formatedRoom });
   }
}