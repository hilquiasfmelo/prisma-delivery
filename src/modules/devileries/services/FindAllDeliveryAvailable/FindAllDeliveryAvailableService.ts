import { Deliveries } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';

export class FindAllDeliveryAvailableService {
  async execute(): Promise<Deliveries[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return deliveries;
  }
}
