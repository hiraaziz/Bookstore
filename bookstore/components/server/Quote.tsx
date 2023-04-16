import { getQuote } from "../lib/quote";
import { use } from "react";

const quoteFetch = getQuote();

export default function Quote() {
  const quote = use(quoteFetch);
  return (
    <div>
      <p>component rendered on</p>
      <blockquote>{quote.content}</blockquote>
    </div>
  );
}
