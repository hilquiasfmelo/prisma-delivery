import { Request, Response } from 'express';
import { UpdateDeliveryToDeliverymanService } from './UpdateDeliveryToDeliverymanService';

export class UpdateDeliveryToDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliveryToDeliverymanService =
      new UpdateDeliveryToDeliverymanService();

    const updatedDelivery = await updateDeliveryToDeliverymanService.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(200).json(updatedDelivery);
  }
}
