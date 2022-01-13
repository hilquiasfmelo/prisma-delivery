import { Request, Response } from 'express';
import { CreateDeliverymanService } from './CreateDeliverymanService';

export class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createDeliverymanService = new CreateDeliverymanService();

    const deliveryMan = await createDeliverymanService.execute({
      username,
      password,
    });

    return response.status(200).json(deliveryMan);
  }
}
