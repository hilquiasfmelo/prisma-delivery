import { Clients } from '@prisma/client';
import { hash } from 'bcrypt';

import { prisma } from '../../../../database/PrismaClient';

import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';

export class CreateClientService {
  async execute({ username, password }: ICreateClientDTO) {
    // Validates if the client exists
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    console.log(clientExists);

    if (clientExists) {
      throw new Error('Client already exists.');
    }

    // Encrypt the password
    const hashPassword = await hash(password, 8);

    // Save the client in the Database
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
      select: {
        id: true,
        username: true,
      },
    });

    return client;
  }
}
