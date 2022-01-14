import { hash } from 'bcrypt';

import { DeliveryMan } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';

import { ICreateDeliverymanDTO } from '../../dtos/ICreateDeliverymanDTO';

export class CreateDeliverymanService {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    // Validates if the DeliveryMan exists
    const deliveryManExists = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    console.log(deliveryManExists);

    if (deliveryManExists) {
      throw new Error('Client already exists.');
    }

    // Encrypt the password
    const hashPassword = await hash(password, 8);

    // Save the DeliveryMan in the Database
    const deliveryMan = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashPassword,
      },
      select: {
        id: true,
        username: true,
      },
    });

    return deliveryMan;
  }
}
