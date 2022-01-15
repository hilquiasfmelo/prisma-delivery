import { Request, Response } from "express";
import { UpdatedEndAtToFinishedService } from "./UpdatedEndAtToFinishedService";

export class UpdatedEndAtToFinishedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updatedEndAtToFinishedService = new UpdatedEndAtToFinishedService();

    const updateEndAt = await updatedEndAtToFinishedService.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(200).json(updateEndAt);
  }
}
