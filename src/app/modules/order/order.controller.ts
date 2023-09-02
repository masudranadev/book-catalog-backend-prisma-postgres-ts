import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';
import pick from '../../../shared/pick';
import { orderFilterableFields } from './order.constants';
import { paginationFields } from '../../../constants/pagination';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  const data = req.body;

  const result = await OrderService.insertIntoDB(token, data);
    
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created Successfully',
    data: result,
  });
});

const getOrders = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, orderFilterableFields);
    const options = pick(req.query, paginationFields);
  
    const result = await OrderService.getOrders(filters, options);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders Fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  });

export const OrderController = {
  insertIntoDB,
  getOrders
};
