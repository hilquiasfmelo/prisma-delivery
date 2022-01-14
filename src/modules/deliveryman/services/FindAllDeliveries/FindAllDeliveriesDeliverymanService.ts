import { prisma } from "../../../../database/PrismaClient";

export class FindAllDeliveriesDeliverymanService {
  async execute(id_deliveryman: string) {
    const deliveiresDeliveryman = await prisma.deliveryMan.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveiresDeliveryman;
  }
}
