import { Request, Response } from 'express';
import { FindAllDeliveriesService } from './FindAllDeliveriesService';

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client } = request;

    const findAllDeliveriesService = new FindAllDeliveriesService();

    const deliveriesClient = await findAllDeliveriesService.execute(id_client);

    return response.status(200).json(deliveriesClient);
  }
}
