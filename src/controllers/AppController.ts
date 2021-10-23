import { Request, Response } from 'express';

export default { 
   async index(request: Request, response: Response) {
      const teste = 'salve';
      return response.render('index', { teste });
   },
}