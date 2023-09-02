import { Order } from '@prisma/client';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IOrderData } from './order.interface';

const insertIntoDB = async (token: string, data: IOrderData): Promise<Order> => {
  const user = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
  if(!user){
    throw new ApiError(httpStatus.NOT_FOUND, "user not found");
  }
  if(!data.userId){
    data.userId = user.userId
  }
  const result = await prisma.order.create({
    data
  });
  
  return result;
};

export const OrderService = {
  insertIntoDB,
};
