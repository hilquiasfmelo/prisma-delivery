/*
  Warnings:

  - You are about to drop the `DeliveryMan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DeliveryMan";

-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");
