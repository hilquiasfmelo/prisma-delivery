import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanService } from "./FindAllDeliveriesDeliverymanService";

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;

    const findAllDeliveriesDeliverymanService =
      new FindAllDeliveriesDeliverymanService();

    const deliveiresDeliveryman =
      await findAllDeliveriesDeliverymanService.execute(id_deliveryman);

    return response.status(200).json(deliveiresDeliveryman);
  }
}
