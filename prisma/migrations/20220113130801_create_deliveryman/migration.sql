-- CreateTable
CREATE TABLE "DeliveryMan" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryMan_username_key" ON "DeliveryMan"("username");
