import Link from "next/link";

async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books");

  return res.json();
}

type books = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};
export default async function Home() {
  const data: books[] = await getData();
  return (
    // <div className="flex w-full h-screen bg-pink justify-evenly items-center">
    //   {data.map((book, ind) => (
    //     <div key={ind} className="flex flex-col bg-slate-200 p-4">
    //       <h1 className="font-bold text-2xl">{book.name}</h1>
    //       <p>
    //         <label className="font-semibold">Type: </label>
    //         {book.type}
    //       </p>
    //       <p>{book.available}</p>
    //       <Link
    //         href={`/${book.id}`}
    //         className="p-2 font-medium bg-purple-300 text-white text-center rounded-md"
    //       >
    //         Read more
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
      <table className="bg-slate-200 w-[80%] h-[90%]">
        <thead>
          <tr className="bg-white font-bold text-left">
            <th className="p-4">End Points</th>
            <th className="p-4">Required Body</th>
            <th className="p-4">Return</th>
            <th className="p-4">Token require</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">GET: /api/status</td>
            <td className="p-4">no</td>
            <td className="p-4">Return the status of API</td>
            <td className="p-4">no</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">POST: /api/api-clients</td>
            <td className="p-4">name: string, email: string</td>
            <td className="p-4">Return access token</td>
            <td className="p-4">no</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">GET: /api/books</td>
            <td className="p-4">no</td>
            <td className="p-4">Return list of book</td>
            <td className="p-4">no</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">GET: /api/books/:id</td>
            <td className="p-4">no</td>
            <td className="p-4">Return deatils of book</td>
            <td className="p-4">no</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">POST: /api/protected/orders/</td>
            <td className="p-4">
              bookId: number, customerName: string, quantity: number
            </td>
            <td className="p-4">Post an Order</td>
            <td className="p-4">yes</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">GET: /api/orders/</td>
            <td className="p-4">no</td>
            <td className="p-4">Return list of order</td>
            <td className="p-4">yes</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">GET: /api/orders/:orderid</td>
            <td className="p-4">no</td>
            <td className="p-4">Return a single order</td>
            <td className="p-4">yes</td>
          </tr>
          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">PUT: /api/orders/:orderid</td>
            <td className="p-4">customerName: string</td>
            <td className="p-4">update customer name</td>
            <td className="p-4">yes</td>
          </tr>

          <tr className="bg-slate-100 text-md text-left">
            <td className="p-4">DELETE: /api/orders/:orderid</td>
            <td className="p-4">no</td>
            <td className="p-4">delete order</td>
            <td className="p-4">yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
