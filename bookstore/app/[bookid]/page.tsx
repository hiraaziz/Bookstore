import Link from "next/link";
import Button from "./Button";
type books = {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
};
async function generateStaticParams() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const books = await res.json();
  return books.map((book: any) => ({
    bookid: book.id,
  }));
}

async function getBook(id: number) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  return await res.json();
}

async function Page({ params }: { params: { bookid: number } }) {
  const book: books = await getBook(params.bookid);

  return (
    <div className=" flex flex-col p-4 rounded-md bg-purple-300 w-fit m-auto">
      <h1 className="bg-white w-fit rounded-lg px-2 self-end">{book.id}</h1>
      <h1 className="font-bold text-2xl mt-4 text-purple-900">
        {book.name}
        <div className="h-[2px] w-24 bg-purple-900" />
      </h1>
      <h1 className="font-medium text-md mt-4">
        <label className="font-normal =">Author: </label>
        {book.author}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal ">Type: </label>
        {book.type}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal ">Price: </label>
        {book.price}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal ">Current Stock: </label>
        {book["current-stock"]}
      </h1>
      <h1 className="font-medium text-md">
        <label className="font-normal">Available: </label>
        {book.available === true ? "true" : "flase"}
      </h1>
      {/* <Link
        href={`/${params.bookid}/postreq`}
        className="p-2 bg-slate-100 rounded-md text-md font-medium mt-4 hover:bg-slate-50"
      >
        Order book
      </Link> */}
      <Button />
    </div>
  );
}

export default Page;
