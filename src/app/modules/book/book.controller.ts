import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookFilterableFields } from './book.constants';
import { BookService } from './book.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created Successfully',
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await BookService.getBooks(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books Fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});
const getBooksByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  
  const options = pick(req.query, paginationFields);

  const result = await BookService.getBooksByCategoryId(categoryId, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const BookController = {
  insertIntoDB,
  getBooks,
  getBooksByCategoryId,
};
