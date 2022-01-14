import { Deliveries } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { IUpdateDeliveryToDeliverymanDTO } from '../../dtos/IUpdateDeliveryToDeliverymanDTO';

export class UpdateDeliveryToDeliverymanService {
  async execute({
    id_delivery,
    id_deliveryman,
  }: IUpdateDeliveryToDeliverymanDTO): Promise<Deliveries> {
    const updateDelivery = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return updateDelivery;
  }
}
