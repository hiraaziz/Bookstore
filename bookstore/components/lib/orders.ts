const requestOptions = {
  "Access-Control-Allow-Origin": "*",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 3fea5098572f9798a7f8c890d9842472fef011149cf5d6b5abcd2e2e311c72fc",
  },
  body: JSON.stringify({
    bookId: 1,
    customerName: "John",
  }),
};

export async function getBook() {
  const res = await fetch(
    "https://www.simple-books-api.glitch.me/orders",
    requestOptions
  );
  const response = await res.json();
  return response;
}
// ap nay book api ko nextjs may likha hay code?