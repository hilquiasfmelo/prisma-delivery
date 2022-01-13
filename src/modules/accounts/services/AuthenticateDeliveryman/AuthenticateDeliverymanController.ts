import { Request, Response } from 'express';
import { AuthenticateDeliverymanService } from './AuthenticateDeliverymanService';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateDeliverymanService = new AuthenticateDeliverymanService();

    const tokenDeliveryman = await authenticateDeliverymanService.execute({
      username,
      password,
    });

    return response.status(200).json(tokenDeliveryman);
  }
}
