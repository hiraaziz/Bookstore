type orderType = {
  id: string;
  bookId: number;
  customerName: string;
  createdBy: string;
  quantity: number;
  timestamp: number;
};
async function generateStaticParams() {
  const res = await fetch("https://simple-orders-api.glitch.me/orders");
  const orders: orderType[] = await res.json();
  return orders.map((order: any) => ({
    orderid: order.id,
  }));
}

async function Page({ params }: { params: { singleorder: number } }) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 28d93d61b28a2c8149bf68e9f11f2a11da9766592f60334d0778652db76afb5a",
    },
    "My-Custom-Header": "foobar",
  };
  async function getSingleorder() {
    const res = await fetch(
      `https://simple-books-api.glitch.me/orders/${params.singleorder}`,
      requestOptions
    );
    return await res.json();
  }
  const order = await getSingleorder();

  return (
    <div className=" flex flex-col p-4 rounded-md bg-purple-300 w-fit m-auto">
      <h1 className="bg-white w-fit rounded-lg px-2 self-end">{order.id}</h1>
      <h1 className="font-bold text-2xl mt-4 text-purple-900">
        {order.customerName}
        <div className="h-[2px] w-24 bg-purple-900" />
      </h1>
      <h1 className="font-medium text-md mt-4">
        <label className="font-normal =">createdBy: </label>
        {order.createdBy}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal ">quantity: </label>
        {order.quantity}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal ">timestamp: </label>
        {order.timestamp}
      </h1>

      {/* <Link
      href={`/${params.orderid}/postreq`}
      className="p-2 bg-slate-100 rounded-md text-md font-medium mt-4 hover:bg-slate-50"
    >
      Order order
    </Link> */}
    </div>
  );
}

export default Page;
