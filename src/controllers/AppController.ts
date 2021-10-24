import { Request, Response } from 'express';

import { images, homeRooms, comments } from '../config/hotel';

export default { 
   async index(request: Request, response: Response) {
      const image = images.harHotel;
      return response.render('index', { image, rooms: homeRooms, comments });
   },
}