import { Router } from "express";

import { AuthenticateClientController } from "./modules/accounts/services/AuthenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/services/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/services/CreateClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/services/CreateDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/devileries/services/CreateDelivery/CreateDeliveryController";
import { FindAllDeliveryAvailableController } from "./modules/devileries/services/FindAllDeliveryAvailable/FindAllDeliveryAvailableController";
import { FindAllDeliveriesController } from "./modules/clients/services/FindAllDeliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/services/FindAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateDeliveryToDeliverymanController } from "./modules/devileries/services/updateDeliveryToDeliveryman/UpdateDeliveryToDeliverymanController";

import { ensureAuthenticateClient } from "./middlewares/EnsureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/EnsureAuthenticateDeliveryman";
import { UpdatedEndAtToFinishedController } from "./modules/devileries/services/UpdatedEndAtToFinished/UpdatedEndAtToFinishedController";

export const router = Router();

// Sessions
router.post("/client/session", new AuthenticateClientController().handle);
router.post(
  "/deliveryman/session",
  new AuthenticateDeliverymanController().handle
);

// Routes of Creations
router.post("/client", new CreateClientController().handle);
router.post("/deliveryman", new CreateDeliverymanController().handle);

// Routes Clients
router.get(
  "/client/delivery",
  ensureAuthenticateClient,
  new FindAllDeliveriesController().handle
);

// Routes Deliveryman
router.get(
  "/deliveryman/delivery",
  ensureAuthenticateDeliveryman,
  new FindAllDeliveriesDeliverymanController().handle
);

// Routes Deliveries
router.post(
  "/delivery",
  ensureAuthenticateClient,
  new CreateDeliveryController().handle
);
router.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  new FindAllDeliveryAvailableController().handle
);
router.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  new UpdateDeliveryToDeliverymanController().handle
);
router.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  new UpdatedEndAtToFinishedController().handle
);
