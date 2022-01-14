import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export const ensureAuthenticateDeliveryman = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token is missing.',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      '4a24f000ea51848d5dc26067baf22623'
    ) as IPayload;

    // Assigning DeliveryMan ID in Express Request
    request.id_deliveryman = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid Token!',
    });
  }
};
