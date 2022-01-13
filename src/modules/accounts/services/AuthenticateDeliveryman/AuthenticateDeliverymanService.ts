import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/PrismaClient';
import { IAuthenticateDeliverymanDTO } from '../../dtos/IAuthenticateDeliverymanDTO';

interface IResponse {
  user: {
    id: string;
    username: string;
  };
  tokenDeliveryman: string;
}

export class AuthenticateDeliverymanService {
  async execute({
    username,
    password,
  }: IAuthenticateDeliverymanDTO): Promise<IResponse> {
    // Check if the username is registered
    const deliveryman = await prisma.deliveryMan.findUnique({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Username or password invalid.');
    }

    // Check if the password matches the username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid.');
    }

    // Generate the authentication token
    const tokenDeliveryman = sign(
      { username },
      '4a24f000ea51848d5dc26067baf22623',
      {
        subject: deliveryman.id,
        expiresIn: '1d',
      }
    );

    const tokenReturn: IResponse = {
      user: {
        id: deliveryman.id,
        username: deliveryman.username,
      },
      tokenDeliveryman,
    };

    return tokenReturn;
  }
}
