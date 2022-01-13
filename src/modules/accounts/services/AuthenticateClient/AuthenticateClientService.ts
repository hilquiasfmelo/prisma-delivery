import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/PrismaClient';
import { IAuthenticateClientDTO } from '../../dtos/IAuthenticateClientDTO';

interface IResponse {
  user: {
    id: string;
    username: string;
  };
  tokenClient: string;
}

export class AuthenticateClientService {
  async execute({
    username,
    password,
  }: IAuthenticateClientDTO): Promise<IResponse> {
    // Check if the username is registered
    const client = await prisma.clients.findUnique({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid.');
    }

    // Check if the password matches the username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid.');
    }

    // Generate the authentication token
    const tokenClient = sign({ username }, '4a24f000ea51848d5dc26067baf22623', {
      subject: client.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      user: {
        id: client.id,
        username: client.username,
      },
      tokenClient,
    };

    return tokenReturn;
  }
}
