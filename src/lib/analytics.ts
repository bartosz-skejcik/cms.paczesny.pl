export async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/api/pageviews`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
}

export async function getSessions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/api/sessions?distinct=true`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
}

export async function getEvents() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/api/events`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
}
