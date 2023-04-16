"use client";
import Quote from "../../components/server/Quote";

import { useState, Suspense } from "react";
export default function AsyncLoading() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Client Fetching</h1>
      <button onClick={() => setShow(true)}>Show Components</button>

      {show && <Quote />}
    </div>
  );
}
