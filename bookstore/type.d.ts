type book = {
  id: string;
  title: string;
  author: string;
  type: string;
  price: number;
  available: boolean;
};
type order = {
  id: string;
  bookid: number;
  customername: string;
  quantity: number;
};
