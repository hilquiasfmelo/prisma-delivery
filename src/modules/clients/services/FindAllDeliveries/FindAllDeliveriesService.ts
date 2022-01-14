import { prisma } from "../../../../database/PrismaClient";

export class FindAllDeliveriesService {
  async execute(id_client: string) {
    const deliveiresClient = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveiresClient;
  }
}
