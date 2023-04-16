import { use } from "react";

import { getBook } from "@/components/lib/orders";

export default async function Quote() {
  const datas = await getBook();
  console.log(datas);

  return (
    <div>
      <p>fast component rendered</p>
      {/* {datas.created === true ? "Order created" : "Failed"} */}
    </div>
  );
}
