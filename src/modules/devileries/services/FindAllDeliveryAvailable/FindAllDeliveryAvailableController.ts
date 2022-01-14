import { Request, Response } from 'express';
import { FindAllDeliveryAvailableService } from './FindAllDeliveryAvailableService';

export class FindAllDeliveryAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllDeliveryAvailableService =
      new FindAllDeliveryAvailableService();

    const deliveriesAvailable = await findAllDeliveryAvailableService.execute();

    return response.status(200).json(deliveriesAvailable);
  }
}
