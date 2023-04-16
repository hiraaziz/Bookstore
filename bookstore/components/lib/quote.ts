import sleep from "sleep-promise";

export async function getQuote(delay = 0) {
  if (delay) {
    await sleep(delay);
  }
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  const response = res.json();
  console.log(response);
  return response;
}
