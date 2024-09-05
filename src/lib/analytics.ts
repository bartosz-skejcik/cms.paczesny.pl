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

export function handleData(key: string, data: any, setChartData: (data: any) => void) {
  let d: any[] = [];
  data.forEach((item: any) => {
    // add a new item if it doesnt exist in d array
    if (!d.find((i) => i[key] === item[key])) {
      d.push({
        [key]: item[key],
        hits: 1,
      });
    } else {
      // if it exists, increment the hits count
      const index = d.findIndex((i) => i[key] === item[key]);
      d[index].hits++;
    }
  });

  setChartData(sortData(d));
}

function sortData(data: any[]) {
  const sorted = data.sort((a, b) => b.hits - a.hits);

  return sorted;
}
