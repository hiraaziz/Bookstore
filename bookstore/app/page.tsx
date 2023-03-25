import Link from "next/link";
async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  // if (!res.ok) {
  //   throw new Error("Failed to detch data");
  // } else {
  //   console.log(res);
  // }
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
  console.log(data);
  return (
    <div className="flex w-full h-screen bg-pink justify-evenly items-center">
      {data.map((book, ind) => (
        <div key={ind} className="flex flex-col bg-slate-200 p-4">
          <h1 className="font-bold text-2xl">{book.name}</h1>
          <p>
            <label className="font-semibold">Type: </label>
            {book.type}
          </p>
          <p>{book.available}</p>
          <Link
            href={`/${book.id}`}
            className="p-2 font-medium bg-purple-300 text-white text-center rounded-md"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
