import { Router } from 'express';

import { AuthenticateClientController } from './modules/accounts/services/AuthenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/accounts/services/AuthenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/services/CreateClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/services/CreateDeliveryman/CreateDeliverymanController';

export const router = Router();

// Sessions
router.post('/client/session', new AuthenticateClientController().handle);
router.post(
  '/deliveryman/session',
  new AuthenticateDeliverymanController().handle
);

// Routes Normal
router.post('/client', new CreateClientController().handle);
router.post('/deliveryman', new CreateDeliverymanController().handle);
