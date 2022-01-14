import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/PrismaClient';
import { ICreateDeliveryDTO } from '../../dtos/ICreateDeliveryDTO';

export class CreateDeliveryService {
  async execute({
    item_name,
    id_client,
  }: ICreateDeliveryDTO): Promise<Deliveries> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
