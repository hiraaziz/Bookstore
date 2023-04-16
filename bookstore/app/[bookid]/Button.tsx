"use client";

import { useState, Suspense } from "react";
import Quote from "./Quote";

export default function ClientFetching() {
  // use a button to toggle the loading of components to make sure
  // they're rendered on the client-side
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Client Fetching</h1>
      <button onClick={() => setShow(true)}>Show Components</button>

      {show && (
        <>
          {/* @ts-expect-error Server Component */}
          <Quote />
        </>
      )}
    </>
  );
}
