import { Request, Response } from 'express';

import { images, comments, installations } from '../config/hotel';

export default { 
   async index(request: Request, response: Response) {
      const image = images.harHotel;
      return response.render('installations', { installations, image, comments });
   },
}