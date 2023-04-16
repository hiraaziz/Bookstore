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
    <>
      <div className="bg-slate-200 w-full h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-[80%] h-[70px] flex list-none space-x-40 justify-center font-bold items-center text-left">
          <li>End Points</li>
          <li>Required Body</li>
          <li>Return</li>
          <li>Token require</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md text-left">
          <li>GET: /api/status</li>
          <li>no</li>
          <li>Return the status of API</li>
          <li>no</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-28 justify-center items-center text-md text-left">
          <li>POST: /api/api-clients</li>
          <li> name: string, email:string</li>
          <li>Return access token</li>
          <li>no</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>GET: /api/books</li>
          <li>no</li>
          <li>Return list of book</li>
          <li>no</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>GET: /api/books/:id</li>
          <li>no</li>
          <li>Return deatils of book</li>
          <li>no</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[140px] flex list-none space-x-40 justify-center items-center text-md">
          <li>POST: /api/protected/orders/</li>
          <li className="w-[150px]">
            bookId: number, customerName: string, quantity: number
          </li>
          <li>Post an Order</li>
          <li>yes</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>GET: /api/orders/</li>
          <li>no</li>
          <li>Return list of order</li>
          <li>yes</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>GET: /api/orders/:orderid</li>
          <li>no</li>
          <li>Return a single order</li>
          <li>yes</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>PUT: /api/orders/:orderid</li>
          <li>customerName:string</li>
          <li>update customer name</li>
          <li>yes</li>
        </div>
        <div className="bg-slate-100 w-[80%] h-[70px] flex list-none space-x-40 justify-center items-center text-md">
          <li>DELETE: /api/orders/:orderid</li>
          <li>no</li>
          <li>delete order</li>
          <li>yes</li>
        </div>
      </div>
    </>
  );
}
