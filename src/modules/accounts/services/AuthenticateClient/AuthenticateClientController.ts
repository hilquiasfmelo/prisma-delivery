import { Request, Response } from 'express';
import { AuthenticateClientService } from './AuthenticateClientService';

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateClientService = new AuthenticateClientService();

    const tokenClient = await authenticateClientService.execute({
      username,
      password,
    });

    return response.status(200).json(tokenClient);
  }
}
