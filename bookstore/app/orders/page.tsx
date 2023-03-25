import Link from "next/link";

const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 28d93d61b28a2c8149bf68e9f11f2a11da9766592f60334d0778652db76afb5a",
    "My-Custom-Header": "foobar",
  },
};
async function getorders() {
  const res = await fetch(
    `https://simple-books-api.glitch.me/orders`,
    requestOptions
  );
  console.log(res);
  return await res.json();
}
type orderType = {
  id: number;
  bookId: number;
  customerName: string;
  createdBy: string;
  quantity: number;
  timestamp: number;
};
async function Page() {
  const orders: orderType[] = await getorders();

  console.log(orders);
  return (
    <div className="flex w-full h-screen bg-pink justify-evenly items-center">
      {orders.map((book, ind) => (
        <div key={ind} className="flex flex-col bg-slate-200 p-4">
          <h1 className="font-bold text-2xl">{book.customerName}</h1>
          <p>
            <label className="font-semibold">Quantity </label>
            {book.quantity}
          </p>
          <Link
            href={`/orders/${book.id}`}
            className="p-2 font-medium bg-purple-300 text-white text-center rounded-md"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Page;
