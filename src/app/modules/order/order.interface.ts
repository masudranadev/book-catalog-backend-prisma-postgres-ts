export type IOrderBookData = {
  bookId: string;
  quantity: number;
};

export type IOrderData = {
  userId: string;
  orderedBooks: IOrderBookData[];
}

export type IOrderResponse ={
  id: string;
  userId: string;
  status: string | null;
  orderedBooks: IOrderBookData[],
  createdAt: Date;
  updatedAt: Date;
}
