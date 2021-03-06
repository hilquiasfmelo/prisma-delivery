import { Request, Response } from 'express';
import { CreateClientService } from './CreateClientService';

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      username,
      password,
    });

    return response.status(200).json(client);
  }
}
