import { Request, Response } from 'express';
import { CreateDeliveryService } from './CreateDeliveryService';

export class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const { id_client } = request;

    const createDeliveryService = new CreateDeliveryService();

    const delivery = await createDeliveryService.execute({
      item_name,
      id_client,
    });

    return response.status(200).json(delivery);
  }
}
