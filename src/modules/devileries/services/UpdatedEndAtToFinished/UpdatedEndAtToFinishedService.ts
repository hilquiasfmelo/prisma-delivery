import { prisma } from "../../../../database/PrismaClient";
import { IUpdatedEndAtToFinishedDTO } from "../../dtos/IUpdatedEndAtToFinishedDTO";

export class UpdatedEndAtToFinishedService {
  async execute({ id_delivery, id_deliveryman }: IUpdatedEndAtToFinishedDTO) {
    const updateEndAt = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return updateEndAt;
  }
}
