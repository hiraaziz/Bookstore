import React from "react";

async function Page({ params }: any) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 28d93d61b28a2c8149bf68e9f11f2a11da9766592f60334d0778652db76afb5a",
      "My-Custom-Header": "foobar",
    },
    body: JSON.stringify({ bookId: params.bookid, customerName: "Hira" }),
  };

  async function orderBook() {
    const res = await fetch(
      "https://simple-books-api.glitch.me/orders",
      requestOptions
    );
    const response = await res.json();
    return response;
  }

  console.log(params);
  const datas = await orderBook();

  return <div>{datas.created === true ? "Order created" : "Failed"}</div>;
}

export default Page;
